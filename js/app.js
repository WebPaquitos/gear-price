$(document).ready(() => {
    $('.navigation__link').click(() => {
        $('[type="checkbox"]').prop('checked', false);
    });

    $('.footer__link, #download-now').click((e) => {
        if ($(e.currentTarget).attr('href') !== '#popup' && $(e.currentTarget).attr('id') !== 'webpaquitos') {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(e.currentTarget).attr('href')).offset().top,
            }, 1000);
        }
    });

    $('.navigation__link').click((e) => {
        if ($(e.currentTarget).attr('href') !== '#popup' && $(e.currentTarget).attr('id') !== 'webpaquitos') {
            e.preventDefault();
            setTimeout(() => {
                $('html, body').animate({
                    scrollTop: $($(e.currentTarget).attr('href')).offset().top,
                }, 1000);
            }, 700);
        }
    });
});