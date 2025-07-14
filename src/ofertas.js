import { SetVariables, initCommonCode, navProtOn } from './main.js';
import mixitup from "mixitup";
import multifilter from 'mixitup-multifilter';
// Register the plugin
mixitup.use(multifilter);

import gsap from "gsap";
// import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin.min.js";
// import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/src/all";
// import { TextPlugin } from "gsap/TextPlugin";


/****************************************************************************************
--------------------------------------- OFERTAS ----------------------------------------
*****************************************************************************************/

// pageClasses['Ofertas'] = class Ofertas extends Page {
//     async setup(){
        // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
        $('.w-condition-invisible').remove()


        // -------- NAV INIT --------

        let  navDark = true
        let navProt = true

        SetVariables(navProt, navDark, false) 

        initCommonCode();

        // navDark = true
        // navProt = true
        navProtOn()


        // -------- FILTERS --------
        $('.flt-check').each(function(index, el){
            $(el).attr('value', '.' + $(el).attr('value')) 
        })


        $('.flt-item').hoverSet((el)=>{
            //console.log('hover')
            gsap.to($(el).find('.flt-expand'), {
                height: 'auto',
                opacity: 1,
                duration: 0.75,
                ease: 'power2.inOut',
                willChange: 'height'
            })

            gsap.to($(el).find('.flt-svg'), {
                rotate: 180,
                duration: 0.75,
                ease: 'power2.inOut'
            })
        }, (el)=>{
            gsap.to($(el).find('.flt-expand'), {
                height: 0,
                opacity: 0,
                duration: 0.75,
                ease: 'power2.inOut',
                willChange: 'height'
            })
            gsap.to($(el).find('.flt-svg'), {
                rotate: 0,
                duration: 0.75,
                ease: 'power2.inOut'
            })
        })

        
        $('.trip-card').each(function(idx, el){
            $(el).find('.off-card-tag').each(function(index, elem){
                //let tag = $(elem).children().text().toLowerCase().replaceAll(' ','-')
                let tag = $(elem).attr('data-tag')
                $(el).addClass(tag)
            })

            if($(el).find('.promo-tag').length > 0){
                $(el).addClass('promo')
            }

            $(el).find('.off-card-extra-tag').each(function(index, elem){
                let tag = $(elem).attr('data-tag')
                $(el).addClass(tag)
            })
        })
        $('.trip-card').hoverSet((el)=>{
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

        $('.flt-check, .flt-promo-toggle').clickSet((elem)=>{

            let el
            if($(elem).hasClass('flt-check')){
                el = $(elem).parents('.flt-filter, .flt-promo-toggle').get(0)
            }
            else{
                el = elem
            }

            if(el.tag === undefined){
                let newTag = $('#flt-tag-base').clone()
                newTag.find('.flt-tag-txt').children().text($(el).find('.flt-filter-txt').children().text())
    
                $('.flt-active').append(newTag)

                newTag.find('.flt-close-wrap').clickSet((elem)=>{
                    $(el).find('.flt-check').click()
                })

                el.tag = newTag
            }
            else{
                gsap.to(el.tag, {
                    opacity: 0,
                    duration: 0.25,
                    ease: 'power2.inOut',
                    onComplete: ()=>{
                        el.tag.remove()
                        el.tag = undefined
                    }
                })
            }
        })


        $('.flt-promo-toggle').clickSet((el)=>{
            if(!$(el).hasClass('on')){
                gsap.to($(el).find('.flt-promo-tick'),{
                    x: ()=>{
                        return parseFloat($(el).find('.flt-promo-tick-wrap').outerWidth()) - parseFloat($(el).find('.flt-promo-tick').outerWidth())
                    },
                    duration: 0.5,
                    ease: 'power2.inOut'
                })

                gsap.to($(el), {
                    backgroundColor: colors.blue,
                    duration: 0.5,
                    ease: 'power2.inOut'
                })
                $(el).addClass('on')
            }
            else{
                gsap.to($(el).find('.flt-promo-tick'),{
                    x: 0,
                    duration: 0.5,
                    ease: 'power2.inOut'
                })
                gsap.to($(el), {
                    backgroundColor: '#d9d9d9',
                    duration: 0.5,
                    ease: 'power2.inOut'
                })
                $(el).removeClass('on')
            }
        })

        //tiago
        //$(this.container).find('#dest-zone-list .flt-cont-item').each(function(idx, el){
        $('.page-container').find('#dest-zone-list .flt-cont-item').each(function(idx, el){
            let destTarget = $(el).attr('data-dest')

            $(`[data-dest-item="${destTarget}"]`).find('.flt-sub-list').append($(el))
        })



        let mixer

        $('.page-container').find('#flt-reset').clickSet((el)=>{
            gsap.to($('.flt-active *'), {
                opacity: 0,
                duration: 0.25,
                ease: 'power2.inOut',
                onComplete: ()=>{
                    $('.flt-active *').remove()
                    $('.flt-filter, .flt-promo-toggle').each(function(idx, el){
                        el.tag = undefined
                    })
                    $('.flt-check').prop('checked', false)

                    if($('.flt-promo-toggle').hasClass('on')){
                        gsap.to($('.flt-promo-toggle').find('.flt-promo-tick'),{
                            x: 0,
                            duration: 0.5,
                            ease: 'power2.inOut'
                        })
                        gsap.to($('.flt-promo-toggle'), {
                            backgroundColor: '#d9d9d9',
                            duration: 0.5,
                            ease: 'power2.inOut'
                        })
                        $('.flt-promo-toggle').removeClass('on')
                    }
                }
            })

        })

        $('fieldset').attr('data-filter-group', '')

        $('.flt-pop-title').clickSet(
            function(elem){
                if(!$(elem).hasClass('open')){
        
                    $(elem).addClass('open')

                    gsap.to($(elem).siblings('.flt-pop-expand'), {
                        height: 'auto',
                        duration: 0.5,
                        ease: 'power3.inOut'
                    })

                    gsap.to($(elem).find('.flt-pop-svg'), {
                        rotate: 180,
                        duration: 0.5,
                        ease: 'power3.inOut'
                    })

                    $('.flt-pop-title.open').not(elem).each(function(idx, el){
                        $(el).removeClass('open')
        
                        gsap.to($(el).siblings('.flt-pop-expand'), {
                            height: 0,
                            duration: 0.5,
                            ease: 'power3.inOut'
                        })
                        gsap.to($(el).find('.flt-pop-svg'), {
                            rotate: 0,
                            duration: 0.5,
                            ease: 'power3.inOut'
                        })
                    })
            
                }
                else{
                    $(elem).removeClass('open')
        
                    gsap.to($(elem).siblings('.flt-pop-expand'), {
                        height: 0,
                        duration: 0.5,
                        ease: 'power3.inOut'
                    })
                    gsap.to($(elem).find('.flt-pop-svg'), {
                        rotate: 0,
                        duration: 0.5,
                        ease: 'power3.inOut'
                    })
                }
            }
        )

        if($(window).outerWidth() < 992){ // MOBILE
            $('.page-container').find('.flt-item').each(function(idx, el){
                $($('.flt-pop-wrap .flt-pop-expand').get(idx)).append($(el).find('.flt-expand-content'))
            })

            $('.flt-container').remove()
        }


        setTimeout(()=>{ // ---- SETUP MIXER ----
            mixer = mixitup($('.page-container').find('.search-wrap')[0], {
                selectors: {
                    target: '.trip-card'
                },
                multifilter:{
                    enable: true
                },
                animation: {
                    enable: true,
                },
                callbacks: {
                    onMixStart: function(state, futureState){
                        ScrollTrigger.refresh()

                        if(futureState.activeFilter.selector != '.trip-card'){

                            gsap.to($('.flt-active-wrap'), {
                                height: 'auto',
                                duration: 0.75,
                                ease: 'power2.inOut'
                            })
                        }
                        else{

                            gsap.to($('.flt-active-wrap'), {
                                height: 0,
                                duration: 0.75,
                                ease: 'power2.inOut'
                            })
                        }
                    },
                    onMixEnd: function(state){
                        ScrollTrigger.refresh()
                    },
                    onMixFail: function(state){
                    }
                }
            })
        }, 500)

        setTimeout(()=>{ // ---- INIT FILTERS BASED ON PARAMS ----
            let params = window.location.search.split('&')
            let paramsValues = []
            params.forEach((param)=>{
                paramsValues.push(param.split('=')[1])
            })

            paramsValues.forEach((param)=>{
                //console.log($(`.flt-check[value=".${param}"]`))
                $(`.flt-check[value=".${param}"]`).trigger('click')

            })
        }, 600)
        
        $('.flt-container-mobile').clickSet((el)=>{
            gsap.to($('.flt-container-popup'), {
                x: '0%',
                duration: 0.5,
                ease: 'power2.inOut'
            })
        })
        $('.flt-back-btn, .flt-pop-btn-wrap .btn').clickSet((el)=>{
            gsap.to($('.flt-container-popup'), {
                x: '100%',
                duration: 0.5,
                ease: 'power2.inOut'
            })
        })



    // }

    // async render(){
        
    // }

    // async intro(){
    //     //$('.loader').remove()
    // }

//     async leave(){
//         $('.global-fixed *').remove() 
//         navDark = false
//         return
//     }
// }










//OLD CODE

// /****************************************************************************************
// --------------------------------------- OFERTAS ----------------------------------------
// *****************************************************************************************/

// pageClasses['Ofertas'] = class Ofertas extends Page {
//     async setup(){
//         // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
//         $('.w-condition-invisible').remove()


//         // -------- NAV INIT --------

//         navDark = true
//         navProt = true
//         navProtOn()


//         // -------- FILTERS --------
//         $('.flt-check').each(function(index, el){
//             $(el).attr('value', '.' + $(el).attr('value')) 
//         })


//         $('.flt-item').hoverSet((el)=>{
//             //console.log('hover')
//             gsap.to($(el).find('.flt-expand'), {
//                 height: 'auto',
//                 opacity: 1,
//                 duration: 0.75,
//                 ease: 'power2.inOut',
//                 willChange: 'height'
//             })

//             gsap.to($(el).find('.flt-svg'), {
//                 rotate: 180,
//                 duration: 0.75,
//                 ease: 'power2.inOut'
//             })
//         }, (el)=>{
//             gsap.to($(el).find('.flt-expand'), {
//                 height: 0,
//                 opacity: 0,
//                 duration: 0.75,
//                 ease: 'power2.inOut',
//                 willChange: 'height'
//             })
//             gsap.to($(el).find('.flt-svg'), {
//                 rotate: 0,
//                 duration: 0.75,
//                 ease: 'power2.inOut'
//             })
//         })

        
//         $('.trip-card').each(function(idx, el){
//             $(el).find('.off-card-tag').each(function(index, elem){
//                 //let tag = $(elem).children().text().toLowerCase().replaceAll(' ','-')
//                 let tag = $(elem).attr('data-tag')
//                 $(el).addClass(tag)
//             })

//             if($(el).find('.promo-tag').length > 0){
//                 $(el).addClass('promo')
//             }

//             $(el).find('.off-card-extra-tag').each(function(index, elem){
//                 let tag = $(elem).attr('data-tag')
//                 $(el).addClass(tag)
//             })
//         })
//         $('.trip-card').hoverSet((el)=>{
//             gsap.to($(el).find('.off-card-bg'), {
//                 scale: 1,
//                 duration: 1,
//                 ease: 'power2.inOut'
//             })
//         }, (el)=>{
//             gsap.to($(el).find('.off-card-bg'), {
//                 scale: 1.1,
//                 duration: 1,
//                 ease: 'power2.inOut'
//             })
//         })

//         $('.flt-check, .flt-promo-toggle').clickSet((elem)=>{

//             let el
//             if($(elem).hasClass('flt-check')){
//                 el = $(elem).parents('.flt-filter, .flt-promo-toggle').get(0)
//             }
//             else{
//                 el = elem
//             }

//             if(el.tag === undefined){
//                 let newTag = $('#flt-tag-base').clone()
//                 newTag.find('.flt-tag-txt').children().text($(el).find('.flt-filter-txt').children().text())
    
//                 $('.flt-active').append(newTag)

//                 newTag.find('.flt-close-wrap').clickSet((elem)=>{
//                     $(el).find('.flt-check').click()
//                 })

//                 el.tag = newTag
//             }
//             else{
//                 gsap.to(el.tag, {
//                     opacity: 0,
//                     duration: 0.25,
//                     ease: 'power2.inOut',
//                     onComplete: ()=>{
//                         el.tag.remove()
//                         el.tag = undefined
//                     }
//                 })
//             }
//         })


//         $('.flt-promo-toggle').clickSet((el)=>{
//             if(!$(el).hasClass('on')){
//                 gsap.to($(el).find('.flt-promo-tick'),{
//                     x: ()=>{
//                         return parseFloat($(el).find('.flt-promo-tick-wrap').outerWidth()) - parseFloat($(el).find('.flt-promo-tick').outerWidth())
//                     },
//                     duration: 0.5,
//                     ease: 'power2.inOut'
//                 })

//                 gsap.to($(el), {
//                     backgroundColor: colors.blue,
//                     duration: 0.5,
//                     ease: 'power2.inOut'
//                 })
//                 $(el).addClass('on')
//             }
//             else{
//                 gsap.to($(el).find('.flt-promo-tick'),{
//                     x: 0,
//                     duration: 0.5,
//                     ease: 'power2.inOut'
//                 })
//                 gsap.to($(el), {
//                     backgroundColor: '#d9d9d9',
//                     duration: 0.5,
//                     ease: 'power2.inOut'
//                 })
//                 $(el).removeClass('on')
//             }
//         })

//         $('.page-container').find('#dest-zone-list .flt-cont-item').each(function(idx, el){
//             let destTarget = $(el).attr('data-dest')

//             $(`[data-dest-item="${destTarget}"]`).find('.flt-sub-list').append($(el))
//         })



//         let mixer

//         $('.page-container').find('#flt-reset').clickSet((el)=>{
//             gsap.to($('.flt-active *'), {
//                 opacity: 0,
//                 duration: 0.25,
//                 ease: 'power2.inOut',
//                 onComplete: ()=>{
//                     $('.flt-active *').remove()
//                     $('.flt-filter, .flt-promo-toggle').each(function(idx, el){
//                         el.tag = undefined
//                     })
//                     $('.flt-check').prop('checked', false)

//                     if($('.flt-promo-toggle').hasClass('on')){
//                         gsap.to($('.flt-promo-toggle').find('.flt-promo-tick'),{
//                             x: 0,
//                             duration: 0.5,
//                             ease: 'power2.inOut'
//                         })
//                         gsap.to($('.flt-promo-toggle'), {
//                             backgroundColor: '#d9d9d9',
//                             duration: 0.5,
//                             ease: 'power2.inOut'
//                         })
//                         $('.flt-promo-toggle').removeClass('on')
//                     }
//                 }
//             })

//         })

//         $('fieldset').attr('data-filter-group', '')

//         $('.flt-pop-title').clickSet(
//             function(elem){
//                 if(!$(elem).hasClass('open')){
        
//                     $(elem).addClass('open')

//                     gsap.to($(elem).siblings('.flt-pop-expand'), {
//                         height: 'auto',
//                         duration: 0.5,
//                         ease: 'power3.inOut'
//                     })

//                     gsap.to($(elem).find('.flt-pop-svg'), {
//                         rotate: 180,
//                         duration: 0.5,
//                         ease: 'power3.inOut'
//                     })

//                     $('.flt-pop-title.open').not(elem).each(function(idx, el){
//                         $(el).removeClass('open')
        
//                         gsap.to($(el).siblings('.flt-pop-expand'), {
//                             height: 0,
//                             duration: 0.5,
//                             ease: 'power3.inOut'
//                         })
//                         gsap.to($(el).find('.flt-pop-svg'), {
//                             rotate: 0,
//                             duration: 0.5,
//                             ease: 'power3.inOut'
//                         })
//                     })
            
//                 }
//                 else{
//                     $(elem).removeClass('open')
        
//                     gsap.to($(elem).siblings('.flt-pop-expand'), {
//                         height: 0,
//                         duration: 0.5,
//                         ease: 'power3.inOut'
//                     })
//                     gsap.to($(elem).find('.flt-pop-svg'), {
//                         rotate: 0,
//                         duration: 0.5,
//                         ease: 'power3.inOut'
//                     })
//                 }
//             }
//         )

//         if($(window).outerWidth() < 992){ // MOBILE
//             $('.page-container').find('.flt-item').each(function(idx, el){
//                 $($('.flt-pop-wrap .flt-pop-expand').get(idx)).append($(el).find('.flt-expand-content'))
//             })

//             $('.flt-container').remove()
//         }


//         setTimeout(()=>{ // ---- SETUP MIXER ----
//             mixer = mixitup($('.page-container').find('.search-wrap')[0], {
//                 selectors: {
//                     target: '.trip-card'
//                 },
//                 multifilter:{
//                     enable: true
//                 },
//                 animation: {
//                     enable: true,
//                 },
//                 callbacks: {
//                     onMixStart: function(state, futureState){
//                         ScrollTrigger.refresh()

//                         if(futureState.activeFilter.selector != '.trip-card'){

//                             gsap.to($('.flt-active-wrap'), {
//                                 height: 'auto',
//                                 duration: 0.75,
//                                 ease: 'power2.inOut'
//                             })
//                         }
//                         else{

//                             gsap.to($('.flt-active-wrap'), {
//                                 height: 0,
//                                 duration: 0.75,
//                                 ease: 'power2.inOut'
//                             })
//                         }
//                     },
//                     onMixEnd: function(state){
//                         ScrollTrigger.refresh()
//                     },
//                     onMixFail: function(state){
//                     }
//                 }
//             })
//         }, 500)

//         setTimeout(()=>{ // ---- INIT FILTERS BASED ON PARAMS ----
//             let params = window.location.search.split('&')
//             let paramsValues = []
//             params.forEach((param)=>{
//                 paramsValues.push(param.split('=')[1])
//             })

//             paramsValues.forEach((param)=>{
//                 //console.log($(`.flt-check[value=".${param}"]`))
//                 $(`.flt-check[value=".${param}"]`).trigger('click')

//             })
//         }, 600)
        
//         $('.flt-container-mobile').clickSet((el)=>{
//             gsap.to($('.flt-container-popup'), {
//                 x: '0%',
//                 duration: 0.5,
//                 ease: 'power2.inOut'
//             })
//         })
//         $('.flt-back-btn, .flt-pop-btn-wrap .btn').clickSet((el)=>{
//             gsap.to($('.flt-container-popup'), {
//                 x: '100%',
//                 duration: 0.5,
//                 ease: 'power2.inOut'
//             })
//         })



//     }

//     async render(){
        
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
