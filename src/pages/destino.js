import gsap from "gsap";
//import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin.min.js";
//import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/src/all";
//import { TextPlugin } from "gsap/TextPlugin";
import Splide from '@splidejs/splide'

/****************************************************************************************
---------------------------------------- DESTINO ---------------------------------------
*****************************************************************************************/

import { initCommonCode, createAnchor, colors} from '../global.js';



export function runDestino()
{

initCommonCode();

        // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
        $('.w-condition-invisible').remove()




        // -------- SETUP OFERTA LINKS --------
        let page = window.location.pathname.split('/')[2]
        if($('.big-btn.oferta').length > 0){
            let href = $('.big-btn.oferta').attr('href')
            $('.big-btn.oferta').attr('href', href + '?destino=' + page)
        }

        $('.fac-card').each(function(idx, el){
            let href = $(el).attr('href')
            let slug = $(el).attr('data-slug')
            $(el).attr('href', href + '?destino=' + page + '&surf-trip=' + slug)
        })




         // -------- POPUP GALLERY --------
         $('.global-fixed').append($('.page-container').find('.det-popup-gal'))

         $('.det-popup-gal .det-popup-close').clickSet((el)=>{
             gsap.to($('.det-popup-gal'), {
                 opacity: 0,
                 duration: 0.5,
                 ease: 'power2.inOut',
                 onComplete: ()=>{
                     gsap.set($('.det-popup-gal'), {display: 'none', opacity: 0})        
                 }
             })
         })
         $('.det-popup-close').hoverSet((el)=>{
             gsap.to($(el).find('.path-fill'), {
                 drawSVG: '100% 0%',
                 duration: 0.3,
                 ease: 'power2.inOut'
             })
     
             gsap.to($(el), {
                 color: colors.blue,
                 duration: 0.3,
                 ease: 'power2.inOut'
             })
     
         }, (el)=>{
             gsap.to($(el).find('.path-fill'), {
                 drawSVG: '0% 0%',
                 duration: 0.3,
                 ease: 'power2.inOut'
             })
             
     
             gsap.to($(el), {
                 color: ()=>{
                     return $(el).parent().css('color')
                 },
                 duration: 0.3,
                 ease: 'power2.inOut'
             })
         })



        // -------- ANCORAS --------
        gsap.set($('.ancora-sel'), {
            opacity: 0
        })

        gsap.set($('.ancoras-fixed'), {
            y: '100%'
        })

        $('.global-fixed').append($('.page-container').find('.ancoras-fixed'))

        if(Webflow.env('editor') != undefined){
            let st = setInterval(()=>{
                gsap.set($('.ancoras-fixed'), {
                    paddingBottom: '5em'
                })
                $('.ancoras-fixed a, .ancoras-wrap a').removeAttr('href')
            }, 5000)
        }

        // ScrollTrigger.create({
        //     trigger: $('.ancoras'),
        //     start: 'bottom top',
        //     end: 'bottom top',
        //     onEnter: ()=>{
        //         gsap.to($('.ancoras-fixed'), {
        //             y: '0%',
        //             duration: 0.5,
        //             ease: 'power2.inOut'
        //         })
        //     },
        //     onLeaveBack: ()=>{
        //         gsap.to($('.ancoras-fixed'), {
        //             y: '100%',
        //             duration: 0.5,
        //             ease: 'power2.inOut'
        //         })
        //     }
        // }) 

        let tweening = 0
        let barLocked = true

        $(window).scroll(function() {
            if(tweening == 0 && barLocked == false){
                gsap.to($('.ancoras-fixed'), {
                    y: '0%',
                    duration: 0.5,
                    ease: 'power2.inOut'
                })
                tweening = 1
            }

            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function() {
                gsap.to($('.ancoras-fixed'), {
                    y: '100%',
                    duration: 0.5,
                    ease: 'power2.inOut'
                })
                tweening = 0
            }, 1500));
        });
        ScrollTrigger.create({
            trigger: $('.ancoras-wrap'),
            start: 'bottom top',
            end: 'bottom top',
            onEnter: ()=>{
                barLocked = false
            },
            onEnterBack: ()=>{
                barLocked = true
                gsap.to($('.ancoras-fixed'), {
                    y: '100%',
                    duration: 0.5,
                    ease: 'power2.inOut',
                    onComplete: ()=>{
                        tweening = 0
                    }
                })
            }
        })
        ScrollTrigger.create({
            trigger: $('.footer'),
            start: 'top bottom',
            end: 'top bottom',
            onEnter: ()=>{
                barLocked = true
                gsap.to($('.ancoras-fixed'), {
                    y: '100%',
                    duration: 0.5,
                    ease: 'power2.inOut',
                    onComplete: ()=>{
                        tweening = 0
                    }
                })
            },
            onEnterBack: ()=>{
                barLocked = false
            }
        })

        $('.ancora-btn-wrap').hoverSet((el)=>{
            gsap.to($(el), {
                color: colors.blue,
                duration: 0.3,
                ease: 'power2.inOut'
            })
        },(el)=>{
            gsap.to($(el), {
                color: colors.black,
                duration: 0.3,
                ease: 'power2.inOut'
            })
        })

        createAnchor('#overview', '#overview-btn')
        createAnchor('#em-destaque', '#em-destaque-btn', '#overview-btn')
        createAnchor('#galeria', '#galeria-btn', '#em-destaque-btn')
        createAnchor('#ondas', '#ondas-btn', '#galeria-btn')
        createAnchor('#epoca-do-ano', '#epocas-btn', '#ondas-btn')
        createAnchor('#dicas', '#dicas-btn', '#epocas-btn')
        createAnchor('#atracoes', '#atracoes-btn', '#dicas-btn')
        createAnchor('#surf-trips', '#surf-trips-btn', '#atracoes-btn')
        createAnchor('#testemunhos', '#testemunhos-btn', '#surf-trips-btn')
        createAnchor('#faqs', '#faqs-btn', '#testemunhos-btn')
        createAnchor('#localizacao', '#localizacao-btn', '#faqs-btn')
        
        // ScrollTrigger.create({
        //     trigger: $('.footer'),
        //     start: 'top bottom',
        //     end: 'top bottom',
        //     onEnter: ()=>{
        //         gsap.to($('.ancoras-fixed'), {
        //             y: '100%',
        //             duration: 0.5,
        //             ease: 'power2.inOut'
        //         })
        //     },
        //     onLeaveBack: ()=>{
        //         gsap.to($('.ancoras-fixed'), {
        //             y: '0%',
        //             duration: 0.5,
        //             ease: 'power2.inOut'
        //         })
        //     }
        // }) 




        //Tiago: este codigo tem barba, preocupante. Remover ou adaptar
        // if(barba.history.previous != null){
        //     $('.ancoras-back').hoverSet((el)=>{
        //         gsap.to($(el).find('.path-fill'), {
        //             drawSVG: '100% 0%',
        //             duration: 0.3,
        //             ease: 'power2.inOut'
        //         })
        
        //         gsap.to($(el), {
        //             color: colors.blue,
        //             duration: 0.3,
        //             ease: 'power2.inOut'
        //         })
        
        //     }, (el)=>{
        //         gsap.to($(el).find('.path-fill'), {
        //             drawSVG: '0% 0%',
        //             duration: 0.3,
        //             ease: 'power2.inOut'
        //         })
                
        
        //         gsap.to($(el), {
        //             color: ()=>{
        //                 return $(el).parent().css('color')
        //             },
        //             duration: 0.3,
        //             ease: 'power2.inOut'
        //         })
        //     })
        //     $('.ancoras-back').clickSet((el)=>{
        //         barba.go(barba.history.previous.url)
        //     })
        // }
        // else{
        //     $('.ancoras-back').remove()
        // }
       
        if($('.ancoras-fixed-wrap *').length == 0){
            $('.ancoras-fixed-cont').remove()
        }

        $('.anc-burg').clickSet((el)=>{
            if(!$(el).hasClass('open')){
            
                $(el).addClass('open')
    
                gsap.to($('.ancoras-fixed-expand'), {
                    width: 'auto',
                    height: 'auto',
                    duration: 0.5,
                    ease: 'power3.inOut'
                })

            }
            else{
                $(el).removeClass('open')
    
                gsap.to($('.ancoras-fixed-expand'), {
                    width: 0,
                    height: 0,
                    duration: 0.5,
                    ease: 'power3.inOut'
                })

            }
        })





        //Tiago: this.container vai funcionar? Acho que não
        // -------- SETUP OFFER CARDS --------
        $([$('.page-container').find('.off-card')[0], $('.page-container').find('.off-card')[1]]).wrapAll('<div class="off-card-row"></div>')
        $([$('.page-container').find('.off-card')[2], $('.page-container').find('.off-card')[3]]).wrapAll('<div class="off-card-row"></div>')
        $([$('.page-container').find('.off-card')[0], $('.page-container').find('.off-card')[3]]).addClass('dest')
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
       


        gsap.set($('.od-zona').not($('.od-zona').first()), {
            opacity: 0.6
        })

        $('.page-container').find('.od-zona').first().addClass('active')

        gsap.set($('.blue-card').not(`[data-card-zone="${$('.page-container').find('.od-zona').first().attr('data-slug')}"]`), {
            display: 'none'
        })
        $('.blue-card').not(`[data-card-zone="${$('.page-container').find('.od-zona').first().attr('data-slug')}"]`).removeClass('splide__slide')


        $('.od-zona').clickSet(function(el){
            let idx = $(el).index()

            let activeZone = $('.od-zona.active')
            let newActiveZone = $($('.od-zona').get(idx))

            if(idx != activeZone.index()){

                gsap.to($('.od-zona').not(newActiveZone), {
                    opacity: 0.6,
                    duration: 0.5,
                    ease: 'power3.out',
                })
                gsap.to(newActiveZone, {
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power3.out',
                })
                activeZone.removeClass('active')
                newActiveZone.addClass('active')

            }
        })




        $('.page-container').find('.acc-content-item').first().addClass('active')
        $('.page-container').find('.acc-list-item').first().addClass('active')

        gsap.set($('.acc-gal-item').not(`[data-name="${$('.page-container').find('.acc-list-item').first().attr('data-name')}"]`), {
            display: 'none'
        })
        $('.acc-gal-item').not(`[data-name="${$('.page-container').find('.acc-list-item').first().attr('data-name')}"]`).removeClass('splide__slide')

        gsap.set($('.acc-content-item').not($('.active')), {
            opacity: 0,
            pointerEvents: 'none'
        })
        gsap.set($('.acc-list-item').not($('.active')), {
            color: '#DFE8EA'
        })

        gsap.to($('.acc-right'), {
            height: ()=>{
                return $('.acc-content-item').first().outerHeight()
            },
            duration: 1,
            ease: 'power2.inOut'
        })


        $('.acc-list-item').clickSet(function(el){
            let idx = $(el).index()
            let activeContent = $('.acc-content-item.active')
            let newActiveContent = $($('.acc-content-item').get(idx))

            let activeList = $('.acc-list-item.active')
            let newActiveList = $($('.acc-list-item').get(idx))

            if(idx != activeContent.index()){
                gsap.to($('.acc-right'), {
                    height: ()=>{
                        return newActiveContent.outerHeight()
                    },
                    duration: 0.75,
                    ease: 'power2.inOut'
                })

                gsap.to(activeContent, {
                    opacity: 0,
                    pointerEvents: 'none',
                    duration: 0.3,
                    ease: 'power3.inOut'
                })
                activeContent.removeClass('active')

                gsap.to(newActiveContent, {
                    opacity: 1,
                    pointerEvents: 'auto',
                    duration: 0.3,
                    delay: 0.4,
                    ease: 'power3.inOut'
                })
                newActiveContent.addClass('active')

                gsap.to($('.acc-list-item').not(newActiveList), {
                    color: '#DFE8EA',
                    duration: 0.5,
                    ease: 'power3.out',
                })
                gsap.to(newActiveList, {
                    color: '#009ABF',
                    duration: 0.5,
                    ease: 'power3.out',
                })
                activeList.removeClass('active')
                newActiveList.addClass('active')
                
            }
        })
        $('.acc-list-item').hoverSet((el)=>{
            if(!$(el).hasClass('active')){
                gsap.to($(el), {
                    color: '#93C9D5'
                })
            }
        }, (el)=>{
            if(!$(el).hasClass('active')){
                gsap.to($(el), {
                    color: '#DFE8EA'
                })
            }
        })


        // -------- FAQS --------     
        $('.prog-row').clickSet(
            function(elem){
                if(!$(elem).hasClass('open')){
        
                    $(elem).addClass('open')

                    gsap.to($(elem).find('.prog-row-expand'), {
                        height: 'auto',
                        duration: 0.5,
                        ease: 'power3.inOut'
                    })

                    gsap.to($(elem).find('.prog-row-svg'), {
                        rotate: 180,
                        duration: 0.5,
                        ease: 'power3.inOut'
                    })

                    $('.prog-row.open').not(elem).each(function(idx, el){
                        $(el).removeClass('open')
        
                        gsap.to($(el).find('.prog-row-expand'), {
                            height: 0,
                            duration: 0.5,
                            ease: 'power3.inOut'
                        })
                        gsap.to($(el).find('.prog-row-svg'), {
                            rotate: 0,
                            duration: 0.5,
                            ease: 'power3.inOut'
                        })
                    })
            
                }
                else{
                    $(elem).removeClass('open')
        
                    gsap.to($(elem).find('.prog-row-expand'), {
                        height: 0,
                        duration: 0.5,
                        ease: 'power3.inOut'
                    })
                    gsap.to($(elem).find('.prog-row-svg'), {
                        rotate: 0,
                        duration: 0.5,
                        ease: 'power3.inOut'
                    })
                }
            }
        )

        $('.prog-row').hoverSet((el)=>{
            gsap.to($(el).find('.prog-row-title, .prog-row-svg'), {
                color: colors.blue,
                duration: 0.35,
                ease: 'power2.inOut'
            })
        }, (el)=>{
            gsap.to($(el).find('.prog-row-title, .prog-row-svg'), {
                color: colors.black,
                duration: 0.35,
                ease: 'power2.inOut'
            })
        })

        // -------- TESTEMUNHOS --------
        if($('.page-container').find('.test-item').length == 0){
            $('.testemunhos').remove()
            $('.ancoras-fixed-wrap #testemunhos-btn').remove()
            $('.ancoras-wrap #testemunhos-btn').remove()
        }



        // ................................ MAP ................................

        let st = setInterval(()=>{
            let clone = $('.loc-loader .loc-pin-wrap-radar').clone()
            $('.loc-pin-code .loc-pin-holder').append(clone)
            gsap.to(clone, {
                scale: 100,
                opacity: 0,
                duration: 6,
                ease: 'power3.inOut',
                onComplete: ()=>{
                    clone.remove()
                }
            })

            if(clone.length == 0){
                clearInterval(st)
            }
        }, 1500)
    

    // async render(){



        // ................................ SPLIDES ................................
        if($(window).outerWidth() < 992){ // MOBILE
            $('.desktop.splide__arrows').remove()
        }

        // -------- POPUP GALLERY --------
        if($('.global-fixed').find('.det-popup-gal').first().length > 0){

            let galSplide = new Splide($('.global-fixed').find('.det-popup-content.splide').first().get(0), {
                type: 'fade',
                direction: 'ltr',
    
                autoWidth: true,
    
                // autoHeight: true,
                // heightRatio: 1,
    
                // drag: 'free',
                flickPower: 150,
    
                arrows: true,
                speed: 1000,
    
                // arrows: {
                //     prev: $('.onda-slide-btn.prev')[0],
                //     next: $('.onda-slide-btn.next')[0]
                // },
                pagination: false,
    
            } );



            let thumbSplide = new Splide($('.global-fixed').find('.det-popup-thumb-slide.splide').first().get(0), {
                type: 'slide',
                direction: 'ltr',
    
                autoWidth: true,
    
                // autoHeight: true,
                // heightRatio: 1,
    
                //drag: 'free',
                flickPower: 150,
    
                arrows: false,
                speed: 250,
    
                // arrows: {
                //     prev: $('.onda-slide-btn.prev')[0],
                //     next: $('.onda-slide-btn.next')[0]
                // },
                pagination: false,
    
            } );

            thumbSplide.sync(galSplide)

            galSplide.mount()
            $('.det-popup-content.splide').get(0).splide = galSplide

            thumbSplide.mount()
            $('.det-popup-thumb-slide.splide').get(0).splide = thumbSplide
        }

        // -------- TESTEMUNHOS --------
        if($('.test-holder.splide').length > 0){
            $('.test-item').removeClass('.is-active')
            if($('.prog-bar-holder').length == 1) gsap.set($('.test-prog'), {display: 'none'})
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

        // -------- GALLERY --------
        if($('.page-container').find('.onda-gal-item.splide').first().length > 0){

            var galSplide = new Splide($('.page-container').find('.onda-gal-item.splide').first().get(0), {
                type: 'loop',
                direction: 'ltr',
    
                autoWidth: true,
    
                // autoHeight: true,
                // heightRatio: 1,
    
                drag: 'free',
                // rewind: 'true',
                // flickPower: 150,
    
                arrows: true,
                speed: 1000,
    
                focus: 'center',
    
                // arrows: {
                //     prev: $('.onda-slide-btn.prev')[0],
                //     next: $('.onda-slide-btn.next')[0]
                // },
                pagination: false,
            } );
    
            galSplide.on( 'ready', function () {
                setTimeout(()=>{
                    galSplide.go('+1')
    
                    setTimeout(()=>{
                        let activeHeading = $('.onda-card.is-active.is-visible').not('.is-next, .is-prev').find('.onda-heading')
                        
                        gsap.to(activeHeading, {
                            opacity: 1,
                            duration: 0.35,
                            ease: 'power2.inOut'
                        })
                    }, 500)
                }, 250)
                
            } );
    
            gsap.set($('.onda-heading'), {
                opacity: 0
            })
    
            galSplide.on('move', function(){
                let otherHeading = $('.onda-heading')
                gsap.to(otherHeading, {
                    opacity: 0,
                    duration: 0.35,
                    ease: 'power2.inOut'
                })
            })
    
            galSplide.on('moved', function(){
                setTimeout(()=>{
                    let activeHeading = $('.onda-card.is-active.is-visible').not('.is-next, .is-prev').find('.onda-heading')
                        
                    gsap.to(activeHeading, {
                        opacity: 1,
                        duration: 0.35,
                        ease: 'power2.inOut'
                    })
    
    
                }, 50)
            })
    
            galSplide.mount()
        }

        // -------- ONDA GALLERY --------
        if($('.page-container').find('.od-wrap.splide').first().length > 0){
            var ondaSplide = new Splide($('.page-container').find('.od-wrap.splide').first().get(0), {
                type: 'slide',
                direction: 'ltr',
    
                autoWidth: true,
    
                // autoHeight: true,
                // heightRatio: 1,
    
                // drag: 'free',
                // flickPower: 150,
    
                speed: 1000,
                arrows: true,
    
                // arrows: {
                //     prev: $('.onda-slide-btn.prev')[0],
                //     next: $('.onda-slide-btn.next')[0]
                // },
                pagination: false,
    
    
            } );
    
            ondaSplide.mount()
    
            // ondaSplide.on('moved', function(){
            //     setTimeout(()=>{
            //         let activeCard = $('.blue-card.is-active.is-visible')
            //         let slug = activeCard.attr('data-card-zone')
    
            //         let activeZona = $(`.od-zona[data-slug="${slug}"]`)
    
            //         gsap.to($('.od-zona').not(activeZona), {
            //             opacity: 0.6,
            //             duration: 0.35,
            //             ease: 'power2.inOut'
            //         })
    
            //         gsap.to(activeZona, {
            //             opacity: 1,
            //             duration: 0.35,
            //             ease: 'power2.inOut'
            //         })
    
            //     }, 50)
            // })
    
            $('.od-zona').clickSet((el)=>{
                let zona = $(el).attr('data-slug')
                let card = $(`.blue-card[data-card-zone="${zona}"]`).first()

                setTimeout(()=>{
                    gsap.to($('.od-zonas-onda-wrap'), {
                        opacity: 0,
                        duration: 0.35,
                        ease: 'power3.inOut',
                        onComplete: ()=>{
                            $('.blue-card').not(`[data-card-zone="${zona}"]`).removeClass('splide__slide')
                            $('.blue-card').not(`[data-card-zone="${zona}"]`).removeAttr('id')
                            $('.blue-card').not(`[data-card-zone="${zona}"]`).removeAttr('role')
                            $('.blue-card').not(`[data-card-zone="${zona}"]`).removeAttr('aria-roledescription')
                            $('.blue-card').not(`[data-card-zone="${zona}"]`).removeAttr('aria-label')

                            $(`.blue-card[data-card-zone="${zona}"]`).addClass('splide__slide')

                            gsap.set($(`.blue-card[data-card-zone="${zona}"]`), {
                                display: 'block'
                            })

                            ondaSplide.go(0)
                            ondaSplide.refresh()

                            gsap.set($('.blue-card').not(`[data-card-zone="${zona}"]`), {
                                display: 'none'
                            })

                            setTimeout(()=>{
                                ondaSplide.go(0)
                                ondaSplide.refresh()
                            }, 100)

                            gsap.to($('.od-zonas-onda-wrap'), {
                                opacity: 1,
                                duration: 0.35,
                                ease: 'power3.inOut',
                            })
                            
                        }
                    })


                }, 10)
    
                //ondaSplide.go($('.blue-card').index(card))
            })
        }

        // -------- DICAS GALLERY --------
        if($('.page-container').find('.dicas-list-wrap.splide').first().length > 0){
            var dicasSplide = new Splide($('.page-container').find('.dicas-list-wrap.splide').first().get(0), {
                type: 'slide',
                direction: 'ltr',
    
                autoWidth: true,
    
                // autoHeight: true,
                // heightRatio: 1,
    
                // drag: 'free',
                // flickPower: 150,
    
                speed: 1000,
                arrows: false,
    
                pagination: false,
    
            } );
    
            dicasSplide.mount()
        }


        // -------- COMODIDADES GALLERY --------
        if($('.page-container').find('.fac-wrap.splide').first().length > 0){

            var commSplide = new Splide($('.page-container').find('.fac-wrap.splide').first().get(0), {
                type: 'slide',
                direction: 'ltr',
    
                autoWidth: true,
    
                // autoHeight: true,
                // heightRatio: 1,
    
                // drag: 'free',
                // flickPower: 150,
    
                arrows: true,
                speed: 1000,
    
                pagination: false,
    
            } );
    
            commSplide.mount()
        }


        // -------- ATRAÇÕES GALLERY --------
        if($('.page-container').find('.acc-left-wrap.splide').first().length > 0){
            if($(window).outerWidth() < 992){ // MOBILE
                let accTitleSplide = new Splide($('.page-container').find('.acc-left-wrap.splide').first().get(0), {
                    type: 'slide',
                    direction: 'ltr',
                    autoWidth: true,
                    arrows: false,
                    speed: 1000,
                    pagination: false,
                } );
        
                accTitleSplide.mount()
            }
            
        }

        if($('.page-container').find('.acc-gal-wrap.splide').first().length > 0){
            let accGalSplide = new Splide($('.page-container').find('.acc-gal-wrap.splide').first().get(0), {
                type: 'slide',
                direction: 'ltr',
                autoWidth: true,
                arrows: false,
                speed: 1000,
                pagination: false,
            } );
    
            accGalSplide.mount()

            $('.acc-list-item').clickSet(function(el){
                let name = $(el).attr('data-name')

                setTimeout(()=>{
                    gsap.to($('.acc-gal-bottom'), {
                        opacity: 1,
                        duration: 0.3,
                        delay: 0.4,
                        ease: 'power3.inOut',
                    })
                    gsap.to($('.acc-gal-bottom'), {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power3.inOut',
                        onComplete: ()=>{
                            $('.acc-gal-item').not(`[data-name="${name}"]`).removeClass('splide__slide')
                            $('.acc-gal-item').not(`[data-name="${name}"]`).removeAttr('id')
                            $('.acc-gal-item').not(`[data-name="${name}"]`).removeAttr('role')
                            $('.acc-gal-item').not(`[data-name="${name}"]`).removeAttr('aria-roledescription')
                            $('.acc-gal-item').not(`[data-name="${name}"]`).removeAttr('aria-label')

                            $(`.acc-gal-item[data-name="${name}"]`).addClass('splide__slide')

                            gsap.set($(`.acc-gal-item[data-name="${name}"]`), {
                                display: 'flex'
                            })

                            accGalSplide.go(0)
                            accGalSplide.refresh()
    
                            gsap.set($('.acc-gal-item').not(`[data-name="${name}"]`), {
                                display: 'none'
                            })
    
                            
                        }
                    })

                }, 10)
            })
        }


     
        $('.w-condition-invisible').remove()

   

    //Tiago: o que fazer com este leave?

    // async leave(){
    //     gsap.to($('.ancoras-fixed'), {
    //         y: '100%',
    //         duration: 0.25,
    //         ease: 'power2.inOut',
    //         onComplete: ()=>{
    //             $('.global-fixed *').remove()
    //         }
    //     })
    // }



}



        // -------- LOAD ONDAS --------

        if($('.page-container').find('.od-zona').length > 0){
            let container = $('.page-container')
            //  await new Promise(resolve => {
                $(container).find('.od-zona').each(function(idx, el){
                    
                    let slug = $(el).attr('data-slug') 
        
                    $(el).find('.loader').load(`/galeria-de-ondas/${slug} .blue-col`, ()=>{
                        $(el).find('.blue-card').attr('data-card-zone', slug)



                        if(el === $('.od-zona').last().get(0)){

                            $(container).find('.od-zona').each(function(index, elem){
                                if($(elem).find('.loader .w-dyn-empty').length > 0) $(elem).remove()
                            })
                            //  resolve()
                        }
                    })
        
                })
            //  })


            //Tiago: ahahahahaha, temos de ver o que fazer. Mas pelo menos ele avisa. Anyway, o Promisse não deve funcionar aqui
            //  await new Promise(resolve => {
                console.log('') // load bearing console log, NÃO APAGAR PFV!!!!!!!!
                setTimeout(()=>{
                    $(container).find('.od-onda-wrap').append($('.blue-card'))
                    //  resolve()
                }, 750)
            //  })

            
        }


        
        // -------- ATRAÇÕES --------
        if($('.page-container').find('.acc-list-item').length > 0){
            //  await new Promise(resolve => {
                let container = $('.page-container')
                let slug = $(container).find('.acc-gal').attr('data-slug')
                $(container).find('.acc-list-item').each(function(idx, el){
                    let name = $(el).attr('data-name')

                    $(el).find('.loader').load(`/modulo-atracoes/${slug}  .acc-gal[data-name="${name}"] .acc-gal-list`, ()=>{

                        $(el).find('.loader .acc-gal-item').attr('data-name', name)

                        $(container).find('.acc-gal-wrap .acc-gal-list').append($(el).find('.loader .acc-gal-item'))
    
                        if(el === $('.acc-list-item').last().get(0)){
                            setTimeout(()=>{
                                // -------- ACOMODAÇÕES POPUP --------
                                $('.acc-gal-item').clickSet((el)=>{

                                    gsap.set($('.det-popup-gal'), {display: 'block', opacity: 0})
                                    gsap.to($('.det-popup-gal'), {
                                        opacity: 1,
                                        duration: 0.5,
                                        ease: 'power2.inOut'
                                    })

                                    
                                    $('.det-pop-list *').remove()
                                    $('.det-pop-thumb-list *').remove()
                                    

                                    $('.acc-gal-item.splide__slide').not('.splide__slide--clone').each(function(idx, elem){
                                        $('.det-pop-list').append($(elem).find('.full-res-img').children().clone())
                                        $('.det-pop-thumb-list').append($(elem).children().find('.contain-img'))
                                    })

                                    $('.det-pop-list').children().wrap('<div class="det-pop-item-img"></div>')
                                    $('.det-pop-list').children().wrap('<div class="det-pop-item splide__slide"></div>')

                                    $('.det-pop-thumb-list').children().removeClass('contain-img').addClass('cover-img')
                                    $('.det-pop-thumb-list').children().wrap('<div class="det-thumb-img-popup splide__slide"></div>')

                                    let i = $(el).attr('aria-label').split(' ')[0]
                                    $('.det-popup-content.splide').get(0).splide.refresh()
                                    $('.det-popup-content.splide').get(0).splide.go(parseFloat(i)-1)
                                    $('.det-popup-thumb-slide.splide').get(0).splide.refresh()
                                    $('.det-popup-thumb-slide.splide').get(0).splide.go(parseFloat(i)-1)
                                })

                                //  resolve()
                            }, 500)
                        }
                    })
        
                })
            //  })
        }