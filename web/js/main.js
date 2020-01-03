(function($) {

    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1199px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1200px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
})(jQuery);
window.onload = function() {

    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        $('body').addClass('internet-explorer');
    } else {
        return;
    }
};
(function($) {

    function linkHighlight(linkClass) {

        /* highlight active menu item*/
        $(linkClass).each(function (index) {
            if (this.href.trim() == window.location)
                $(this).addClass('link_active');
        });
    }

    linkHighlight('.nav__link');

})(jQuery);
(function($) {

    function smoothScroll(link) {

        $(link).click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 600);
                    return false;
                }
            }
        });
    }

    smoothScroll( '#link-to-block' );

})(jQuery);
$(document).ready(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.accordion__btn');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        $next.slideToggle(150);
        $this.parent().toggleClass('accordion__item_open');

        // collapse other accordions
        if (!e.data.multiple) {
            $el.find('.accordion__content').not($next).slideUp().parent().removeClass('accordion__item_open');
        };
    };

    var accordion = new Accordion($('.accordion'), false);

});
(function($) {
    var hamburger = $('.hamburger');
    var body = $('body');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('body').addClass('stopped');
        $('.menu').addClass('menu-mobile_opened');
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('body').removeClass('stopped');
        $('.menu').removeClass('menu-mobile_opened');
    }

    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose()
        } else {
            hamburgerOpen();
        }
    });

    $('.menu-mobile__close').on('click', function () {
        body.addClass('menu-mobile_closed');
    });
})(jQuery);
$(document).ready(function() {

    $('#main_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        arrows: false,
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    $('#main_slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.p-slide-number').text(indexSlide);
        });

    $('.news_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1500,
        arrows: true,
        dots: false,
        autoplay: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow: $('#bp'),
        nextArrow: $('#bn'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
$(document).ready(function() {
    $('#filters_open').on('click', function () {
        $('.filter_list__box').addClass('filters_open');
    });
    $('#filters_close').on('click', function () {
        $('.filter_list__box').removeClass('filters_open');
    });
});
(function($) {

    $('.tabs').each( function() {

        $('.tabs__buttons').on('click', '.tabs__btn:not(.tabs__btn_active)', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $(this).closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
})(jQuery);
$(document).ready(function() {
    $(".fancybox").fancybox();
});

// Fires whenever a player has finished loading
function onPlayerReady(event) {
    event.target.playVideo();
}

// Fires when the player's state changes.
function onPlayerStateChange(event) {
    // Go to the next video after the current one is finished playing
    if (event.data === 0) {
        $.fancybox.next();
    }
}


// The API will call this function when the page has finished downloading the JavaScript for the player API
function onYouTubePlayerAPIReady() {

    // Initialise the fancyBox after the DOM is loaded
    $(document).ready(function() {
        $(".fancybox-video")
            .attr('rel', 'gallery')
            .fancybox({
                openEffect  : 'none',
                closeEffect : 'none',
                nextEffect  : 'none',
                prevEffect  : 'none',
                padding     : 0,
                margin      : 50,
                beforeShow  : function() {
                    // Find the iframe ID
                    var id = $.fancybox.inner.find('iframe').attr('id');

                    // Create video player object and add event listeners
                    var player = new YT.Player(id, {
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
            });
    });

}
$(document).ready(function() {
    var sliderFilter = $('.range-slider_filter');
    var sliderMin = $('.range-slider__text_min');
    var sliderMax = $('.range-slider__text_max');

    $(sliderFilter).slider({
        range: true,
        min: 6500,
        max: 32000,
        values: [6500, 32000],
        slide: function (event, ui) {
            $(sliderMin).text(ui.values[0]);
            $(sliderMax).text(ui.values[1]);
        }
    });

});