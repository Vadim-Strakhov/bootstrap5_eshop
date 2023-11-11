document.querySelectorAll('a').forEach((item) => {
    item.addEventListener('click', (e) => {
        const hrefValue = item.getAttribute('href');
        if (hrefValue && hrefValue.startsWith('#')) {
            e.preventDefault();
        } else {
            return;
        }
        
    })
})

window.addEventListener('scroll', function () {
    document.getElementById('header-nav').classList.toggle('headernav-scroll', window.scrollY > 135);
});

const myOffcanvas = document.getElementById('offcanvasCart');

const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);

document.getElementById('cart-open').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
});

document.querySelectorAll('.closecart').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        // e.stopPropagation();
        bsOffcanvas.hide();
        let href = item.dataset.href;
        document.getElementById(href).scrollIntoView();
    });
});

// document.querySelectorAll('.closecart').forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.preventDefault;
//         bsOffcanvas.hide();
//         // let href = item.href.split('#').pop();
//         let href = item.dataset.href;
//         myOffcanvas.addEventListener('hidden.bs.offcanvas', (event) => {
//             document.getElementById(href).scrollIntoView();
//         });
//     });
// });

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });

    $('#top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

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
