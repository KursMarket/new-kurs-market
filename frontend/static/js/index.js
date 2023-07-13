var dropAllElements = function (selector) {
    var elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
        elements.forEach(function (item) {
            item.remove();
        });
    }
};
var debouncer = function (func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;

        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
$(function () {
    var $owl;

    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split("&"),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split("=");

            if (sParameterName[0] === sParam) {
                return typeof sParameterName[1] === undefined
                    ? true
                    : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    }

    if (getUrlParameter("direct") == 1 && $(".js-process-btn").length) {
        $(".js-process-block").show();
        $("html, body").animate({ scrollTop: 200 }, 1000);
    }

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on("resize scroll", function () {
        $("[data-style]").each(function () {
            if ($(this).isInViewport()) {
                var style = $(this).attr("data-style");
                $(this).attr("style", style);
                $(this).removeAttr("data-style");
            }
        });
    });

    $("[data-style]").each(function () {
        if ($(this).isInViewport()) {
            var style = $(this).attr("data-style");
            $(this).attr("style", style);
            $(this).removeAttr("data-style");
        }
    });

    $("body").on(
        "keypress keyup paste",
        "input[name*='SectionTitle']",
        function () {
            $(this)
                .closest(".show-content")
                .find(".js-section-toggle-template")
                .removeClass("js-section-toggle-template");
            $(this)
                .closest(".show-content")
                .find(".js-row-name")
                .eq(0)
                .text($(this).val());
        }
    );

    $(".course-add")
        .find(".form-control")
        .on("focus", function () {
            if ($(this).val() == 0) {
                $(this).val("");
            }
        });

    $(".js-scroll-to").click(function () {
        var el = $(this).attr("href");
        $([document.documentElement, document.body]).animate(
            {
                scrollTop: $(el).offset().top,
            },
            2000
        );
        return false;
    });

    $(".js-feature-input").each(function () {
        var div = $(this).next();
        var val = $(this).val();
        var max = $(this).attr("maxlength");
        if (!val) {
            div.empty();
        } else {
            var left = Number(max) - val.length;
            div.text("Осталось " + left + "/" + max + " символов");
        }
    });

    $("body").on("keyup", ".js-feature-input", function () {
        var div = $(this).next();
        var val = $(this).val();
        var max = $(this).attr("maxlength");
        if (!val) {
            div.empty();
        } else {
            var left = Number(max) - val.length;
            div.text("Осталось " + left + "/" + max + " символов");
        }
    });

    $(".js-feature-add").click(function () {
        var clone = $(".js-feature-template").clone();
        clone.find("input").each(function () {
            $(this).val("");
        });
        clone.find(".js-left").empty();
        clone.find(".js-del-feature").removeClass("d-none");
        clone.removeClass("js-feature-template");
        $(".js-featires-wrap").append(clone);
        var top = clone.height() + 24;
        $(window).scrollTop($(window).scrollTop() - top);
        return false;
    });

    $("body").on("click", ".js-del-feature", function () {
        $(this).closest(".row").remove();
        return false;
    });

    $(".js-cookie").click(function () {
        var date = new Date();
        date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
        document.cookie = "allow_cookie" + "=" + "allow" + expires + "; path=/";
        $(this).closest(".cookie-wrap").remove();
        return false;
    });

    $(".js-legal-info").click(function () {
        $(".js-legal-info-block").toggle();
        $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
        return false;
    });
    $(".disabled-chat ").click(function () {
        return false;
    });
    $("#GroupSupportKM").change(function () {
        if ($(this).prop("checked")) {
            $(".js-group-chat-wrap").show();
        } else {
            $(".js-group-chat-wrap").hide();
        }
    });
    $("#IndividualSupportKM").change(function () {
        if ($(this).prop("checked")) {
            $(".js-individual-chat-wrap").show();
        } else {
            $(".js-individual-chat-wrap").hide();
        }
    });

    $(".js-section-description-toggle").click(function () {
        var parent = $(this).closest("li");
        //$('.opened-desc').not(parent).removeClass('opened-desc')
        parent.toggleClass("opened-desc");
        return false;
    });

    $(".js-faq-title").click(function () {
        var parent = $(this).closest(".js-faq-item");
        $(".js-faq-item")
            .not(parent)
            .each(function () {
                $(this).find(".js-faq-body").slideUp();
            });
        parent.find(".js-faq-body").slideToggle();

        $(".js-faq-item").not(parent).removeClass("opened");
        parent.toggleClass("opened");
    });

    try {
        $("body").on("change", ".custom-file-input", function (e) {
            var fileName = $(this)[0].files[0].name;
            var nextSibling = $(this).next();
            nextSibling.text(fileName);
        });
    } catch (e) {
        console.log(e);
    }

    $("body").on("click", ".js-section-toggle", function () {
        var parent = $(this).parent();
        $(".show-content")
            .not(parent)
            .not(".js-section-row-template")
            .removeClass("show-content");
        parent.toggleClass("show-content");
        $([document.documentElement, document.body]).animate(
            {
                scrollTop: parent.offset().top - 200,
            },
            1000
        );
        return false;
    });

    if ($.fn.popover) {
        $('[data-toggle="popover"]').popover();
    }

    // $('.js-show-more').click(function () {
    //     $('.js-plate-item:hidden:lt(20)').show();
    //     if (!$('.js-plate-item:hidden').length){
    //         $(this).remove();
    //     }
    //     return false;
    // });

    var videos = document.getElementsByClassName("js-autoplay");
    for (var i = 0; i < videos.length; ++i) {
        videos[i].play();
    }

    if ($.fn.starrr) {
        $(".js-rating").each(function () {
            $(this).starrr({
                readOnly: true,
                rating: $(this).attr("data-rate"),
            });
        });
    }

    $(".js-toggle-links").prop("checked", false);
    $(".js-toggle-links").prop("checked", true);

    $(".js-fav-static").click(function () {
        var href = $(this).attr("href");
        var self = $(this);
        $.ajax({
            url: href,
            success: function () {
                self.toggleClass("faved");
            },
        });
        return false;
    });

    $(".js-slide-video").click(function () {
        $(".js-previews-slider").trigger(
            "to.owl.carousel",
            $(this).attr("data-slide")
        );
        return false;
    });

    $("body").on("click", ".js-teacher-modal", function () {
        var data = $(this).attr("data-teacher");
        data = jQuery.parseJSON(data);
        $("#editTeacher").find('input[name="Name"]').val(data.Name);
        $("#editTeacher").find('[name="Description"]').val(data.Description);
        $("#editTeacher").find('input[name="Id"]').val(data.Id);
        if (data.docs) {
            var wrap = $(".js-tfiles-render");

            wrap.empty();
            wrap.append('<label class="d-block">Сертификаты</label>');
            for (var i in data.docs) {
                var div = $("<div>", { class: "mb-2" });
                var link = $("<a>", {
                    class: "u-link",
                    text: data.docs[i].File,
                    target: "_blank",
                    href: "https://cache1.kurs-market.com/" + data.docs[i].File,
                });
                var a = $("<a>", {
                    class: "short-link",
                    text: "Удалить",
                    "data-did": data.docs[i].Id,
                    "data-tid": data.docs[i].TeacherId,
                    click: function () {
                        var link = $(this);
                        $.ajax({
                            method: "POST",
                            data: {
                                DocId: $(this).attr("data-did"),
                                TeacherId: $(this).attr("data-tid"),
                            },
                            dataType: "json",
                            url: "/cabinet-school/teacher/delete-doc",
                            success: function (e) {
                                if (!e.error) {
                                    link.parent().remove();
                                    var label = $(
                                        'label[for="teacher' +
                                            e.message.Id +
                                            '"]'
                                    );
                                    label
                                        .find(".js-teacher-modal")
                                        .attr(
                                            "data-teacher",
                                            JSON.stringify(e.message)
                                        );
                                } else {
                                    alert(e.message);
                                }
                            },
                        });
                    },
                });
                div.append(link).append(a);
                wrap.append(div);
            }
        }
    });
    $("body").on("click", ".js-delete-teacher", function () {
        if (confirm("Вы действительно хотите удалить преподавателя?")) {
            var href = $(this).attr("href");
            var self = $(this);
            $.ajax({
                url: href,
                success: function (e) {
                    if (e.error) {
                        alert(e.message);
                    } else {
                        self.closest(".js-teacher-row").remove();
                    }
                },
            });
        }
        return false;
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $("body").addClass("fixed-header");
        } else {
            $("body").removeClass("fixed-header");
        }
    });

    $(".js-fly-form-header").click(function () {
        $(this).closest(".js-fly-form").toggleClass("opened");
    });

    $(".js-toggle-active").click(function () {
        $(".js-toggle-active").not($(this)).removeClass("active");
        $(".aside-menu > li > a.active").not($(this)).removeClass("active");
        $(this).toggleClass("active");
        return false;
    });

    $(".js-tab").click(function () {
        $(".js-tab").removeClass("active");
        $(this).addClass("active");

        var id = $(this).attr("data-tab");
        $(".js-tab-block").removeClass("active");
        $(id).addClass("active");

        return false;
    });

    $(".js-gift-name").click(function () {
        $(".js-gift-item").removeClass("active");
        $(this).closest(".js-gift-item").addClass("active");
    });

    $(".js-course-unsubscribe").click(function () {
        var href = $(this).attr("href");
        var self = $(this);

        $.ajax({
            url: href,
            success: function () {
                self.toggleClass("btn-check-danger");
            },
        });

        return false;
    });

    if (window.matchMedia("(min-width: 1200px)").matches) {
        $("body").click(function () {
            $(".js-list-table").remove();
        });
    }

    $(".js-delete-input").change(function () {
        if ($(".js-delete-input:checked").length) {
            $(".js-del-btn").addClass("fixed-btn-del");
        } else {
            $(".js-del-btn").removeClass("fixed-btn-del");
        }
    });

    $(".header__form-mobile, .header__form").on("submit", function (e) {
        var s = $(this).find(".js-course-search").val();
        var input = '<input type="hidden" name="s" value="' + s + '">';
        $(this).find(".js-list-table").html(input);
        $(this).trigger("submit");

        return false;
    });

    $(".js-course-search.mobile").on(
        "keyup paste",
        debouncer(function (event) {
            var val = $(this).val();
            if (!val) {
                return;
            }
            var parent = $(this).parent();
            $.ajax({
                url: "/search",
                data: { val: val },
                method: "post",
                dataType: "html",
                success: function (e) {
                    $(".js-list-table").remove();
                    parent.append(e);
                },
            });
        }, 500)
    );

    $(".js-course-search.desctop").on(
        "keyup paste",
        debouncer(function (event) {
            var val = $(this).val();
            if (!val) {
                return;
            }
            var parent = $(this).parent();
            $.ajax({
                url: "/search",
                data: { val: val },
                method: "post",
                dataType: "html",
                success: function (e) {
                    $(".js-list-table").remove();
                    $(".header__search-wrapper .header__form").append(e);
                },
            });
        }, 500)
    );

    $(".js-left-menu").click(function (e) {
        $("body").toggleClass("opened-left-menu");
        $("body").removeClass("opened-menu");
        e.preventDefault();
        e.stopPropagation();
    });

    $(".cabinet-wrapper").click(function () {
        $("body").removeClass("opened-left-menu");
    });

    $(".js-menu-toggler").click(function () {
        $("body").toggleClass("opened-menu");
        $("body").removeClass("opened-left-menu");
    });

    $(".js-show-filter").click(function () {
        $(this).closest(".filters-row").find(".d-none").removeClass("d-none");
        return false;
    });

    $(".message-list-title").click(function () {
        $(".message-list-wrap").removeClass("active");
        var el = $(this).closest(".message-list-wrap");
        el.addClass("active");
    });

    $(".js-file").each(function () {
        let input = $(this);
        let label = $(this).closest(".js-file-wrap").find(".js-file-name");
        input.change(function () {
            let ar = $(this).val().split("\\");
            label.text(ar[ar.length - 1]);
        });
    });

    var objDiv = document.getElementById("autoScroll");
    if (objDiv) {
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    if ($.fn.scrollbar) {
        $(".js-scroll").scrollbar({
            scrollx: false,
            onScroll: function (y, x) {
                $("[data-style]").each(function () {
                    if ($(this).isInViewport()) {
                        var style = $(this).attr("data-style");
                        $(this).attr("style", style);
                        $(this).removeAttr("data-style");
                    }
                });
            },
        });
    }

    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="token"]').attr("content"),
        },
    });

    $(".js-process-btn").click(function () {
        $(".js-process-block").show();
        $("html, body").animate({ scrollTop: 200 }, 1000);
        return false;
    });

    $(".js-package").change(function () {
        if ($(this).attr("value") == 1) {
            $(".js-next-btn").text("Добавить пакет");
            $(".js-package-name, .js-packages-wrap").show();
        } else {
            $(".js-next-btn").text("Далее");
            $(".js-package-name, .js-packages-wrap").hide();
        }
    });

    try {
        bsCustomFileInput.init();
    } catch (e) {
        console.log(e);
    }

    $("body").on("change", ".js-homework-select", function () {
        if ($(this).val()) {
            $(this)
                .closest(".js-homework-block")
                .find(".js-homework-wrap")
                .show();
        } else {
            $(this)
                .closest(".js-homework-block")
                .find(".js-homework-wrap")
                .hide()
                .find("input")
                .val("")
                .attr("value", "");
        }
    });

    if ($(".image-editor").length && $.fn.cropit) {
        try {
            $f = $(".image-editor").cropit({
                imageState: {
                    src: "/images/preview.jpg",
                },
            });
        } catch (e) {
            $f = null;
        }
    } else {
        $f = null;
    }

    $('input[name="Preview[]"]').change(function () {
        $(this).closest(".form-group").find(".previews-wrap").remove();
        var wrap = $("<div/>", {
            class: "previews-wrap",
        });

        if (this.files.length) {
            let self = this;
            for (var i in this.files) {
                let index = i;
                if (this.files[i] instanceof Blob) {
                    try {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var img = $("<div/>", {
                                class: "preview-item-sm",
                            });
                            var input = $("<input/>", {
                                name: "PreviewMain",
                                type: "radio",
                                value: self.files[index].name,
                                checked: index == 0 ? true : false,
                            });
                            var input_val = $("<input/>", {
                                name: "PreviewsNamesArr[]",
                                type: "text",
                                value: self.files[index].name,
                            });
                            img.append(input_val);
                            img.append(input);
                            img.append("<span></span>");
                            var link = $("<a/>", {
                                text: "Удалить",
                                href: "",
                                click: function () {
                                    $(this)
                                        .closest(".preview-item-sm")
                                        .remove();
                                    return false;
                                },
                            });
                            img.append(link);
                            img.css(
                                "background-image",
                                'url("' + e.target.result + '")'
                            );
                            wrap.append(img);

                            //console.log(self.files[index]);
                        };
                        reader.readAsDataURL(this.files[i]);
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
        }
        $(this).closest(".form-group").append(wrap);
    });

    $(".js-preview-input").change(function () {
        $(".js-preview").show();
        $(".js-preview img").show();

        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(".js-preveiew-img").attr("src", e.target.result);
            };

            reader.readAsDataURL(this.files[0]);
        }
    });

    $(".js-toggle-links").change(function () {
        var link = $(this).closest(".js-toggle-wrap").find("a[disabled]");
        var toDisable = $(this).closest(".js-toggle-wrap").find("a").not(link);
        link.removeAttr("disabled");
        toDisable.attr("disabled", "disabled");

        var button = $(this)
            .closest(".js-toggle-wrap")
            .find("button[disabled]");
        var buttonToDisable = $(this)
            .closest(".js-toggle-wrap")
            .find("button")
            .not(button);
        button.removeAttr("disabled");
        buttonToDisable.attr("disabled", "disabled");
    });

    if ($.fn.owlCarousel) {
        $(".js-main-slider").owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
            },
        });

        if (
            (document.documentElement.clientWidth > 1200 &&
                document.querySelectorAll(
                    ".school-page .course__teachers .course-teacher"
                ).length > 4) ||
            (document.documentElement.clientWidth > 768 &&
                document.documentElement.clientWidth < 1200 &&
                document.querySelectorAll(
                    ".school-page .course__teachers .course-teacher"
                ).length > 2) ||
            (document.documentElement.clientWidth < 768 &&
                document.querySelectorAll(
                    ".school-page .course__teachers .course-teacher"
                ).length > 1)
        ) {
            var schoolTeachers = $(".school-page .school-teachers").owlCarousel(
                {
                    items: 1,
                    autoplay: false,
                    loop: true,
                    nav: false,
                    margin: 64,
                    dotsEach: true,
                    dots: true,
                    autoHeight: true,
                    responsive: {
                        768: {
                            items: 2,
                        },
                        1200: {
                            items: 4,
                            nav: true,
                        },
                    },
                }
            );
        }

        if (document.documentElement.clientWidth > 768) {
            $(".school-page .school-page__articles-wrapper").owlCarousel({
                items: 1,
                autoplay: false,
                loop: true,
                nav: false,
                margin: 64,
                dotsEach: true,
                dots: true,
                responsive: {
                    768: {
                        items: 2,
                    },
                    1200: {
                        items: 4,
                        nav: true,
                    },
                },
            });
        }
        // $('.course__teachers').owlCarousel({
        //     items: 1,
        //     autoplay: false,
        //     loop: true,
        //     nav: false,
        //     margin: 64,
        //     dotsEach: true,
        //     dots: true,
        //     responsive: {
        //         // 0: {
        //         //     items: 1
        //         // },
        //         1200: {
        //             items: 2,
        //             nav: true,
        //         }
        //     }
        // })
        if (document.documentElement.clientWidth < 1270) {
            $(".school-page-events__wrapper").owlCarousel({
                // loop: true,
                items: 1,
                margin: 40,
                loop: true,
                autoHeight: true,
                dots: true,
                dotsEach: true,
                responsive: {
                    1920: {
                        items: 4,
                    },
                    1000: {
                        items: 3,
                    },
                    768: {
                        items: 2,
                    },
                },
            });
        }
        // if(document.documentElement.clientWidth < 993) {
        //     $(".course-tarrifs__block").owlCarousel({
        //         // loop: true,
        //         items: 1,
        //         margin: 15,
        //         autoHeight: true,
        //         dots: true,
        //         responsive: {
        //             1920: {
        //                 items: 4
        //             },
        //             1000: {
        //                 items: 2
        //             },
        //             768: {
        //                 items: 2,
        //             }
        //         }
        //     })
        // }

        $(".js-previews-slider").owlCarousel({
            items: 1,
            autoplay: false,
            autoplayTimeout: 10000,
            loop: true,
            nav: true,
            dots: true,
            onInitialized: function () {
                if ($(".js-slide-video").length) {
                    $(".js-previews-slider")
                        .find(".owl-nav")
                        .append($(".js-slide-video"));
                }
            },
        });

        // $('.js-main-slider-prev').click(function () {
        //     mainSLider.trigger('prev.owl.carousel');
        // })
        // $('.js-main-slider-next').click(function () {
        //     mainSLider.trigger('next.owl.carousel');
        // })
        // mainSLider.on('changed.owl.carousel', function (event) {
        //     var current = event.item.index;
        //     var video = $(event.target).find(".owl-item").eq(current).find("video");
        //     video.not(video).each(function () {
        //         $(this).get(0).pause();
        //     });
        //     video.get(0).play();
        // })

        var owl = $(".js-user-slider");
        owl.owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 10000,
            loop: owl.children().length > 1,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
            },
        });

        $(".js-slider-v").owlCarousel({
            items: 4,
            autoplay: false,
            loop: $(".js-slider-v").children().length > 1,
            nav: true,
            dots: false,
            responsive: {
                1400: {
                    items: 4,
                },
                992: {
                    items: 3,
                },
                768: {
                    items: 3,
                },
                567: {
                    items: 2,
                },
                0: {
                    items: 1,
                },
            },
        });

        // var catsSlider = $('.js-categories-main-scroll').owlCarousel({
        //     items: 2,
        //     autoplay: false,
        //     loop: true,
        //     nav: true,
        //     dots: true,
        //     responsive: {
        //         567: {
        //             items: 2
        //         },
        //         768: {
        //             items: 3
        //         },
        //         0: {
        //             items: 1
        //         }
        //     }
        // })

        // catsSlider.on('changed.owl.carousel', function (owlEvent) {
        //     var index = owlEvent.item.index;
        //     var tempFix = index - (owlEvent.relatedTarget.clones().length / 2);
        //     if (tempFix > 0) {
        //         index = tempFix;
        //     }
        // })

        $(".js-letter-item").click(function () {
            var letter = $(this).attr("data-val");
            //catsSlider.trigger('refresh.owl.carousel');
            var slide = $(".owl-item")
                .not(".cloned")
                .find('.category-item[data-val="' + letter + '"]')
                .eq(0);
            var parent = slide.closest(".owl-item");
            var index = $(".js-categories-main-scroll")
                .find(".owl-item")
                .not(".cloned")
                .index(parent);
            if (index > -1) {
                catsSlider.trigger("to.owl.carousel", [index, 200, true]);
            }
            return;
        });
        $(".partners__slider").owlCarousel({
            items: 2,
            autoplay: false,
            loop: $(".partners__slider").children().length > 1,
            dots: true,
            nav: false,
            margin: 20,
            dotsEach: true,
            responsive: {
                1400: {
                    items: 5,
                },
                1200: {
                    items: 4,
                },
                992: {
                    items: 3,
                },
                768: {
                    items: 3,
                },
                567: {
                    items: 2,
                },
                0: {
                    items: 2,
                },
            },
        });
        $(".js-slider-v-main").owlCarousel({
            items: 2,
            autoplay: false,
            loop: $(".js-slider-v-main").children().length > 1,
            nav: true,
            dots: false,
            center: false,
            responsive: {
                1400: {
                    items: 5,
                },
                1200: {
                    items: 4,
                },
                992: {
                    items: 3,
                },
                768: {
                    items: 3,
                },
                567: {
                    items: 2,
                },
                0: {
                    items: 1,
                },
            },
        });
    }

    var offset = 0;

    $(".js-select-all").change(function () {
        if ($(this).prop("checked")) {
            $(this)
                .closest(".modal-dialog")
                .find("input")
                .not($(this))
                .attr("checked", "checked")
                .prop("checked", true);
        } else {
            $(this)
                .closest(".modal-dialog")
                .find("input")
                .not($(this))
                .removeAttr("checked")
                .prop("checked", false);
        }
    });

    $(".js-buy-type").change(function () {
        if ($(this).val() == "Present") {
            $(".js-buy-type-wrap, .js-alert-present").show();
            $(".js-already-bought , .js-same-package").hide();
            $(".js-distinct-alert").hide();
        } else {
            $(".js-distinct-alert , .js-same-package").show();
            $(".js-buy-type-wrap, .js-alert-present").hide();
            $(".js-already-bought").show();
        }
    });

    $(".js-present-type").change(function () {
        if ($(this).val() == "Many") {
            $(".js-present-type-wrap").show();
            $(
                ".js-link-one-wrap, .js-distinct-alert-present, .js-same-package"
            ).hide();
        } else {
            $(".js-present-type-wrap").hide();
            $(
                ".js-link-one-wrap, .js-distinct-alert-present, .js-same-package"
            ).show();
        }
    });

    if ($.fn.mask) {
        //$("[name=Phone]").mask("+7 999 9999999");
        $(".js-date-mask").mask("99.99.9999");
    }
    if ($.fn.select2) {
        $.fn.select2.amd.define("select2/i18n/ru", [], function () {
            // Russian
            return {
                errorLoading: function () {
                    return "Результат не может быть загружен.";
                },
                inputTooLong: function (args) {
                    var overChars = args.input.length - args.maximum;
                    var message =
                        "Пожалуйста, удалите " + overChars + " символ";
                    if (overChars >= 2 && overChars <= 4) {
                        message += "а";
                    } else if (overChars >= 5) {
                        message += "ов";
                    }
                    return message;
                },
                inputTooShort: function (args) {
                    var remainingChars = args.minimum - args.input.length;

                    var message =
                        "Пожалуйста, введите " +
                        remainingChars +
                        " или более символов";

                    return message;
                },
                loadingMore: function () {
                    return "Загружаем ещё ресурсы…";
                },
                maximumSelected: function (args) {
                    var message =
                        "Вы можете выбрать " + args.maximum + " элемент";

                    if (args.maximum >= 2 && args.maximum <= 4) {
                        message += "а";
                    } else if (args.maximum >= 5) {
                        message += "ов";
                    }

                    return message;
                },
                noResults: function () {
                    return "Ничего не найдено";
                },
                searching: function () {
                    return "Поиск…";
                },
            };
        });
        $(".js-countries").select2({
            language: "ru",
        });
    }

    try {
        var clipboard = new ClipboardJS(".js-copy-l");
        clipboard.on("success", function (e) {
            setTooltip("Скопировано!", e.trigger);
            hideTooltip(e.trigger);
        });

        clipboard.on("error", function (e) {
            setTooltip("Ошибка!", e.trigger);
            hideTooltip(e.trigger);
        });

        $(".js-copy-l").tooltip({
            trigger: "click",
            placement: "bottom",
        });

        function setTooltip(message, el) {
            $(el)
                .tooltip("hide")
                .attr("data-original-title", message)
                .tooltip("show");
        }

        function hideTooltip(el) {
            setTimeout(function () {
                $(el).tooltip("hide");
            }, 1000);
        }
    } catch (e) {
        console.log(e);
    }

    $(".js-tag").click(function () {
        if ($(this).closest("form").hasClass("tags-show")) {
            var val = $(this).text();
            $("#keywords").addTag(val);
            $(this).remove();
        }
    });

    function select_all_and_copy(element) {
        var $temp = $("<input style='position: fixed;'>");
        $("body").append($temp);
        $temp.val($(element).val()).select();
        document.execCommand("copy");
        $temp.remove();
    } // end function select_all_and_copy(el)

    //    $('.js-copy').click(function () {
    //        select_all_and_copy($(this).closest('.js-link-row').find('.js-copy-link').get(0));
    //        var self = $(this);
    //        self.addClass('copied');
    //        setTimeout(function () {
    //            self.removeClass('copied');
    //        }, 1000);
    //
    //
    //    });

    $(".js-show-link").click(function () {
        //$.ajax(url)
        var link = $(this)
            .closest(".js-link-row")
            .find("input")
            .attr("data-link");

        $(this).closest(".js-link-row").find("input").attr("value", link);
        $(this).closest(".js-link-row").find(".js-link-wrap").show();
        return false;
    });

    $(".paginate_button").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 10);
    });
    $("body").on("click", ".paginate_button", function () {
        $("html, body").animate({ scrollTop: 0 }, 10);
    });

    $("body").on("click", ".js-get-value", function () {
        var val = $(this).attr("data-value");
        $(".js-set-value").attr("value", val);
    });

    if ($.fn.tagsInput) {
        $("#tags").tagsInput();
        $("#keywords").tagsInput();
    }
    if ($.fn.tagEditor) {
        $(".js-advantages").tagEditor({
            forceLowercase: false,
            onChange: function (field, editor, tags) {
                $(".js-advantages").attr("value", tags.join(","));
            },
        });
    }

    function updateSectionNumbers() {
        $("body")
            .find(".js-section-number")
            .each(function (index, el) {
                $(el).val(index);
                var parent = $(el).closest(".js-section-row");
                if (!parent.hasClass("js-section-row-template")) {
                    if (parent.find(".js-sub-section-row").length) {
                        parent
                            .find(".js-homework-block")
                            .eq(0)
                            .hide()
                            .find("input, select")
                            .attr("disabled", "disabled")
                            .val("")
                            .attr("value", "")
                            .find("option")
                            .removeAttr("selected");
                    } else {
                        parent
                            .find(".js-homework-block")
                            .eq(0)
                            .show()
                            .find("input, select")
                            .removeAttr("disabled");
                    }
                    if ($(".js-start-type:checked").val() == "interval") {
                        if (
                            !parent.find(".js-sub-section-number").length &&
                            index == 1
                        ) {
                            parent.find(".js-interval-start-info").eq(0).show();
                        } else {
                            parent.find(".js-interval-start-info").eq(0).hide();
                        }

                        // console.log(index + ' - ' + parent.find('.js-sub-section-number').length);
                        //if (!parent.find('.js-sub-section-number').length && index != 1) {
                        if (index != 1) {
                            parent
                                .find(".js-interval-wrap")
                                .eq(0)
                                .show()
                                .find("input")
                                .removeAttr("disabled");
                        } else {
                            //parent.find('.js-interval-wrap').eq(0).hide().find('input').attr('disabled', 'disabled').val('').attr('value', '');
                        }
                    } else {
                        $(".js-interval-start-info").hide();
                        $(".js-interval-wrap")
                            .hide()
                            .find("input")
                            .attr("disabled", "disabled")
                            .val("")
                            .attr("value", "");
                    }

                    if ($(".js-start-type:checked").val() == "date") {
                        if (parent.find(".js-sub-section-number").length) {
                            parent
                                .find(".js-section-date")
                                .eq(0)
                                .attr("disabled", "disabled")
                                .val("");
                        } else {
                            parent
                                .find(".js-section-date")
                                .eq(0)
                                .removeAttr("disabled");
                        }
                    } else {
                        $(".js-section-date")
                            .attr("disabled", "disabled")
                            .val("");
                    }

                    parent.find("input, select, textarea").each(function () {
                        var name = $(this).attr("name");
                        name = name.replace(/\[(.+?)\]/, "[" + index + "]");
                        $(this).attr("name", name);
                    });

                    parent
                        .find(".js-section-toggle-template")
                        .html(
                            index + ' <span class="js-row-name">Раздел</span>'
                        );
                }
            });

        $("body")
            .find(".js-section-row:not(.js-section-row-template)")
            .each(function () {
                var number = $(this).find(".js-section-number").val();
                $(this)
                    .find(".js-sub-section-number")
                    .each(function (index, el) {
                        var indexN = index + 1;
                        var subIndex = number + "." + indexN;
                        $(el).val(subIndex);
                        if ($(".js-start-type:checked").val() == "interval") {
                            if (subIndex == "1.1" && false) {
                                $(el)
                                    .closest(".js-sub-section-row")
                                    .find(".js-interval-start-info")
                                    .show();
                                $(el)
                                    .closest(".js-sub-section-row")
                                    .find(".js-interval-wrap")
                                    .hide()
                                    .find("input")
                                    .attr("disabled", "disabled")
                                    .val("")
                                    .attr("value", "");
                            } else {
                                $(el)
                                    .closest(".js-sub-section-row")
                                    .find(".js-interval-start-info")
                                    .hide();
                                $(el)
                                    .closest(".js-sub-section-row")
                                    .find(".js-interval-wrap")
                                    .show()
                                    .find("input")
                                    .removeAttr("disabled");
                            }
                        }
                        var parent = $(el).closest(".js-sub-section-row");
                        parent
                            .find("input, select, textarea")
                            .each(function () {
                                var name = $(this).attr("name");
                                name = name.replace(
                                    /\[(.+?)\]/,
                                    "[" + subIndex + "]"
                                );
                                $(this).attr("name", name);
                            });

                        parent
                            .find(".js-section-toggle-template")
                            .html(
                                subIndex +
                                    ' <span class="js-row-name">Подраздел</span>'
                            );
                    });
            });
    }

    $("body").on("click", ".js-add-sub-section", function () {
        var parent = $(".js-section-template");

        var clone = parent.find(".js-section-row-template").clone();
        clone.removeClass("js-section-row-template");
        clone.removeClass("js-section-row");
        clone.addClass("js-sub-section-row");

        clone.find("input, select, textarea").each(function () {
            if ($(this).attr("type") == "checkbox") {
                $(this).prop("selected", false);
                $(this).removeAttr("selected");
            } else {
                $(this).val("");
            }
        });
        clone.find("label").each(function () {
            var text = $(this).text();
            if (text.indexOf("раздел")) {
                $(this).text(text.replace("раздел", "подраздел"));
            }
        });

        clone
            .find(".js-section-number")
            .removeClass("js-section-number")
            .addClass("js-sub-section-number");
        var btn = $("<button/>", {
            class: "btn-custom btn-custom-xs btn-custom-danger",
            text: "Удалить подраздел",
            type: "button",
            click: function () {
                $(this).closest(".js-sub-section-row").remove();
                updateSectionNumbers();
            },
        });
        clone.find(".js-sub-category-btns").html(btn);
        clone.find(".js-section-hide").show();
        var wrap = $("<div/>", { class: "col-12 stay-visible" });
        wrap.append(clone);
        $(this).closest(".js-section-row").append(wrap);
        updateSectionNumbers();

        $(".show-content")
            .not(".js-section-row-template")
            .not(clone)
            .removeClass("show-content");
        return false;
    });

    $("body").on("click", ".js-delete-section", function () {
        var parent = $(this).closest(".js-section-row");
        if (!parent.hasClass("js-section-row-template")) {
            parent.remove();
        }
        updateSectionNumbers();
        return false;
    });

    $("body").on("click", ".js-add-section", function () {
        var parent = $(".js-section-template");

        var clone = parent.find(".js-section-row-template").clone();
        clone.removeClass("js-section-row-template");
        clone.find("input, select, textarea").each(function () {
            if ($(this).attr("type") == "checkbox") {
                $(this).prop("selected", false);
                $(this).removeAttr("selected");
            } else {
                $(this).val("");
            }
        });

        $(".show-content")
            .not(".js-section-row-template")
            .not(clone)
            .removeClass("show-content");
        parent.append(clone);
        updateSectionNumbers();

        var top = clone.height();
        $(window).scrollTop($(window).scrollTop() - top);

        return false;
    });

    $(".js-category").change(function () {
        var self = $(this);
        var val = $(this).val();
        $(".js-temp-cat").hide();
        if (val == "Другое") {
            $(".js-temp-cat").show();
            $(".js-sub-category").val("");
            $(".js-sub-category-wrap").hide();
        } else {
            $(".js-sub-category-wrap").show();
            $(".js-temp-cat").hide().find("input").val("");
            $.ajax({
                method: "POST",
                data: { id: val },
                dataType: "json",
                url:
                    typeof self.data("action") !== "undefined"
                        ? self.data("action")
                        : "/helpers/categories",
                success: function (e) {
                    $(".js-sub-category").empty();
                    $(".js-sub-category-wrap").hide();
                    if (Object.keys(e).length) {
                        $(".js-sub-category-wrap").show();
                        for (var i in e) {
                            $(".js-sub-category").append(
                                '<option value="' +
                                    i +
                                    '">' +
                                    e[i] +
                                    "</option>"
                            );
                        }
                    }
                },
            });
        }
    });

    if ($(".js-start-type:checked").val() == "imm") {
        $("input[name*=SectionStartAt]").attr("disabled", "disabled").val("");
    }
    if ($(".js-start-type:checked").val() == "interval") {
        $("input[name*=SectionStartAt]").attr("disabled", "disabled").val("");
        updateSectionNumbers();
    } else {
        $(".js-interval-wrap").hide();
        $(".js-interval-start-info").hide();
    }

    $(".js-start-type").change(function () {
        var val = $(this).val();
        if (val == "date") {
            $("input[name*=SectionStartAt]").removeAttr("disabled");
        } else {
            $("input[name*=SectionStartAt]")
                .attr("disabled", "disabled")
                .val("");
        }
        updateSectionNumbers();
    });

    $(".js-active-type").click(function () {
        var val = $(this).val();
        if (val == "limit") {
            $(".js-active-period").show();
        } else {
            $(".js-active-period").hide().find("input").val("");
        }
    });

    $(".js-support").change(function () {
        var checked = $(this).prop("checked");
        if (checked) {
            $(".js-support-block").show();
        } else {
            $(".js-support-sblock").find("input, select, textarea").val("");
            $(".js-support-selector").prop("checked", false);
            $(".js-support-block, .js-support-sblock").hide();
        }
    });

    $(".js-support-selector").change(function () {
        var checked = $(this).prop("checked");
        if (checked) {
            $(this).closest(".form-group").find(".js-support-sblock").show();
        } else {
            $(this).closest(".form-group").find(".js-support-sblock").hide();
            $(this)
                .closest(".form-group")
                .find(".js-support-sblock")
                .find("input, select, textarea")
                .val("");
            $(this)
                .closest(".form-group")
                .find(".js-support-sblock")
                .find("input")
                .prop("checked", false);
        }
    });

    $(".js-sale").change(function () {
        var checked = $(this).prop("checked");
        if (checked) {
            $(".js-sale-block").show();
        } else {
            $(".js-sale-block").find("input, select").val("");
            $(".js-sale-block").hide();
        }
    });

    $(".js-calc-sale").on("keyup", function () {
        var price = $('input[name="Price"]').val();
        var sale = $('input[name="Sale"]').val();
        if (price && sale) {
            if (sale < 100) {
                var percents = sale / 100;
                var salePrice = price - price * percents;
                $('input[name="SalePrice"]').val(salePrice.toFixed(2));
            } else {
                $('input[name="SalePrice"]').val("");
            }
        } else {
            $('input[name="SalePrice"]').val("");
        }
    });

    function renderLegalInputs(val, disable) {
        if (val == "ЧОУ") {
            $(".js-only-peo-wrap").show();
            $(".js-only-peo").each(function () {
                if (disable) {
                    $(this).removeAttr("disabled");
                }
                $(this).closest(".form-group").show();
            });
        } else {
            $(".js-only-peo-wrap").hide();
            $(".js-only-peo").each(function () {
                $(this).attr("disabled", "disabled");
                $(this).closest(".form-group").hide();
            });
        }

        if (val == "Физическое лицо") {
            $(".js-cor-type").html("Лицевой счет<sup>*</sup>");
            $("input[name=LegalName]")
                .closest(".form-group")
                .find("label")
                .html("ФИО<sup>*</sup>");
            $(".js-only-legal").each(function () {
                $(this).attr("disabled", "disabled");
                $(this).closest(".form-group").hide();
            });
            $(".js-only-owner").each(function () {
                if (disable) {
                    $(this).removeAttr("disabled");
                }
                $(this).closest(".form-group").show();
            });
        } else {
            $(".js-cor-type").html("Расчетный счет<sup>*</sup>");
            $(".js-only-legal, .js-only-inc").each(function () {
                if (disable) {
                    $(this).removeAttr("disabled");
                }
                $(this).closest(".form-group").show();
            });
            $(".js-only-owner").each(function () {
                $(this).attr("disabled", "disabled");
                $(this).closest(".form-group").hide();
            });
            if (val == "ИП") {
                $("input[name=LegalName]")
                    .closest(".form-group")
                    .find("label")
                    .html("ФИО<sup>*</sup>");
                $(".js-only-inc").each(function () {
                    $(this).attr("disabled", "disabled");
                    $(this).closest(".form-group").hide();
                });
            } else {
                $("input[name=LegalName]")
                    .closest(".form-group")
                    .find("label")
                    .html("Наименование<sup>*</sup>");
            }
        }
    }

    var myVideos = [];

    window.URL = window.URL || window.webkitURL;

    $("body").on("change", ".js-video-select", function () {
        var val = $(this).find("option:selected").attr("data-length");
        var input = $(this)
            .closest(".js-sub-section-row")
            .find(".js-section-length");
        if (!input.length) {
            input = $(this)
                .closest(".js-section-row")
                .find(".js-section-length")
                .eq(0);
        }
        input.val("");
        if (val) {
            input.val(Math.round(val / 60));
        }
    });

    $(".js-section-video").change(function () {
        $(".js-meta").val("");
        try {
            var files = this.files;
            myVideos.push(files[0]);
            var video = document.createElement("video");
            video.preload = "metadata";
            var self = $(this);

            video.onloadedmetadata = function () {
                window.URL.revokeObjectURL(video.src);
                var duration = video.duration;
                myVideos[myVideos.length - 1].duration = duration;

                $(".js-meta").val(duration.toFixed(2));
            };

            video.src = URL.createObjectURL(files[0]);
        } catch (e) {
            console.log(e);
        }
    });

    renderLegalInputs($(".js-legal-type").val(), false);

    $(".js-legal-type").change(function () {
        var val = $(this).val();
        renderLegalInputs(val, true);
    });

    if ($.fn.lightGallery) {
        $("#animated-thumbnials").lightGallery({
            thumbnail: true,
        });
    }

    if ($.fn.datetimepicker) {
        $.datetimepicker.setLocale("ru");
        var params = {
            timepicker: false,
            format: "Y-m-d",
        };
        var params1 = {
            datepicker: false,
            format: "H:i",
        };
        var params2 = {
            format: "Y-m-d H:i",
            defaultTime: "00:00",
        };
        var params3 = {
            timepicker: false,
            format: "d.m.Y",
        };
        $(".js-date, .js-datetime, .js-date-format").attr(
            "autocomplete",
            "off"
        );
        $(".js-date").datetimepicker(params);
        $(".js-date-format").datetimepicker(params3);
        $(".js-time").datetimepicker(params1);
        $(".js-datetime").datetimepicker(params2);
        $(".js-section-template").bind("DOMSubtreeModified", function () {
            $(".js-datetime").each(function () {
                if (!$(this).val()) {
                    $(this).datetimepicker(params2);
                }
            });
        });
    }

    $(".js-enable").click(function () {
        $(this)
            .closest("form")
            .addClass("tags-show")
            .find("input, select, textarea, button, a")
            .not(".js-stay-disabled")
            .removeAttr("disabled");
        return false;
    });

    var reload = false;

    function dataURItoBlob(dataURI) {
        var byteString;

        if (dataURI.split(",")[0].indexOf("base64") >= 0)
            byteString = atob(dataURI.split(",")[1]);
        else byteString = unescape(dataURI.split(",")[1]);

        var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

        var ia = new Uint8Array(byteString.length);

        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], {
            type: mimeString,
        });
    }

    $("body").on("submit", ".js-form", function (e) {
        e.preventDefault();

        var self = $(this),
            id = self.attr("id");

        $("body").addClass("loading");
        var data = new FormData(),
            action = self.attr("data-action");

        self.find("input, textarea , select").each(function () {
            if (!$(this).attr("disabled")) {
                if ($(this).attr("type") == "file") {
                    if (this.files.length) {
                        for (var i in this.files) {
                            if (this.files[i] instanceof File) {
                                if ($(this).attr("data-base") && $f) {
                                    var uri = $f.cropit("export", {
                                        type: "image/jpeg",
                                        quality: 0.9,
                                        originalSize: true,
                                    });
                                    var fileBlob = dataURItoBlob(uri);
                                    data.append(
                                        $(this).attr("name"),
                                        fileBlob,
                                        "temp.png"
                                    );
                                } else {
                                    data.append(
                                        $(this).attr("name"),
                                        this.files[i]
                                    );
                                }
                            }
                        }
                    }
                } else if ($(this).attr("type") == "submit") {
                    if ($(this).data("clicked")) {
                        data.append(
                            $(this).attr("name"),
                            $(this).attr("value")
                        );
                    }
                } else {
                    if (
                        $(this).attr("type") == "checkbox" ||
                        $(this).attr("type") == "radio"
                    ) {
                        if ($(this).is(":checked")) {
                            data.append($(this).attr("name"), $(this).val());
                        }
                    } else {
                        data.append(
                            $(this).attr("name"),
                            $(this).val() ? $(this).val() : ""
                        );
                    }
                }
            }
        });

        if (self.attr("no-reload")) {
            reload = false;
        } else reload = true;

        $("#progress").addClass("d-flex");
        $(".js-error").remove();
        return false;
    });

    $("#staticNoReload").on("show.bs.modal", function () {
        $(".js-package-modal").modal("hide");
    });

    var quickRegisterLinks = document.querySelectorAll(
        "#social-quick-register a"
    );
    var courseAuthorLink = document.querySelectorAll(".course-author-link");
    var courseAuthorLinkCacheBeck = document.querySelectorAll(
        "#course-author-link-cacheback"
    );
    var linkToCourse = document.querySelectorAll("#to-source-link");


    $("#static").on("hidden.bs.modal", function () {
        if ($(this).attr("data-location")) {
            location.href = $(this).attr("data-location");
        } else {
            location.reload();
        }
    });

    $(".js-course-section-name").click(function () {
        var block = $(this)
            .toggleClass("opened")
            .closest(".js-course-section-wrap")
            .find(".js-course-section-block");
        block.toggle();
        $(".js-course-section-block")
            .not(block)
            .each(function () {
                if ($(this).find(".js-disabled-section").length) {
                    $(this).hide();
                    $(this)
                        .closest(".js-course-section-wrap")
                        .find(".js-course-section-name")
                        .removeClass("opened");
                } else {
                    if (!block.find(".js-disabled-section").length) {
                        $(this).hide();
                        $(this)
                            .closest(".js-course-section-wrap")
                            .find(".js-course-section-name")
                            .removeClass("opened");
                    }
                }
            });
    });

    var courseTabs = document.querySelectorAll(".course__tab");
    if (courseTabs[0]) {
        var courseBlocks = document.querySelectorAll(".course__text");
        courseTabs.forEach((item) => {
            item.addEventListener("click", function (e) {
                courseBlocks.forEach((item) => item.classList.remove("active"));
                courseTabs.forEach((item) => item.classList.remove("active"));
                var currentId = e.target.getAttribute("data-category");
                e.target.classList.add("active");
                courseBlocks.forEach((item) => {
                    if (item.getAttribute("data-block") === currentId) {
                        item.classList.add("active");
                    }
                });
            });
        });
    }

    const dropdownBtns = document.querySelectorAll(".course-l-counter");
    if (dropdownBtns[0]) {
        dropdownBtns.forEach((item) => {
            item.addEventListener("click", () => {
                item.parentElement.classList.toggle("active");
            });
        });
    }

    function fixedScroll(scrolledItem, top) {
        const fixedBlock = document.querySelector(scrolledItem);
        let realTop = offset(fixedBlock) + top;

        function offset(el) {
            if (el) {
                var rect = el.getBoundingClientRect(),
                    scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                return rect.top + scrollTop;
            }
        }

        if (fixedBlock) {
            document.addEventListener("scroll", function () {
                let rectTop =
                    fixedBlock.parentElement.getBoundingClientRect().top;
                const rect = rectTop + fixedBlock.parentElement.clientHeight;

                const rectBlock = fixedBlock.getBoundingClientRect();

                if (
                    +(document.documentElement.clientHeight - rect).toFixed(
                        0
                    ) >=
                    +(
                        document.documentElement.clientHeight - rectBlock.bottom
                    ).toFixed(0)
                ) {
                    fixedBlock.style.position = "absolute";
                    fixedBlock.style.bottom = "0";
                    fixedBlock.style.top = "unset";
                } else {
                    fixedBlock.style.position = "fixed";
                    fixedBlock.style.bottom = "unset";
                    fixedBlock.style.top = "".concat(top, "px");
                }

                if (rect - fixedBlock.clientHeight - top > 0) {
                    fixedBlock.style.position = "fixed";
                    fixedBlock.style.bottom = "unset";
                    fixedBlock.style.top = "".concat(top, "px");
                }

                if (realTop) {
                    if (window.pageYOffset + top + 40 < realTop) {
                        fixedBlock.style.position = "absolute";
                        fixedBlock.style.top = 0 + "px";
                    }
                }
            });
        }
    }

    fixedScroll(".full-img-school > img", 20);

    if (document.documentElement.clientWidth < 993) {
        document.addEventListener("click", function (e) {
            if (e.target.classList.contains("course-teacher__info")) {
                const teachers = document.querySelectorAll(".course-teacher");
                if (teachers[0]) {
                    teachers.forEach((item) => {
                        item.classList.remove("active");
                    });
                }
                e.target.parentElement.classList.add("active");
            }
            if (e.target.classList.contains("course-teacher__close")) {
                e.target.parentElement.parentElement.classList.remove("active");
            }
        });
    }
});

