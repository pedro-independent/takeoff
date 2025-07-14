/****************************************************************************************
--------------------------------------- SOBRE NÓS ---------------------------------------
*****************************************************************************************/

import { initCommonCode } from './main.js';
import Splide from '@splidejs/splide';
// import "@splidejs/splide/css";
import gsap from "gsap";

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





//OLD CODE

// /****************************************************************************************
// --------------------------------------- SOBRE NÓS ---------------------------------------
// *****************************************************************************************/

// pageClasses['About'] = class About extends Page {
//     async setup(){
//         // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
//         $('.w-condition-invisible').remove()


//     }

//     async render(){
//         // ................................ SPLIDES ................................
//         if($(window).outerWidth() < 992){ // MOBILE
//             $('.desktop.splide__arrows').remove()
//         }

        
//         // -------- TESTEMUNHOS --------
//          // -------- TESTEMUNHOS --------
//         if($('.test-holder.splide').length > 0){
//             $('.test-item').removeClass('.is-active')

//             if($('.prog-bar-holder').length == 1){
//                 gsap.set($('.test-prog'), {display: 'none'})
//             }
//             else{
//                 $('.test-prog-list').append($('.test-list .prog-bar-holder'))
//             }


//             var testSplide = new Splide($(this.container).find('.test-holder.splide').first().get(0), {
//                 type: 'fade',
    
//                 autoWidth: true,
    
//                 // autoHeight: true,
//                 // heightRatio: 1
    
//                 pauseOnFocus: false,
//                 pauseOnHover: false,
//                 resetProgress: false,
    
//                 arrows: false,
    
//                 autoplay: true,
//                 rewind: true,
//                 rewindSpeed: 1,
//                 speed: 500,
//                 interval: 12000,
//                 easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
    
//                 pagination: false,
//             } );
    
//             $(this.container).find('.test-holder').find('.prog-bar-scrub').each(function(idx, el){
//                 el.scrubTL = gsap.timeline({
//                     paused: true,
//                 })
//                 el.scrubTL.set(el, {
//                     opacity: 1,
//                     width: '0%',
//                 })
//                 el.scrubTL.to(el, {
//                     width: '100%',
//                     duration: 12,
//                     ease: 'linear'
//                 })
//             })
    
//             testSplide.on(['mounted', 'active'],()=>{
//                 let scrub = $(this.container).find('.test-holder').find('.prog-bar-scrub')
    
//                 if(scrub.get(testSplide.index) !== undefined){
//                     scrub.get(testSplide.index).scrubTL.restart()
//                     scrub.get(testSplide.index).scrubTL.play()
//                 }
                
//                 gsap.to(scrub.not(scrub.get(testSplide.index)), {
//                     opacity: 0,
//                     duration: 0.5,
//                     ease: 'power2.inOut'
//                 })
//             })
    
//             testSplide.mount()
    
//             $(this.container).find('.test-holder').find('.prog-bar-holder').clickSet(function(el){
//                 let idx = $(el).index()
//                 testSplide.go(idx)
//             })
//         }


//         // -------- POPUP --------
//         if($('.h-hero-right').length != 0){
//         if($('.h-hero-right .prog-bar-holder').length == 1){
//             gsap.set($('.h-hero-controls'), {display: 'none'})
//         }
//         else{
//             $('.h-hero-prog').append($('.h-hero-popup .prog-bar-holder'))
//         }
//         var popSplide = new Splide($(this.container).find('.h-hero-right.splide').first().get(0), {
//             type: 'fade',

//             autoWidth: true,

//             // autoHeight: true,
//             // heightRatio: 1

//             pauseOnFocus: false,
//             pauseOnHover: false,
//             resetProgress: false,

//             autoplay: true,
//             rewind: true,
//             rewindSpeed: 1,
//             speed: 1500,
//             interval: 8000,
//             easing: 'cubic-bezier(0.65, 0, 0.35, 1)',

//             pagination: false,
//         } );

