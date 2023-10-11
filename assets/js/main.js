window.addEventListener('scroll', function () {
    document
        .getElementById('header-nav')
        .classList.toggle('headernav-scroll', window.scrollY > 135);
});

$(document).ready(function () {
    $('.owl-carousel-full').owlCarousel({
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
});