const headerCoursesBtnMobile = document.querySelector(
    ".header__courses.mobile"
);
const headerCoursesBtnDesktop = document.querySelector(
    ".header__courses.desktop"
);
const headerDropdowns = document.getElementsByClassName("header__dropdown");
const headerDropdown = headerDropdowns[0];
const closeDropdownBtn = document.getElementById("dropdown__close-btn");
var catalogContainer = document.querySelector(".catalog-container");

function clickOutsideDropdown(e) {
    if (
        (headerCoursesBtnMobile &&
            (e.target === headerCoursesBtnMobile ||
                headerCoursesBtnMobile.contains(e.target) ||
                headerDropdown.contains(e.target))) ||
        (headerCoursesBtnDesktop &&
            (e.target === headerCoursesBtnDesktop ||
                headerCoursesBtnDesktop.contains(e.target) ||
                catalogContainer.contains(e.target)))
    ) {
        return;
    } else {
        if (headerDropdown) {
            headerDropdown.classList.remove("dropdown-active");
        }
        if (catalogContainer) {
            catalogContainer.classList.remove("active");
        }
    }
}

function dropdownToggle() {
    $(headerDropdown).toggleClass("dropdown-active");
}

function desktopDropdownToggle() {
    if (catalogContainer && catalogContainer.classList.contains("active")) {
        catalogContainer.classList.remove("active");
        headerContainer.style.position = "absolute";
    } else if (catalogContainer) {
        catalogContainer.classList.add("active");
        headerContainer.style.position = "fixed";
    }

    if (document.querySelector(".header__ratings.container-visible")) {
        document
            .querySelector(".header__ratings.container-visible")
            .classList.remove("container-visible");
    }
}

