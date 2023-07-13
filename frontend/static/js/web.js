$(function () {
    var showMoreBtn = document.querySelector(".js-show-more");
    if (showMoreBtn) {
        var page = 2;
        showMoreBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            await fetch(
                "/api/main/get-courses?page=" + encodeURIComponent(page)
            )
                .then((response) => {
                    return response.text();
                })
                .then((response) => {
                    page++;
                    if (response.length) {
                        $(".plate-listing li:last-child").after($(response));
                        // Needed to loading images
                        $(document).trigger("scroll");
                    }
                });
        });
    }
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });
    function allow_next_button() {
        $(".buy_block_next_button").attr(
            "disabled",
            !$('.buy_block_steps li:first-child input[type="text"]')
                .toArray()
                .every((e) => {
                    return e.value.trim();
                })
        );
    }
    function pay_button() {
        var data = {};
        $(".buy_block")
            .find('input[type="text"], input[type="radio"]:checked')
            .each(function () {
                data[$(this).attr("name")] = $(this).val();
            });

        $.ajax({
            type: "post",
            url: $(this).attr("href"),
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            success: function (popup) {
                if (popup.formUrl) {
                    document.location.replace(popup.formUrl);
                } else if (popup.errorCode) {
                    alert(
                        "Ошибка #" + popup.errorCode + ": " + popup.errorMessage
                    );
                } else {
                    $(".buy_block").replaceWith(popup);
                    allow_next_button();
                    $('.buy_block_steps input[type="text"]').change(
                        allow_next_button
                    );
                    $(".block_close_button").click(function () {
                        $(".dark_back").remove();
                    });
                    $(".buy_block_next_button").click(function () {
                        $(".buy_block").addClass("step_2");
                    });
                    $(".step_tabs li:first-child").click(function () {
                        $(".buy_block").removeClass("step_2");
                    });
                    $(".step_tabs li:nth-child(2)").click(function () {
                        $(".buy_block").addClass("step_2");
                    });
                    $('.buy_block_owner input[type="radio"]').change(function (
                        e
                    ) {
                        e.target.value == "present"
                            ? $(".present_section").addClass("active")
                            : $(".present_section").removeClass("active");
                    });
                    $(".buy_block_link_gen").click(function () {
                        $('[name="LinkForUser"]')[0].value = $(
                            '[name="CartItemHash"]'
                        )[0].dataset.link;
                    });
                    new ClipboardJS(".js-copy-l");
                    $(".buy_block_pay_button").click(pay_button);
                }
            },
        });
    }

    $(".js-cart").click(function () {
        $("body").append(
            $("<div>", { class: "dark_back" }).append(
                $("<img>", {
                    class: "buy_popup_loader",
                    src: "https://kurs-market.com/images/loader.gif",
                })
            )
        );
        $.ajax({
            type: "get",
            url: $(this).attr("href"),
            dataType: "text",
            success: function (popup) {
                $(".js-package-modal, .modal-backdrop.fade").hide();
                $("body").removeClass("modal-open");
                $(".buy_popup_loader").replaceWith(popup);
                allow_next_button();
                $('.buy_block_steps input[type="text"]').change(
                    allow_next_button
                );
                $(".block_close_button").click(function () {
                    $(".dark_back").remove();
                });
                $(".buy_block_next_button").click(function () {
                    $(".buy_block").addClass("step_2");
                });
                $(".step_tabs li:first-child").click(function () {
                    $(".buy_block").removeClass("step_2");
                });
                $(".step_tabs li:nth-child(2)").click(function () {
                    $(".buy_block").addClass("step_2");
                });
                $('.buy_block_owner input[type="radio"]').change(function (e) {
                    e.target.value == "present"
                        ? $(".present_section").addClass("active")
                        : $(".present_section").removeClass("active");
                });
                $(".buy_block_link_gen").click(function () {
                    $('[name="LinkForUser"]')[0].value = $(
                        '[name="CartItemHash"]'
                    )[0].dataset.link;
                });
                new ClipboardJS(".js-copy-l");
                $(".buy_block_pay_button").click(pay_button);
            },
        });
    });

    // $('.js-cart').click(function () {
    //     $.ajax({
    //         url: $(this).attr('href'),
    //         dataType: 'json',
    //         success: function (e) {
    //             $('.js-cart-count').text(e.count)
    //             if (e.error) {
    //                 location.href = $('.js-woauth-link').length ? '/woauth/cart?direct=1' : '/cabinet-user/cart?direct=1'
    //             } else {
    //                 location.reload();
    //             }
    //
    //         }
    //     });
    //     return false;
    // })

    $(".js-fav").click(function () {
        $.ajax({
            url: $(this).attr("href"),
            dataType: "json",
            success: function (e) {
                if (e.error) {
                    $(".js-modal-body-nr").html(e.message);
                    $("#staticNoReload").modal("show");
                } else {
                    location.reload();
                }
            },
        });
        return false;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let search = null;
    if (document.documentElement.clientWidth > 768) {
        const headerForm = document.querySelector(".header__form");
        if (headerForm) {
            search = headerForm.querySelector(".js-course-search");
            headerForm.addEventListener("click", function () {
                headerForm.classList.add("header__form_active");
                if (search) {
                    search.focus();
                }
            });
        }
    }

    if (document.documentElement.clientWidth < 768) {
        const headerFormMobile = document.querySelector(".header__form-mobile");
        if (headerFormMobile) {
            headerFormMobile.addEventListener("click", function () {
                headerFormMobile.classList.add("header__form_active");
                if (search) {
                    search.focus();
                }
            });
        }
    }

    const isDescendant = function (parent, child) {
        let node = child.parentNode;
        while (node) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };

    // const categoriesBtn = document.querySelector(".categories__btn");
    // if (categoriesBtn) {
    //     if (document.documentElement.clientWidth < 769) {
    //         const filters = document.querySelector(".market__filters");
    //         filters.insertAdjacentElement(
    //             "afterbegin",
    //             categoriesBtn.parentElement
    //         );
    //     }
    //     categoriesBtn.addEventListener("click", function () {
    //         categoriesBtn.classList.toggle("active");
    //         categoriesBtn.nextElementSibling.classList.toggle("active");
    //     });
    // }
    const openFilters = document.querySelector(".open-filters");
    document.addEventListener("click", function (e) {
        // console.log(isDescendant(categoriesBtn.parentElement, e.target));
        // if (
        //     categoriesBtn &&
        //     categoriesBtn.parentElement &&
        //     !isDescendant(categoriesBtn.parentElement, e.target)
        // ) {
        //     categoriesBtn.classList.remove("active");
        //
        //     categoriesBtn.nextElementSibling.classList.remove("active");
        // }
        // if (
        //     openFilters && !isDescendant(openFilters, e.target)
        // ) {
        //     openFilters.classList.remove("active");
        // }
        // if (selectBtn[0]) {
        //     selectBtn.forEach((item) => {
        //         if (!isDescendant(item.parentElement, e.target)) {
        //             item.parentElement.classList.remove("active");
        //         }
        //     });
        // }
    });
    // if (openFilters) {
    //     openFilters.addEventListener("click", function (e) {
    //         e.preventDefault()
    //         openFilters.classList.toggle("active");
    //     });
    // }

    // const selectBtn = document.querySelectorAll(".select-btn");
    // if (selectBtn[0]) {
    //     selectBtn.forEach((item) => {
    //         item.addEventListener("click", function (e) {
    //             e.preventDefault();
    //             item.parentElement.classList.toggle("active");
    //         });
    //     });
    // }
    // const filtersShow = document.querySelector(".filters-show");
    // const filterShowInputs = document.querySelectorAll(".filters-show input");
    // if (filterShowInputs[0]) {
    //     const btnText = document.querySelector(
    //         ".filters-show .select-btn__text > span"
    //     );
    //     filterShowInputs.forEach((item) => {
    //         item.addEventListener("change", () => {
    //             if (btnText) {
    //                 btnText.innerText = item.value;
    //                 if (filtersShow) {
    //                     filtersShow.classList.remove("active");
    //                 }
    //             }
    //         });
    //     });
    // }

    // const loginPopup = document.querySelector("[data-popup='login-popup']");
    // const orderPopup = document.querySelector("[data-popup='order-popup']");
    // const reviewPopup = document.querySelector("[data-popup='review-popup']");
    // const eventPopup = document.querySelector("[data-popup='event-popup']");

    // function bindModal(popup, type) {
    //     if (popup) {
    //         let popupBtn;
    //         if (type === "login") {
    //             popupBtn = document.querySelectorAll(".popup-btn");
    //         } else if (type === "order") {
    //             popupBtn = document.querySelectorAll(".place-order");
    //         } else if (type === "review") {
    //             popupBtn = document.querySelectorAll(".send-review");
    //         } else if (type === "event") {
    //             popupBtn = document.querySelectorAll(
    //                 ".school-page-event__participate"
    //             );
    //         }
    //         if (popupBtn[0]) {
    //             let title = popup.querySelector(".login-popup__title");
    //             let titleText = "";
    //             if (title) {
    //                 titleText = title.textContent;
    //             }
    //             popupBtn.forEach(function (item) {
    //                 item.addEventListener("click", (e) => {
    //                     e.preventDefault();
    //                     if (title) {
    //                         if (item.getAttribute("data-title"))
    //                             title.innerText =
    //                                 item.getAttribute("data-title");
    //                     }
    //                     popup.classList.remove("popup-success");
    //                     popup.parentElement.classList.remove("register-school");
    //                     popup.parentElement.classList.remove("register-email");
    //                     popup.parentElement.classList.remove("reset-pass");
    //                     popup.parentElement.classList.remove("reset-done");
    //                     popup.parentElement.classList.add("overflow_active");
    //                 });
    //             });
    //             popup.parentElement.addEventListener("mousedown", (e) => {
    //                 if (e.target === popup.parentElement) {
    //                     e.target.classList.remove("overflow_active");
    //                     e.target.classList.remove("register-school");
    //                     e.target.classList.remove("register-email");
    //                     e.target.classList.remove("reset-pass");
    //                     e.target.classList.remove("reset-done");
    //                     if (title) {
    //                         title.innerText = titleText;
    //                     }
    //                 }
    //             });
    //             const closeBtns = popup.parentElement.querySelectorAll(
    //                 ".login-popup__close"
    //             );
    //             if (closeBtns[0]) {
    //                 closeBtns.forEach((closeBtn) => {
    //                     closeBtn.addEventListener("click", (e) => {
    //                         e.preventDefault();
    //                         if (title) {
    //                             title.innerText = titleText;
    //                         }
    //                         popup.parentElement.classList.remove(
    //                             "overflow_active"
    //                         );
    //                     });
    //                 });
    //             }
    //         }
    //     }
    // }
    // bindModal(loginPopup, "login");
    // bindModal(orderPopup, "order");
    // bindModal(reviewPopup, "review");
    // bindModal(eventPopup, "event");

    var formBtn = document.querySelector(".question-btn");
    var formClose = document.querySelector(".question-form__close");
    var formSubmit = document.querySelector(".question-form__btn");
    var formInput = document.querySelector(".question-form__label input");

    if (localStorage.getItem("closed") !== "true") {
        if (formBtn) {
            formBtn.parentElement.classList.add("active");
        }
    } else {
        if (formInput) {
            formInput.setAttribute("checked", "checked");
        }
    }

    if (formBtn && formSubmit && formClose) {
        formBtn.addEventListener("click", function () {
            formBtn.parentElement.classList.toggle("active");
        });
        formClose.addEventListener("click", function () {
            formBtn.parentElement.classList.remove("active");
            if (formInput && formInput.checked) {
                localStorage.setItem("closed", true);
            } else {
                localStorage.removeItem("closed");
            }
        });
        formSubmit.addEventListener("click", function () {
            localStorage.setItem("closed", true);
        });
    }

    /* Cashback-popup start*/
    var cashbackBtn = document.querySelector(
        ".cashback-wrapper .btn-get-money"
    );
    var cashbackPopup = document.querySelector(".cashback-popup");
    if (cashbackBtn && cashbackPopup) {
        cashbackBtn.addEventListener("click", function () {
            document.body.style.overflow = "hidden";
            cashbackPopup.classList.add("active");
        });
        function closePopup() {
            document.body.style.overflow = "visible";
            cashbackPopup.classList.remove("active");
            cashbackPopup.classList.remove("success");
        }
        var popupCloseBtn = cashbackPopup.querySelector(
            ".cashback-popup__close"
        );
        if (popupCloseBtn) {
            popupCloseBtn.addEventListener("click", closePopup);
        }
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                closePopup();
            }
        });
        var inputs = cashbackPopup.querySelectorAll("input[type='radio'");
        var submitBtn = cashbackPopup.querySelector(".cashback-popup__btn");
        if (inputs[0]) {
            inputs.forEach(function (item) {
                item.addEventListener("change", function () {
                    if (item.checked) {
                        submitBtn.removeAttribute("disabled");
                    }
                });
            });
        }

        var form = cashbackPopup.querySelector(".cashback-popup__form");
        var url = "https://jsonplaceholder.typicode.com/todos/1";
        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();
                form.style.filter = "blur(5px)";
                var formData = new FormData(form);
                fetch(url, {
                    method: "POST",
                    mode: "cors",
                    cache: "no-cache",
                    body: formData,
                })
                    .then((res) => res.json())
                    .then((data) => {
                        var data = {
                            success: true,
                            success_title: "Ваша заявка принята!",
                            success_text:
                                "Денежные средства поступят на счет в течение 5 рабочих дней",
                        };
                        form.style.filter = "none";

                        if (data.success) {
                            cashbackPopup.classList.add("success");
                            var successText = cashbackPopup.querySelector(
                                ".cashback-popup__success"
                            );
                            if (successText) {
                                successText.innerHTML = `
                                <div class="cashback-popup-success__title">${data.success_title}</div>
                                <div class="cashback-popup-success__text">${data.success_text}</div>
                            `;
                            }
                        }
                    })
                    .catch((error) => {
                        alert(error);
                        form.style.filter = "none";
                    });
            });
        }
    }

    /* Cashback-popup end*/

    const passShowBtns = document.querySelectorAll(".pass-icon");
    if (passShowBtns) {
        passShowBtns.forEach((btn) => {
            const hideIcon = btn.getAttribute("data-hide");
            const showIcon = btn.src;
            let isHidden = true;
            const passInput = btn.parentElement.querySelector(
                "input[type='password']"
            );
            btn.addEventListener("click", () => {
                if (isHidden) {
                    if (passInput) {
                        passInput.type = "text";
                    }
                    btn.src = hideIcon;
                    isHidden = false;
                } else {
                    if (passInput) {
                        passInput.type = "password";
                    }
                    btn.src = showIcon;
                    isHidden = true;
                }
            });
        });
    }

    const overflow = document.querySelector(".overflow");

    const registerLinks = document.querySelectorAll(
        "[data-link='register-email']"
    );
    if (registerLinks[0]) {
        registerLinks.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                if (overflow) {
                    overflow.classList.add("register-email");
                }
            });
        });
    }
    const registerSchoolLinks = document.querySelectorAll(
        "[data-link='register-school']"
    );
    if (registerSchoolLinks[0]) {
        registerSchoolLinks.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                if (overflow) {
                    overflow.classList.add("register-school");
                }
            });
        });
    }
    const forgotBtns = document.querySelectorAll(".login-popup__forgot");
    if (forgotBtns[0]) {
        forgotBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                if (overflow) {
                    overflow.classList.add("reset-pass");
                }
            });
        });
    }

    var resetPassword = document.querySelector('[data-metric="reset-form"]');

    if (resetPassword) {
        resetPassword.addEventListener('submit', async function (event) {
            event.preventDefault();
            var email = resetPassword.querySelector('[name="Email"]'),
                errorBlock = resetPassword.querySelector('.error'),
                successBlock = resetPassword.querySelector('.reset-success'),
                btn = resetPassword.querySelector('button'),
                popup = document.querySelector("login-popup__body"),
                errors = [];
            if (validateEmail(email.value)) {
                btn.textContent = 'Отправка...';
                await fetch('/auth/reset-pass', {
                    method: 'POST',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    },
                    body: JSON.stringify({Email: email.value})
                }).then(function (response) {
                    return response.json();
                }).then(function (response) {
                    if (parseInt(response.error) === 1) {
                        if (errorBlock) {
                            for (var i in response.message) {
                                errors.push(response.message[i][0]);
                            }
                        }

                        if (errors.length) {
                            errorBlock.style.display = 'block';
                            errorBlock.textContent = errors.join(' ');
                        }
                    } else {
                        if (errorBlock) {
                            errorBlock.style.display = 'none';
                        }

                        if (successBlock) {
                            successBlock.style.display="flex";
                            successBlock.textContent = response.message;
                        }
                    }

                }).finally(function () {
                    btn.textContent = 'Получить новый пароль';
                })
            } else {
                errorBlock.style.display = 'block';
                errorBlock.textContent = 'Введите Email в правильном формате';
            }
        })
    }

    // endpoint for register by email /quick-register/user
    var registerUser = document.querySelector('[data-metric="register-user"]');

    if (registerUser) {
        registerUser.addEventListener('submit', async function (event) {
            event.preventDefault();
            var email = registerUser.querySelector('[name="Email"]'),
                password = registerUser.querySelector('[name="Password"]'),
                errorBlock = registerUser.querySelector('.error'),
                btn = registerUser.querySelector('.login-popup__btn'),
                errors = [];
            if (validateEmail(email.value)) {
                btn.textContent = 'Отправка...';
                await fetch('/quick-register/user', {
                    method: 'POST',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    },
                    body: JSON.stringify({login: email.value, password: password.value})
                }).then(function (response) {
                    return response.json();
                }).then(function (response) {
                    if (parseInt(response.error) === 1) {
                        if (errorBlock) {
                            for (var i in response.message) {
                                errors.push(response.message[i][0]);
                            }
                        }

                        if (errors.length) {
                            errorBlock.style.display = 'block';
                            errorBlock.textContent = errors.join(' ');
                        }
                    } else {
                        window.location.href = response.redirect;
                    }
                }).finally(function () {
                    btn.textContent = 'Зарегистрироваться по e-mail';
                })
            } else {
                errorBlock.style.display = 'block';
                errorBlock.textContent = 'Введите Email в правильном формате';
            }
        })
    }

    var registerSchool = document.querySelector('[data-metric="register-school"]');

    if (registerSchool) {
        registerSchool.addEventListener('submit', async function (event) {
            event.preventDefault();
            var name = registerSchool.querySelector('[name="school_name"]'),
                email = registerSchool.querySelector('[name="login"]'),
                password = registerSchool.querySelector('[name="password"]'),
                errorBlock = registerSchool.querySelector('.error'),
                btn = registerSchool.querySelector('.login-popup__btn'),
                errors = [];
                console.log(name.value);
            if (validateEmail(email.value)) {
                btn.textContent = 'Отправка...';
                await fetch('/quick-register/school', {
                    method: 'POST',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    },
                    body: JSON.stringify({school_name: name.value, login: email.value, password: password.value})
                }).then(function (response) {
                    return response.json();
                }).then(function (response) {
                    if (parseInt(response.error) === 1) {
                        if (errorBlock) {
                            for (var i in response.message) {
                                errors.push(response.message[i][0]);
                            }
                        }

                        if (errors.length) {
                            errorBlock.style.display = 'block';
                            errorBlock.textContent = errors.join(' ');
                        }
                    } else {
                        window.location.href = response.redirect;
                    }
                }).finally(function () {
                    btn.textContent = 'Зарегистрировать школу';
                })
            } else {
                errorBlock.style.display = 'block';
                errorBlock.textContent = 'Введите Email в правильном формате';
            }
        })
    }
});

function validateEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email.toString().toLowerCase());
}

function toggleMobileRadio() {
    $(".sorting__options").toggleClass("dropdown-active");
}

var sortingBtn = document.querySelector(".sorting-mobile-btn");
var mobileSortingInputs = document.querySelectorAll(".sorting__options label");
var mobileSortingDropdown = document.querySelector(".sorting__options");

if (sortingBtn && mobileSortingInputs) {
    sortingBtn.addEventListener("click", toggleMobileRadio);
    mobileSortingInputs.forEach((label) => {
        label.addEventListener("click", (e) => {
            sortingBtn.innerText = e.target.innerText;
            mobileSortingDropdown.classList.remove("dropdown-active");
        });
    });
}

window.addEventListener("load", function() {
    var filtersBtn = document.querySelector(".filters-mobile-btn");
    var filtersWrapper = document.querySelector(".filters-mobile-wrapper");

    if (filtersBtn && filtersWrapper) {
        filtersBtn.addEventListener("click", () => {
           filtersWrapper.classList.toggle("active")
        })
    }

    var filtersCloseBtn = document.querySelector(".close-filters");

    if (filtersCloseBtn) {
    filtersCloseBtn.addEventListener("click", () => {
        if (filtersWrapper.classList.contains("active")) {
                filtersWrapper.classList.remove("active")
            }
        })
    }
})

document.addEventListener("DOMContentLoaded", () => {
var headerSearch = document.querySelector(".header__search-wrapper");
var headerMenu = document.querySelector(".header__left .header-menu");

if (headerSearch && document.documentElement.clientWidth < 1050 && headerMenu) {
    headerSearch.remove();
    headerMenu.appendChild(headerSearch);
}
})