//         $(this.container).find('.h-hero-prog').find('.prog-bar-scrub').each(function(idx, el){
//             el.scrubTL = gsap.timeline({
//                 paused: true,
//             })
//             el.scrubTL.set(el, {
//                 opacity: 1,
//                 width: '0%',
//             })
//             el.scrubTL.to(el, {
//                 width: '100%',
//                 duration: 8,
//                 ease: 'linear'
//             })
//         })

//         popSplide.on(['mounted', 'active'],()=>{
//             let scrub = $(this.container).find('.h-hero-prog').find('.prog-bar-scrub')

//             if(scrub.get(popSplide.index) !== undefined){
//                 scrub.get(popSplide.index).scrubTL.restart()
//                 scrub.get(popSplide.index).scrubTL.play()
//             }
            
//             gsap.to(scrub.not(scrub.get(popSplide.index)), {
//                 opacity: 0,
//                 duration: 0.5,
//                 ease: 'power2.inOut'
//             })
//         })

//         popSplide.mount()

//         $(this.container).find('.h-hero-prog').find('.prog-bar-holder').clickSet(function(el){
//             let idx = $(el).index()
//             popSplide.go(idx)
//         })

//         }
        


//         // -------- GALLERY --------
//         var galSplide = new Splide($(this.container).find('.destinos .splide').first().get(0), {
//             type: 'loop',
//             //type: 'slide',
//             direction: 'ltr',

//             autoWidth: true,

//             // autoHeight: true,
//             // heightRatio: 1,

//             // drag: 'free',
//             // flickPower: 150,

//             focus: 'center',

//             speed: 1000,

//             // arrows: {
//             //     prev: $('.onda-slide-btn.prev')[0],
//             //     next: $('.onda-slide-btn.next')[0]
//             // },
//             pagination: false,
//         } );

//         galSplide.on( 'ready', function () {
//             setTimeout(()=>{
//                 galSplide.go('+1')
//                 galSplide.go('-1')
//             }, 250)
//         } );
//         galSplide.mount()


//         // ................................ VIDEOS ................................

//             removePageLoadVideos();

//     //     if(Webflow.env('editor') == undefined){
//     //         $(this.container).find('.onda-video').each(function(idx, el){
//     //             // const controls = ['play', 'play-large', 'progress', 'current-time', 'fullscreen'];
//     //             let iframe = $(this).find('iframe')
    
//     //             let vidBaseSrc = iframe.attr('data-base-src')
//     //             let vidParams = iframe.attr('data-params')
//     // vidParams = vidParams + '&quality=240p';
//     //             let vidSrc = iframe.attr('data-src')
    
//     //             if(vidSrc != undefined){
//     //                 let vidCode = vidSrc.split('https://vimeo.com/')[1]
        
//     //                 iframe.attr('src', vidBaseSrc+vidCode+vidParams)
        
//     //                 let player = new Plyr($(this).find('.plyr__video-embed'), {
//     //                     autoplay: true,
//     //                     autopause: false,
//     //                     muted: true,
//     //                     //youtube: {noCookie: true}
//     //                 })
        
//     //                 this.player = player
//     //     player.config.quality.default=240;
//     //                 player.once('ready', ()=>{
//     //                     player.restart()
//     //                     player.play()
        
//     //                     player.muted = true
//     //                 })
                    
//     //                 player.once('playing', ()=>{
        
//     //                     player.restart()
//     //                     player.play()
        
//     //                     player.muted = true
        
                        
//     //                     gsap.to($(el),{
//     //                         opacity: 1,
//     //                         duration: 0.75,
//     //                         ease: 'power2.inOut'
//     //                     })
//     //                     gsap.to($(el).parent().find('.contain-img, .cover-img'),{
//     //                         opacity: 0,
//     //                         duration: 0.75,
//     //                         ease: 'power2.inOut'
//     //                     })
//     //                     $(el).find('.plyr__controls, .plyr__control').remove()
//     //                 })
//     //             }
    
    
//     //         })
//     //     }
//     }

//     async intro(){
//         //$('.loader').remove()
//     }

//     async leave(){
//         $('.global-fixed *').remove()
//         navDark = false
//         return
//     }
// }