function mobileDropdownBorderToggle(e) {
    if (document.documentElement.clientWidth < 768) {
        $(headerCoursesBtnMobile).toggleClass("mobile-catalogue-border");
    }
}

if (document.documentElement.clientWidth < 768) {
    if (window.location.href === "https://dev2.kurs-market.com/schools") {
        var headerSchools = document.querySelector(".header__schools");
        headerSchools.classList.add("mobile-pages-border");
    }

    if (
        window.location.href === "https://dev2.kurs-market.com/courses-rating"
    ) {
        var headerRatings = document.querySelector(".header__ratings");
        headerRatings.classList.add("mobile-pages-border");
    }
}

var dropdownItems = document.querySelectorAll(".header__dropdown > li");

if (dropdownItems.length > 0 && document.documentElement.clientWidth < 768) {
    dropdownItems.forEach((element) => {
        element.addEventListener("click", (event) => {
            var depth = parseInt(event.target.getAttribute("data-depth"));
            dropdownItems.forEach(function (element) {
                var elementDepth = parseInt(element.getAttribute("data-depth"));
                if (
                    element.classList.contains("dropdown-expand") &&
                    depth === elementDepth
                ) {
                    element.classList.remove("dropdown-expand");
                }
            });

            element.classList.add("dropdown-expand");
            element.parentNode.classList.add("dropdown-visibility-state");
        });
    });
}
if (headerCoursesBtnMobile) {
    headerCoursesBtnMobile.addEventListener("click", dropdownToggle);
    headerCoursesBtnMobile.addEventListener(
        "click",
        mobileDropdownBorderToggle
    );
} else if (headerCoursesBtnDesktop) {
    headerCoursesBtnDesktop.addEventListener("click", desktopDropdownToggle);
}

