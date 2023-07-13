(function ($) {
    document.addEventListener('DOMContentLoaded', function () {
        var showMoreButton = document.querySelectorAll('.show-more_btn');

        if (showMoreButton) {
            showMoreButton.forEach((button) => {
                button.addEventListener('click', async (event) => {
                    event.preventDefault();
                    let offset = parseInt( event.target.getAttribute('data-limit') );
                    let type = null;
                    let template = null;
                    if (event.target.classList.contains('courses-all')) {
                        type = 'all-courses';
                        template = 'all_course';
                    } else if (event.target.classList.contains('courses-free')) {
                        type = 'free-courses';
                        template = 'course_free';
                    } else if (event.target.classList.contains('courses')) {
                        type = 'courses';
                        template = 'course';
                    }

                    const url = `/show-more/courses`;

                    await fetch(url, {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': $('meta[name="token"]').attr('content')
                        },
                        body: JSON.stringify({type, template, category: event.target.getAttribute('data-category'), offset: (offset + 3)})
                    }).then(response => {
                        return response.text();
                    }).then(html => {
                        const grid = document.querySelector(`.${template}`);

                        event.target.setAttribute('data-limit', (offset + 3))
                        if ( grid ) {
                            $(grid).append(html);
                        }
                    }).catch(error => {
                        console.log(error.message)
                    });
                })
            })
        }
    })
})(jQuery)
