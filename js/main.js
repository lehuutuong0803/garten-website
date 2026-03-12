(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);

        //    <a class="btn btn-link text-light" href=""><i class="fab fa-facebook-f"></i></a>
        //    <a class="btn btn-link text-light" href=""><i class="fab fa-twitter"></i></a>
        //    <a class="btn btn-link text-light" href=""><i class="fab fa-linkedin-in"></i></a>

        // <a class="btn btn-square btn-outline-light rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
        // <a class="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.tiktok.com/@denys.ropitskyi"><i class="fab fa-youtube"></i></a>

const headerHtml = `



                            <!-- Topbar Start -->
                            <div class="container-fluid bg-dark text-light px-0 py-2">
                                <div class="row gx-0 d-none d-lg-flex">
                                    <div class="col-lg-7 px-5 text-start">
                                        <div class="h-100 d-inline-flex align-items-center me-4">
                                            <span class="fa fa-phone-alt me-2"></span>
                                            <span>+49 176 324 376 24</span>
                                        </div>
                                        <div class="h-100 d-inline-flex align-items-center">
                                            <span class="far fa-envelope me-2"></span>
                                            <span>gartenhausmeisterservicedr@gmail.com</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 px-5 text-end">
                                        <div class="h-100 d-inline-flex align-items-center mx-n2">
                                            <span>Folge mir:</span>
                                            <a class="btn btn-link text-light" href="https://www.tiktok.com/@denys.ropitskyi"><i class="fab fa-tiktok"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Topbar End -->


                            <!-- Navbar Start -->
                            <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                                <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                                    <h1 class="m-0">GartenWunsch - Denys</h1>
                                </a>
                                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarCollapse">
                                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                                        <a href="index.html" class="nav-item nav-link">Home</a>
                                        <a href="about.html" class="nav-item nav-link">Über uns</a>
                                        <div class="nav-item dropdown">
                                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Dienstleistungen</a>
                                            <div class="dropdown-menu bg-light m-0">
                                                <a href="gartenpflege.html" class="dropdown-item">Gartenpflege</a>
                                                <a href="hausmeisterservice.html" class="dropdown-item">Hausmeisterservice</a>
                                            </div>
                                        </div>
                                        <a href="project.html" class="nav-item nav-link">Projekte</a>
                                        <a href="contact.html" class="nav-item nav-link">Kontakt</a>
                                    </div>
                                    <a href="https://wa.me/4917632437624" target="_blank" class="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block"><i class="fab fa-whatsapp me-2"></i> Per WhatsApp kontaktieren</a>
                                </div>
                            </nav>
                        <!-- Navbar End -->
        `;

        /**
         * Defines the Footer HTML as a reusable template string.
         */
const footerHtml = `
            <!-- Footer Start -->
            <div class="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s" style = "padding-bottom: 0rem !important;">
                <div class="container py-5">
                    <div class="row g-6">
                        <div class="col-lg-4 col-md-7">
                            <h4 class="text-white mb-4">Kontakt</h4>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Schlüsselgarnweg 5, Heilbronn 74081, Germany</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+49 176 324 376 24</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>gartenhausmeisterservicedr@gmail.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.tiktok.com/@denys.ropitskyi"><i class="fab fa-tiktok"></i>    </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-white mb-4">Nützliche Links</h4>
                            <a class="btn btn-link" href="about.html">Über Uns</a>
                            <a class="btn btn-link" href="contact.html">Kontakt</a>
                            <a class="btn btn-link" href="gartenpflege.html">Gartenpflege</a>
                            <a class="btn btn-link" href="hausmeisterservice.html">Hausmeisterservice</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-white mb-4">Servicezeiten</h4>
                            <p>Montag - Freitag: 08:00 - 18:00</p>
                            <p>Samstag: 09:00 - 18:00</p>
                            <p>Sonntag: Nach Vereinbarung</p>
                            <p class="mt-3">Notdienst verfügbar</p>
                        </div>
                    </div>
                </div>
                <!-- Copyright Start -->
                <div class="container-fluid copyright py-4" style="padding-left:0 !important; padding-right:0 !important;">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a class="border-bottom" href="#">GartenWunsch - Denys</a>, All Right Reserved.
                                &nbsp;|&nbsp;
                                <a class="border-bottom" href="impressum.html">Impressum</a>
                                &nbsp;|&nbsp;
                                <a class="border-bottom" href="datenschutz.html">Datenschutz</a>
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Copyright End -->
            </div>
            <!-- Footer End -->
        `;

        /**
         * Injects the defined HTML string into the corresponding placeholder.
         * This function should be called when the document's structure is ready.
         */
        function loadCommonSections() {
            const headerContainer = document.getElementById('header-container');
            const footerContainer = document.getElementById('footer-container');

            if (headerContainer) {
                // Insert the Header HTML content into the placeholder div
                headerContainer.innerHTML = headerHtml;
                // --- NEW HIGHLIGHTING LOGIC START ---
                // 1. Get the current filename (e.g., "about.html")
                var path = window.location.pathname.split("/").pop();
                if (path === '') { path = 'index.html'; }

                // 2. Find the link in the newly injected header that matches the filename
                const navLinks = headerContainer.querySelectorAll('.nav-link');
                navLinks.forEach(link => {
                    // Remove any existing active classes first
                    link.classList.remove('active');
                    
                    // If the link's href matches our current page, add 'active'
                    if (link.getAttribute('href') === path) {
                        link.classList.add('active');
                    }
                });
                // --- NEW HIGHLIGHTING LOGIC END ---
            }

            if (footerContainer) {
                // Insert the Footer HTML content into the placeholder div
                footerContainer.innerHTML = footerHtml;
            }
        }