document.addEventListener("click", clickOutsideDropdown);

$(".header__dropdown").on("click", "li", function (e) {
    e.stopPropagation();
});

const mobileSearchBtn = document.querySelector(".search_mobile");
const header = document.querySelector(".header");
const mobileSearchHeader = document.querySelector(".mobile-search-header");
const mobileHeaderClose = document.querySelector(".header__close-search-btn");
const mobileHeaderForm = document.querySelector(".header__form-mobile");
var btnBacks = document.querySelectorAll(".mobile__back-btn");

if (btnBacks.length > 0) {
    btnBacks.forEach(function (btnBack) {
        btnBack.addEventListener("click", function (e) {
            e.preventDefault();
            let $li = e.target.closest("ul").closest("li");
            if ($li) {
                $li.classList.remove("dropdown-expand");
            }
            let $ul = $li.closest("ul");
            if ($ul) {
                $ul.classList.remove("dropdown-visibility-state");
            }
        });
    });
}

function closeMobileSearch() {
    header.style.display = "flex";
    mobileSearchHeader.style.display = "none";
    mobileHeaderForm.style.display = "none";
    if (main) {
        main.classList.remove("margin-short");
    }
}
if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener("click", showMobileSearch);
}
if (mobileHeaderClose) {
    mobileHeaderClose.addEventListener("click", closeMobileSearch);
}

