import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";
import Splide from '@splidejs/splide'
import AirDatepicker from "air-datepicker";
import AirDatepickerPT from "air-datepicker/locale/pt";
import mixitup from "mixitup";
import multifilter from 'mixitup-multifilter';
// Register the plugin
mixitup.use(multifilter);


/****************************************************************************************
---------------------------------------- PRODUTO ----------------------------------------
*****************************************************************************************/


import { initCommonCode, createAnchor, colors, initVimeoLightboxAdvanced } from '../global.js';
import { ResortData, sheetInit, globalVarSurfistaOrMotorista } from '../excelProcessing.js';


        // -------- ACOMODAÇÕES --------
        let selectedAcomodacao ='primeiro';
        let savedAcomodacao ="";
        let acomodacoesList = [];
        

        // -------- Quartos --------
           let selectedQuarto ='primeiro';
        let savedQuarto ="";
        let quartosList = [];
        

export function runProduto()
{


initCommonCode();
initVimeoLightboxAdvanced();

// pageClasses['Produto'] = class Produto extends Page {
//     async setup(){

        
        // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
        $('.w-condition-invisible').remove()


        if(Webflow.env('editor') == undefined){
            $('.consulta-page-wrap, .consulta-wrap, .consulta-hero-wrap').removeClass('editor')
        }

        // -------- GALERIA DE ONDAS --------
        carregarOndas();


        // if($('.page-container').find('.onda-list').length > 0){
        //     let container = $('.page-container')
        //     await new Promise(resolve => {
        //         $(container).find('.onda-list').each(function(idx, el){
                    
        //             let slug = $(el).attr('data-slug') 
        
        //             $(el).load(`/galeria-de-ondas/${slug} .onda-card`, ()=>{
        //                 resolve()
        //             })
        //         })
        //     })

        //     await new Promise(resolve => {
        //         console.log('') // load bearing console log, NÃO APAGAR PFV!!!!!!!!
        //         setTimeout(()=>{
        //             resolve()
        //         }, 750)
        //     })
        // }



        // ................................ VIDEOS ................................
        

// document.querySelectorAll('.page-load-vid-alt-dest').forEach((vid) => {
//   const nextCoverImg = vid.nextElementSibling;
//   if (nextCoverImg && nextCoverImg.classList.contains('cover-img')) {
//     nextCoverImg.remove();
//   }
// });


        $('.det-ofertas-right .orcamento, .ancoras-fixed .orcamento').clickSet((el)=>{
            gsap.to($('.popup-wrap.orcamento'), {
                x: '0%',
                duration: 0.5,
                ease: 'power2.inOut'
            })
            gsap.to($('.popup-wrap-bg'),{
                opacity: 1,
                pointerEvents: 'auto',
                duration: 0.5,
                ease: 'power2.inOut'
            })
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
        createAnchor('#destaques', '#destaques-btn', '#overview-btn')
        createAnchor('#ondas', '#ondas-btn', '#destaques-btn')
        createAnchor('#acomodacoes', '#acomodacoes-btn', '#ondas-btn')
        createAnchor('#facilidades', '#facilidades-btn', '#acomodacoes-btn')
        createAnchor('#programa', '#programa-btn', '#facilidades-btn')
        createAnchor('#regras', '#regras-btn', '#programa-btn')
        createAnchor('#testemunhos', '#testemunhos-btn', '#regras-btn')


        //tiago: barba descontinuado
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

        if($('.ancoras-fixed-wrap *').length == 0){
            $('.ancoras-fixed-cont').remove()
        }


        // -------- ACOMODAÇÕES --------
        // let selectedAcomodacao ='primeiro';
        // let savedAcomodacao ="";
        // let acomodacoesList = [];
        

        if($('.page-container').find('.acc-list-item').length > 0){
            carregarAcomodacoes();
            carregarQuartos();
//             await new Promise(resolve => {
//                 let container = $('.page-container')
//                 let slug = $(container).find('.acc-gal').attr('data-slug')
//                 $(container).find('.acc-list-item').each(function(idx, el){
//                     let name = $(el).attr('data-name')

//                     $(el).find('.loader').load(`/modulo-acomodacoes/${slug}  .acc-gal[data-name="${name}"] .acc-gal-list`, ()=>{

//                         // $(el).find('.loader .acc-gal-item').attr('data-name', name)

//                         // $(container).find('.acc-gal-wrap .acc-gal-list').append($(el).find('.loader .acc-gal-item'))
//     let galItem = $(el).find('.loader .acc-gal-item').clone();
// galItem.attr('data-name', name);
// $(container).find('.acc-gal-wrap .acc-gal-list').append(galItem);

                    
//                         if(el === $('.acc-list-item').last().get(0)){
//                             setTimeout(()=>{                        
//                                 // -------- ACOMODAÇÕES POPUP --------
//                                 $('.acc-gal-item').clickSet((el)=>{


//                                        gsap.set($('.det-popup-gal'), {display: 'block', opacity: 0})
//                                     gsap.to($('.det-popup-gal'), {
//                                         opacity: 1,
//                                         duration: 0.5,
//                                         ease: 'power2.inOut'
//                                     })


//                         //console.log('### AcomodacoesVariables ###');
//                         // console.log(acomodacoesList);
//                         // console.log(selectedAcomodacao);

//                         // if(!acomodacoesList.includes(selectedAcomodacao))
//                             if(savedAcomodacao != selectedAcomodacao)
//                         {
//                             savedAcomodacao = selectedAcomodacao;
                            

//                             acomodacoesList.push(selectedAcomodacao);


                                 
//                                     // console.log("looooooooook in");
//                                     // console.log($('.det-pop-list *'));
//                                     // console.log($('.det-pop-thumb-list *'));
//                                     $('.det-pop-list *').remove()
//                                     $('.det-pop-thumb-list *').remove()
//                                     //  $('.det-pop-list ').empty();
//                                     //  $('.det-pop-thumb-list ').empty();
                                    
//                                     // console.log("looooooooook out");

//                                     // $('.acc-gal-item.splide__slide').not('.splide__slide--clone').each(function(idx, elem){
//                                     //     $('.det-pop-list').append($(elem).find('.full-res-img').children().clone())
//                                     //     $('.det-pop-thumb-list').append($(elem).children().find('.contain-img'))
//                                     // })

//                                     //tiago
//                                     $('.acc-gal-item.splide__slide').not('.splide__slide--clone').each(function(idx, elem) {
//     // Clone and append the children of .full-res-img
//     $('.det-pop-list').append(
//         $(elem).find('.full-res-img').children().clone()
//     );

//     // Clone and append .contain-img itself (not just move it)
//     $('.det-pop-thumb-list').append(
//         $(elem).children().find('.contain-img').clone()
//     );
// });

//                                     $('.det-pop-list').children().wrap('<div class="det-pop-item-img"></div>')
//                                     $('.det-pop-list').children().wrap('<div class="det-pop-item splide__slide"></div>')

//                                     $('.det-pop-thumb-list').children().removeClass('contain-img').addClass('cover-img')
//                                     $('.det-pop-thumb-list').children().wrap('<div class="det-thumb-img-popup splide__slide"></div>')

//                                     let i = $(el).attr('aria-label').split(' ')[0]
//                                     $('.det-popup-content.splide').get(0).splide.refresh()
//                                     $('.det-popup-content.splide').get(0).splide.go(parseFloat(i)-1)
//                                     $('.det-popup-thumb-slide.splide').get(0).splide.refresh()
//                                     $('.det-popup-thumb-slide.splide').get(0).splide.go(parseFloat(i)-1)
                                    
//                         }
//                                 })

//                                 resolve()
//                             }, 250)
//                         }
//                     })
        
//                 })
//             })
        }
        
        // $('.page-container').find('.acc-content-item').first().addClass('active')
        // $('.page-container').find('.acc-list-item').first().addClass('active')

        // gsap.set($('.acc-gal-item').not(`[data-name="${$('.page-container').find('.acc-list-item').first().attr('data-name')}"]`), {
        //     display: 'none'
        // })
        // $('.acc-gal-item').not(`[data-name="${$('.page-container').find('.acc-list-item').first().attr('data-name')}"]`).removeClass('splide__slide')

        // gsap.set($('.acc-content-item').not($('.active')), {
        //     opacity: 0,
        //     pointerEvents: 'none',
        // })
        // gsap.set($('.acc-list-item').not($('.active')), {
        //     color: '#DFE8EA'
        // })
        // gsap.to($('.acc-right'), {
        //     height: ()=>{
        //         return $('.acc-content-item').first().outerHeight()
        //     },
        //     duration: 1,
        //     ease: 'power2.inOut'
        // })

        // $('.acc-list-item').clickSet(function(el){
        // selectedAcomodacao = $(el).data('name');

        //     //tiago
        //     //    $('.det-pop-list *').remove()
        //     //    $('.det-pop-thumb-list *').remove()


        //     let idx = $(el).index()
        //     let activeContent = $('.acc-content-item.active')
        //     let newActiveContent = $($('.acc-content-item').get(idx))

        //     let activeList = $('.acc-list-item.active')
        //     let newActiveList = $($('.acc-list-item').get(idx))

        //     if(idx != activeContent.index()){
        //         gsap.to($('.acc-right'), {
        //             height: ()=>{
        //                 return newActiveContent.outerHeight()
        //             },
        //             duration: 1,
        //             ease: 'power2.inOut'
        //         })

        //         gsap.to(activeContent, {
        //             opacity: 0,
        //             pointerEvents: 'none',
        //             duration: 0.3,
        //             ease: 'power3.inOut'
        //         })
        //         activeContent.removeClass('active')

        //         gsap.to(newActiveContent, {
        //             opacity: 1,
        //             pointerEvents: 'auto',
        //             duration: 0.2,
        //             delay: 0.4,
        //             ease: 'power3.inOut'
        //         })
        //         newActiveContent.addClass('active')

        //         gsap.to($('.acc-list-item').not(newActiveList), {
        //             color: '#DFE8EA',
        //             duration: 0.5,
        //             ease: 'power3.out',
        //         })
        //         gsap.to(newActiveList, {
        //             color: '#009ABF',
        //             duration: 0.5,
        //             ease: 'power3.out',
        //         })
        //         activeList.removeClass('active')
        //         newActiveList.addClass('active')

        //     }
        // })

        // $('.acc-list-item').hoverSet((el)=>{
        //     if(!$(el).hasClass('active')){
        //         gsap.to($(el), {
        //             color: '#93C9D5',
        //             duration: 0.3,
        //             ease: 'power2.inOut'
        //         })
        //     }
        // }, (el)=>{
        //     if(!$(el).hasClass('active')){
        //         gsap.to($(el), {
        //             color: '#DFE8EA',
        //             duration: 0.3,
        //             ease: 'power2.inOut'
        //         })
        //     }
        // })


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
                duration: 0.3,
                ease: 'power2.inOut'
            })
        }, (el)=>{
            gsap.to($(el).find('.prog-row-title, .prog-row-svg'), {
                color: colors.black,
                duration: 0.3,
                ease: 'power2.inOut'
            })
        })

        // -------- TESTEMUNHOS --------
        if($('.page-container').find('.test-item').length == 0){
            $('.testemunhos').remove()
            $('.ancoras-fixed-wrap #testemunhos-btn').remove()
            $('.ancoras-wrap #testemunhos-btn').remove()
        }

        // -------- DESTAQUES --------
        $('.page-container').find('.det-dest-desc').first().addClass('active')
        $('.page-container').find('.det-dest-media').first().addClass('active')

        gsap.set($('.det-dest-desc, .det-dest-media').not($('.active')), {
            opacity: 0
        })

        if($(window).outerWidth() < 992){ // DESKTOP
            gsap.set($('.det-dest-desc-item'), {
                height: ()=>{
                    return $('.det-dest-desc').first().outerHeight()
                }
            })
        }

        $('.det-dest-thumb').clickSet(function(el){
            let idx = $(el).index()
            let activeContent = $('.det-dest-desc.active')
            let newActiveContent = $($('.det-dest-desc').get(idx))

            let activePic = $('.det-dest-media.active')
            let newActivePic = $($('.det-dest-media').get(idx))

            if(idx != activeContent.index()){
                gsap.to(activeContent, {
                    opacity: 0,
                    duration: 0.25,
                    ease: 'power3.out'
                })
                activeContent.removeClass('active')

                gsap.to(newActiveContent, {
                    opacity: 1,
                    duration: 0.25,
                    delay: 0.25,
                    ease: 'power3.out'
                })
                newActiveContent.addClass('active')


                gsap.to(activePic, {
                    opacity: 0,
                    duration: 0.25,
                    ease: 'power3.out'
                })
                activePic.removeClass('active')

                gsap.to(newActivePic, {
                    opacity: 1,
                    duration: 0.25,
                    delay: 0.25,
                    ease: 'power3.out'
                })
                newActivePic.addClass('active')

                if($(window).outerWidth() < 992){ // DESKTOP
                    gsap.set($('.det-dest-desc-item'), {
                        height: ()=>{
                            return  $('.det-dest-desc.active').outerHeight()
                        },
                        duration: 1,
                        ease: 'power2.inOut'
                    })
                }
            }
        })


        // ................................ CONSULTA ................................
        $('.flt-container-mobile').clickSet((el)=>{
            gsap.to($('.flt-container-popup'), {
                x: '0%',
                duration: 0.5,
                ease: 'power2.inOut'
            })
        })
        $('.flt-back-btn, .flt-pop-btn-wrap .btn').clickSet((el)=>{
            let checked = true
            $('[data-req]').each(function(idx, el){
                if($(el).find(':checked').length == 0){
                    checked = false
                    gsap.to($(el).find('.err-text'),{
                        opacity: 1,
                        duration: 0.35,
                        ease: 'power2.inOut'
                    })
                }
                
            })
            if(checked){
                gsap.to($('.flt-container-popup'), {
                    x: '100%',
                    duration: 0.5,
                    ease: 'power2.inOut'
                })
            }
            else{
                gsap.to($('.consulta-wrap'), {
                    x: '100%',
                    duration: 0.5,
                    ease: 'power2.inOut'
                })
                gsap.to($('.flt-container-popup'), {
                    x: '100%',
                    duration: 0.5,
                    ease: 'power2.inOut'
                })
            }
        })



        $('.consulta-hero-back').hoverSet((el)=>{
            gsap.to($(el).find('.path-fill'), {
                drawSVG: '100% 0%',
                duration: 0.3,
                ease: 'power2.inOut'
            })
    
        }, (el)=>{
            gsap.to($(el).find('.path-fill'), {
                drawSVG: '0% 0%',
                duration: 0.3,
                ease: 'power2.inOut'
            })
        })

        $('.consulta-open').clickSet((el)=>{
            let checked = true
            $('[data-req]').each(function(idx, el){
                if($(el).find(':checked').length == 0){
                    checked = false
                    gsap.to($(el).find('.err-text'),{
                        opacity: 1,
                        duration: 0.35,
                        ease: 'power2.inOut'
                    })
                }
                
            })
            if(checked){
                gsap.to($('.consulta-wrap'), {
                    x: '0%',
                    duration: 1,
                    ease: 'power2.inOut'
                })
                $('.consulta-wrap').addClass('step-1')
            }
        })

        $('.consulta-open-mobile').clickSet((el)=>{
            gsap.to($('.consulta-wrap'), {
                x: '0%',
                duration: 0.25,
                ease: 'power2.inOut',
                delay: 0.75
            })
            gsap.to($('.flt-container-popup'), {
                x: '0%',
                duration: 1,
                ease: 'power2.inOut'
            })
            $('.consulta-wrap').addClass('step-1')   
        })



        $('.consulta-finalizar').clickSet((el)=>{
            if($('.consulta-price-total .price-total').text() != '0'){
                $('.pop-form-hidden-quartos *').remove()
                $('.consulta-resumo *').remove()
    
                $('.consulta-res-card').each(function(idx, el){
                    if($(el).find('.consulta-picker').length > 0){
                        if($(el).find('.consulta-picker input').val() > 0){
                            let newInput = $('.loader .form-input-hidden').clone()
        
        
                            if($(el).find('.consulta-surfista').length > 0){
                                if($(el).find('.consulta-surfista').children().text() == 'Sim'){

                                    if(globalVarSurfistaOrMotorista == 'surfista')
                                    {newInput.attr('name', 'Quartos - ' + $(el).find('.consulta-res-title').text() + ' - ' 
                                    + $(el).find('.consulta-res-subtitle').text() + ' - Surfista')}

                                    if(globalVarSurfistaOrMotorista == 'motorista')
                                    {newInput.attr('name', 'Quartos - ' + $(el).find('.consulta-res-title').text() + ' - ' 
                                    + $(el).find('.consulta-res-subtitle').text() + ' - Motorista')}
                                    
                                }
                                else{
                                    if(globalVarSurfistaOrMotorista == 'surfista')
                                    {newInput.attr('name', 'Quartos - ' + $(el).find('.consulta-res-title').text() + ' - ' 
                                    + $(el).find('.consulta-res-subtitle').text() + ' - Não Surfista')}

                                    if(globalVarSurfistaOrMotorista == 'motorista')
                                    {newInput.attr('name', 'Quartos - ' + $(el).find('.consulta-res-title').text() + ' - ' 
                                    + $(el).find('.consulta-res-subtitle').text() + ' - Não Motorista')}
                                }
                            }
                            else{
                                newInput.attr('name', 'Quartos - ' + $(el).find('.consulta-res-title').text() + ' - ' 
                                    + $(el).find('.consulta-res-subtitle').text())
                            }
                            
                            newInput.attr('value', $(el).find('.consulta-picker input').val())
        
        
        
                            $('.pop-form-hidden-quartos').append(newInput)
                            let newRes = $('.loader .consulta-resumo-line').clone()
                            newRes.find('.res-title').text($(el).find('.consulta-res-title').text())
                            newRes.find('.res-subtitle').text($(el).find('.consulta-res-subtitle').text())
                            if($(el).find('.consulta-surfista').children().text() == 'Sim'){
                                 if(globalVarSurfistaOrMotorista == 'surfista')
                                 {
                                    newRes.find('.res-surfista').text('Surfista')
                                 }
                                if(globalVarSurfistaOrMotorista == 'Motorista')
                                 {
                                    newRes.find('.res-surfista').text('Motorista')
                                }
                            }
                            else{
                                if(globalVarSurfistaOrMotorista == 'surfista')
                                 {
                                    newRes.find('.res-surfista').text('Não Surfista')
                                 }
                                if(globalVarSurfistaOrMotorista == 'motorista')
                                 {
                                    newRes.find('.res-surfista').text('Não Motorista')
                                }
                                
                            }
                            newRes.find('.consulta-picker-block input').val($(el).find('.consulta-picker input').val())
                            
        
                            $('.consulta-resumo').append(newRes)
        
                        }
                    }
                    else if($(el).find(':checked').length > 0){
                        let newInput = $('.loader .form-input-hidden').clone()
                       
                        newInput.attr('name', 'Quartos - ' + $(el).find('.consulta-res-title').text() + ' - ' 
                            + $(el).find('.consulta-res-subtitle').text())
                        
                        newInput.attr('value', $('.consulta-picker input').val())
    
    
                        $('.pop-form-hidden-quartos').append(newInput)
                        let newRes = $('.loader .consulta-resumo-line').clone()
                        newRes.find('.res-title').text($('.consulta-hero-title').text() + ' - ' + $(el).find('.consulta-res-title').text())
                        newRes.find('.res-subtitle').text($(el).find('.consulta-res-subtitle').text())
                        newRes.find('.consulta-picker-block input').val($(el).find('.consulta-picker input').val())
    
                        $('.consulta-resumo').append(newRes)
        
                        
                    }
                })
    
                gsap.to($('.consulta-page-wrap'), {
                    x: '-100%',
                    duration: 1,
                    ease: 'power2.inOut'
                })
                gsap.set($('.consulta-wrap .consulta-filter-wrap'), {
                    overflow: 'hidden'
                })
                gsap.to($('.consulta-wrap .consulta-filter-wrap'), {
                    height: 0,
                    duration: 1,
                    ease: 'power2.inOut'
                })
                $('.consulta-wrap').addClass('step-2')
                $('.consulta-wrap').removeClass('step-1')
            }
            else{
                gsap.to($(el).find('.err-text'),{
                    opacity: 1,
                    duration: 0.35,
                    ease: 'power2.inOut'
                })
            }
        })

        $('.consulta-wrap .consulta-hero-back, .consulta-finish').clickSet((el)=>{
            if($('.consulta-wrap').hasClass('finished')){
                gsap.to($('.consulta-wrap'), {
                    x: '100%',
                    duration: 1,
                    ease: 'power2.inOut'
                })
                gsap.to($('.consulta-page-wrap'), {
                    x: '0%',
                    duration: 1,
                    ease: 'power2.inOut'
                })

                gsap.set($('.consulta-mod-filter-wrap'), {
                    display: 'none'
                })
                gsap.set($('.consulta-mod-finish'), {
                    display: 'flex'
                })
            }
            else if($('.consulta-wrap').hasClass('step-1')){
                gsap.to($('.consulta-wrap'), {
                    x: '100%',
                    duration: 1,
                    ease: 'power2.inOut'
                })
                $('.consulta-wrap').removeClass('step-1')
            }
            else{
                gsap.to($('.consulta-page-wrap'), {
                    x: '0%',
                    duration: 1,
                    ease: 'power2.inOut'
                })
                gsap.to($('.consulta-wrap .consulta-filter-wrap'), {
                    height: 'auto',
                    duration: 1,
                    ease: 'power2.inOut',
                    onComplete: ()=>{
                        gsap.set($('.consulta-wrap .consulta-filter-wrap'), {
                            overflow: 'visible'
                        })
                    }
                })
                $('.consulta-wrap').addClass('step-1')
                $('.consulta-wrap').removeClass('step-2')
            }
        })


        $('.consulta-info-card.popup').clickSet((el)=>{
            gsap.to($('.popup-wrap.programa'), {
                x: '0%',
                duration: 0.5,
                ease: 'power2.inOut'
            })
            gsap.to($('.consulta-popup-prot'),{
                opacity: 1,
                pointerEvents: 'auto',
                duration: 0.5,
                ease: 'power2.inOut'
            })
        })
        $('.popup-wrap.programa .popup-back, .consulta-popup-prot').clickSet((el)=>{
            gsap.to($('.popup-wrap.programa'), {
                x: '100%',
                duration: 0.5,
                ease: 'power2.inOut'
            })
            gsap.to($('.consulta-popup-prot'),{
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.5,
                ease: 'power2.inOut'
            })
        })

        // -------- FILTERS --------
    
        let obj

        if($('.consulta-csv').attr('href') != undefined){
            sheetInit($('.consulta-csv').attr('href'), 
            (data)=>{ 
                data = data.toString().replaceAll(';', ',')
                obj = $.csv.toArrays(data)
    
                window.obj = obj
    
                let restObj = new ResortData(obj)
    
                gsap.set($('.consulta-hero-filters .err-text, .consulta-finalizar .err-text'),{
                    opacity: 0,
                    pointerEvents: 'none'
                })
    
                // $('.flt-check').each(function(index, el){
                //     $(el).attr('value', '.' + $(el).attr('value')) 
                // })
    
                $('.flt-item').hoverSet((el)=>{
                    gsap.to($(el).find('.err-text'),{
                        opacity: 0,
                        duration: 0.35,
                        ease: 'power2.inOut'
                    })
    
                    gsap.to($(el), {
                        color: colors.black,
                        duration: 0.75,
                        ease: 'power2.inOut'
                    })
    
                    gsap.to($(el).find('.flt-expand, .flt-pop-expand'), {
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
                    gsap.to($(el), {
                        color: colors.white,
                        duration: 0.75,
                        ease: 'power2.inOut'
                    })
    
                    gsap.to($(el).find('.flt-expand, .flt-pop-expand'), {
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
    
    
                $('.flt-dd-wrap .flt-check').clickSet((el)=>{

/* Tiago  
Para poder limpar o valor total sempre que se muda a selecção */
       
                        let valorLimpo = 0

                        $('.consulta-res-wrap').find('.consulta-picker-block input').each(function(idx, el){
                            $(el).val(valorLimpo)
                        })

                        $('.price-total').text(valorLimpo)
    
                        $('[data-input-sync="Valor Total"]').val(valorLimpo)

                        $('.info-price-mult').text(valorLimpo)

                        $('[data-input-sync="Capacidade"]').val(valorLimpo)
                        
                        $('.consulta-form-wrap').find('.pop-form-picker input').first().val(valorLimpo)

//******************************************************** */



                    
                    let val = $(el).attr('value')
    
                    let otherCheck = $(`.flt-dd-wrap [value='${val}']`).not($(el))
    
                    
                    
                    otherCheck.prop('checked', $(el).prop('checked'))
    
    
                    otherCheck.parents('.flt-cont-item').trigger('click')
                    otherCheck.parents('.flt-filter').trigger('mouseenter')
                    otherCheck.parents('.flt-filter').trigger('mouseleave')
    
    
                    let controller = $('.flt-dd-hidden').find(`[value='${val}']`)
                    controller.click()
                })
    
                $('.flt-cont-item').clickSet((el)=>{
                    setTimeout(()=>{
                        // $(el).parents('.flt-dd-wrap').trigger('mouseleave')
                        $(el).parents('.flt-item, .flt-dd-wrap').trigger('mouseleave')
                        $(el).trigger('mouseleave')
                    }, 25)
                })
    
        
                let mixer
        
                $('fieldset').attr('data-filter-group', '')
    
                //$('.flt-check-visual').attr('value', '')
    
    
    
                $('.flt-item').each(function(idx, el){
                    $(el).on('mouseenter', ()=>{
                        if($(el).find('.flt-input-label').length > 0){
                            gsap.to($(el).find('.flt-input-label'), {
                                paddingTop: 0,
                                marginTop: '-1em',
                                opacity: 0.6,
                                scale: 0.8,
                                ease: 'power2.inOut',
                                duration: 0.35
                            })
                        }
                    })
    
                    $(el).on('mouseleave', ()=>{
                        if($(el).find(':checked').length == 0){
                            gsap.to($(el).find('.flt-input-label'), {
                                marginTop: '0em',
                                opacity: 1,
                                scale: 1,
                                ease: 'power2.inOut',
                                duration: 0.35
                            })
                        }
                    })
                })
    
                gsap.set($('.flt-text'), { marginBottom: '0em' })
    
                $('.flt-dd-wrap .flt-cont-item').clickSet((el)=>{
    
                    let textIn = ''
                    $(el).parents('.flt-item').find(':checked').parent().each(function(idx, elem){
                        textIn += $(elem).text() + ', '
                    })
    
                    let pos = textIn.lastIndexOf(',')
                    if(pos < 0) pos = textIn.length
                    textIn = textIn.substring(0, pos)
    
                    if(textIn.length == 0){
                        gsap.to($(el).parents('.flt-item').find('.flt-input-res'), {
                            opacity: 0,
                            ease: 'power2.inOut',
                            duration: 0.25
                        })
                        gsap.to($(el).parents('.flt-item').find('.flt-text'), {
                            marginBottom: '-0em',
                            ease: 'power2.inOut',
                            duration: 0.25
                        })
                    }
                    else{
                        $(el).parents('.flt-item').find('.flt-input-res').text(textIn)
                        gsap.to($(el).parents('.flt-item').find('.flt-input-res'), {
                            opacity: 1,
                            ease: 'power2.inOut',
                            duration: 0.25
                        })
                        gsap.to($(el).parents('.flt-item').find('.flt-text'), {
                            marginBottom: '-0.5em',
                            ease: 'power2.inOut',
                            duration: 0.25
                        })
                    }
    
                    let res = $(`.consulta-detalhe-line[data-filter-sync="${$(el).parents('.flt-dd-wrap').attr('data-filter-sync')}"]`)
                    res.find('.consulta-detalhe-text').children().text(textIn)
    
                    let input = $(`.form-input-hidden[data-filter-sync="${$(el).parents('.flt-dd-wrap').attr('data-filter-sync')}"]`)
                    input.val(textIn)
                })
            

                gsap.set($('.consulta-res-disclaimer'), {
                    opacity: 0,
                    pointerEvents: 'none'
                })

                $('.consulta-picker').each(function(idx, el){
                    $(el).find('input').val(0)
                    $(el).find('.minus').clickSet(()=>{
                        let input = parseFloat($(el).find('input').val())
                        let num = input - 1
                        if(num < 0) num = 0
                        $(el).find('input').val(num)
                    })
                    $(el).find('.plus').clickSet(()=>{
                        let input = parseFloat($(el).find('input').val())
                        let num = input + 1
                        $(el).find('input').val(num)
                    })
    
                    $(el).find('.plus, .minus').clickSet(()=>{
                        gsap.to($('.consulta-finalizar .err-text'),{
                            opacity: 0,
                            duration: 0.35,
                            ease: 'power2.inOut'
                        })
    
    
    
                        let total = 0
                        let mult = 0

                        $('.consulta-res-wrap').find('.consulta-picker-block input').each(function(idx, el){
                            total += parseFloat($(el).val()) * parseFloat($(el).attr('data-price')) * parseFloat($(el).attr('data-mult'))
                            if(parseFloat($(el).val()) != 0){
                                mult += parseFloat($(el).attr('data-mult')) * parseFloat($(el).val())
                            }
                        })
    
                        $('.info-price-mult').text(mult)

                        if(total != 0){
                            gsap.to($('.consulta-res-disclaimer'), {
                                opacity: 0.5,
                                duration: 0.5,
                                ease: 'power2.inOut'
                            })
                        }
                        else{
                            gsap.to($('.consulta-res-disclaimer'), {
                                opacity: 0,
                                duration: 0.5,
                                ease: 'power2.inOut'
                            })
                        }
    
                        let result = total.toLocaleString()

                        $('.price-total').text(result.toString().replaceAll(',', ' '))
    
                        $('[data-input-sync="Valor Total"]').val(result.toString().replaceAll(',', ' '))

                        // console.log(mult)
                        $('[data-input-sync="Capacidade"]').val(mult)
                        
                        $('.consulta-form-wrap').find('.pop-form-picker input').first().val(mult)
                    })
                })
    
            $(".consulta-checkbox").clickSet((el) => {
                let price = parseFloat($(el).attr("data-price"));
                let mult = parseFloat($(el).attr("data-mult"));
                let total = price * mult;

                // Format total with comma as decimal separator
                let totString = total.toString().replace(".", ",");

                $(".price-total").text(total); // Or use totString if desired
                $('[data-input-sync="Valor Total"]').val(totString);
                $('.consulta-form-wrap').find('.pop-form-picker input').first().val(mult)
                });
                
                setTimeout(()=>{
                    $('.flt-dd-wrap').each(function(idx, el){ // see if required only has a single option
                        if($(el).find('.flt-filter').length == 1){
                            if($(el).parents('.consulta-wrap').length > 0){
                                $(el).find('.flt-check').get(0).click()
                                $(el).find('.flt-item').trigger('mouseenter')
                                $(el).find('.flt-item').trigger('mouseleave')
                            }
    
                            gsap.set($(el).find('.flt-svg'), {
                                opacity: 0
                            })
    
                            gsap.to($(el).find('.flt-input-res, .flt-text'), {
                                opacity: 0.8,
                                duration: 1
                            })
    
                            gsap.set($(el), {
                                pointerEvents: 'none'
                            })
                        }
                    })
    
    
                    $('.flt-dd-wrap').find('[data-filter-group]').removeAttr('data-filter-group')
    
                    mixer = mixitup($('.page-container').find('.consulta-wrap')[0], {
                        selectors: {
                            target: '.consulta-res-card'
                        },
                        multifilter:{
                            enable: true,
                            parseOn: 'change'
                        },
                        animation: {
                            enable: false,
                            // effectsIn: 'fade translateY(-100%)',
                            // effectsOut: 'fade translateY(-100%)',
                            // duration: 390
                        },
                        callbacks: {
                            onMixStart: function(state, futureState){
                                ScrollTrigger.refresh()
                            },
                            onMixEnd: function(state){
                                ScrollTrigger.refresh()
                            },
                            onMixFail: function(state){
                            }
                        }
                    })

                    mixer.sort('order:asc')
    
                    // $('.consulta-wrap .flt-check').clickSet((el)=>{
                    //     $('.multifilter-submit').get(0).click()
                    // })
                }, 500)
    
    
                // -------- FORM FINAL --------
                $('#ConsultaPartida').attr('readonly', '')
    
                let maxRange = 0

                let dpMin = new AirDatepicker('#ConsultaPartida', {
                    locale: AirDatepickerPT,
                    autoClose: true,
                    container: $('.consulta-form-calendar')[0]
                })

                dpMin.update({
                    minDate: new Date()
                })


                // $('[data-filter-sync="Noites"]').clickSet(()=>{
                //     setTimeout(()=>{
                //         if($('[data-filter-sync="Noites"]').find('input:checked').val() != undefined){
                //             maxRange = parseFloat($('[data-filter-sync="Noites"]').find('input:checked').val().split('"')[1])
                //         }
                //     }, 10)
                // })


                $('[data-filter-sync="Periodo"]').clickSet(()=>{ // string vem no formato "DIA MÊS a DIA MÊS", com mês abreviado em 3 letras
                    let period = $('[data-filter-sync="Periodo"]').find('input:checked').val()

                    if(period != undefined){
                        if (period.indexOf('"') != -1) {
                            period = period.split('"')[1]
                        }
    
                        let minRange = period.split(" a ")[0].trim()
                        let maxRange = period.split(" a ")[1].trim()
    
                        let minDay = minRange.split(' ')[0]
                        let parts = minRange.split(" ");
                        let minMonth = parts.length > 1 ? parts[1].toLowerCase() : null;
                        let maxDay = maxRange.split(' ')[0]
                        let maxMonth = maxRange.split(' ')[1].toLowerCase()

                        if(maxMonth == 'de')
                                maxMonth = maxRange.split(' ')[2].toLowerCase()
    
                        switch(minMonth){
                            case 'jan':
                                minMonth = 0
                                break;
                            case 'fev':
                                minMonth = 1
                                break;
                            case 'mar':
                                minMonth = 2
                                break;
                            case 'abr':
                                minMonth = 3
                                break;
                            case 'mai':
                                minMonth = 4
                                break;
                            case 'jun':
                                minMonth = 5
                                break;
                            case 'jul':
                                minMonth = 6
                                break;
                            case 'ago':
                                minMonth = 7
                                break;
                            case 'set':
                                minMonth = 8
                                break;
                            case 'out':
                                minMonth = 9
                                break;
                            case 'nov':
                                minMonth = 10
                                break;
                            case 'dec':
                                minMonth = 11
                                break;
                            default:
                                minMonth = 0
                                break;
                        }
                        switch(maxMonth){
                            case 'jan':
                                maxMonth = 0
                                break;
                            case 'fev':
                                maxMonth = 1
                                break;
                            case 'mar':
                                maxMonth = 2
                                break;
                            case 'abr':
                                maxMonth = 3
                                break;
                            case 'mai':
                                maxMonth = 4
                                break;
                            case 'jun':
                                maxMonth = 5
                                break;
                            case 'jul':
                                maxMonth = 6
                                break;
                            case 'ago':
                                maxMonth = 7
                                break;
                            case 'set':
                                maxMonth = 8
                                break;
                            case 'out':
                                maxMonth = 9
                                break;
                            case 'nov':
                                maxMonth = 10
                                break;
                            case 'dec':
                                maxMonth = 11
                                break;
                            default:
                                maxMonth = 11
                                break;
                        }
    
    
                        let maxDate = new Date( new Date().getUTCFullYear(), maxMonth, maxDay )
                        let minDate
    
                        if(maxDate < new Date()){
                            maxDate = new Date( new Date().getUTCFullYear()+1, maxMonth, maxDay )
                            minDate = new Date( new Date().getUTCFullYear()+1, minMonth, minDay )
                        }
                        else{
                            minDate = new Date( new Date().getUTCFullYear(), minMonth, minDay )
                        }
    
                        dpMin.update({
                            minDate: minDate,
                            maxDate: maxDate
                        })
                    }
                })
    
    
                $('.consulta-form-wrap').find('.pop-form-input-wrap, .pop-form-dd-wrap').each(function(idx, el){
                    $(el).on('focus click', ()=>{
                        if($(el).find('.pop-form-input-label').length > 0){
                            gsap.to($(el).find('.pop-form-input-label'), {
                                paddingTop: 0,
                                marginTop: '-0.25em',
                                opacity: 0.6,
                                scale: 0.8,
                                ease: 'power2.inOut',
                                duration: 0.35
                            })
                        }
                    })
                })
                $('.consulta-form-wrap').find('.pop-form-input').each(function(idx, el){
                    $(el).on('focus', ()=>{
                        if($(el).siblings('.pop-form-input-label').length > 0){
                            gsap.to($(el).siblings('.pop-form-input-label'), {
                                paddingTop: 0,
                                marginTop: '-0.25em',
                                opacity: 0.6,
                                scale: 0.8,
                                ease: 'power2.inOut',
                                duration: 0.35
                            })
                        }
                    })
                })
    
                $('#ConsultaAdultos, #ConsultaCriancas').attr('readonly', '')
    
                $('.consulta-form-wrap').find('.pop-form-picker').each(function(idx, el){
                    $(el).find('input').val(0)
                    
                    $(el).find('.minus').clickSet(()=>{
                        let input = parseFloat($(el).find('input').val())
                        let num = input - 1
                        if(num < 0) num = 0
                        $(el).find('input').val(num)

                        if(num == 0 && $(el).find('[wr-type="info"]').length > 0){
                            gsap.to($(el).find('[wr-type="info"]'), {
                                opacity: 0,
                                duration: 0.5,
                                ease: 'power2.inOut'
                            })
                        }
                    })
                    $(el).find('.plus').clickSet(()=>{
                        let input = parseFloat($(el).find('input').val())
                        let num = input + 1

                        let total = num + parseFloat($('.consulta-form-wrap').find('.pop-form-picker').not(el).find('input').val())

                        if(total <= $('[data-input-sync="Capacidade"]').val()){
                            $(el).find('input').val(num)
                        }

                        if($(el).find('[wr-type="info"]').length > 0){
                            gsap.to($(el).find('[wr-type="info"]'), {
                                opacity: 1,
                                duration: 0.5,
                                ease: 'power2.inOut'
                            })
                        }
                    })
                })
    
                $('.consulta-form-wrap').find('.pop-form-input-wrap').each(function(idx, el){
                    // $(el).on('click mouseenter', ()=>{
                        $(el).on('click ', ()=>{
                        gsap.to($(el), {
                            zIndex: 100,
                            ease: 'power2.inOut',
                            duration: 0.35
                        })
                        if($(el).find('.pop-form-expand').length > 0){
                            gsap.to($(el).find('.pop-form-expand'), {
                                height: 'auto',
                                opacity: 1,
                                ease: 'power2.inOut',
                                duration: 0.35
                            })
                        }
                    })
                    // $(el).on('mouseleave', ()=>{
    
                    //     gsap.to($(el), {
                    //         zIndex: 0,
                    //         ease: 'power2.inOut',
                    //         duration: 0.35
                    //     })
                    //     if($(el).find('.pop-form-expand').length > 0){
                    //         gsap.to($(el).find('.pop-form-expand'), {
                    //             height: 0,
                    //             opacity: 0,
                    //             ease: 'power2.inOut',
                    //             duration: 0.35
                    //         })
                    //     }
                    // })
                })
    
                $('.consulta-form-wrap').find('.pop-cont-radio').each(function(idx, el){
                    $(el).find('.radio').attr('value', $(el).find('.w-form-label').text())
                    $(el).find('input').attr('value', $(el).find('.w-form-label').text())
                })
                $('.consulta-form-wrap').find('.pop-cont-radio').clickSet((el)=>{
                    let textDiv = $(el).parents('.pop-form-input-wrap').find('.pop-form-input')
                    textDiv.val($(el).children().text())
                })

                $('.consulta-form-wrap').find('.pop-cont-radio').parents('.pop-form-input-wrap').find('.pop-form-input')
    
    
                $('.consulta-wrap').find('.popup-form').each(function(){
            
                    let elem = this;
                    let divClass = '.pop-form-input-wrap'
            
                    $(this).find('[wr-type="error"]').hide() // Hide errors
                    $(this).find('[wr-type="required-field"]').removeClass('error') // Remove error state from fields
                    
                    var formErrors = false
                    
                    const fieldError = function(field) {
                        field.parents(divClass).find('[wr-type="error"]').show() // Show error message
                        field.siblings('[wr-type="error"]').show()
                        field.addClass('error') // Add error state to this field
                        field.siblings().addClass('error') // Add error state to field siblings
            
                        // if(field.parents(divClass).find('.form-dropdown-txt-wrap').length > 0) 
                        //     field.parents(divClass).find('.form-dropdown-txt-wrap').addClass('error')
            
                        formErrors = true
                    }
                    
                    // Click on the Submit button
                    $(this).find('[wr-type="submit"], [wr-type="progress"]').click(function() {
                        // Check each required field
                        $(elem).find('[wr-type="required-field"]').each(function() {
                            if ($(this).val().length === 0 || $(this).val() == '0') { // If this field is empty
                                fieldError($(this));
                            } 
                            else if ($(this).attr('type') === 'email' // Validation for email fields
                                && ( $(this).val().indexOf('@') === -1 || $(this).val().indexOf('.') === -1) ) 
                            {
                                    fieldError($(this))
                                } 
                            else if ($(this).attr('type') === 'tel' // Validation for phone fields
                                && ( isNaN(parseInt($(this).val())) ) )
                            {
                                    fieldError($(this))
                                }
                            else if ($(this).attr('type') === 'checkbox' // Validation for required checkbox
                                && ($(this).siblings('.w--redirected-checked').length < 1))
                            {
                                    fieldError($(this))
                                }
                        })
                        $(elem).find('[wr-type="required-radio"]').each(function() {
                            if ($(this).find('.w--redirected-checked').length < 1)
                            {
                                    fieldError($(this))
                                }
                        })
            
                        // Submit parent form if there are no errors
                        if (!formErrors && ($(this).attr('wr-type') === 'submit')) {
                            let newInput = $('.loader .form-input-hidden').clone()
                            newInput.attr('name', 'Quartos - RawStrHTML')
                            $('.pop-form-hidden-quartos input').each(function(idx, el){
                                newInput.attr('value', newInput.attr('value') + '<span>' + $(el).attr('name').split('Quartos - ')[1] + ': ' + $(el).attr('value') + '</span><br/>')
                            })
                            $('.pop-form-hidden-quartos').append(newInput)

                            $(elem).find('form').submit()
    
                            $('.consulta-wrap').addClass('finished')
                            $('.consulta-wrap').removeClass('step-1')
                            $('.consulta-wrap').removeClass('step-2')
                            //tiago -  Tentar arranjar o submit
                            console.log('teste');
                            $('.consulta-res-resumo-left').hide();
                            document.querySelector('.consulta-form-wrap').style.paddingTop = '0';
                            document.querySelector('.consulta-form-wrap').style.paddingBottom = '0';
                            document.querySelector('.form-success').style.paddingTop = '0';
                        }
                    });
                    
                    // Remove errors from field
                    $(this).find('[wr-type="required-field"], [wr-type="required-radio"], [wr-type="file-field"], [wr-type="required-dropdown"]').on('keypress blur', function() {
                        $(this).siblings().removeClass('error') // Add error state to field siblings
                        $(this).removeClass('error')
            
                        $(this).siblings('[wr-type="error"]').hide()
                        $(this).find('[wr-type="error"]').hide()
            
                        $(this).parents(divClass).find('[wr-type="error"]').hide()
                        if($(this).parents(divClass).find('.form-dropdown-txt-wrap').length > 0){
                            $(this).parents(divClass).find('.form-dropdown-txt-wrap').removeClass('error')
                        }
                        formErrors = false
                    });

                    $(this).find('.pop-form-picker-block').on('keypress blur click', function() {
                        $(this).siblings().removeClass('error') // Add error state to field siblings
                        $(this).removeClass('error')
            
                        $(this).siblings('[wr-type="error"]').hide()
                        $(this).find('[wr-type="error"]').hide()
            
                        $(this).parents(divClass).find('[wr-type="error"]').hide()
                        if($(this).parents(divClass).find('.form-dropdown-txt-wrap').length > 0){
                            $(this).parents(divClass).find('.form-dropdown-txt-wrap').removeClass('error')
                        }
                        formErrors = false
                    });

                    
                    // Press Enter
                    $(this).find('input, textarea').keypress(function(e) { 
                        if (e.keyCode == 13) {  
                            e.preventDefault()
                            $(this).trigger("change")
                            $(this).find('[wr-type="submit"], [wr-type="progress"]').click()
                        }

                    })
                })
    
            })
        }
        

    // }

    // async render(){
         // -------- FORM AUTOFILL --------
         gsap.set($('.pop-expand-content'), {overflow: 'hidden'})
         $('.popup-wrap.orcamento').each(function(idx, el){
            $($('.surf-trip-tags .tag-wrap').get().reverse()).each(function(index, elem){
                let formSlug = $(elem).attr('data-form')
                
                $(el).find(`input[value="${formSlug}"]`).parents('.pop-form-input-wrap').trigger('mouseenter')
                setTimeout(()=>{
                    $(el).find(`input[value="${formSlug}"]`).parent().click()
                    $(el).find(`input[value="${formSlug}"]`).parents('.pop-form-input-wrap').trigger('mouseleave')
                }, 750)

            })
            
            let heroSlug = $('.det-hero-heading').attr('data-form')

            let ResortNome = document.getElementById('Resort-Nome-2');
            if(ResortNome)
            {
            ResortNome.value = document.getElementById('title').textContent;;
            document.getElementById('surftrip-type-2').value =  $('.surftriptype-name').text();
            }

            $(el).find(`input[value="${heroSlug}"]`).parent().parent().trigger('mouseenter')
            setTimeout(()=>{
                $(el).find(`input[value="${heroSlug}"]`).parent().trigger('click')
                $(el).find(`input[value="${heroSlug}"]`).parent().parent().trigger('mouseleave')
            }, 750)
        })
        gsap.set($('.pop-expand-content'), {
            overflow: 'auto',
            overflowX: 'clip'
        })


        // $(el).find(`input[value="${heroSlug}"]`).prop('checked', true)
        // $(el).find(`input[value="${heroSlug}"]`).siblings('w-radio-input').addClass('w--redirected-checked')
        
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


       

        // -------- THUMB GALLERY --------
        //$('.det-thumb-wrap script').remove()

        if($('.page-container').find('.det-thumb-wrap.splide').first().length > 0 && $('.page-container').find('.det-thumb-wrap .splide__slide').first().length > 0){

            var thumbSplide = new Splide($('.page-container').find('.det-thumb-wrap.splide').first().get(0), {
                type: 'loop',
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
    
            thumbSplide.on( 'ready', function () {
                setTimeout(()=>{
                    thumbSplide.go('+1')
                    thumbSplide.go('-1')

                        // -------- THUMBS HERO POPUP CLICK--------
                        $('.det-thumb-img').clickSet((el)=>{

                            gsap.set($('.det-popup-gal'), {display: 'block', opacity: 0})
                            gsap.to($('.det-popup-gal'), {
                                opacity: 1,
                                duration: 0.5,
                                ease: 'power2.inOut'
                            })

                            
                            $('.det-pop-list *').remove()
                            $('.det-pop-thumb-list *').remove()
                            

                            $('.det-thumb-img').not('.splide__slide--clone').each(function(idx, elem){
                                $('.det-pop-list').append($(elem).find('.full-res-img').children().clone())
                                $('.det-pop-thumb-list').append($(elem).clone())
                            })

                            $('.det-pop-list').children().wrap('<div class="det-pop-item-img"></div>')
                            $('.det-pop-list').children().wrap('<div class="det-pop-item splide__slide"></div>')

                            $('.det-pop-thumb-list').children().removeClass('det-thumb-img')
                            $('.det-pop-thumb-list').children().addClass('det-thumb-img-popup')
                            

                            let i = $(el).attr('aria-label').split(' ')[0]
                            $('.det-popup-content.splide').get(0).splide.refresh()
                            $('.det-popup-content.splide').get(0).splide.go(parseFloat(i)-1)
                            $('.det-popup-thumb-slide.splide').get(0).splide.refresh()
                            $('.det-popup-thumb-slide.splide').get(0).splide.go(parseFloat(i)-1)
                        })
                }, 250)
            } );
            thumbSplide.mount()
        }
        

        // // -------- GALLERY --------
        // if($('.page-container').find('.onda-gal-item.splide').first().length > 0 && $('.page-container').find('.onda-gal-item .splide__slide').first().length > 0){
        //     var galSplide = new Splide($('.page-container').find('.onda-gal-item.splide').first().get(0), {
        //         type: 'loop',
        //         direction: 'ltr',
    
        //         autoWidth: true,
    
        //         // autoHeight: true,
        //         // heightRatio: 1,
    
        //         drag: 'free',
        //         // rewind: 'true',
        //         // flickPower: 150,
    
        //         arrows: true,
        //         speed: 1000,
    
        //         focus: 'center',
    
        //         // arrows: {
        //         //     prev: $('.onda-slide-btn.prev')[0],
        //         //     next: $('.onda-slide-btn.next')[0]
        //         // },
        //         pagination: false,
    
    
        //     } );
    
        //     galSplide.on( 'ready', function () {
        //         setTimeout(()=>{
        //             galSplide.go('+1')
        //             galSplide.go('-1')
        //         }, 250)
        //     } );
        //     galSplide.mount()
        // }


        // // // -------- COMODIDADES GALLERY --------

        if($('.page-container').find('.fac-splide.splide').first().length > 0 && $('.page-container').find('.fac-splide .splide__slide').first().length > 0){
            var commSplide = new Splide($('.page-container').find('.fac-splide.splide').first().get(0), {
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
        // if($('.page-container').find('.acc-left-wrap.splide').first().length > 0 && $('.page-container').find('.acc-left-wrap .splide__slide').first().length > 0){
        //     if($(window).outerWidth() < 992){ // DESKTOP
        //         let accTitleSplide = new Splide($('.page-container').find('.acc-left-wrap.splide').first().get(0), {
        //             type: 'slide',
        //             direction: 'ltr',
        //             autoWidth: true,
        //             arrows: false,
        //             speed: 1000,
        //             pagination: false,
        //         } );
        
        //         accTitleSplide.mount()
        //     }
            
        // }

        // if($('.page-container').find('.acc-gal-wrap.splide').first().length > 0 && $('.page-container').find('.acc-gal-wrap .splide__slide').first().length > 0){
        //     let accGalSplide = new Splide($('.page-container').find('.acc-gal-wrap.splide').first().get(0), {
        //         type: 'slide',
        //         direction: 'ltr',
        //         autoWidth: true,
        //         arrows: false,
        //         speed: 1000,
        //         pagination: false,
        //     } );

        //     accGalSplide.mount()

        //     $('.acc-list-item').clickSet(function(el){
        //         let name = $(el).attr('data-name')

        //         setTimeout(()=>{
        //             gsap.to($('.acc-gal-bottom'), {
        //                 opacity: 1,
        //                 duration: 0.3,
        //                 delay: 0.4,
        //                 ease: 'power3.inOut',
        //             })
        //             gsap.to($('.acc-gal-bottom'), {
        //                 opacity: 0,
        //                 duration: 0.3,
        //                 ease: 'power3.inOut',
        //                 onComplete: ()=>{
        //                     $('.acc-gal-item').not(`[data-name="${name}"]`).removeClass('splide__slide')
        //                     $('.acc-gal-item').not(`[data-name="${name}"]`).removeAttr('id')
        //                     $('.acc-gal-item').not(`[data-name="${name}"]`).removeAttr('role')
        //                     $('.acc-gal-item').not(`[data-name="${name}"]`).removeAttr('aria-roledescription')
        //                     $('.acc-gal-item').not(`[data-name="${name}"]`).removeAttr('aria-label')

        //                     $(`.acc-gal-item[data-name="${name}"]`).addClass('splide__slide')

        //                     gsap.set($(`.acc-gal-item[data-name="${name}"]`), {
        //                         display: 'flex'
        //                     })

        //                     accGalSplide.go(0)
        //                     accGalSplide.refresh()

        //                     gsap.set($('.acc-gal-item').not(`[data-name="${name}"]`), {
        //                         display: 'none'
        //                     })

                            
        //                 }
        //             })

        //         }, 10)
        //     })
        // }

        // -------- TESTEMUNHOS --------
        if($('.page-container').find('.test-holder.splide').length > 0 && $('.page-container').find('.test-holder .splide__slide').first().length > 0){
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



    }
    
    
    
    async function carregarOndas() {
    if($('.page-container').find('.onda-list').length > 0){
        let container = $('.page-container')
        await new Promise(resolve => {
            let total = $(container).find('.onda-list').length;
            let loaded = 0;

            $(container).find('.onda-list').each(function(idx, el){
                let slug = $(el).attr('data-slug');
                

                $(el).load(`/galeria-de-ondas/${slug} .onda-card`, ()=>{
                    loaded++;
                    
                    if (loaded === total) resolve();
                });
            });
        });

           // // -------- GALLERY --------

          if($('.page-container').find('.onda-gal-item.splide').first().length > 0 && $('.page-container').find('.onda-gal-item .splide__slide').first().length > 0){
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
                    galSplide.go('-1')
                }, 250)
            } );
            galSplide.mount()
        }


        await new Promise(resolve => {
            console.log('') // load bearing console log, NÃO APAGAR PFV!!!!!!!!
            setTimeout(()=> resolve(), 750);
        });
    }

    initVimeoLightboxAdvanced();
}



async function carregarAcomodacoes() {
    await new Promise(resolve => {
                let container = $('.page-container')
                let slug = $(container).find('.acc-gal').attr('data-slug')
                $(container).find('.acc-list-item').each(function(idx, el){
                    let name = $(el).attr('data-name')

                    $(el).find('.loader').load(`/modulo-acomodacoes/${slug}  .acc-gal[data-name="${name}"] .acc-gal-list`, ()=>{

                        // $(el).find('.loader .acc-gal-item').attr('data-name', name)

                        // $(container).find('.acc-gal-wrap .acc-gal-list').append($(el).find('.loader .acc-gal-item'))
    let galItem = $(el).find('.loader .acc-gal-item').clone();
galItem.attr('data-name', name);
$(container).find('.acc-gal-wrap .acc-gal-list').append(galItem);

                    
                        if(el === $('.acc-list-item').last().get(0)){
                            setTimeout(()=>{                        
                                // -------- ACOMODAÇÕES POPUP --------
                                $('.acc-gal-wrap .acc-gal-item').clickSet((el)=>{


                                       gsap.set($('.det-popup-gal'), {display: 'block', opacity: 0})
                                    gsap.to($('.det-popup-gal'), {
                                        opacity: 1,
                                        duration: 0.5,
                                        ease: 'power2.inOut'
                                    })


                        //console.log('### AcomodacoesVariables ###');
                        // console.log(acomodacoesList);
                        // console.log(selectedAcomodacao);

                        // if(!acomodacoesList.includes(selectedAcomodacao))
                        console.log('savedAcomodacao: ' + savedAcomodacao);
                        console.log('selectedAcomodacao: ' + selectedAcomodacao);
                            // if(savedAcomodacao != selectedAcomodacao)
                        {
                            savedAcomodacao = selectedAcomodacao;
                            

                            acomodacoesList.push(selectedAcomodacao);


                                 
                                    // console.log("looooooooook in");
                                    // console.log($('.det-pop-list *'));
                                    // console.log($('.det-pop-thumb-list *'));
                                    $('.det-pop-list *').remove()
                                    $('.det-pop-thumb-list *').remove()
                                    //  $('.det-pop-list ').empty();
                                    //  $('.det-pop-thumb-list ').empty();
                                    
                                    // console.log("looooooooook out");

                                    // $('.acc-gal-item.splide__slide').not('.splide__slide--clone').each(function(idx, elem){
                                    //     $('.det-pop-list').append($(elem).find('.full-res-img').children().clone())
                                    //     $('.det-pop-thumb-list').append($(elem).children().find('.contain-img'))
                                    // })

                                    //tiago
                                    $('.acc-gal-item.splide__slide').not('.splide__slide--clone').each(function(idx, elem) {
    // Clone and append the children of .full-res-img
    $('.det-pop-list').append(
        $(elem).find('.full-res-img').children().clone()
    );

    // Clone and append .contain-img itself (not just move it)
    $('.det-pop-thumb-list').append(
        $(elem).children().find('.contain-img').clone()
    );
});

                                    $('.det-pop-list').children().wrap('<div class="det-pop-item-img"></div>')
                                    $('.det-pop-list').children().wrap('<div class="det-pop-item splide__slide"></div>')

                                    $('.det-pop-thumb-list').children().removeClass('contain-img').addClass('cover-img')
                                    $('.det-pop-thumb-list').children().wrap('<div class="det-thumb-img-popup splide__slide"></div>')

                                    let i = $(el).attr('aria-label').split(' ')[0]
                                    $('.det-popup-content.splide').get(0).splide.refresh()
                                    $('.det-popup-content.splide').get(0).splide.go(parseFloat(i)-1)
                                    $('.det-popup-thumb-slide.splide').get(0).splide.refresh()
                                    $('.det-popup-thumb-slide.splide').get(0).splide.go(parseFloat(i)-1)
                                    
                        }
                                })

                                resolve()
                            }, 250)
                        }
                    })
        
                })
            })
 
            // -------- MORE CODE --------

            $('.page-container').find('.acc-content-item').first().addClass('active')
        $('.page-container').find('.acc-list-item').first().addClass('active')

        gsap.set($('.acc-gal-item').not(`[data-name="${$('.page-container').find('.acc-list-item').first().attr('data-name')}"]`), {
            display: 'none'
        })
        $('.acc-gal-item').not(`[data-name="${$('.page-container').find('.acc-list-item').first().attr('data-name')}"]`).removeClass('splide__slide')

        gsap.set($('.acc-content-item').not($('.active')), {
            opacity: 0,
            pointerEvents: 'none',
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
        selectedAcomodacao = $(el).data('name');

            //tiago
            //    $('.det-pop-list *').remove()
            //    $('.det-pop-thumb-list *').remove()


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
                    duration: 1,
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
                    duration: 0.2,
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
                    color: '#93C9D5',
                    duration: 0.3,
                    ease: 'power2.inOut'
                })
            }
        }, (el)=>{
            if(!$(el).hasClass('active')){
                gsap.to($(el), {
                    color: '#DFE8EA',
                    duration: 0.3,
                    ease: 'power2.inOut'
                })
            }
        })

                // // -------- COMODIDADES GALLERY --------

        // if($('.page-container').find('.fac-splide.splide').first().length > 0 && $('.page-container').find('.fac-splide .splide__slide').first().length > 0){
        //     var commSplide = new Splide($('.page-container').find('.fac-splide.splide').first().get(0), {
        //         type: 'slide',
        //         direction: 'ltr',
    
        //         autoWidth: true,
    
        //         // autoHeight: true,
        //         // heightRatio: 1,
    
        //         // drag: 'free',
        //         // flickPower: 150,
    
        //         arrows: true,
        //         speed: 1000,
    
        //         pagination: false,
    
        //     } );
    
        //     commSplide.mount()
        // }

        
        // -------- ATRAÇÕES GALLERY --------
        if($('.page-container').find('.acc-left-wrap.splide').first().length > 0 && $('.page-container').find('.acc-left-wrap .splide__slide').first().length > 0){
            if($(window).outerWidth() < 992){ // DESKTOP
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

        if($('.page-container').find('.acc-gal-wrap.splide').first().length > 0 && $('.page-container').find('.acc-gal-wrap .splide__slide').first().length > 0){
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



        

}




// async function carregarQuartos() {
//     await new Promise(resolve => {
//                 let container = $('.page-container')
//                 let slug = $(container).find('.quarto-gal-wrap .acc-gal-quarto').attr('data-slug')
//                 $(container).find('.acc-list-item').each(function(idx, el){
//                     let name = $(el).attr('data-name')

//                     $(el).find('.loaderquarto').load(`/modulo-acomodacoes/${slug}  .acc-gal-quarto .acc-gal-list-quarto`, ()=>{

//                         // $(el).find('.loader .acc-gal-item').attr('data-name', name)

//                         // $(container).find('.acc-gal-wrap .acc-gal-list').append($(el).find('.loader .acc-gal-item'))
//                         let galItem = $(el).find('.loaderquarto .acc-gal-item-quarto').clone();
//                         galItem.attr('data-name', name);
//                         $(container).find('.quarto-gal-wrap .acc-gal-list-quarto').append(galItem);

                    
//                         if(el === $('.acc-list-item').last().get(0)){ 
//                             setTimeout(()=>{                        
//                                 // -------- ACOMODAÇÕES POPUP --------
//                                    $('.quarto-gal-wrap .acc-gal-item-quarto').clickSet((el)=>{


//                                        gsap.set($('.det-popup-gal'), {display: 'block', opacity: 0})
//                                     gsap.to($('.det-popup-gal'), {
//                                         opacity: 1,
//                                         duration: 0.5,
//                                         ease: 'power2.inOut'
//                                     })


//                         //console.log('### AcomodacoesVariables ###');
//                         // console.log(acomodacoesList);
//                         // console.log(selectedAcomodacao);

//                         // if(!acomodacoesList.includes(selectedAcomodacao))
//                         console.log('savedQuarto: ' + savedQuarto);
//                         console.log('selectedQuarto: ' + selectedQuarto);
//                             // if(savedAcomodacao != selectedAcomodacao)
//                         {
//                             savedQuarto = selectedQuarto;
                            

//                             quartosList.push(selectedQuarto);


//                                     $('.det-pop-list *').remove()
//                                     $('.det-pop-thumb-list *').remove()
//                                     //  $('.det-pop-list ').empty();
//                                     //  $('.det-pop-thumb-list ').empty();
                                    

//                                     // $('.acc-gal-item.splide__slide').not('.splide__slide--clone').each(function(idx, elem){
//                                     //     $('.det-pop-list').append($(elem).find('.full-res-img').children().clone())
//                                     //     $('.det-pop-thumb-list').append($(elem).children().find('.contain-img'))
//                                     // })

//                                     //tiago
//                                     $('.quarto-gal-wrap .acc-gal-item-quarto.splide__slide').not('.splide__slide--clone').each(function(idx, elem) {
//                                             // Clone and append the children of .full-res-img
//                                             $('.det-pop-list').append(
//                                                 $(elem).find('.full-res-img').children().clone()
//                                             );

//                                             // Clone and append .contain-img itself (not just move it)
//                                             $('.det-pop-thumb-list').append(
//                                                 $(elem).children().find('.contain-img').clone()
//                                             );
// });

//                                     $('.det-pop-list').children().wrap('<div class="det-pop-item-img"></div>')
//                                     $('.det-pop-list').children().wrap('<div class="det-pop-item splide__slide"></div>')

//                                     $('.det-pop-thumb-list').children().removeClass('contain-img').addClass('cover-img')
//                                     $('.det-pop-thumb-list').children().wrap('<div class="det-thumb-img-popup splide__slide"></div>')

//                                     // console.log($(el).attr('aria-label'));
//                                     // let i = $(el).attr('aria-label').split(' ')[0]
//                                     // $('.det-popup-content.splide').get(0).splide.refresh()
//                                     // $('.det-popup-content.splide').get(0).splide.go(parseFloat(i)-1)
//                                     // $('.det-popup-thumb-slide.splide').get(0).splide.refresh()
//                                     // $('.det-popup-thumb-slide.splide').get(0).splide.go(parseFloat(i)-1)
                                    
//                         }
//                                 })

//                                 resolve()
//                             }, 250)
//                         }
//                     })
        
//                 })
//             })
 
//             // -------- MORE CODE --------

//         //     $('.page-container').find('.acc-content-item').first().addClass('active')
//         // $('.page-container').find('.acc-list-item').first().addClass('active')

//         gsap.set($('.quarto-gal-wrap .acc-gal-item-quarto').not(`[data-name="${$('.page-container').find('.acc-list-item').first().attr('data-name')}"]`), {
//             display: 'none'
//         })
//         $('.quarto-gal-wrap .acc-gal-item-quarto').not(`[data-name="${$('.page-container').find('.acc-list-item').first().attr('data-name')}"]`).removeClass('splide__slide')

//         gsap.set($('.acc-content-item').not($('.active')), {
//             opacity: 0,
//             pointerEvents: 'none',
//         })
//         gsap.set($('.acc-list-item').not($('.active')), {
//             color: '#DFE8EA'
//         })
//         gsap.to($('.acc-right'), {
//             height: ()=>{
//                 return $('.acc-content-item').first().outerHeight()
//             },
//             duration: 1,
//             ease: 'power2.inOut'
//         })

//         $('.acc-list-item').clickSet(function(el){
//         selectedQuarto = $(el).data('name');

//             //tiago
//             //    $('.det-pop-list *').remove()
//             //    $('.det-pop-thumb-list *').remove()


//             let idx = $(el).index()
//             let activeContent = $('.acc-content-item.active')
//             let newActiveContent = $($('.acc-content-item').get(idx))

//             let activeList = $('.acc-list-item.active')
//             let newActiveList = $($('.acc-list-item').get(idx))

//             if(idx != activeContent.index()){
//                 gsap.to($('.acc-right'), {
//                     height: ()=>{
//                         return newActiveContent.outerHeight()
//                     },
//                     duration: 1,
//                     ease: 'power2.inOut'
//                 })

//                 gsap.to(activeContent, {
//                     opacity: 0,
//                     pointerEvents: 'none',
//                     duration: 0.3,
//                     ease: 'power3.inOut'
//                 })
//                 activeContent.removeClass('active')

//                 gsap.to(newActiveContent, {
//                     opacity: 1,
//                     pointerEvents: 'auto',
//                     duration: 0.2,
//                     delay: 0.4,
//                     ease: 'power3.inOut'
//                 })
//                 newActiveContent.addClass('active')

//                 gsap.to($('.acc-list-item').not(newActiveList), {
//                     color: '#DFE8EA',
//                     duration: 0.5,
//                     ease: 'power3.out',
//                 })
//                 gsap.to(newActiveList, {
//                     color: '#009ABF',
//                     duration: 0.5,
//                     ease: 'power3.out',
//                 })
//                 activeList.removeClass('active')
//                 newActiveList.addClass('active')

//             }
//         })

//         $('.acc-list-item').hoverSet((el)=>{
//             if(!$(el).hasClass('active')){
//                 gsap.to($(el), {
//                     color: '#93C9D5',
//                     duration: 0.3,
//                     ease: 'power2.inOut'
//                 })
//             }
//         }, (el)=>{
//             if(!$(el).hasClass('active')){
//                 gsap.to($(el), {
//                     color: '#DFE8EA',
//                     duration: 0.3,
//                     ease: 'power2.inOut'
//                 })
//             }
//         })

//                 // // -------- COMODIDADES GALLERY --------

//         // if($('.page-container').find('.fac-splide.splide').first().length > 0 && $('.page-container').find('.fac-splide .splide__slide').first().length > 0){
//         //     var commSplide = new Splide($('.page-container').find('.fac-splide.splide').first().get(0), {
//         //         type: 'slide',
//         //         direction: 'ltr',
    
//         //         autoWidth: true,
    
//         //         // autoHeight: true,
//         //         // heightRatio: 1,
    
//         //         // drag: 'free',
//         //         // flickPower: 150,
    
//         //         arrows: true,
//         //         speed: 1000,
    
//         //         pagination: false,
    
//         //     } );
    
//         //     commSplide.mount()
//         // }

        
//         // -------- ATRAÇÕES GALLERY --------
//         if($('.page-container').find('.acc-left-wrap.splide').first().length > 0 && $('.page-container').find('.acc-left-wrap .splide__slide').first().length > 0){
//             if($(window).outerWidth() < 992){ // DESKTOP
//                 let accTitleSplide = new Splide($('.page-container').find('.acc-left-wrap.splide').first().get(0), {
//                     type: 'slide',
//                     direction: 'ltr',
//                     autoWidth: true,
//                     arrows: false,
//                     speed: 1000,
//                     pagination: false,
//                 } );
        
//                 accTitleSplide.mount()
//             }
            
//         }

//         if($('.page-container').find('.quarto-gal-wrap.splide').first().length > 0 && $('.page-container').find('.quarto-gal-wrap .splide__slide').first().length > 0){
//             let accGalSplide = new Splide($('.page-container').find('.quarto-gal-wrap.splide').first().get(0), {
//                 type: 'slide',
//                 direction: 'ltr',
//                 autoWidth: true,
//                 arrows: false,
//                 speed: 1000,
//                 pagination: false,
     
//             } );

//             accGalSplide.mount()


//             //        let accGalSplide2 = new Splide($('.page-container').find('.quartosopen').first().get(0), {
//             //     type: 'slide',
//             //     direction: 'ltr',
//             //     autoWidth: true,
//             //     arrows: false,
//             //     speed: 1000,
//             //     pagination: false,
//             // } );

//             // accGalSplide2.mount()



//             $('.acc-list-item').clickSet(function(el){
                
//                 let name = $(el).attr('data-name')
// console.log("name " +name);
//                 setTimeout(()=>{
//                     gsap.to($('.acc-gal-bottom'), {
//                         opacity: 1,
//                         duration: 0.3,
//                         delay: 0.4,
//                         ease: 'power3.inOut',
//                     })
//                     gsap.to($('.acc-gal-bottom'), {
//                         opacity: 0,
//                         duration: 0.3,
//                         ease: 'power3.inOut',
//                         onComplete: ()=>{
//                             $('.quarto-gal-wrap .acc-gal-item-quarto').not(`[data-name="${name}"]`).removeClass('splide__slide')
//                             $('.quarto-gal-wrap .acc-gal-item-quarto').not(`[data-name="${name}"]`).removeAttr('id')
//                             $('.quarto-gal-wrap .acc-gal-item-quarto').not(`[data-name="${name}"]`).removeAttr('role')
//                             $('.quarto-gal-wrap .acc-gal-item-quarto').not(`[data-name="${name}"]`).removeAttr('aria-roledescription')
//                             $('.quarto-gal-wrap .acc-gal-item-quarto').not(`[data-name="${name}"]`).removeAttr('aria-label')

//                             $(`.quarto-gal-wrap .acc-gal-item[data-name="${name}"]`).addClass('splide__slide')

//                             gsap.set($(`.quarto-gal-wrap .acc-gal-item-quarto[data-name="${name}"]`), {
//                                 display: 'flex'
//                             })

//                             accGalSplide.go(0)
//                             accGalSplide.refresh()

//                             gsap.set($('.quarto-gal-wrap .acc-gal-item-quarto').not(`[data-name="${name}"]`), {
//                                 display: 'none'
//                             })

                            
//                         }
//                     })

//                 }, 10)
//             })
//          }



//         $(document).on('click', '.quartosopen', function() {
//   // Find the closest .quarto-gal-wrap relative to the clicked button
//   const galWrap = $(this).closest('.quarto-gal-wrap');

//   // If not found nearby, optionally search the whole page
//   const targetWrap = galWrap.length ? galWrap : $('.quarto-gal-wrap').first();

//   // Click the first .acc-gal-item inside
//   targetWrap.find('.acc-gal-item-quarto').first().trigger('click');
// });


// }

async function carregarQuartos()
{
    await new Promise(resolve => {
                let container = $('.page-container')
                let slug = $(container).find('.acc-gal-quarto').attr('data-slug')
                $(container).find('.acc-list-item').each(function(idx, el){
                    let name = $(el).attr('data-name')

                    $(el).find('.loaderquarto').load(`/modulo-acomodacoes/${slug}  .acc-gal-quarto .acc-gal-list-quarto`, ()=>{

                        // $(el).find('.loader .acc-gal-item').attr('data-name', name)

                        // $(container).find('.acc-gal-wrap .acc-gal-list').append($(el).find('.loader .acc-gal-item'))
    let galItem = $(el).find('.loaderquarto .acc-gal-item-quarto').clone();

galItem.attr('data-name', name);
$(container).find('.acc-gal-wrap-quarto .acc-gal-list-quarto').append(galItem);

                    
                        if(el === $('.acc-list-item').last().get(0)){
                            setTimeout(()=>{                        
                                // -------- ACOMODAÇÕES POPUP --------
                                $('.acc-gal-wrap-quarto .acc-gal-item-quarto').clickSet((el)=>{


                                       gsap.set($('.det-popup-gal'), {display: 'block', opacity: 0})
                                    gsap.to($('.det-popup-gal'), {
                                        opacity: 1,
                                        duration: 0.5,
                                        ease: 'power2.inOut'
                                    })


                        //console.log('### AcomodacoesVariables ###');
                        // console.log(acomodacoesList);
                        // console.log(selectedAcomodacao);

                        // if(!acomodacoesList.includes(selectedAcomodacao))
                        console.log('savedQuarto: ' + savedQuarto);
                        console.log('selectedQuarto: ' + selectedQuarto);
                            // if(savedAcomodacao != selectedAcomodacao)
                        {
                            savedQuarto = selectedQuarto;
                            

                            quartosList.push(selectedQuarto);


                                 
                                    // console.log("looooooooook in");
                                    // console.log($('.det-pop-list *'));
                                    // console.log($('.det-pop-thumb-list *'));
                                    $('.det-pop-list *').remove()
                                    $('.det-pop-thumb-list *').remove()
                                    //  $('.det-pop-list ').empty();
                                    //  $('.det-pop-thumb-list ').empty();
                                    
                                    // console.log("looooooooook out");

                                    // $('.acc-gal-item.splide__slide').not('.splide__slide--clone').each(function(idx, elem){
                                    //     $('.det-pop-list').append($(elem).find('.full-res-img').children().clone())
                                    //     $('.det-pop-thumb-list').append($(elem).children().find('.contain-img'))
                                    // })

                                    //tiago
                                    $('.acc-gal-item-quarto.splide__slide').not('.splide__slide--clone').each(function(idx, elem) {
    // Clone and append the children of .full-res-img
    $('.det-pop-list').append(
        $(elem).find('.full-res-img').children().clone()
    );

    // Clone and append .contain-img itself (not just move it)
    $('.det-pop-thumb-list').append(
        $(elem).children().find('.contain-img').clone()
    );
});

                                    $('.det-pop-list').children().wrap('<div class="det-pop-item-img"></div>')
                                    $('.det-pop-list').children().wrap('<div class="det-pop-item splide__slide"></div>')

                                    $('.det-pop-thumb-list').children().removeClass('contain-img').addClass('cover-img')
                                    $('.det-pop-thumb-list').children().wrap('<div class="det-thumb-img-popup splide__slide"></div>')

                                    let i = $(el).attr('aria-label').split(' ')[0]
                                    $('.det-popup-content.splide').get(0).splide.refresh()
                                    $('.det-popup-content.splide').get(0).splide.go(parseFloat(i)-1)
                                    $('.det-popup-thumb-slide.splide').get(0).splide.refresh()
                                    $('.det-popup-thumb-slide.splide').get(0).splide.go(parseFloat(i)-1)
                                    
                        }
                                })

                                resolve()
                            }, 250)
                        }
                    })
        
                })
            })
 
            // -------- MORE CODE --------

            $('.page-container').find('.acc-content-item').first().addClass('active')
        $('.page-container').find('.acc-list-item').first().addClass('active')

        gsap.set($('.acc-gal-item-quarto').not(`[data-name="${$('.page-container').find('.acc-list-item').first().attr('data-name')}"]`), {
            display: 'none'
        })
        $('.acc-gal-item-quarto').not(`[data-name="${$('.page-container').find('.acc-list-item').first().attr('data-name')}"]`).removeClass('splide__slide')

        gsap.set($('.acc-content-item').not($('.active')), {
            opacity: 0,
            pointerEvents: 'none',
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
        selectedAcomodacao = $(el).data('name');

            //tiago
            //    $('.det-pop-list *').remove()
            //    $('.det-pop-thumb-list *').remove()


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
                    duration: 1,
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
                    duration: 0.2,
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
                    color: '#93C9D5',
                    duration: 0.3,
                    ease: 'power2.inOut'
                })
            }
        }, (el)=>{
            if(!$(el).hasClass('active')){
                gsap.to($(el), {
                    color: '#DFE8EA',
                    duration: 0.3,
                    ease: 'power2.inOut'
                })
            }
        })

                // // -------- COMODIDADES GALLERY --------

        // if($('.page-container').find('.fac-splide.splide').first().length > 0 && $('.page-container').find('.fac-splide .splide__slide').first().length > 0){
        //     var commSplide = new Splide($('.page-container').find('.fac-splide.splide').first().get(0), {
        //         type: 'slide',
        //         direction: 'ltr',
    
        //         autoWidth: true,
    
        //         // autoHeight: true,
        //         // heightRatio: 1,
    
        //         // drag: 'free',
        //         // flickPower: 150,
    
        //         arrows: true,
        //         speed: 1000,
    
        //         pagination: false,
    
        //     } );
    
        //     commSplide.mount()
        // }

        
        // -------- ATRAÇÕES GALLERY --------
        if($('.page-container').find('.acc-left-wrap.splide').first().length > 0 && $('.page-container').find('.acc-left-wrap .splide__slide').first().length > 0){
            if($(window).outerWidth() < 992){ // DESKTOP
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
        

        if($('.page-container').find('.acc-gal-wrap-quarto.splide').first().length > 0 && $('.page-container').find('.acc-gal-wrap-quarto .splide__slide').first().length > 0){
            let accGalSplide = new Splide($('.page-container').find('.acc-gal-wrap-quarto.splide').first().get(0), {
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
                            $('.acc-gal-item-quarto').not(`[data-name="${name}"]`).removeClass('splide__slide')
                            $('.acc-gal-item-quarto').not(`[data-name="${name}"]`).removeAttr('id')
                            $('.acc-gal-item-quarto').not(`[data-name="${name}"]`).removeAttr('role')
                            $('.acc-gal-item-quarto').not(`[data-name="${name}"]`).removeAttr('aria-roledescription')
                            $('.acc-gal-item-quarto').not(`[data-name="${name}"]`).removeAttr('aria-label')

                            $(`.acc-gal-item-quarto[data-name="${name}"]`).addClass('splide__slide')

                            gsap.set($(`.acc-gal-item-quarto[data-name="${name}"]`), {
                                display: 'flex'
                            })

                            accGalSplide.go(0)
                            accGalSplide.refresh()

                            gsap.set($('.acc-gal-item-quarto').not(`[data-name="${name}"]`), {
                                display: 'none'
                            })

                            
                        }
                    })

                }, 10)
            })
        }



        
//         $(document).on('click', '.quartosopen', function() {
//   // Find the closest .quarto-gal-wrap relative to the clicked button
//   const galWrap = $(this).closest('.acc-gal-wrap-quarto');

//   // If not found nearby, optionally search the whole page
//   const targetWrap = galWrap.length ? galWrap : $('.acc-gal-wrap-quarto').first();

//   // Click the first .acc-gal-item inside
//   targetWrap.find('.acc-gal-item-quarto').first().trigger('click');
// });




//         $('.quartosopen').clickSet((el)=>{
//             // alert("1");
//           // Find the closest .quarto-gal-wrap relative to the clicked button
//   const galWrap = $(this).closest('.acc-gal-wrap-quarto');

//   // If not found nearby, optionally search the whole page
//   const targetWrap = galWrap.length ? galWrap : $('.acc-gal-wrap-quarto').first();

//   // Click the first .acc-gal-item inside
//   targetWrap.find('.acc-gal-item-quarto').first().trigger('click');
// })


// $(document).on('pointerup touchend click', '.quartosopen', function (e) {
//   const $wrap = $(this).closest('.acc-gal-wrap-quarto');
//   const $targetWrap = $wrap.length ? $wrap : $('.acc-gal-wrap-quarto').first();
//   const el = $targetWrap.find('.acc-gal-item-quarto').first().get(0);
//   if (!el) return;

//   // try pointerup/touchend first (mobile-friendly), then click
//   try { el.dispatchEvent(new PointerEvent('pointerup', { bubbles: true })); } catch(e) {}
//   try { el.dispatchEvent(new Event('touchend', { bubbles: true })); } catch(e) {}
//   el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
// });




$(document).on('pointerup touchend click', '.quartosopen', function (e) {
  e.preventDefault(); // avoid double-firing
  const $wrap = $(this).closest('.acc-gal-wrap-quarto');
  const $targetWrap = $wrap.length ? $wrap : $('.acc-gal-wrap-quarto').first();

  // Prefer a visible, non-clone slide
  const $item = $targetWrap.find('.acc-gal-item-quarto:visible').not('.splide__slide--clone').first();
  if (!$item.length) return;

  const el = $item.get(0);

  // Best-effort: try pointer/touch first (closer to a user gesture on iOS)
  try { el.dispatchEvent(new PointerEvent('pointerup', { bubbles: true })); } catch (_) {}
  try { el.dispatchEvent(new TouchEvent('touchend', { bubbles: true })); } catch (_) {}

  // Fallbacks
  if (typeof el.click === 'function') el.click();      // native click
  else $item.trigger('click');                         // last resort
});




// $(document).on('pointerup touchend click', '.quartosopen', function (e) {
//   e.preventDefault();
//   const $wrap = $(this).closest('.acc-gal-wrap-quarto');
//   const $targetWrap = $wrap.length ? $wrap : $('.acc-gal-wrap-quarto').first();
//   const $item = $targetWrap.find('.acc-gal-item-quarto').not('.splide__slide--clone').first();
//   if (!$item.length) return;

//   // stash old styles
//   const oldDisplay = $item.css('display');
//   const oldVisibility = $item.css('visibility');

//   // make it “present” for the event (still invisible to user)
//   $item.css({ display: 'block', visibility: 'visible' });

//   requestAnimationFrame(() => {
//     // prefer native click first
//     const el = $item.get(0);
//     if (typeof el.click === 'function') el.click();
//     else $item.trigger('click');

//     // restore styles after the JS stack clears
//     setTimeout(() => {
//         console.log("correr")
//       $item.css({ display: oldDisplay, visibility: oldVisibility });
//     }, 10000);
//   });
// });







// $(document).on('pointerup touchend click', '.quartosopen', function (e) {
//   e.preventDefault();
//   const $wrap = $(this).closest('.acc-gal-wrap-quarto');
//   const $targetWrap = $wrap.length ? $wrap : $('.acc-gal-wrap-quarto').first();
//   const $item = $targetWrap.find('.acc-gal-item-quarto').not('.splide__slide--clone').first();
//   if (!$item.length) return;

//   // stash old styles
//   const oldDisplay = $targetWrap.css('display');
//   const oldVisibility = $targetWrap.css('visibility');

//   // make it “present” for the event (still invisible to user)
//   $targetWrap.css({ display: 'block', visibility: 'visible' });

// //   requestAnimationFrame(() => {
//     // prefer native click first
//     const el = $item.get(0);

//   // Best-effort: try pointer/touch first (closer to a user gesture on iOS)
//   try { el.dispatchEvent(new PointerEvent('pointerup', { bubbles: true })); } catch (_) {}
//   try { el.dispatchEvent(new TouchEvent('touchend', { bubbles: true })); } catch (_) {}

//   // Fallbacks
//   if (typeof el.click === 'function') el.click();      // native click
//   else $item.trigger('click');                   

//     // restore styles after the JS stack clears
//     setTimeout(() => {
//         console.log("correr")
//       $targetWrap.css({ display: 'none', visibility: 'hidden' });
//     }, 10000);
// //   });

  
// });



}