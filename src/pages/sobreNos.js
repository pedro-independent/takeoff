/****************************************************************************************
--------------------------------------- SOBRE NÓS ---------------------------------------
*****************************************************************************************/

import { initCommonCode } from '../global.js';
import Splide from '@splidejs/splide';
// import "@splidejs/splide/css";
import gsap from "gsap";

export function runSobreNos()
{

initCommonCode();


        // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
        $('.w-condition-invisible').remove()


        // ................................ SPLIDES ................................
        if($(window).outerWidth() < 992){ // MOBILE
            $('.desktop.splide__arrows').remove()
        }

        
// -------- TESTEMUNHOS --------

if ($('.test-holder.splide').length > 0) {
    // No changes needed here
    $('.test-item').removeClass('.is-active');

    if ($('.prog-bar-holder').length == 1) {
        gsap.set($('.test-prog'), { display: 'none' });
    } else {
        $('.test-prog-list').append($('.test-list .prog-bar-holder'));
    }

    var testSplide = new Splide('.test-holder.splide', {
        type: 'fade',
        autoWidth: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        resetProgress: false,
        arrows: false,
        autoplay: true,
        rewind: true,
        rewindSpeed: 1,
        speed: 500,
        interval: 12000,
        easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
        pagination: false,
    });

    $('.test-holder .prog-bar-scrub').each(function(idx, el) {
        el.scrubTL = gsap.timeline({
            paused: true,
        });
        el.scrubTL.set(el, {
            opacity: 1,
            width: '0%',
        });
        el.scrubTL.to(el, {
            width: '100%',
            duration: 12,
            ease: 'linear'
        });
    });

    testSplide.on(['mounted', 'active'], () => {
        let scrub = $('.test-holder .prog-bar-scrub');

        if (scrub.get(testSplide.index) !== undefined) {
            scrub.get(testSplide.index).scrubTL.restart();
            scrub.get(testSplide.index).scrubTL.play();
        }

        gsap.to(scrub.not(scrub.get(testSplide.index)), {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut'
        });
    });

    testSplide.mount();

    $('.test-holder .prog-bar-holder').on('click', function() {
        let idx = $(this).index();
        testSplide.go(idx);
    });
}



        // -------- POPUP --------
if ($('.h-hero-right').length != 0) {
    if ($('.h-hero-right .prog-bar-holder').length == 1) {
        gsap.set($('.h-hero-controls'), { display: 'none' });
    } else {
        $('.h-hero-prog').append($('.h-hero-popup .prog-bar-holder'));
    }

    var popSplide = new Splide('.h-hero-right.splide', {
        type: 'fade',
        autoWidth: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        resetProgress: false,
        autoplay: true,
        rewind: true,
        rewindSpeed: 1,
        speed: 1500,
        interval: 8000,
        easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
        pagination: false,
    });

    $('.h-hero-prog .prog-bar-scrub').each(function(idx, el) {
        el.scrubTL = gsap.timeline({
            paused: true,
        });
        el.scrubTL.set(el, {
            opacity: 1,
            width: '0%',
        });
        el.scrubTL.to(el, {
            width: '100%',
            duration: 8,
            ease: 'linear'
        });
    });

    popSplide.on(['mounted', 'active'], () => {
        let scrub = $('.h-hero-prog .prog-bar-scrub');

        if (scrub.get(popSplide.index) !== undefined) {
            scrub.get(popSplide.index).scrubTL.restart();
            scrub.get(popSplide.index).scrubTL.play();
        }

        gsap.to(scrub.not(scrub.get(popSplide.index)), {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut'
        });
    });

    popSplide.mount();

    $('.h-hero-prog .prog-bar-holder').on('click', function() {
        let idx = $(this).index();
        popSplide.go(idx);
    });
}

        


        // -------- GALLERY --------

if ($('.destinos .splide').length > 0) {
    var galSplide = new Splide('.destinos .splide', {
        type: 'loop',
        //type: 'slide',
        direction: 'ltr',
        autoWidth: true,
        // autoHeight: true,
        // heightRatio: 1,
        // drag: 'free',
        // flickPower: 150,
        focus: 'center',
        speed: 1000,
        // arrows: {
        //     prev: $('.onda-slide-btn.prev')[0],
        //     next: $('.onda-slide-btn.next')[0]
        // },
        pagination: false,
    });

    galSplide.on('ready', function() {
        setTimeout(() => {
            galSplide.go('+1');
            galSplide.go('-1');
        }, 250);
    });

    galSplide.mount();
}

$('.global-fixed *').remove()



}