var main = document.querySelector("body main");

function showMobileSearch() {
    header.style.display = "none";
    mobileSearchHeader.style.display = "flex";
    mobileHeaderForm.style.display = "flex";
    if (main) {
        main.classList.add("margin-short");
    }

    let mobileInput = document.getElementById("search-mobile-input");
    mobileInput.focus();
}

var ratings = document.querySelectorAll(".header__ratings");
var headerContainer = document.querySelector(".header__container");

function ratingsDropdownToggle() {
    if (ratings[0] && ratings[0].classList.contains("container-visible")) {
        ratings[0].classList.remove("container-visible");
        headerContainer.style.position = "absolute";
    } else if (ratings[0]) {
        ratings[0].classList.add("container-visible");
        headerContainer.style.position = "fixed";
    }

    if (ratings[1] && ratings[1].classList.contains("container-visible")) {
        ratings[1].classList.remove("container-visible");
        headerContainer.style.position = "absolute";
    } else if (ratings[1]) {
        ratings[1].classList.add("container-visible");
        headerContainer.style.position = "fixed";
    }
}
if (ratings[0]) {
    ratings[0].addEventListener("click", ratingsDropdownToggle);
    var firstRatingDropdown = document.querySelector(".ratings__dropdown > li");
    if (firstRatingDropdown && document.documentElement.clientWidth > 768) {
        ratings[0].addEventListener("click", () => {
            firstRatingDropdown.classList.add("imitate-hover");
        });
        firstRatingDropdown.addEventListener("mouseout", () => {
            firstRatingDropdown.classList.remove("imitate-hover");
        });
    }
}

