
import gsap from "gsap";
// import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin.min.js";
// import { Flip } from "gsap/Flip";
// import { ScrollTrigger } from "gsap/src/all";
// import { TextPlugin } from "gsap/TextPlugin";
import Splide from '@splidejs/splide'
//import "@splidejs/splide/css";
//import "./styles/style.css";


/****************************************************************************************
------------------------------------------ HOME -----------------------------------------
*****************************************************************************************/



import { initCommonCode, colors } from './main.js';


initCommonCode();

//btnInit()


// pageClasses['Home'] = class Home extends Page {
//     async setup(){

        $('.nav-svg-wrap').addClass('prevent')
        $('.nav-svg-wrap').removeAttr('href')

        // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
        $('.w-condition-invisible').remove()


        // -------- DESTAQUE CARDS --------

        // tem que estar primeiro porque o off-card-loader está nos hero pop items
        $('[data-col="Home - Hero (Módulo Inicial)"] .off-card-loader').remove()
        $('[data-col="Home - Hero (Módulo Inicial)"] .h-hero-pop-item').each(function(idx, el){ // limitado a 3 destaques
            if(idx >= 3){
                $(el).remove()
            }
        })

        //Tiago 
        // $(this.container).find('.off-card-list').append($(this.container).find('.off-card'))
        // $(this.container).find('.off-card-loader').remove()
         $('.page-container').find('.off-card-list').append($('.page-container').find('.off-card'))
         $('.page-container').find('.off-card-loader').remove()

        $('[data-col="Home - Módulo Destaques"] .h-hero-pop-item').remove()



        


        // -------- HERO POPUP CARDS --------
        $('.page-container').find('.h-hero-popup').append( $('.page-container').find('.h-hero-pop-item'))

        // gsap.set($('.h-hero-pop-item').not($('.h-hero-pop-item').first()), {
        //     opacity: 0
        // })


        // gsap.set($('.h-hero-pop-item .h-hero-pop-heading'), {
        //     textDecoration: 'underline 1px'
        // })
        // gsap.set($('.h-hero-pop-item .h-hero-pop-heading'), {
        //     textDecorationColor: 'transparent'
        // })

        gsap.to($('.h-hero-pop-item').find('.h-hero-pop-img *'), {
            scale: 1.05
        })

        $('.h-hero-pop-item').hoverSet((el)=>{
            gsap.to($(el).find('.h-hero-pop-img *'), {
                scale: 1,
                duration: 1,
                ease: 'power2.inOut'
            })
            
            // gsap.to($(el).find('.h-hero-pop-heading'), {
            //     textDecorationColor: colors.white,
            //     duration: 1,
            //     ease: 'power2.inOut'
            // })
        }, (el)=>{
            gsap.to($(el).find('.h-hero-pop-img *'), {
                scale: 1.05,
                duration: 1,
                ease: 'power2.inOut'
            })
            
            // gsap.to($(el).find('.h-hero-pop-heading'), {
            //     textDecorationColor: 'transparent',
            //     duration: 1,
            //     ease: 'power2.inOut'
            // })
        })

        $('.h-hero-arr').hoverSet((el)=>{
            gsap.to($(el).find('.h-hero-arr-svg'), {
                color: colors.blue,
                duration: 0.3,
                ease: 'power2.inOut'
            })
    
        }, (el)=>{
            gsap.to($(el).find('.h-hero-arr-svg'), {
                color: ()=>{
                    return $(el).find('.h-hero-arr-svg').parent().css('color')
                },
                duration: 0.3,
                ease: 'power2.inOut'
            })
        })

        if($('.h-hero-right .splide__slide').length == 0) $('.h-hero-right').remove()




        // -------- SETUP OFFER CARDS --------
        $('.page-container').find([$('.page-container').find('.off-card')[0], $('.page-container').find('.off-card')[1]]).wrapAll('<div class="off-card-row"></div>')
        $('.page-container').find([$('.page-container').find('.off-card')[2], $('.page-container').find('.off-card')[3]]).wrapAll('<div class="off-card-row"></div>')
        $('.page-container').find([$('.page-container').find('.off-card')[0], $('.page-container').find('.off-card')[3]]).addClass('dest')

        $('.off-card-wrap').hoverSet((el)=>{
            gsap.to($(el).find('.off-card-bg'), {
                scale: 1,
                duration: 1,
                ease: 'power2.inOut'
            })
        }, (el)=>{
            gsap.to($(el).find('.off-card-bg'), {
                scale: 1.1,
                duration: 1,
                ease: 'power2.inOut'
            })
        })

        
        // -------- DESTINOS CARROSSEL --------
        $('.dest-item').hoverSet((el)=>{
            gsap.to($(el).find('.dest-card-bg'), {
                scale: 1,
                duration: 1,
                ease: 'power2.inOut'
            })
        }, (el)=>{
            gsap.to($(el).find('.dest-card-bg'), {
                scale: 1.1,
                duration: 1,
                ease: 'power2.inOut'
            })
        })

        // $('.dest-item').each(function(idx, el){
        //     gsap.to($(el).find('.dest-card-bg'), {
        //         y: "0%",
        //         ease: "linear",
        //         scrollTrigger:{
        //             trigger: $(el),
        //             start: "top bottom",
        //             end: "bottom top",
        //             markers: true,
        //             invalidateOnRefresh: true,
        //             scrub: true
        //         }
        //     })
        // })




        // -------- EXPERIÊNCIAS --------
        //$('.exp-img-item').not($('.exp-img-item').first()).addClass('inactive')

        gsap.set($('.exp-img-item').not($('.exp-img-item').first()), {
            width: '0%'
        })

        gsap.set($('.exp-desc').not($('.exp-desc').first()), {
            pointerEvents: 'none',
            opacity: 0
        })

        gsap.set($('.exp-thumb-item').not($('.exp-thumb-item').first()), {
            opacity: 0.4
        })



        $('.exp-img-item').first().addClass('active')
        $('.exp-desc').first().addClass('active')
        $('.exp-thumb-item').first().addClass('active')

        $('.exp-thumb-item').clickSet((el)=>{
            let idx = $('.exp-thumb-item').index($(el))
            let activeIdx = $('.exp-img-item').index($('.exp-img-item.active'))

            // $('.exp-img-item').addClass('inactive')
            // $($('.exp-img-item')[idx]).removeClass('inactive')

            if(idx > activeIdx){

                gsap.set($('.exp-img-item.active .cover-img'), {
                    right: 'auto',
                    left: '-15%'
                })
                gsap.to($('.exp-img-item.active'), {
                    width: '0%',
                    flexFlow: 'row',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                gsap.to($('.exp-img-item.active .cover-img'), {
                    left: '-50%',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
    

                gsap.set($('.exp-img-item .cover-img')[idx], {
                    left: 'auto',
                    right: '-50%'
                })
                gsap.to($('.exp-img-item')[idx], {
                    width: '100%',
                    flexFlow: 'row-reverse',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                gsap.to($('.exp-img-item .cover-img')[idx], {
                    right: '-15%',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })


            }
            else if(idx < activeIdx){
                
                gsap.set($('.exp-img-item.active .cover-img'), {
                    right: '-15%',
                    left: 'auto'
                })
                gsap.to($('.exp-img-item.active'), {
                    width: '0%',
                    flexFlow: 'row-reverse',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                gsap.to($('.exp-img-item.active .cover-img'), {
                    right: '-50%',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })


                gsap.set($('.exp-img-item .cover-img')[idx], {
                    left: '-50%',
                    right: 'auto'
                })
                gsap.to($('.exp-img-item')[idx], {
                    width: '100%',
                    flexFlow: 'row',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                gsap.to($('.exp-img-item .cover-img')[idx], {
                    left: '-15%',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
            }

            if(idx != activeIdx){
                gsap.to($('.exp-desc.active'), {
                    opacity: 0,
                    pointerEvents: 'none',
                    duration: 0.375,
                    ease: 'power3.inOut'
                })
                gsap.to($('.exp-desc')[idx], {
                    opacity: 1,
                    pointerEvents: 'auto',
                    duration: 0.375,
                    delay: 0.375,
                    ease: 'power3.inOut'
                })
    
                gsap.to($('.exp-thumb-item.active'), {
                    opacity: 0.4,
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                gsap.to($('.exp-thumb-item')[idx], {
                    opacity: 1,
                    duration: 0.75,
                    ease: 'power3.inOut'
                })

            }



            $('.exp-img-item.active').removeClass('active')
            $('.exp-desc.active').removeClass('active')
            $('.exp-thumb-item.active').removeClass('active')

            $($('.exp-img-item')[idx]).addClass('active')
            $($('.exp-desc')[idx]).addClass('active')
            $($('.exp-thumb-item')[idx]).addClass('active')

        })

        $('.exp-thumb-item').hoverSet((el)=>{
            if(!$(el).hasClass('active')){
                gsap.to($(el), {
                    opacity: 0.8,
                    duration: 0.35,
                    ease: 'power3.inOut'
                })
            }
        }, (el)=>{
            if(!$(el).hasClass('active')){
                gsap.to($(el), {
                    opacity: 0.4,
                    duration: 0.35,
                    ease: 'power3.inOut'
                })
            }
        })



        // -------- TESTEMUNHOS --------
         if($('.page-container').find('.test-item').length == 0){
            $('.testemunhos').remove()
        }


    // }

    // async render(){
        // ................................ SPLIDES ................................
        if($(window).outerWidth() < 992){ // MOBILE
            $('.desktop.splide__arrows').remove()
        }


        // -------- EXPERIENCIAS --------
        var expSplide = new Splide($('.page-container').find('.exp-bottom.splide').first().get(0), {
            type: 'slide',
            direction: 'ltr',

            autoWidth: true,

            // autoHeight: true,
            // heightRatio: 1,

            drag: 'free',
            flickPower: 150,

            arrows: false,
            speed: 1000,

            // arrows: {
            //     prev: $('.onda-slide-btn.prev')[0],
            //     next: $('.onda-slide-btn.next')[0]
            // },
            pagination: false,
        } );
        expSplide.mount()

        // -------- TESTEMUNHOS --------
        if($('.test-holder.splide').length > 0){
            $('.test-item').removeClass('.is-active')

            if($('.prog-bar-holder').length == 1){
                gsap.set($('.test-prog'), {display: 'none'})
            }
            else{
                $('.test-prog-list').append($('.test-list .prog-bar-holder'))
            }


            var testSplide = new Splide($('.page-container').find('.test-holder.splide').first().get(0), {
                type: 'fade',
    
                autoWidth: true,
    
                // autoHeight: true,
                // heightRatio: 1
    
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
            } );
    
            $('.page-container').find('.test-holder').find('.prog-bar-scrub').each(function(idx, el){
                el.scrubTL = gsap.timeline({
                    paused: true,
                })
                el.scrubTL.set(el, {
                    opacity: 1,
                    width: '0%',
                })
                el.scrubTL.to(el, {
                    width: '100%',
                    duration: 12,
                    ease: 'linear'
                })
            })
    
            testSplide.on(['mounted', 'active'],()=>{
                let scrub = $('.page-container').find('.test-holder').find('.prog-bar-scrub')
    
                if(scrub.get(testSplide.index) !== undefined){
                    scrub.get(testSplide.index).scrubTL.restart()
                    scrub.get(testSplide.index).scrubTL.play()
                }
                
                gsap.to(scrub.not(scrub.get(testSplide.index)), {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.inOut'
                })
            })
    
            testSplide.mount()
    
            $('.page-container').find('.test-holder').find('.prog-bar-holder').clickSet(function(el){
                let idx = $(el).index()
                testSplide.go(idx)
            })
        }


        // -------- POPUP --------
        if($('.h-hero-right').length != 0){
        if($('.h-hero-right .prog-bar-holder').length == 1){
            gsap.set($('.h-hero-controls'), {display: 'none'})
        }
        else{
            $('.h-hero-prog').append($('.h-hero-popup .prog-bar-holder'))
        }
        var popSplide = new Splide($('.page-container').find('.h-hero-right.splide').first().get(0), {
            type: 'fade',

            autoWidth: true,

            // autoHeight: true,
            // heightRatio: 1

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
        } );

        $('.page-container').find('.h-hero-prog').find('.prog-bar-scrub').each(function(idx, el){
            el.scrubTL = gsap.timeline({
                paused: true,
            })
            el.scrubTL.set(el, {
                opacity: 1,
                width: '0%',
            })
            el.scrubTL.to(el, {
                width: '100%',
                duration: 8,
                ease: 'linear'
            })
        })

        popSplide.on(['mounted', 'active'],()=>{
            let scrub = $('.page-container').find('.h-hero-prog').find('.prog-bar-scrub')

            if(scrub.get(popSplide.index) !== undefined){
                scrub.get(popSplide.index).scrubTL.restart()
                scrub.get(popSplide.index).scrubTL.play()
            }
            
            gsap.to(scrub.not(scrub.get(popSplide.index)), {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut'
            })
        })

        popSplide.mount()

        $('.page-container').find('.h-hero-prog').find('.prog-bar-holder').clickSet(function(el){
            let idx = $(el).index()
            popSplide.go(idx)
        })

        }
        


        // -------- GALLERY --------
        var galSplide = new Splide($('.page-container').find('.destinos .splide').first().get(0), {
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
        } );

       

        galSplide.on( 'ready', function () {
            setTimeout(()=>{
                galSplide.go('+1')
                galSplide.go('-1')
            }, 250)
        } );
        galSplide.mount()



        // -------- INSTA --------
        var instaSplide = new Splide($('.page-container').find('.instagram .splide').first().get(0), {
            type: 'loop',
            direction: 'ltr',

            autoWidth: true,

            // autoHeight: true,
            // heightRatio: 1,

            drag: 'free',
            flickPower: 150,

            arrows: false,

            // arrows: {
            //     prev: $('.onda-slide-btn.prev')[0],
            //     next: $('.onda-slide-btn.next')[0]
            // },
            pagination: false,
        } );

        instaSplide.on( 'ready', function () {
            setTimeout(()=>{
                instaSplide.go('+1')
                instaSplide.go('-1')
            }, 250)
        } );
        instaSplide.mount()





    //  }

    // async intro(){
    //     // $('.loader').remove()
    // }

//     async leave(){
//         $('.nav-svg-wrap').removeClass('prevent')
//         $('.nav-svg-wrap').attr('href', '/')
//         $('.global-fixed *').remove()
//         return
//     }
// }