$(".ratings__dropdown").on("click", "li", function (e) {
    e.stopPropagation();
});

var ratingCloseBtn = document.querySelectorAll(".ratings-close-btn");
var ratingHideBtn = document.querySelector(".hide-ratings-dropdown-btn");

var catalogCloseBtn = document.querySelector(".catalog-close-btn");

if (ratingCloseBtn) {
    ratingCloseBtn.forEach(function (btn) {
        btn.addEventListener("click", () => {
            ratings.forEach(function (rating) {
                rating.classList.remove("container-visible");
            });
            headerContainer.style.position = "absolute";
        });
    });

    if (ratingCloseBtn[1]) {
        ratingCloseBtn[1].addEventListener("click", () => {
            ratings[1].style.cssText = "";
        });
    }

    if (ratingCloseBtn[0]) {
        ratingCloseBtn[0].addEventListener("click", () => {
            ratings[0].style.cssText = "";
        });
    }
}

if (catalogCloseBtn) {
    catalogCloseBtn.addEventListener("click", () => {
        catalogCloseBtn.classList.remove("active");
        headerContainer.style.position = "absolute";
    });
}

if (ratingHideBtn) {
    ratingHideBtn.addEventListener("click", () => {
        ratings[0].classList.remove("container-visible");
        headerContainer.style.position = "absolute";
        ratings[0].style.cssText = " ";
    });
}

if (document.documentElement.clientWidth < 768) {
    ratings[0].addEventListener("click", (e) => {
        e.target.style.cssText =
            "position: fixed; top: 0; left: 0; width: 100vw; height: 62px; background: white; font-weight: 450; font-size: 22px; line-height: 30px; z-index: -1";
        ratings[0].classList.add("container-visible");
    });

    var mobileRatingsItems = document.querySelectorAll(
        ".ratings__dropdown-container > .ratings__dropdown > li > div"
    );
    var mobileRatingsChildDropdowns = document.querySelectorAll(
        ".ratings__dropdown > li > .ratings__dropdown"
    );
    if (mobileRatingsItems && mobileRatingsChildDropdowns) {
        mobileRatingsItems.forEach((element) => {
            element.addEventListener("click", (e) => {
                if (!element.classList.contains("ratings-dropdown-active")) {
                    e.target.classList.add("ratings-dropdown-active");
                    e.target.classList.add("arrow-up");
                } else {
                    e.target.classList.remove("ratings-dropdown-active");
                    e.target.classList.remove("arrow-up");
                }
            });
        });
    }
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

var articlesPageBtns = document.querySelectorAll(".articles__page-btn");

if (articlesPageBtns) {
    articlesPageBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (!e.target.classList.contains("page-active")) {
                document
                    .querySelector(".page-active")
                    .classList.remove("page-active");
                e.target.classList.add("page-active");
            }
        });
    });
}

var filters = [];
var clearFilters = function clearFilters(el) {
    filters.map(function (filter, index) {
        if (filter === el) {
            filters.splice(index, 1);
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    var modifs = document.querySelector(".filters.categories__modificators");
    var price = document.querySelector(".price-filter-wrapper");
    var sidebar = document.querySelector(".school-sidebar");
    var showBtn = document.querySelector(".categories__show-all");
    var schoolUrl = document.querySelectorAll("[data-school-url]");

    if (
        document.documentElement.clientWidth < 769 &&
        modifs &&
        sidebar &&
        showBtn &&
        price
    ) {
        modifs.remove();
        sidebar.remove();
        showBtn.remove();
        price.remove();

        var mobileFilters = document.querySelector(
            ".filters-mobile__contents > .filters__block"
        );
        if (mobileFilters) {
            mobileFilters.appendChild(price);
            mobileFilters.appendChild(modifs);
        }
        var mobileWrapper = document.querySelector(".mobile-filters-wrapper");
        if (mobileWrapper) {
            mobileWrapper.appendChild(sidebar);
            sidebar.appendChild(showBtn);
        }
    }

    var mobileFiltersBtn = document.querySelector(".filters-dropdown-btn");

    if (mobileFiltersBtn) {
        mobileFiltersBtn.addEventListener("click", (e) => {
            e.target.classList.toggle("active");
        });
    }

    if (schoolUrl) {
        schoolUrl.forEach(function (url) {
            url.addEventListener("click", function () {
                var href = url.getAttribute("data-school-url");
                if (href) {
                    window.location.href = href;
                }
            });
        });
    }

    if (document.querySelector(".main-page__promo-swiper")) {
        var swiper = new Swiper(".main-page__promo-swiper", {
            direction: "horizontal",
            loop: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            scrollbar: {
                el: ".swiper-scrollbar",
            },
            slidesPerView: 4,
            spaceBetween: 20,
            breakpoints: {
                1140: {
                    slidesPerView: 4,
                },
                998: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }
});

var ratingDropdownDesktop = document.querySelector(
    ".ratings__dropdown-container > .ratings__dropdown"
);

if (ratingDropdownDesktop && document.documentElement.clientWidth > 998) {
    var ratingEls = ratingDropdownDesktop.querySelectorAll(
        ".ratings__dropdown-container > .ratings__dropdown > li"
    );
    if (ratingEls) {
        ratingEls.forEach(function (el) {
            el.addEventListener("mouseout", (e) => {
                if (
                    (e.target.tagName === "A" &&
                        e.relatedTarget.tagname !== "A") ||
                    (e.target.tagName === "UL" &&
                        e.relatedTarget.classList.contains(
                            "ratings__dropdown-container"
                        ))
                ) {
                    e.target.parentNode.classList.add("imitate-hover");
                }

                if (
                    e.target.tagName === "A" &&
                    e.relatedTarget.classList.contains(
                        "ratings__dropdown-container"
                    )
                ) {
                    e.target.parentNode.parentNode.parentNode.classList.add(
                        "imitate-hover"
                    );
                }
            });

            el.addEventListener("mouseover", (e) => {
                if (document.querySelector(".imitate-hover")) {
                    document
                        .querySelector(".imitate-hover")
                        .classList.remove("imitate-hover");
                }
            });
        });
    }
}

var catalogDropdownDesktop = document.querySelector(
    ".catalog-container > .catalog-contents"
);

if (catalogDropdownDesktop && document.documentElement.clientWidth > 998) {
    var catalogEls = catalogDropdownDesktop.querySelectorAll(
        ".catalog-contents > .header__dropdown > li"
    );
    if (catalogEls) {
        catalogEls.forEach(function (el) {
            el.addEventListener("mouseover", (e) => {
                if (
                    (e.relatedTarget && (e.target.tagName === "A" || e.target.tagName === "UL" || e.target.tagName === "SPAN")) &&
                    e.relatedTarget.classList.contains("catalog-contents")
                ) {
                    var imitate = document.querySelector(".imitate-hover");
                    if (imitate) {
                        imitate.classList.remove("imitate-hover");
                    }
                }
            })
            el.addEventListener("mouseout", (e) => {
                if (
                    (e.relatedTarget && (e.target.tagName === "A" || e.target.tagName === "UL" || e.target.tagName === "SPAN")) &&
                    e.relatedTarget.classList.contains("catalog-contents")
                ) {
                    var items = document.querySelectorAll("li[data-depth='0']");
                    items.forEach((item) => {
                        if (item.contains(e.target)) {
                            item.classList.add("imitate-hover");
                        }
                    });
                } else {
                    let imitated = document.querySelector(".imitate-hover");
                    if (imitated) {
                        imitated.classList.remove("imitate-hover");
                    }
                }
            });
        });
    }
}

var userLink = document.querySelector(".user-link a:has(img.logged-in)");

if (userLink) {
    userLink.addEventListener("click", function (e) {
        e.preventDefault();
        userLink.classList.toggle("dropdown-active");
    });
}

var userDropdown = document.querySelector(".user__dropdown");

/* if (userDropdown && userLink) {
    document.addEventListener("click", function(e) {
        if (!e.target.classList.contains("user-link") && !e.target.classList.contains("user__dropdown") && userLink.classList.contains("dropdown-active")) {
            userLink.classList.remove("dropdown-active")
        }
    })
} */

var passPopup = document.querySelector(".password-popup__wrapper");
var changePassBtn = document.querySelector(".user__password a");

if (changePassBtn && passPopup) {
    changePassBtn.addEventListener("click", function () {
        passPopup.classList.add("active");
    });
}

var closeUserPopup = document.querySelector(".close-user-popup");

if (closeUserPopup && passPopup) {
    closeUserPopup.addEventListener("click", function () {
        passPopup.classList.remove("active");
    });
}

if (
    document.documentElement.clientWidth < 1080 &&
    document.querySelector(".main-page__ratings")
) {
    var rows = document.querySelectorAll(".ratings__table-row");

    if (rows) {
        rows.forEach(function (row) {
            var linkRow = row.querySelector(".ratings__table-row-link");
            var ratingPrice = document.querySelector(
                ".ratings__table-row-price div"
            );

            if (linkRow && ratingPrice) {
                ratingPrice.remove();
                linkRow.prepend(ratingPrice);
            }

            var ratingSchool = row.querySelector(
                ".ratings__table-row-school > div"
            );

            if (ratingSchool) {
                ratingSchool.remove();
                row.prepend(ratingSchool);
            }
        });
    }
}

if (document.documentElement.clientWidth < 991) {
    var parntersLink = document.querySelector(
        ".about__bot-wrapper .main-page__partners-el.link a"
    );
    var partners = document.querySelector(".main-page__partners");
    if (parntersLink && partners) {
        parntersLink.remove();
        partners.appendChild(parntersLink);
    }
}

var mainRatingModifs = document.querySelectorAll(
    ".main-page__ratings-filters a"
);

if (mainRatingModifs) {
    mainRatingModifs.forEach(function (el) {
        el.addEventListener("click", function () {
            if (document.querySelector(".modif-selected")) {
                document
                    .querySelector(".modif-selected")
                    .classList.remove("modif-selected");
            }

            if (el.classList.contains("modif-selected")) {
                el.classList.remove("modif-selected");
            } else {
                el.classList.add("modif-selected");
            }
        });
    });
}

var userTabSettings = document.querySelector(".user__nav a[data-tab='settings']");
var userContentSettings = document.querySelector(".user__contents article[data-content='settings']");
var userTabFavourite = document.querySelector(".user__nav a[data-tab='favourite']");
var userContentFavourite = document.querySelector(".user__contents article[data-content='favourite']");

if (userTabSettings && userContentSettings && userTabFavourite && userContentFavourite) {
    userTabSettings.addEventListener("click", function (e) {
        e.preventDefault();

        if (userContentFavourite.classList.contains("active")) {
            userContentFavourite.classList.remove("active");
            userTabFavourite.classList.remove("active");
        }

        if (!userContentSettings.classList.contains("active")) {
            userContentSettings.classList.add("active");
            userTabSettings.classList.add("active");
        } else return;
    })

    userTabFavourite.addEventListener("click", function (e) {
        e.preventDefault();

        if (userContentSettings.classList.contains("active")) {
            userContentSettings.classList.remove("active");
            userTabSettings.classList.remove("active");
        }

        if (!userContentFavourite.classList.contains("active")) {
            userContentFavourite.classList.add("active");
            userTabFavourite.classList.add("active");
        } else return;
    })
}

// var signInTriggers = document.querySelectorAll(".sign-in-needed");
// var signInPopup = document.querySelector(".overflow:has(.login-popup[data-popup='login-popup'])");

// if (signInTriggers && signInPopup) {
//     signInTriggers.forEach(function (item) {
//         item.addEventListener("click", function () {
//             signInPopup.classList.add("overflow_active");
//         })
//     })
// }
//
// $(document).ajaxSuccess(function() {
//     var signInTriggers = document.querySelectorAll(".sign-in-needed");
//     var signInPopup = document.querySelector(".overflow:has(.login-popup[data-popup='login-popup'])");
//
//     if (signInTriggers && signInPopup) {
//         signInTriggers.forEach(function (item) {
//             item.addEventListener("click", function (e) {
//                 e.preventDefault();
//                 signInPopup.classList.add("overflow_active");
//             })
//         })
//     }
//   });
