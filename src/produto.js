import gsap from "gsap";
// import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin.min.js";
//import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/src/all";
//import { TextPlugin } from "gsap/TextPlugin";


/****************************************************************************************
---------------------------------------- PRODUTO ----------------------------------------
*****************************************************************************************/


import { initCommonCode, createAnchor } from './main.js';
import { ResortData, sheetInit } from './excelProcessing.js';



initCommonCode();

// pageClasses['Produto'] = class Produto extends Page {
//     async setup(){

        
        // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
        $('.w-condition-invisible').remove()


        if(Webflow.env('editor') == undefined){
            $('.consulta-page-wrap, .consulta-wrap, .consulta-hero-wrap').removeClass('editor')
        }

        // -------- GALERIA DE ONDAS --------
        if($('.page-container').find('.onda-list').length > 0){
            let container = $('.page-container')
            await new Promise(resolve => {
                $(container).find('.onda-list').each(function(idx, el){
                    
                    let slug = $(el).attr('data-slug') 
        
                    $(el).load(`/galeria-de-ondas/${slug} .onda-card`, ()=>{
                        resolve()
                    })
                })
            })

            await new Promise(resolve => {
                console.log('') // load bearing console log, NÃO APAGAR PFV!!!!!!!!
                setTimeout(()=>{
                    resolve()
                }, 750)
            })
        }


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


        if(barba.history.previous != null){
            $('.ancoras-back').hoverSet((el)=>{
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
            $('.ancoras-back').clickSet((el)=>{
                barba.go(barba.history.previous.url)
            })
        }
        else{
            $('.ancoras-back').remove()
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

        if($('.ancoras-fixed-wrap *').length == 0){
            $('.ancoras-fixed-cont').remove()
        }


        // -------- ACOMODAÇÕES --------
        let selectedAcomodacao ='primeiro';
        let savedAcomodacao ="";
        let acomodacoesList = [];

        if($('.page-container').find('.acc-list-item').length > 0){
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
                                $('.acc-gal-item').clickSet((el)=>{


                                       gsap.set($('.det-popup-gal'), {display: 'block', opacity: 0})
                                    gsap.to($('.det-popup-gal'), {
                                        opacity: 1,
                                        duration: 0.5,
                                        ease: 'power2.inOut'
                                    })


                                               console.log('### AcomodacoesVariables ###');
                        console.log(acomodacoesList);
                        console.log(selectedAcomodacao);

                        // if(!acomodacoesList.includes(selectedAcomodacao))
                            if(savedAcomodacao != selectedAcomodacao)
                        {
                            savedAcomodacao = selectedAcomodacao;
                            console.log("entrou");

                            acomodacoesList.push(selectedAcomodacao);


                                 
                                    console.log("looooooooook in");
console.log($('.det-pop-list *'));
console.log($('.det-pop-thumb-list *'));
                                    $('.det-pop-list *').remove()
                                    $('.det-pop-thumb-list *').remove()
                                    //  $('.det-pop-list ').empty();
                                    //  $('.det-pop-thumb-list ').empty();
                                    
                                    console.log("looooooooook out");

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
        }
        
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

                        console.log(mult)
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
                        let minMonth = minRange.split(' ')[1].toLowerCase()
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
                    $(el).on('click mouseenter', ()=>{
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
                    $(el).on('mouseleave', ()=>{
    
                        gsap.to($(el), {
                            zIndex: 0,
                            ease: 'power2.inOut',
                            duration: 0.35
                        })
                        if($(el).find('.pop-form-expand').length > 0){
                            gsap.to($(el).find('.pop-form-expand'), {
                                height: 0,
                                opacity: 0,
                                ease: 'power2.inOut',
                                duration: 0.35
                            })
                        }
                    })
                })
    
                $('.consulta-form-wrap').find('.pop-cont-radio').each(function(idx, el){
                    $(el).find('.radio').attr('value', $(el).find('.w-form-label').text())
                    $(el).find('input').attr('value', $(el).find('.w-form-label').text())
                })
                $('.consulta-form-wrap').find('.pop-cont-radio').clickSet((el)=>{
                    let textDiv = $(el).parents('.pop-form-input-wrap').find('.pop-form-input')
                    textDiv.val($(el).children().text())
                })
    
    
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

                            console.log("looooooooook in 2");
                            $('.det-pop-list *').remove()
                            $('.det-pop-thumb-list *').remove()
                            console.log("looooooooook out 2");

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


        // // -------- COMODIDADES GALLERY --------

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


        
//     }

//     async intro(){
//         //$('.loader').remove()
//     }

//     async leave(){
//         gsap.to($('.ancoras-fixed'), {
//             y: '100%',
//             duration: 0.25,
//             ease: 'power2.inOut',
//             onComplete: ()=>{
//                 $('.global-fixed *').remove()
//             }
//         })
//         return
//     }
// }












//old code


// /****************************************************************************************
// ------------------------------------ FILE PROCESSING ------------------------------------
// *****************************************************************************************/

// let globalVarSurfistaOrMotorista = '';

// class ResortData {
//     constructor(obj){

//         let startIdx = 0
//         let endIdx = 0

//         let type = 'A'

//         obj.forEach((el, idx) => {
//             let findStart = el.findIndex((el)=>{ return el === 'START'})
//             if(findStart >= 0) startIdx = idx

//             let findEnd = el.findIndex((el)=>{ return el === 'END'})
//             if(findEnd >= 0) endIdx = idx

//             let tipoA = el.findIndex((el)=>{ return el === 'TIPO A'})
//             let tipoB = el.findIndex((el)=>{ return el === 'TIPO B'})
//             let tipoC = el.findIndex((el)=>{ return el === 'TIPO C'})
//             let tipoD = el.findIndex((el)=>{ return el === 'TIPO D'})

//             if(tipoA >= 0) {
//                 type = 'A'
//                 if(tipoA > findStart) startIdx = idx
//             }
//             if(tipoB >= 0) {
//                 type = 'B'
//                 if(tipoB > findStart) startIdx = idx
//             }
//             if(tipoC >= 0) {
//                 type = 'C'
//                 if(tipoC > findStart) startIdx = idx
//             }
//             if(tipoD >= 0) {
//                 type = 'D'
//                 if(tipoD > findStart) startIdx = idx
//             } 

//         });

//         obj = obj.slice(startIdx+1, endIdx)
//         window.obj = obj

//         // cleanup fully empty rows
//         let toSplice = []
//         obj.forEach((row, outerIdx, object) =>{
//             let filter = row.filter(n=>n)
//             if(filter.length === 0) toSplice.push(outerIdx)
//         })
//         toSplice.forEach((idx, arrIdx) => {
//             obj.splice(idx - arrIdx, 1)
//         })



//         this.resortName = obj[0][0]
//         this.optPeriods = obj[0].filter(n => n).splice(1)

//         let perStart = obj[0].findIndex((el)=>{return el == this.optPeriods[0]})
//         let perEnd = obj[0].findIndex((el)=>{return el == this.optPeriods[1]})
//         this.perLength = perEnd - perStart
//         // this.perLength = Math.abs(this.perLength);

//         //tiago
//         if(this.perLength <0) 
//         {perEnd = 5;
//           perEnd = obj[1].filter((n) => n).splice(1).length + 1;
//           this.perLength = perEnd - perStart;
//         }

//         this.options = {}
//         Array.from(new Set(obj[1].filter(n => n).splice(0, perStart))).forEach(el => {
//             if(el == 'Noites'){
//                 this.options['Noites no alojamento'] = []    
//             }
//             else{
//                 this.options[el] = []
//             }
//         })

//         this.optLen = Object.values(this.options).length

//         this.options['Noites no alojamento'] = Array.from(new Set(obj[1].filter(n => n).splice(perStart, perEnd)))

        
//         obj.splice(0, 1)

//         if(obj[0][obj[0].length-1] == ''){
//             obj.forEach((row, rowIdx) => {
//                 row.pop()
//             })
//         }

//         this.headers = obj[0]

//         obj.splice(0, 1)


//         obj.forEach((el, outerIdx) =>{
//             el.forEach((attr, idx) => {
//                 //console.log(outerIdx)
//                 if(attr === ''){
//                     if(idx < this.optLen) {
//                         obj[outerIdx][idx] = obj[outerIdx-1][idx]
//                     }
//                     else if(idx >= this.optLen){
//                         obj[outerIdx][idx] = '0 €'
//                     }
//                 } 
                
//                 // else if(attr === '' && outerIdx == 0){
//                 //     obj[outerIdx][idx] = '0'
//                 // }
//             })
//         })

//         // cleanup fully priceless
//         toSplice = []
//         obj.forEach((row, outerIdx, object) =>{
//             let filter = row.filter(n=> n == '0 €')
//             if(filter.length === this.headers.length - this.optLen) toSplice.push(outerIdx)
//         })
//         toSplice.forEach((idx, arrIdx) => {
//             obj.splice(idx - arrIdx, 1)
//         })


//         this.objDict = []


//         let foundPromo = false

//         obj.forEach((row, rowIdx) =>{
//             this.objDict[rowIdx] = {}
//             this.objDict[rowIdx]['Prices'] = []
//             this.objDict[rowIdx]['Options'] = {}

//             let promo = false
//             let originalIdx = 0

//             let period = 0

//             //console.log('outer: ' + rowIdx)
// console.log(row);
//             row.forEach((col, colIdx) => {
//                 //console.log('inner: ' + colIdx)
//                 let key = this.headers[colIdx]

//                 if(colIdx < (this.optLen - 1)){
//                     // console.log(1);
//                     this.objDict[rowIdx]['Options'][key] = col
//                     this.options[key].push(col)
//                 }
//                 else if(colIdx == (this.optLen-1)){
//                     // console.log(2);
//                     this.objDict[rowIdx]['Options'][key] = col
//                     this.options[key].push(col)

//                     if(this.objDict.find((el, idx)=>{
//                         // console.log(2.1);
//                         if(idx !== rowIdx){
//                                 if(JSON.stringify(this.objDict[rowIdx]['Options']) == JSON.stringify(el.Options)){
//                                     originalIdx = idx
//                                     return true
//                                 }
//                                 else{
//                                     return false
//                                 }
                                
//                         }
//                     })){
//                         // console.log(2.2);
//                         promo = true
//                         this.objDict[rowIdx] = ''
//                     }
//                 }
//                 else{
//                     if(promo == false){
//                         period = Math.floor((colIdx - this.optLen)/ this.perLength)

//                         if(period == this.objDict[rowIdx]['Prices'].length){
//                             this.objDict[rowIdx]['Prices'][period] = [[],[],[]]
//                         }

//                         let price = col.replaceAll('€', ' ').trim().replace(',', "").replace('.', "").replace(' ', "")
//                         price = price.toLocaleString().replaceAll(',', ' ')
//                         //this.objDict[rowIdx][key] = {'nonPromo': col, 'Promo': '0 €'}
//                         //  console.log( key + " "  + price);
                         
//                          try{
//                         this.objDict[rowIdx]['Prices'][period][0][(colIdx - this.optLen) - (period * this.perLength)] = key
//                         this.objDict[rowIdx]['Prices'][period][1][(colIdx - this.optLen) - (period * this.perLength)] = price
//                         }
//                          catch (error) {  
//                               this.objDict[rowIdx]['Prices'][period][0][(colIdx - this.optLen) - (period * (this.perLength*-1))] = key
//                         this.objDict[rowIdx]['Prices'][period][1][(colIdx - this.optLen) - (period * (this.perLength*-1))] = price
//                     }   
                        
    
//                     }
//                     else if(promo == true){
//                         period = Math.floor((colIdx - this.optLen)/ this.perLength)
//                         let price = col.replaceAll('€', ' ').trim().replace(',', "").replace('.', "").replace(' ', "")
//                         price = price.toLocaleString().replaceAll(',', ' ')
//                         this.objDict[originalIdx]['Prices'][period][2][(colIdx - this.optLen) - (period * this.perLength)] = price
//                         if(parseInt(col) > 1){
//                             foundPromo = true
//                         }
//                         //this.objDict[originalIdx][key]['Promo'] = col
//                     }
//                 }

                
//             })
//         })

//         if(foundPromo){
//                if (type == "C" )
//         {
//             $(".consulta-quartos-tag").remove();
//             $(".promo-price").first().parent().remove();
//         }
//         else
//         {
//             $('.consulta-price').not('.promo').parent().remove()
//         }
//     }
//         else{
//             //tiago
//              if (type == "C" )
//         {
//           // $(".consulta-promo-tag").remove();
//             $(".consulta-quartos-tag").remove();
//             // $(".consulta-price.promo").first().parent().remove();
//             // $(".consulta-price.promo").eq(1).parent().remove();
//             $(".promo-price").parent().remove();
//         }
//         else
//         {
//             $('.consulta-promo-tag').remove()
//             $('.consulta-price.promo').parent().remove()
//         }
            
//         }

//         this.objDict = this.objDict.filter((n) => n)


//         let perFilter
//         if($(window).outerWidth() >= 992){ // DESKTOP
//             perFilter = $('.loader .flt-dd-wrap.desktop').clone()
//         }
//         else{
//             perFilter = $('.loader .flt-dd-wrap.mobile').clone()
//         }

//         let perRes = $('.loader .consulta-detalhe-line').clone()
//         let perInput = $('.loader .form-input-hidden').clone()

//         let perController = $('.loader .flt-dd-hidden').clone()

//         perFilter.attr('data-req', '')
//         perFilter.find('.flt-input-label').children().text('Periodo')

//         perFilter.attr('data-filter-sync', 'Periodo')
//         perController.attr('data-filter-sync', 'Periodo')


//         perRes.find('.consulta-detalhe-title').children().text('Periodo')
//         perRes.attr('data-filter-sync', 'Periodo')

//         perInput.attr('data-filter-sync', 'Periodo')
//         perInput.attr('id', 'Periodo')
//         perInput.attr('name', 'Periodo')


//         // filter fully empty periods

//         // console.log('optLen: ' + this.optLen)
//         // console.log('perLength: ' + this.perLength)

//         toSplice = []
//         this.optPeriods.forEach((period, idx)=>{
//             let startRow = 0
//             let endRow = obj.length
//             let startColumn = this.optLen + idx * this.perLength
//             let endColumn = this.optLen + (idx+1) * this.perLength
            
//             let section = obj.slice(startRow, endRow).map(i => i.slice(startColumn, endColumn))
            
//             // let len = 0
//             // section.forEach((row)=>{
//             //     len = row.filter(n=> n == '0 €').length
//             // })
//             // if(len == this.perLength){
//             //     toSplice.push(idx)
//             // }
//         })
//         // toSplice.forEach((idx, arrIdx) => {
//         //     this.optPeriods.splice(idx - arrIdx, 1)
//         // })


//         this.optPeriods.forEach((period)=>{
//             let newItem = $('.loader .flt-cont-item.radio-item').clone()
//             newItem.find('input').attr('name', 'Periodo'.toLowerCase())
            
//             //newItem.find('input.flt-check-visual').attr('name', 'periodo-visual')

//             //newItem.find('.flt-check').attr('value', item.toLowerCase())
//             newItem.find('.flt-check').attr('value', `[data-periodo="${period}"]`)
//             newItem.find('.flt-filter-txt').children().text(period)

//             perController.find('.flt-item').append(newItem)

//             let visItem = newItem.clone()
//             visItem.find('input').attr('name', visItem.find('.flt-check').attr('name') + '-visual')
//             perFilter.find('.flt-cont-list').append(visItem)
//         })
        
//         if($(window).outerWidth() >= 992){ // DESKTOP
//             $('.consulta-hero .flt-wrap').append(perFilter)
//             $('.consulta-mod-filter-wrap .flt-wrap').append(perFilter.clone())
//         }
//         else{
//             $('.consulta-wrap .flt-pop-list').append(perFilter)
//         }

//         $('.consulta-hero .flt-wrap').append(perController)

//         $('.consulta-detalhe').append(perRes)

//         $('.pop-form-hidden-input').append(perInput)


//         Object.keys(this.options).forEach((key)=>{
//             this.options[key] = [...new Set(this.options[key])]

//             const filterKey = key.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-')

//             if(key != 'Categoria' && key != 'Modalidade'){
//                 let newFilter
//                 if($(window).outerWidth() >= 992){ // DESKTOP
//                     newFilter = $('.loader .flt-dd-wrap.desktop').clone()
//                 }
//                 else{
//                     newFilter = $('.loader .flt-dd-wrap.mobile').clone()
//                 }
//                 let newController = $('.loader .flt-dd-hidden').clone()

//                 newFilter.find('.flt-input-label').children().text(key)
//                 newFilter.attr('data-filter-sync', filterKey)

//                 newController.attr('data-filter-sync', filterKey)
                

//                 this.options[key].forEach((item)=>{
//                     let newItem
//                     if(key !== 'Regime' && key !== 'Noites no alojamento'){
//                         newItem = $('.loader .flt-cont-item.check').clone()
//                     }
//                     else{
//                         newFilter.attr('data-req', '')

//                         newItem = $('.loader .flt-cont-item.radio-item').clone()
//                         newItem.find('input').attr('name', filterKey)
//                         //newItem.find('input.flt-check-visual').attr('name', key.toLowerCase() + '-visual')
//                     }

//                     //newItem.find('.flt-check').attr('value', item.toLowerCase())
//                     newItem.find('.flt-check').attr('value', `[data-${filterKey}="${item}"]`)
//                     newItem.find('.flt-filter-txt').children().text(item)


//                     newController.find('.flt-item').append(newItem)
   
//                     let visItem = newItem.clone()
//                     visItem.find('input').attr('name', visItem.find('.flt-check').attr('name') + '-visual')
//                     newFilter.find('.flt-cont-list').append(visItem)
//                 })

//                 if($(window).outerWidth() >= 992){ // DESKTOP
//                     $('.consulta-hero .flt-wrap').append(newFilter)
//                     $('.consulta-mod-filter-wrap .flt-wrap').append(newFilter.clone())
//                 }
//                 else{
//                     $('.consulta-wrap .flt-pop-list').append(newFilter)
//                 }
//                 $('.consulta-hero .flt-wrap').append(newController)

                

//                 if(key != 'Ocupação'){
//                     let newRes = $('.loader .consulta-detalhe-line').clone()
//                     newRes.find('.consulta-detalhe-title').children().text(key)
//                     newRes.attr('data-filter-sync', filterKey)
//                     $('.consulta-detalhe').append(newRes)


//                     let newInput = $('.loader .form-input-hidden').clone()
//                     newInput.attr('data-filter-sync', filterKey)
//                     newInput.attr('id', filterKey)
//                     newInput.attr('name', key)
//                     $('.pop-form-hidden-input').append(newInput)
//                 }
//             }

//         })

//         let priceInput = $('.loader .form-input-hidden').clone()
//         priceInput.attr('id', 'Valor Total')
//         priceInput.attr('name', 'Valor Total')
//         priceInput.attr('data-input-sync', 'Valor Total')
//         $('.pop-form-hidden-input').append(priceInput)

//         let capacityInput = $('.loader .form-input-hidden').clone()
//         capacityInput.attr('id', 'Capacidade')
//         capacityInput.attr('name', 'Capacidade')
//         capacityInput.attr('data-input-sync', 'Capacidade')
        
//         let lowestPrice = 999999999999990;
//     document.querySelector('.dest-ofertas-pricing.notused')?.classList.remove('notused');
//         $('.consulta-form-wrap').append(capacityInput)
//    // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
//         this.objDict.forEach((entry)=>{
        
            
//             entry['Prices'].forEach((period, perIdx) => {
//                 period[0].forEach((noites, noitesIdx) => {
//                     let newCard = $('.loader .consulta-res-card').clone()

//                     if(type == 'A' || type == 'B'){
//                         newCard.attr('data-order', this.options['Ocupação'].findIndex((item)=>{
//                             return item === entry['Options']['Ocupação']
//                         }))
//                     }
//                     else if(type == 'C'){
//                         // newCard.attr('data-order', entry['Options']['Ocupação']) 
//                         //tiago
//                             newCard.attr('data-order', this.options['Ocupação'].findIndex((item)=>{
//                             return item === entry['Options']['Ocupação']
//                         }))
//                     }
//                     else{
//                         newCard.attr('data-order', 0)
//                     }

//                     let cardTitle = newCard.find('.consulta-res-title').children()
//                     let cardSubtitle = newCard.find('.consulta-res-subtitle').children()

//                     let cardSurfista = newCard.find('.consulta-surfista').children()

//                     let cardPreco = newCard.find('.price')
//                     let cardPromoPreco = newCard.find('.promo-price')

                    
//                     if(parseInt(entry['Prices'][perIdx][1]) != 0){ // only process card and add it if it doesn't have a 0 value
//                         //add noites filter to card, this doesnt work if they decide to change it again
//                         newCard.attr('data-noites-no-alojamento', noites)
    
//                         Object.entries(entry['Options']).forEach((option)=>{
//                             newCard.attr(`data-${option[0].replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-')}`, option[1])
//                         })
    
//                         newCard.attr('data-periodo', this.optPeriods[perIdx])

//                         if(parseInt(entry['Prices'][perIdx][2]) != 0 && !Number.isNaN(parseInt(entry['Prices'][perIdx][2]))){
//                             newCard.find('.consulta-picker-block input').attr('data-price', period[2][noitesIdx]) 
//                             newCard.find('input.consulta-checkbox').attr('data-price', period[2][noitesIdx])
//                         }
//                         else{
//                             newCard.find('.consulta-picker-block input').attr('data-price', period[1][noitesIdx])
//                             newCard.find('input.consulta-checkbox').attr('data-price', period[1][noitesIdx])
//                         }
//                         if(type == 'A' || type == 'B'){
//                             switch ((entry["Options"]["Ocupação"] || "").toLowerCase()){
//                                 case 'individual':
//                                     newCard.find('.consulta-picker-block input').attr('data-mult', 1) 
//                                     newCard.find('input.consulta-checkbox').attr('data-mult', 1)
//                                     break;
//                                 case 'duplo':
//                                     newCard.find('.consulta-picker-block input').attr('data-mult', 2) 
//                                     newCard.find('input.consulta-checkbox').attr('data-mult', 2)
//                                     break; 
//                                 case 'triplo':  
//                                     newCard.find('.consulta-picker-block input').attr('data-mult', 3) 
//                                     newCard.find('input.consulta-checkbox').attr('data-mult', 3)
//                                     break;
//                                 case 'quadruplo':
//                                     newCard.find('.consulta-picker-block input').attr('data-mult', 4) 
//                                     newCard.find('input.consulta-checkbox').attr('data-mult', 4)
//                                     break;
//                                 case 'quádruplo':
//                                     newCard.find('.consulta-picker-block input').attr('data-mult', 4) 
//                                     newCard.find('input.consulta-checkbox').attr('data-mult', 4)
//                                     break;
//                                 case 'quintuplo': 
//                                     newCard.find('.consulta-picker-block input').attr('data-mult', 4) 
//                                     newCard.find('input.consulta-checkbox').attr('data-mult', 4)
//                                     break;
//                                 case 'quíntuplo': 
//                                     newCard.find('.consulta-picker-block input').attr('data-mult', 4) 
//                                     newCard.find('input.consulta-checkbox').attr('data-mult', 4)
//                                     break;
//                                 default: 
//                                     newCard.find('.consulta-picker-block input').attr('data-mult', 1) 
//                                     newCard.find('input.consulta-checkbox').attr('data-mult', 1)
//                                     break;
//                             } 
//                         }   
//                          else if(type == 'C')
//                          {
//                             newCard.find('.consulta-picker-block input').attr('data-mult', parseInt(entry["Options"]["Ocupação"], 10)) 
//                             newCard.find('input.consulta-checkbox').attr('data-mult',  parseInt(entry["Options"]["Ocupação"], 10))
//                         }
//                         else{
//                             let ocupacao = (entry["Options"]["Ocupação"] || "").toLowerCase();
//                             let mult = 1;

//                             if (ocupacao.includes("individual")) {
//                             mult = 1;
//                             } else if (ocupacao.includes("dupla")) {
//                             mult = 2;
//                             } else if (ocupacao.includes("tripla")) {
//                             mult = 3;
//                             } else if (ocupacao.includes("quadrupla") || ocupacao.includes("quádrupla")) {
//                             mult = 4;
//                             } else if (ocupacao.includes("quintupla") || ocupacao.includes("quíntupla")) {
//                             mult = 5;
//                             }

//                             newCard.find(".consulta-picker-block input").attr("data-mult", mult);
//                             newCard.find("input.consulta-checkbox").attr("data-mult", mult);
                        
//                             // newCard.find('.consulta-picker-block input').attr('data-mult', 1) 
//                             // newCard.find('input.consulta-checkbox').attr('data-mult', 1)
//                         }
    
//                         cardPreco.text(parseFloat(period[1][noitesIdx]).toLocaleString().replaceAll(',', ' '))
                        
//                         //tiago
//                         if(period[2][noitesIdx] !=0 && period[2][noitesIdx] != undefined)
//                         {
                        
//                         cardPromoPreco.text(parseFloat(period[2][noitesIdx]).toLocaleString().replaceAll(",", " "));


//                         if(lowestPrice  > parseFloat(period[2][noitesIdx]))
//                         {
//                         //     console.log("with discount");
//                         // console.log(lowestPrice);

//                             lowestPrice = parseFloat(period[2][noitesIdx]);
//                            // console.log(lowestPrice);

//                             $("#precoSemDescontoCortado").text(cardPreco.text()+ " €");
//                             $("#precoDesconto").text(cardPromoPreco.text()+ " €");

//                             $("#precoSemDesconto").text(cardPreco.text()+ " €").addClass("hide");
//                             $("#precoSemDescontoCortado").text(cardPreco.text()+ " €").removeClass("hide");
//                             $("#precoDesconto").text(cardPromoPreco.text()+ " €").removeClass("hide");
//                         }                           

//                         }             
//                         else //caso não tenha desconto
//                         {           

//                         cardPromoPreco.text("0");
//                         cardPreco.next(".consulta-price-slash").remove();
//                         cardPreco.parent().parent().removeClass("slashed");

//                         let euroDiv = cardPreco.next(".consulta-price-euro.slashed");

//                         // Remove the 'slashed' class from the euroDiv
//                         euroDiv.removeClass("slashed");

//                         // Inside euroDiv, find the child with the class 'fgr-10-400-10' and update its class
//                         euroDiv.find(".fgr-10-400-10").removeClass("fgr-10-400-10").addClass("fgr-16-400-18 mob-13");

//                         // cardPreco.next(".consulta-price-euro.slashed").removeClass("slashed");
                        
//                         //  cardPreco.next(".fgr-10-400-10").removeClass("fgr-10-400-10").addClass("fgr-16-400-18 mob-13");

//                         if(lowestPrice > parseFloat(period[1][noitesIdx]))
//                             {
//                             // console.log("witout____ discount");
//                             // console.log(lowestPrice);

//                             lowestPrice = parseFloat(period[1][noitesIdx]);

//                             // console.log(lowestPrice);
                            
//                             $("#precoSemDescontoCortado").text(cardPreco.text()+ " €");
//                             $("#precoDesconto").text(cardPromoPreco.text()+ " €");

//                             $("#precoSemDesconto").text(cardPreco.text()+ " €").removeClass("hide");
//                             $("#precoSemDescontoCortado").text(cardPreco.text()+ " €").addClass("hide");
//                             $("#precoDesconto").text(cardPromoPreco.text()+ " €").addClass("hide");
//                             } 
//                         }


//                         switch (type) {
//                             case 'A': // RESORT/GUEST c/ Surfista
//                                 $('.consulta-select-tag').remove()
    
//                                 cardTitle.text('Quarto ' + entry['Options']['Ocupação'])
//                                 cardSubtitle.text(entry['Options']['Categoria'])

//                                 if(  entry['Options']['Modalidade'].toLowerCase().includes('motorista'))
//                                 {
//                                     globalVarSurfistaOrMotorista = 'motorista';
//                                    const parent = document.querySelector('.consulta-surfista-tag');
//                                     if (parent) {
//                                     const target = parent.querySelector('.fgr-13-400-16.no-space');
//                                     if (target) {
//                                         target.textContent = 'Com Motorista?';
//                                     }
//                                         }
//                                 }
//                                 else if(entry['Options']['Modalidade'].toLowerCase().includes('surfista'))
//                                 {
//                                     globalVarSurfistaOrMotorista = 'surfista';
//                                 }
    
//                                 if (  entry['Options']['Modalidade'].toLowerCase() === 'surfista' ||  entry['Options']['Modalidade'].toLowerCase() === 'com motorista')
//                                 {
//                                     cardSurfista.text('Sim')
//                                 }
//                                 else{
//                                     cardSurfista.text('Não')
//                                 }
//                                 break;
    
    
//                             case 'B': // RESORT/GUEST sem Surfista
//                                 cardTitle.text('Quarto ' + entry['Options']['Ocupação'])
//                                 cardSubtitle.text(entry['Options']['Categoria'])
//                                 break;
    
    
//                             case 'C': // SURF BOAT - Full Charter
//                                 cardTitle.text(entry['Options']['Ocupação'] + ' pessoas')
//                                 cardSubtitle.text(this.optPeriods[perIdx])
//                                 break;
    
    
//                             case 'D': // SURF BOAT - Open Boat
//                                 cardTitle.text(entry['Options']['Ocupação'])
//                                 cardSubtitle.text(this.optPeriods[perIdx])
//                                 //cardSubtitle.text(entry['Options']['Categoria'])
//                                 break;
    
    
//                             default:
//                                 break;
//                         }
    
//                         $('.consulta-res-card-wrap').append(newCard)
//                     }
//                 })
//             })

//         })

//         $('.loader .consulta-res-card').remove()

//         window.objData = this

//     }
// }


// function sheetInit(pageURL, callback){
//     //console.log(csv)

//     let obj

//     $.ajax({
//         type: "GET",
//         url: pageURL,
//         dataType: "text",
//         success: function(data) {
//             callback(data)
//         }
//     });
     
// }



// /****************************************************************************************
// ---------------------------------------- PRODUTO ----------------------------------------
// *****************************************************************************************/

// pageClasses['Produto'] = class Produto extends Page {
//     async setup(){

        
//         // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
//         $('.w-condition-invisible').remove()


//         if(Webflow.env('editor') == undefined){
//             $('.consulta-page-wrap, .consulta-wrap, .consulta-hero-wrap').removeClass('editor')
//         }

//         // -------- GALERIA DE ONDAS --------
//         if($('.page-container').find('.onda-list').length > 0){
//             let container = this.container
//             await new Promise(resolve => {
//                 $(container).find('.onda-list').each(function(idx, el){
                    
//                     let slug = $(el).attr('data-slug') 
        
//                     $(el).load(`/galeria-de-ondas/${slug} .onda-card`, ()=>{
//                         resolve()
//                     })
//                 })
//             })

//             await new Promise(resolve => {
//                 console.log('') // load bearing console log, NÃO APAGAR PFV!!!!!!!!
//                 setTimeout(()=>{
//                     resolve()
//                 }, 750)
//             })
//         }


//         // ................................ VIDEOS ................................
//         removePageLoadVideos();

// document.querySelectorAll('.page-load-vid-alt-dest').forEach((vid) => {
//   const nextCoverImg = vid.nextElementSibling;
//   if (nextCoverImg && nextCoverImg.classList.contains('cover-img')) {
//     nextCoverImg.remove();
//   }
// });

//     //     if(Webflow.env('editor') == undefined){
//     //         $('.page-container').find('.hero-bg-vid').each(function(idx, el){
//     //             // const controls = ['play', 'play-large', 'progress', 'current-time', 'fullscreen'];
//     //             let iframe = $(this).find('iframe')
    
//     //             let vidBaseSrc = iframe.attr('data-base-src')
//     //             let vidParams = iframe.attr('data-params')
//     //             vidParams = vidParams + '&quality=240p';
//     //             let vidSrc = iframe.attr('data-src')
    
//     //             let vidCode = vidSrc.split('https://vimeo.com/')[1]
    
//     //             iframe.attr('src', vidBaseSrc+vidCode+vidParams)
    
//     //             let player = new Plyr($(this).find('.plyr__video-embed'), {
//     //                 autoplay: true,
//     //                 autopause: false,
//     //                 muted: true,
//     //                 //youtube: {noCookie: true}
//     //             })
    
//     //             this.player = player
//     // player.config.quality.default=240;
//     //             player.once('ready', ()=>{
//     //                 player.restart()
//     //                 player.play()
//     //             })
    
//     //             player.once('playing', ()=>{
                    
//     //                 setTimeout(()=>{                    
//     //                     player.restart()
//     //                     player.play()
//     //                     gsap.to($('.hero-bg-vid'),{
//     //                         opacity: 1,
//     //                         duration: 0.75,
//     //                         ease: 'power2.inOut'
//     //                     })
//     //                     gsap.to($('.det-hero-bg .cover-img'),{
//     //                         opacity: 0,
//     //                         duration: 0.75,
//     //                         ease: 'power2.inOut'
//     //                     })
//     //                     $(el).find('.plyr__controls, .plyr__control').remove()
//     //                 })
//     //             }, 250)
    
//     //         })
//     //     }


//         $('.det-ofertas-right .orcamento, .ancoras-fixed .orcamento').clickSet((el)=>{
//             gsap.to($('.popup-wrap.orcamento'), {
//                 x: '0%',
//                 duration: 0.5,
//                 ease: 'power2.inOut'
//             })
//             gsap.to($('.popup-wrap-bg'),{
//                 opacity: 1,
//                 pointerEvents: 'auto',
//                 duration: 0.5,
//                 ease: 'power2.inOut'
//             })
//         })



//         // -------- POPUP GALLERY --------
//         $('.global-fixed').append($('.page-container').find('.det-popup-gal'))

//         $('.det-popup-gal .det-popup-close').clickSet((el)=>{
//             gsap.to($('.det-popup-gal'), {
//                 opacity: 0,
//                 duration: 0.5,
//                 ease: 'power2.inOut',
//                 onComplete: ()=>{
//                     gsap.set($('.det-popup-gal'), {display: 'none', opacity: 0})        
//                 }
//             })
//         })
//         $('.det-popup-close').hoverSet((el)=>{
//             gsap.to($(el).find('.path-fill'), {
//                 drawSVG: '100% 0%',
//                 duration: 0.3,
//                 ease: 'power2.inOut'
//             })
    
//             gsap.to($(el), {
//                 color: colors.blue,
//                 duration: 0.3,
//                 ease: 'power2.inOut'
//             })
    
//         }, (el)=>{
//             gsap.to($(el).find('.path-fill'), {
//                 drawSVG: '0% 0%',
//                 duration: 0.3,
//                 ease: 'power2.inOut'
//             })
            
    
//             gsap.to($(el), {
//                 color: ()=>{
//                     return $(el).parent().css('color')
//                 },
//                 duration: 0.3,
//                 ease: 'power2.inOut'
//             })
//         })


//         // -------- ANCORAS --------
//         gsap.set($('.ancora-sel'), {
//             opacity: 0
//         })

//         gsap.set($('.ancoras-fixed'), {
//             y: '100%'
//         })

//         $('.global-fixed').append($('.page-container').find('.ancoras-fixed'))

//         if(Webflow.env('editor') != undefined){
//             let st = setInterval(()=>{
//                 gsap.set($('.ancoras-fixed'), {
//                     paddingBottom: '5em'
//                 })
//                 $('.ancoras-fixed a, .ancoras-wrap a').removeAttr('href')
//             }, 5000)
//         }

//         let tweening = 0
//         let barLocked = true

//         $(window).scroll(function() {
//             if(tweening == 0 && barLocked == false){
//                 gsap.to($('.ancoras-fixed'), {
//                     y: '0%',
//                     duration: 0.5,
//                     ease: 'power2.inOut'
//                 })
//                 tweening = 1
//             }

//             clearTimeout($.data(this, 'scrollTimer'));
//             $.data(this, 'scrollTimer', setTimeout(function() {
//                 gsap.to($('.ancoras-fixed'), {
//                     y: '100%',
//                     duration: 0.5,
//                     ease: 'power2.inOut'
//                 })
//                 tweening = 0
//             }, 1500));
//         });

//         ScrollTrigger.create({
//             trigger: $('.ancoras-wrap'),
//             start: 'bottom top',
//             end: 'bottom top',
//             onEnter: ()=>{
//                 barLocked = false
//             },
//             onEnterBack: ()=>{
//                 barLocked = true
//                 gsap.to($('.ancoras-fixed'), {
//                     y: '100%',
//                     duration: 0.5,
//                     ease: 'power2.inOut',
//                     onComplete: ()=>{
//                         tweening = 0
//                     }
//                 })
//             }
//         })
//         ScrollTrigger.create({
//             trigger: $('.footer'),
//             start: 'top bottom',
//             end: 'top bottom',
//             onEnter: ()=>{
//                 barLocked = true
//                 gsap.to($('.ancoras-fixed'), {
//                     y: '100%',
//                     duration: 0.5,
//                     ease: 'power2.inOut',
//                     onComplete: ()=>{
//                         tweening = 0
//                     }
//                 })
//             },
//             onEnterBack: ()=>{
//                 barLocked = false
//             }
//         })


//         $('.ancora-btn-wrap').hoverSet((el)=>{
//             gsap.to($(el), {
//                 color: colors.blue,
//                 duration: 0.3,
//                 ease: 'power2.inOut'
//             })
//         },(el)=>{
//             gsap.to($(el), {
//                 color: colors.black,
//                 duration: 0.3,
//                 ease: 'power2.inOut'
//             })
//         })

//         createAnchor('#overview', '#overview-btn')
//         createAnchor('#destaques', '#destaques-btn', '#overview-btn')
//         createAnchor('#ondas', '#ondas-btn', '#destaques-btn')
//         createAnchor('#acomodacoes', '#acomodacoes-btn', '#ondas-btn')
//         createAnchor('#facilidades', '#facilidades-btn', '#acomodacoes-btn')
//         createAnchor('#programa', '#programa-btn', '#facilidades-btn')
//         createAnchor('#regras', '#regras-btn', '#programa-btn')
//         createAnchor('#testemunhos', '#testemunhos-btn', '#regras-btn')


//         if(barba.history.previous != null){
//             $('.ancoras-back').hoverSet((el)=>{
//                 gsap.to($(el).find('.path-fill'), {
//                     drawSVG: '100% 0%',
//                     duration: 0.3,
//                     ease: 'power2.inOut'
//                 })
        
//                 gsap.to($(el), {
//                     color: colors.blue,
//                     duration: 0.3,
//                     ease: 'power2.inOut'
//                 })
        
//             }, (el)=>{
//                 gsap.to($(el).find('.path-fill'), {
//                     drawSVG: '0% 0%',
//                     duration: 0.3,
//                     ease: 'power2.inOut'
//                 })
                
        
//                 gsap.to($(el), {
//                     color: ()=>{
//                         return $(el).parent().css('color')
//                     },
//                     duration: 0.3,
//                     ease: 'power2.inOut'
//                 })
//             })
//             $('.ancoras-back').clickSet((el)=>{
//                 barba.go(barba.history.previous.url)
//             })
//         }
//         else{
//             $('.ancoras-back').remove()
//         }

//         $('.anc-burg').clickSet((el)=>{
//             if(!$(el).hasClass('open')){
            
//                 $(el).addClass('open')
    
//                 gsap.to($('.ancoras-fixed-expand'), {
//                     width: 'auto',
//                     height: 'auto',
//                     duration: 0.5,
//                     ease: 'power3.inOut'
//                 })

//             }
//             else{
//                 $(el).removeClass('open')
    
//                 gsap.to($('.ancoras-fixed-expand'), {
//                     width: 0,
//                     height: 0,
//                     duration: 0.5,
//                     ease: 'power3.inOut'
//                 })

//             }
//         })

//         if($('.ancoras-fixed-wrap *').length == 0){
//             $('.ancoras-fixed-cont').remove()
//         }


//         // -------- ACOMODAÇÕES --------
//         let selectedAcomodacao ='primeiro';
//         let savedAcomodacao ="";
//         let acomodacoesList = [];

//         if($('.page-container').find('.acc-list-item').length > 0){
//             await new Promise(resolve => {
//                 let container = this.container
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


//                                                console.log('### AcomodacoesVariables ###');
//                         console.log(acomodacoesList);
//                         console.log(selectedAcomodacao);

//                         // if(!acomodacoesList.includes(selectedAcomodacao))
//                             if(savedAcomodacao != selectedAcomodacao)
//                         {
//                             savedAcomodacao = selectedAcomodacao;
//                             console.log("entrou");

//                             acomodacoesList.push(selectedAcomodacao);


                                 
//                                     console.log("looooooooook in");
// console.log($('.det-pop-list *'));
// console.log($('.det-pop-thumb-list *'));
//                                     $('.det-pop-list *').remove()
//                                     $('.det-pop-thumb-list *').remove()
//                                     //  $('.det-pop-list ').empty();
//                                     //  $('.det-pop-thumb-list ').empty();
                                    
//                                     console.log("looooooooook out");

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
//         }
        
//         $('.page-container').find('.acc-content-item').first().addClass('active')
//         $('.page-container').find('.acc-list-item').first().addClass('active')

//         gsap.set($('.acc-gal-item').not(`[data-name="${$('.page-container').find('.acc-list-item').first().attr('data-name')}"]`), {
//             display: 'none'
//         })
//         $('.acc-gal-item').not(`[data-name="${$('.page-container').find('.acc-list-item').first().attr('data-name')}"]`).removeClass('splide__slide')

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
//         selectedAcomodacao = $(el).data('name');

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


//         // -------- FAQS --------
        
//         $('.prog-row').clickSet(
//             function(elem){
//                 if(!$(elem).hasClass('open')){
        
//                     $(elem).addClass('open')

//                     gsap.to($(elem).find('.prog-row-expand'), {
//                         height: 'auto',
//                         duration: 0.5,
//                         ease: 'power3.inOut'
//                     })

//                     gsap.to($(elem).find('.prog-row-svg'), {
//                         rotate: 180,
//                         duration: 0.5,
//                         ease: 'power3.inOut'
//                     })

//                     $('.prog-row.open').not(elem).each(function(idx, el){
//                         $(el).removeClass('open')
        
//                         gsap.to($(el).find('.prog-row-expand'), {
//                             height: 0,
//                             duration: 0.5,
//                             ease: 'power3.inOut'
//                         })
//                         gsap.to($(el).find('.prog-row-svg'), {
//                             rotate: 0,
//                             duration: 0.5,
//                             ease: 'power3.inOut'
//                         })
//                     })
            
//                 }
//                 else{
//                     $(elem).removeClass('open')
        
//                     gsap.to($(elem).find('.prog-row-expand'), {
//                         height: 0,
//                         duration: 0.5,
//                         ease: 'power3.inOut'
//                     })
//                     gsap.to($(elem).find('.prog-row-svg'), {
//                         rotate: 0,
//                         duration: 0.5,
//                         ease: 'power3.inOut'
//                     })
//                 }
//             }
//         )

//         $('.prog-row').hoverSet((el)=>{
//             gsap.to($(el).find('.prog-row-title, .prog-row-svg'), {
//                 color: colors.blue,
//                 duration: 0.3,
//                 ease: 'power2.inOut'
//             })
//         }, (el)=>{
//             gsap.to($(el).find('.prog-row-title, .prog-row-svg'), {
//                 color: colors.black,
//                 duration: 0.3,
//                 ease: 'power2.inOut'
//             })
//         })

//         // -------- TESTEMUNHOS --------
//         if($('.page-container').find('.test-item').length == 0){
//             $('.testemunhos').remove()
//             $('.ancoras-fixed-wrap #testemunhos-btn').remove()
//             $('.ancoras-wrap #testemunhos-btn').remove()
//         }

//         // -------- DESTAQUES --------
//         $('.page-container').find('.det-dest-desc').first().addClass('active')
//         $('.page-container').find('.det-dest-media').first().addClass('active')

//         gsap.set($('.det-dest-desc, .det-dest-media').not($('.active')), {
//             opacity: 0
//         })

//         if($(window).outerWidth() < 992){ // DESKTOP
//             gsap.set($('.det-dest-desc-item'), {
//                 height: ()=>{
//                     return $('.det-dest-desc').first().outerHeight()
//                 }
//             })
//         }

//         $('.det-dest-thumb').clickSet(function(el){
//             let idx = $(el).index()
//             let activeContent = $('.det-dest-desc.active')
//             let newActiveContent = $($('.det-dest-desc').get(idx))

//             let activePic = $('.det-dest-media.active')
//             let newActivePic = $($('.det-dest-media').get(idx))

//             if(idx != activeContent.index()){
//                 gsap.to(activeContent, {
//                     opacity: 0,
//                     duration: 0.25,
//                     ease: 'power3.out'
//                 })
//                 activeContent.removeClass('active')

//                 gsap.to(newActiveContent, {
//                     opacity: 1,
//                     duration: 0.25,
//                     delay: 0.25,
//                     ease: 'power3.out'
//                 })
//                 newActiveContent.addClass('active')


//                 gsap.to(activePic, {
//                     opacity: 0,
//                     duration: 0.25,
//                     ease: 'power3.out'
//                 })
//                 activePic.removeClass('active')

//                 gsap.to(newActivePic, {
//                     opacity: 1,
//                     duration: 0.25,
//                     delay: 0.25,
//                     ease: 'power3.out'
//                 })
//                 newActivePic.addClass('active')

//                 if($(window).outerWidth() < 992){ // DESKTOP
//                     gsap.set($('.det-dest-desc-item'), {
//                         height: ()=>{
//                             return  $('.det-dest-desc.active').outerHeight()
//                         },
//                         duration: 1,
//                         ease: 'power2.inOut'
//                     })
//                 }
//             }
//         })


//         // ................................ CONSULTA ................................
//         $('.flt-container-mobile').clickSet((el)=>{
//             gsap.to($('.flt-container-popup'), {
//                 x: '0%',
//                 duration: 0.5,
//                 ease: 'power2.inOut'
//             })
//         })
//         $('.flt-back-btn, .flt-pop-btn-wrap .btn').clickSet((el)=>{
//             let checked = true
//             $('[data-req]').each(function(idx, el){
//                 if($(el).find(':checked').length == 0){
//                     checked = false
//                     gsap.to($(el).find('.err-text'),{
//                         opacity: 1,
//                         duration: 0.35,
//                         ease: 'power2.inOut'
//                     })
//                 }
                
//             })
//             if(checked){
//                 gsap.to($('.flt-container-popup'), {
//                     x: '100%',
//                     duration: 0.5,
//                     ease: 'power2.inOut'
//                 })
//             }
//             else{
//                 gsap.to($('.consulta-wrap'), {
//                     x: '100%',
//                     duration: 0.5,
//                     ease: 'power2.inOut'
//                 })
//                 gsap.to($('.flt-container-popup'), {
//                     x: '100%',
//                     duration: 0.5,
//                     ease: 'power2.inOut'
//                 })
//             }
//         })



//         $('.consulta-hero-back').hoverSet((el)=>{
//             gsap.to($(el).find('.path-fill'), {
//                 drawSVG: '100% 0%',
//                 duration: 0.3,
//                 ease: 'power2.inOut'
//             })
    
//         }, (el)=>{
//             gsap.to($(el).find('.path-fill'), {
//                 drawSVG: '0% 0%',
//                 duration: 0.3,
//                 ease: 'power2.inOut'
//             })
//         })

//         $('.consulta-open').clickSet((el)=>{
//             let checked = true
//             $('[data-req]').each(function(idx, el){
//                 if($(el).find(':checked').length == 0){
//                     checked = false
//                     gsap.to($(el).find('.err-text'),{
//                         opacity: 1,
//                         duration: 0.35,
//                         ease: 'power2.inOut'
//                     })
//                 }
                
//             })
//             if(checked){
//                 gsap.to($('.consulta-wrap'), {
//                     x: '0%',
//                     duration: 1,
//                     ease: 'power2.inOut'
//                 })
//                 $('.consulta-wrap').addClass('step-1')
//             }
//         })

//         $('.consulta-open-mobile').clickSet((el)=>{
//             gsap.to($('.consulta-wrap'), {
//                 x: '0%',
//                 duration: 0.25,
//                 ease: 'power2.inOut',
//                 delay: 0.75
//             })
//             gsap.to($('.flt-container-popup'), {
//                 x: '0%',
//                 duration: 1,
//                 ease: 'power2.inOut'
//             })
//             $('.consulta-wrap').addClass('step-1')   
//         })



//         $('.consulta-finalizar').clickSet((el)=>{
//             if($('.consulta-price-total .price-total').text() != '0'){
//                 $('.pop-form-hidden-quartos *').remove()
//                 $('.consulta-resumo *').remove()
    
//                 $('.consulta-res-card').each(function(idx, el){
//                     if($(el).find('.consulta-picker').length > 0){
//                         if($(el).find('.consulta-picker input').val() > 0){
//                             let newInput = $('.loader .form-input-hidden').clone()
        
        
//                             if($(el).find('.consulta-surfista').length > 0){
//                                 if($(el).find('.consulta-surfista').children().text() == 'Sim'){

//                                     if(globalVarSurfistaOrMotorista == 'surfista')
//                                     {newInput.attr('name', 'Quartos - ' + $(el).find('.consulta-res-title').text() + ' - ' 
//                                     + $(el).find('.consulta-res-subtitle').text() + ' - Surfista')}

//                                     if(globalVarSurfistaOrMotorista == 'motorista')
//                                     {newInput.attr('name', 'Quartos - ' + $(el).find('.consulta-res-title').text() + ' - ' 
//                                     + $(el).find('.consulta-res-subtitle').text() + ' - Motorista')}
                                    
//                                 }
//                                 else{
//                                     if(globalVarSurfistaOrMotorista == 'surfista')
//                                     {newInput.attr('name', 'Quartos - ' + $(el).find('.consulta-res-title').text() + ' - ' 
//                                     + $(el).find('.consulta-res-subtitle').text() + ' - Não Surfista')}

//                                     if(globalVarSurfistaOrMotorista == 'motorista')
//                                     {newInput.attr('name', 'Quartos - ' + $(el).find('.consulta-res-title').text() + ' - ' 
//                                     + $(el).find('.consulta-res-subtitle').text() + ' - Não Motorista')}
//                                 }
//                             }
//                             else{
//                                 newInput.attr('name', 'Quartos - ' + $(el).find('.consulta-res-title').text() + ' - ' 
//                                     + $(el).find('.consulta-res-subtitle').text())
//                             }
                            
//                             newInput.attr('value', $(el).find('.consulta-picker input').val())
        
        
        
//                             $('.pop-form-hidden-quartos').append(newInput)
//                             let newRes = $('.loader .consulta-resumo-line').clone()
//                             newRes.find('.res-title').text($(el).find('.consulta-res-title').text())
//                             newRes.find('.res-subtitle').text($(el).find('.consulta-res-subtitle').text())
//                             if($(el).find('.consulta-surfista').children().text() == 'Sim'){
//                                  if(globalVarSurfistaOrMotorista == 'surfista')
//                                  {
//                                     newRes.find('.res-surfista').text('Surfista')
//                                  }
//                                 if(globalVarSurfistaOrMotorista == 'Motorista')
//                                  {
//                                     newRes.find('.res-surfista').text('Motorista')
//                                 }
//                             }
//                             else{
//                                 if(globalVarSurfistaOrMotorista == 'surfista')
//                                  {
//                                     newRes.find('.res-surfista').text('Não Surfista')
//                                  }
//                                 if(globalVarSurfistaOrMotorista == 'motorista')
//                                  {
//                                     newRes.find('.res-surfista').text('Não Motorista')
//                                 }
                                
//                             }
//                             newRes.find('.consulta-picker-block input').val($(el).find('.consulta-picker input').val())
                            
        
//                             $('.consulta-resumo').append(newRes)
        
//                         }
//                     }
//                     else if($(el).find(':checked').length > 0){
//                         let newInput = $('.loader .form-input-hidden').clone()
                       
//                         newInput.attr('name', 'Quartos - ' + $(el).find('.consulta-res-title').text() + ' - ' 
//                             + $(el).find('.consulta-res-subtitle').text())
                        
//                         newInput.attr('value', $('.consulta-picker input').val())
    
    
//                         $('.pop-form-hidden-quartos').append(newInput)
//                         let newRes = $('.loader .consulta-resumo-line').clone()
//                         newRes.find('.res-title').text($('.consulta-hero-title').text() + ' - ' + $(el).find('.consulta-res-title').text())
//                         newRes.find('.res-subtitle').text($(el).find('.consulta-res-subtitle').text())
//                         newRes.find('.consulta-picker-block input').val($(el).find('.consulta-picker input').val())
    
//                         $('.consulta-resumo').append(newRes)
        
                        
//                     }
//                 })
    
//                 gsap.to($('.consulta-page-wrap'), {
//                     x: '-100%',
//                     duration: 1,
//                     ease: 'power2.inOut'
//                 })
//                 gsap.set($('.consulta-wrap .consulta-filter-wrap'), {
//                     overflow: 'hidden'
//                 })
//                 gsap.to($('.consulta-wrap .consulta-filter-wrap'), {
//                     height: 0,
//                     duration: 1,
//                     ease: 'power2.inOut'
//                 })
//                 $('.consulta-wrap').addClass('step-2')
//                 $('.consulta-wrap').removeClass('step-1')
//             }
//             else{
//                 gsap.to($(el).find('.err-text'),{
//                     opacity: 1,
//                     duration: 0.35,
//                     ease: 'power2.inOut'
//                 })
//             }
//         })

//         $('.consulta-wrap .consulta-hero-back, .consulta-finish').clickSet((el)=>{
//             if($('.consulta-wrap').hasClass('finished')){
//                 gsap.to($('.consulta-wrap'), {
//                     x: '100%',
//                     duration: 1,
//                     ease: 'power2.inOut'
//                 })
//                 gsap.to($('.consulta-page-wrap'), {
//                     x: '0%',
//                     duration: 1,
//                     ease: 'power2.inOut'
//                 })

//                 gsap.set($('.consulta-mod-filter-wrap'), {
//                     display: 'none'
//                 })
//                 gsap.set($('.consulta-mod-finish'), {
//                     display: 'flex'
//                 })
//             }
//             else if($('.consulta-wrap').hasClass('step-1')){
//                 gsap.to($('.consulta-wrap'), {
//                     x: '100%',
//                     duration: 1,
//                     ease: 'power2.inOut'
//                 })
//                 $('.consulta-wrap').removeClass('step-1')
//             }
//             else{
//                 gsap.to($('.consulta-page-wrap'), {
//                     x: '0%',
//                     duration: 1,
//                     ease: 'power2.inOut'
//                 })
//                 gsap.to($('.consulta-wrap .consulta-filter-wrap'), {
//                     height: 'auto',
//                     duration: 1,
//                     ease: 'power2.inOut',
//                     onComplete: ()=>{
//                         gsap.set($('.consulta-wrap .consulta-filter-wrap'), {
//                             overflow: 'visible'
//                         })
//                     }
//                 })
//                 $('.consulta-wrap').addClass('step-1')
//                 $('.consulta-wrap').removeClass('step-2')
//             }
//         })


//         $('.consulta-info-card.popup').clickSet((el)=>{
//             gsap.to($('.popup-wrap.programa'), {
//                 x: '0%',
//                 duration: 0.5,
//                 ease: 'power2.inOut'
//             })
//             gsap.to($('.consulta-popup-prot'),{
//                 opacity: 1,
//                 pointerEvents: 'auto',
//                 duration: 0.5,
//                 ease: 'power2.inOut'
//             })
//         })
//         $('.popup-wrap.programa .popup-back, .consulta-popup-prot').clickSet((el)=>{
//             gsap.to($('.popup-wrap.programa'), {
//                 x: '100%',
//                 duration: 0.5,
//                 ease: 'power2.inOut'
//             })
//             gsap.to($('.consulta-popup-prot'),{
//                 opacity: 0,
//                 pointerEvents: 'none',
//                 duration: 0.5,
//                 ease: 'power2.inOut'
//             })
//         })

//         // -------- FILTERS --------
    
//         let obj

//         if($('.consulta-csv').attr('href') != undefined){
//             sheetInit($('.consulta-csv').attr('href'), 
//             (data)=>{ 
//                 data = data.toString().replaceAll(';', ',')
//                 obj = $.csv.toArrays(data)
    
//                 window.obj = obj
    
//                 let restObj = new ResortData(obj)
    
//                 gsap.set($('.consulta-hero-filters .err-text, .consulta-finalizar .err-text'),{
//                     opacity: 0,
//                     pointerEvents: 'none'
//                 })
    
//                 // $('.flt-check').each(function(index, el){
//                 //     $(el).attr('value', '.' + $(el).attr('value')) 
//                 // })
    
//                 $('.flt-item').hoverSet((el)=>{
//                     gsap.to($(el).find('.err-text'),{
//                         opacity: 0,
//                         duration: 0.35,
//                         ease: 'power2.inOut'
//                     })
    
//                     gsap.to($(el), {
//                         color: colors.black,
//                         duration: 0.75,
//                         ease: 'power2.inOut'
//                     })
    
//                     gsap.to($(el).find('.flt-expand, .flt-pop-expand'), {
//                         height: 'auto',
//                         opacity: 1,
//                         duration: 0.75,
//                         ease: 'power2.inOut',
//                         willChange: 'height'
//                     })
        
//                     gsap.to($(el).find('.flt-svg'), {
//                         rotate: 180,
//                         duration: 0.75,
//                         ease: 'power2.inOut'
//                     })
//                 }, (el)=>{
//                     gsap.to($(el), {
//                         color: colors.white,
//                         duration: 0.75,
//                         ease: 'power2.inOut'
//                     })
    
//                     gsap.to($(el).find('.flt-expand, .flt-pop-expand'), {
//                         height: 0,
//                         opacity: 0,
//                         duration: 0.75,
//                         ease: 'power2.inOut',
//                         willChange: 'height'
//                     })
//                     gsap.to($(el).find('.flt-svg'), {
//                         rotate: 0,
//                         duration: 0.75,
//                         ease: 'power2.inOut'
//                     })
//                 })
    
    
//                 $('.flt-dd-wrap .flt-check').clickSet((el)=>{

// /* Tiago  
// Para poder limpar o valor total sempre que se muda a selecção */
       
//                         let valorLimpo = 0

//                         $('.consulta-res-wrap').find('.consulta-picker-block input').each(function(idx, el){
//                             $(el).val(valorLimpo)
//                         })
    
//                         $('.price-total').text(valorLimpo)
    
//                         $('[data-input-sync="Valor Total"]').val(valorLimpo)

//                         $('.info-price-mult').text(valorLimpo)

//                         $('[data-input-sync="Capacidade"]').val(valorLimpo)
                        
//                         $('.consulta-form-wrap').find('.pop-form-picker input').first().val(valorLimpo)

// //******************************************************** */



                    
//                     let val = $(el).attr('value')
    
//                     let otherCheck = $(`.flt-dd-wrap [value='${val}']`).not($(el))
    
                    
                    
//                     otherCheck.prop('checked', $(el).prop('checked'))
    
    
//                     otherCheck.parents('.flt-cont-item').trigger('click')
//                     otherCheck.parents('.flt-filter').trigger('mouseenter')
//                     otherCheck.parents('.flt-filter').trigger('mouseleave')
    
    
//                     let controller = $('.flt-dd-hidden').find(`[value='${val}']`)
//                     controller.click()
//                 })
    
//                 $('.flt-cont-item').clickSet((el)=>{
//                     setTimeout(()=>{
//                         // $(el).parents('.flt-dd-wrap').trigger('mouseleave')
//                         $(el).parents('.flt-item, .flt-dd-wrap').trigger('mouseleave')
//                         $(el).trigger('mouseleave')
//                     }, 25)
//                 })
    
        
//                 let mixer
        
//                 $('fieldset').attr('data-filter-group', '')
    
//                 //$('.flt-check-visual').attr('value', '')
    
    
    
//                 $('.flt-item').each(function(idx, el){
//                     $(el).on('mouseenter', ()=>{
//                         if($(el).find('.flt-input-label').length > 0){
//                             gsap.to($(el).find('.flt-input-label'), {
//                                 paddingTop: 0,
//                                 marginTop: '-1em',
//                                 opacity: 0.6,
//                                 scale: 0.8,
//                                 ease: 'power2.inOut',
//                                 duration: 0.35
//                             })
//                         }
//                     })
    
//                     $(el).on('mouseleave', ()=>{
//                         if($(el).find(':checked').length == 0){
//                             gsap.to($(el).find('.flt-input-label'), {
//                                 marginTop: '0em',
//                                 opacity: 1,
//                                 scale: 1,
//                                 ease: 'power2.inOut',
//                                 duration: 0.35
//                             })
//                         }
//                     })
//                 })
    
//                 gsap.set($('.flt-text'), { marginBottom: '0em' })
    
//                 $('.flt-dd-wrap .flt-cont-item').clickSet((el)=>{
    
//                     let textIn = ''
//                     $(el).parents('.flt-item').find(':checked').parent().each(function(idx, elem){
//                         textIn += $(elem).text() + ', '
//                     })
    
//                     let pos = textIn.lastIndexOf(',')
//                     if(pos < 0) pos = textIn.length
//                     textIn = textIn.substring(0, pos)
    
//                     if(textIn.length == 0){
//                         gsap.to($(el).parents('.flt-item').find('.flt-input-res'), {
//                             opacity: 0,
//                             ease: 'power2.inOut',
//                             duration: 0.25
//                         })
//                         gsap.to($(el).parents('.flt-item').find('.flt-text'), {
//                             marginBottom: '-0em',
//                             ease: 'power2.inOut',
//                             duration: 0.25
//                         })
//                     }
//                     else{
//                         $(el).parents('.flt-item').find('.flt-input-res').text(textIn)
//                         gsap.to($(el).parents('.flt-item').find('.flt-input-res'), {
//                             opacity: 1,
//                             ease: 'power2.inOut',
//                             duration: 0.25
//                         })
//                         gsap.to($(el).parents('.flt-item').find('.flt-text'), {
//                             marginBottom: '-0.5em',
//                             ease: 'power2.inOut',
//                             duration: 0.25
//                         })
//                     }
    
//                     let res = $(`.consulta-detalhe-line[data-filter-sync="${$(el).parents('.flt-dd-wrap').attr('data-filter-sync')}"]`)
//                     res.find('.consulta-detalhe-text').children().text(textIn)
    
//                     let input = $(`.form-input-hidden[data-filter-sync="${$(el).parents('.flt-dd-wrap').attr('data-filter-sync')}"]`)
//                     input.val(textIn)
//                 })
            

//                 gsap.set($('.consulta-res-disclaimer'), {
//                     opacity: 0,
//                     pointerEvents: 'none'
//                 })

//                 $('.consulta-picker').each(function(idx, el){
//                     $(el).find('input').val(0)
//                     $(el).find('.minus').clickSet(()=>{
//                         let input = parseFloat($(el).find('input').val())
//                         let num = input - 1
//                         if(num < 0) num = 0
//                         $(el).find('input').val(num)
//                     })
//                     $(el).find('.plus').clickSet(()=>{
//                         let input = parseFloat($(el).find('input').val())
//                         let num = input + 1
//                         $(el).find('input').val(num)
//                     })
    
//                     $(el).find('.plus, .minus').clickSet(()=>{
//                         gsap.to($('.consulta-finalizar .err-text'),{
//                             opacity: 0,
//                             duration: 0.35,
//                             ease: 'power2.inOut'
//                         })
    
    
    
//                         let total = 0
//                         let mult = 0

//                         $('.consulta-res-wrap').find('.consulta-picker-block input').each(function(idx, el){
//                             total += parseFloat($(el).val()) * parseFloat($(el).attr('data-price')) * parseFloat($(el).attr('data-mult'))
//                             if(parseFloat($(el).val()) != 0){
//                                 mult += parseFloat($(el).attr('data-mult')) * parseFloat($(el).val())
//                             }
//                         })
    
//                         $('.info-price-mult').text(mult)

//                         if(total != 0){
//                             gsap.to($('.consulta-res-disclaimer'), {
//                                 opacity: 0.5,
//                                 duration: 0.5,
//                                 ease: 'power2.inOut'
//                             })
//                         }
//                         else{
//                             gsap.to($('.consulta-res-disclaimer'), {
//                                 opacity: 0,
//                                 duration: 0.5,
//                                 ease: 'power2.inOut'
//                             })
//                         }
    
//                         let result = total.toLocaleString()

//                         $('.price-total').text(result.toString().replaceAll(',', ' '))
    
//                         $('[data-input-sync="Valor Total"]').val(result.toString().replaceAll(',', ' '))

//                         console.log(mult)
//                         $('[data-input-sync="Capacidade"]').val(mult)
                        
//                         $('.consulta-form-wrap').find('.pop-form-picker input').first().val(mult)
//                     })
//                 })
    
//             $(".consulta-checkbox").clickSet((el) => {
//                 let price = parseFloat($(el).attr("data-price"));
//                 let mult = parseFloat($(el).attr("data-mult"));
//                 let total = price * mult;

//                 // Format total with comma as decimal separator
//                 let totString = total.toString().replace(".", ",");

//                 $(".price-total").text(total); // Or use totString if desired
//                 $('[data-input-sync="Valor Total"]').val(totString);
//                 $('.consulta-form-wrap').find('.pop-form-picker input').first().val(mult)
//                 });
                
//                 setTimeout(()=>{
//                     $('.flt-dd-wrap').each(function(idx, el){ // see if required only has a single option
//                         if($(el).find('.flt-filter').length == 1){
//                             if($(el).parents('.consulta-wrap').length > 0){
//                                 $(el).find('.flt-check').get(0).click()
//                                 $(el).find('.flt-item').trigger('mouseenter')
//                                 $(el).find('.flt-item').trigger('mouseleave')
//                             }
    
//                             gsap.set($(el).find('.flt-svg'), {
//                                 opacity: 0
//                             })
    
//                             gsap.to($(el).find('.flt-input-res, .flt-text'), {
//                                 opacity: 0.8,
//                                 duration: 1
//                             })
    
//                             gsap.set($(el), {
//                                 pointerEvents: 'none'
//                             })
//                         }
//                     })
    
    
//                     $('.flt-dd-wrap').find('[data-filter-group]').removeAttr('data-filter-group')
    
//                     mixer = mixitup($('.page-container').find('.consulta-wrap')[0], {
//                         selectors: {
//                             target: '.consulta-res-card'
//                         },
//                         multifilter:{
//                             enable: true,
//                             parseOn: 'change'
//                         },
//                         animation: {
//                             enable: false,
//                             // effectsIn: 'fade translateY(-100%)',
//                             // effectsOut: 'fade translateY(-100%)',
//                             // duration: 390
//                         },
//                         callbacks: {
//                             onMixStart: function(state, futureState){
//                                 ScrollTrigger.refresh()
//                             },
//                             onMixEnd: function(state){
//                                 ScrollTrigger.refresh()
//                             },
//                             onMixFail: function(state){
//                             }
//                         }
//                     })

//                     mixer.sort('order:asc')
    
//                     // $('.consulta-wrap .flt-check').clickSet((el)=>{
//                     //     $('.multifilter-submit').get(0).click()
//                     // })
//                 }, 500)
    
    
//                 // -------- FORM FINAL --------
//                 $('#ConsultaPartida').attr('readonly', '')
    
//                 let maxRange = 0

//                 let dpMin = new AirDatepicker('#ConsultaPartida', {
//                     locale: AirDatepickerPT,
//                     autoClose: true,
//                     container: $('.consulta-form-calendar')[0]
//                 })

//                 dpMin.update({
//                     minDate: new Date()
//                 })


//                 // $('[data-filter-sync="Noites"]').clickSet(()=>{
//                 //     setTimeout(()=>{
//                 //         if($('[data-filter-sync="Noites"]').find('input:checked').val() != undefined){
//                 //             maxRange = parseFloat($('[data-filter-sync="Noites"]').find('input:checked').val().split('"')[1])
//                 //         }
//                 //     }, 10)
//                 // })


//                 $('[data-filter-sync="Periodo"]').clickSet(()=>{ // string vem no formato "DIA MÊS a DIA MÊS", com mês abreviado em 3 letras
//                     let period = $('[data-filter-sync="Periodo"]').find('input:checked').val()

//                     if(period != undefined){
//                         if (period.indexOf('"') != -1) {
//                             period = period.split('"')[1]
//                         }
    
//                         let minRange = period.split(" a ")[0].trim()
//                         let maxRange = period.split(" a ")[1].trim()
    
//                         let minDay = minRange.split(' ')[0]
//                         let minMonth = minRange.split(' ')[1].toLowerCase()
//                         let maxDay = maxRange.split(' ')[0]
//                         let maxMonth = maxRange.split(' ')[1].toLowerCase()

//                         if(maxMonth == 'de')
//                                 maxMonth = maxRange.split(' ')[2].toLowerCase()
    
//                         switch(minMonth){
//                             case 'jan':
//                                 minMonth = 0
//                                 break;
//                             case 'fev':
//                                 minMonth = 1
//                                 break;
//                             case 'mar':
//                                 minMonth = 2
//                                 break;
//                             case 'abr':
//                                 minMonth = 3
//                                 break;
//                             case 'mai':
//                                 minMonth = 4
//                                 break;
//                             case 'jun':
//                                 minMonth = 5
//                                 break;
//                             case 'jul':
//                                 minMonth = 6
//                                 break;
//                             case 'ago':
//                                 minMonth = 7
//                                 break;
//                             case 'set':
//                                 minMonth = 8
//                                 break;
//                             case 'out':
//                                 minMonth = 9
//                                 break;
//                             case 'nov':
//                                 minMonth = 10
//                                 break;
//                             case 'dec':
//                                 minMonth = 11
//                                 break;
//                             default:
//                                 minMonth = 0
//                                 break;
//                         }
//                         switch(maxMonth){
//                             case 'jan':
//                                 maxMonth = 0
//                                 break;
//                             case 'fev':
//                                 maxMonth = 1
//                                 break;
//                             case 'mar':
//                                 maxMonth = 2
//                                 break;
//                             case 'abr':
//                                 maxMonth = 3
//                                 break;
//                             case 'mai':
//                                 maxMonth = 4
//                                 break;
//                             case 'jun':
//                                 maxMonth = 5
//                                 break;
//                             case 'jul':
//                                 maxMonth = 6
//                                 break;
//                             case 'ago':
//                                 maxMonth = 7
//                                 break;
//                             case 'set':
//                                 maxMonth = 8
//                                 break;
//                             case 'out':
//                                 maxMonth = 9
//                                 break;
//                             case 'nov':
//                                 maxMonth = 10
//                                 break;
//                             case 'dec':
//                                 maxMonth = 11
//                                 break;
//                             default:
//                                 maxMonth = 11
//                                 break;
//                         }
    
    
//                         let maxDate = new Date( new Date().getUTCFullYear(), maxMonth, maxDay )
//                         let minDate
    
//                         if(maxDate < new Date()){
//                             maxDate = new Date( new Date().getUTCFullYear()+1, maxMonth, maxDay )
//                             minDate = new Date( new Date().getUTCFullYear()+1, minMonth, minDay )
//                         }
//                         else{
//                             minDate = new Date( new Date().getUTCFullYear(), minMonth, minDay )
//                         }
    
//                         dpMin.update({
//                             minDate: minDate,
//                             maxDate: maxDate
//                         })
//                     }
//                 })
    
    
//                 $('.consulta-form-wrap').find('.pop-form-input-wrap, .pop-form-dd-wrap').each(function(idx, el){
//                     $(el).on('focus click', ()=>{
//                         if($(el).find('.pop-form-input-label').length > 0){
//                             gsap.to($(el).find('.pop-form-input-label'), {
//                                 paddingTop: 0,
//                                 marginTop: '-0.25em',
//                                 opacity: 0.6,
//                                 scale: 0.8,
//                                 ease: 'power2.inOut',
//                                 duration: 0.35
//                             })
//                         }
//                     })
//                 })
//                 $('.consulta-form-wrap').find('.pop-form-input').each(function(idx, el){
//                     $(el).on('focus', ()=>{
//                         if($(el).siblings('.pop-form-input-label').length > 0){
//                             gsap.to($(el).siblings('.pop-form-input-label'), {
//                                 paddingTop: 0,
//                                 marginTop: '-0.25em',
//                                 opacity: 0.6,
//                                 scale: 0.8,
//                                 ease: 'power2.inOut',
//                                 duration: 0.35
//                             })
//                         }
//                     })
//                 })
    
//                 $('#ConsultaAdultos, #ConsultaCriancas').attr('readonly', '')
    
//                 $('.consulta-form-wrap').find('.pop-form-picker').each(function(idx, el){
//                     $(el).find('input').val(0)
                    
//                     $(el).find('.minus').clickSet(()=>{
//                         let input = parseFloat($(el).find('input').val())
//                         let num = input - 1
//                         if(num < 0) num = 0
//                         $(el).find('input').val(num)

//                         if(num == 0 && $(el).find('[wr-type="info"]').length > 0){
//                             gsap.to($(el).find('[wr-type="info"]'), {
//                                 opacity: 0,
//                                 duration: 0.5,
//                                 ease: 'power2.inOut'
//                             })
//                         }
//                     })
//                     $(el).find('.plus').clickSet(()=>{
//                         let input = parseFloat($(el).find('input').val())
//                         let num = input + 1

//                         let total = num + parseFloat($('.consulta-form-wrap').find('.pop-form-picker').not(el).find('input').val())

//                         if(total <= $('[data-input-sync="Capacidade"]').val()){
//                             $(el).find('input').val(num)
//                         }

//                         if($(el).find('[wr-type="info"]').length > 0){
//                             gsap.to($(el).find('[wr-type="info"]'), {
//                                 opacity: 1,
//                                 duration: 0.5,
//                                 ease: 'power2.inOut'
//                             })
//                         }
//                     })
//                 })
    
//                 $('.consulta-form-wrap').find('.pop-form-input-wrap').each(function(idx, el){
//                     $(el).on('click mouseenter', ()=>{
//                         gsap.to($(el), {
//                             zIndex: 100,
//                             ease: 'power2.inOut',
//                             duration: 0.35
//                         })
//                         if($(el).find('.pop-form-expand').length > 0){
//                             gsap.to($(el).find('.pop-form-expand'), {
//                                 height: 'auto',
//                                 opacity: 1,
//                                 ease: 'power2.inOut',
//                                 duration: 0.35
//                             })
//                         }
//                     })
//                     $(el).on('mouseleave', ()=>{
    
//                         gsap.to($(el), {
//                             zIndex: 0,
//                             ease: 'power2.inOut',
//                             duration: 0.35
//                         })
//                         if($(el).find('.pop-form-expand').length > 0){
//                             gsap.to($(el).find('.pop-form-expand'), {
//                                 height: 0,
//                                 opacity: 0,
//                                 ease: 'power2.inOut',
//                                 duration: 0.35
//                             })
//                         }
//                     })
//                 })
    
//                 $('.consulta-form-wrap').find('.pop-cont-radio').each(function(idx, el){
//                     $(el).find('.radio').attr('value', $(el).find('.w-form-label').text())
//                     $(el).find('input').attr('value', $(el).find('.w-form-label').text())
//                 })
//                 $('.consulta-form-wrap').find('.pop-cont-radio').clickSet((el)=>{
//                     let textDiv = $(el).parents('.pop-form-input-wrap').find('.pop-form-input')
//                     textDiv.val($(el).children().text())
//                 })
    
    
//                 $('.consulta-wrap').find('.popup-form').each(function(){
            
//                     let elem = this;
//                     let divClass = '.pop-form-input-wrap'
            
//                     $(this).find('[wr-type="error"]').hide() // Hide errors
//                     $(this).find('[wr-type="required-field"]').removeClass('error') // Remove error state from fields
                    
//                     var formErrors = false
                    
//                     const fieldError = function(field) {
//                         field.parents(divClass).find('[wr-type="error"]').show() // Show error message
//                         field.siblings('[wr-type="error"]').show()
//                         field.addClass('error') // Add error state to this field
//                         field.siblings().addClass('error') // Add error state to field siblings
            
//                         // if(field.parents(divClass).find('.form-dropdown-txt-wrap').length > 0) 
//                         //     field.parents(divClass).find('.form-dropdown-txt-wrap').addClass('error')
            
//                         formErrors = true
//                     }
                    
//                     // Click on the Submit button
//                     $(this).find('[wr-type="submit"], [wr-type="progress"]').click(function() {
//                         // Check each required field
//                         $(elem).find('[wr-type="required-field"]').each(function() {
//                             if ($(this).val().length === 0 || $(this).val() == '0') { // If this field is empty
//                                 fieldError($(this));
//                             } 
//                             else if ($(this).attr('type') === 'email' // Validation for email fields
//                                 && ( $(this).val().indexOf('@') === -1 || $(this).val().indexOf('.') === -1) ) 
//                             {
//                                     fieldError($(this))
//                                 } 
//                             else if ($(this).attr('type') === 'tel' // Validation for phone fields
//                                 && ( isNaN(parseInt($(this).val())) ) )
//                             {
//                                     fieldError($(this))
//                                 }
//                             else if ($(this).attr('type') === 'checkbox' // Validation for required checkbox
//                                 && ($(this).siblings('.w--redirected-checked').length < 1))
//                             {
//                                     fieldError($(this))
//                                 }
//                         })
//                         $(elem).find('[wr-type="required-radio"]').each(function() {
//                             if ($(this).find('.w--redirected-checked').length < 1)
//                             {
//                                     fieldError($(this))
//                                 }
//                         })
            
//                         // Submit parent form if there are no errors
//                         if (!formErrors && ($(this).attr('wr-type') === 'submit')) {
//                             let newInput = $('.loader .form-input-hidden').clone()
//                             newInput.attr('name', 'Quartos - RawStrHTML')
//                             $('.pop-form-hidden-quartos input').each(function(idx, el){
//                                 newInput.attr('value', newInput.attr('value') + '<span>' + $(el).attr('name').split('Quartos - ')[1] + ': ' + $(el).attr('value') + '</span><br/>')
//                             })
//                             $('.pop-form-hidden-quartos').append(newInput)

//                             $(elem).find('form').submit()
    
//                             $('.consulta-wrap').addClass('finished')
//                             $('.consulta-wrap').removeClass('step-1')
//                             $('.consulta-wrap').removeClass('step-2')
//                         }
//                     });
                    
//                     // Remove errors from field
//                     $(this).find('[wr-type="required-field"], [wr-type="required-radio"], [wr-type="file-field"], [wr-type="required-dropdown"]').on('keypress blur', function() {
//                         $(this).siblings().removeClass('error') // Add error state to field siblings
//                         $(this).removeClass('error')
            
//                         $(this).siblings('[wr-type="error"]').hide()
//                         $(this).find('[wr-type="error"]').hide()
            
//                         $(this).parents(divClass).find('[wr-type="error"]').hide()
//                         if($(this).parents(divClass).find('.form-dropdown-txt-wrap').length > 0){
//                             $(this).parents(divClass).find('.form-dropdown-txt-wrap').removeClass('error')
//                         }
//                         formErrors = false
//                     });

//                     $(this).find('.pop-form-picker-block').on('keypress blur click', function() {
//                         $(this).siblings().removeClass('error') // Add error state to field siblings
//                         $(this).removeClass('error')
            
//                         $(this).siblings('[wr-type="error"]').hide()
//                         $(this).find('[wr-type="error"]').hide()
            
//                         $(this).parents(divClass).find('[wr-type="error"]').hide()
//                         if($(this).parents(divClass).find('.form-dropdown-txt-wrap').length > 0){
//                             $(this).parents(divClass).find('.form-dropdown-txt-wrap').removeClass('error')
//                         }
//                         formErrors = false
//                     });

                    
//                     // Press Enter
//                     $(this).find('input, textarea').keypress(function(e) { 
//                         if (e.keyCode == 13) {  
//                             e.preventDefault()
//                             $(this).trigger("change")
//                             $(this).find('[wr-type="submit"], [wr-type="progress"]').click()
//                         }

//                     })
//                 })
    
//             })
//         }
        

//     }

//     async render(){
//          // -------- FORM AUTOFILL --------
//          gsap.set($('.pop-expand-content'), {overflow: 'hidden'})
//          $('.popup-wrap.orcamento').each(function(idx, el){
//             $($('.surf-trip-tags .tag-wrap').get().reverse()).each(function(index, elem){
//                 let formSlug = $(elem).attr('data-form')
                
//                 $(el).find(`input[value="${formSlug}"]`).parents('.pop-form-input-wrap').trigger('mouseenter')
//                 setTimeout(()=>{
//                     $(el).find(`input[value="${formSlug}"]`).parent().click()
//                     $(el).find(`input[value="${formSlug}"]`).parents('.pop-form-input-wrap').trigger('mouseleave')
//                 }, 750)

//             })
            
//             let heroSlug = $('.det-hero-heading').attr('data-form')

//             let ResortNome = document.getElementById('Resort-Nome-2');
//             if(ResortNome)
//             {
//             ResortNome.value = document.getElementById('title').textContent;;
//             document.getElementById('surftrip-type-2').value =  $('.surftriptype-name').text();
//             }

//             $(el).find(`input[value="${heroSlug}"]`).parent().parent().trigger('mouseenter')
//             setTimeout(()=>{
//                 $(el).find(`input[value="${heroSlug}"]`).parent().trigger('click')
//                 $(el).find(`input[value="${heroSlug}"]`).parent().parent().trigger('mouseleave')
//             }, 750)
//         })
//         gsap.set($('.pop-expand-content'), {
//             overflow: 'auto',
//             overflowX: 'clip'
//         })


//         // $(el).find(`input[value="${heroSlug}"]`).prop('checked', true)
//         // $(el).find(`input[value="${heroSlug}"]`).siblings('w-radio-input').addClass('w--redirected-checked')
        
//         // ................................ SPLIDES ................................
//         if($(window).outerWidth() < 992){ // MOBILE
//             $('.desktop.splide__arrows').remove()
//         }

//         // -------- POPUP GALLERY --------
//         if($('.global-fixed').find('.det-popup-gal').first().length > 0){

//             let galSplide = new Splide($('.global-fixed').find('.det-popup-content.splide').first().get(0), {
//                 type: 'fade',
//                 direction: 'ltr',
    
//                 autoWidth: true,
    
//                 // autoHeight: true,
//                 // heightRatio: 1,
    
//                 // drag: 'free',
//                 flickPower: 150,
    
//                 arrows: true,
//                 speed: 1000,
    
//                 // arrows: {
//                 //     prev: $('.onda-slide-btn.prev')[0],
//                 //     next: $('.onda-slide-btn.next')[0]
//                 // },
//                 pagination: false,
    
//             } );



//             let thumbSplide = new Splide($('.global-fixed').find('.det-popup-thumb-slide.splide').first().get(0), {
//                 type: 'slide',
//                 direction: 'ltr',
    
//                 autoWidth: true,
    
//                 // autoHeight: true,
//                 // heightRatio: 1,
    
//                 //drag: 'free',
//                 flickPower: 150,
    
//                 arrows: false,
//                 speed: 250,
    
//                 // arrows: {
//                 //     prev: $('.onda-slide-btn.prev')[0],
//                 //     next: $('.onda-slide-btn.next')[0]
//                 // },
//                 pagination: false,
    
//             } );

//             thumbSplide.sync(galSplide)

//             galSplide.mount()
//             $('.det-popup-content.splide').get(0).splide = galSplide
//             thumbSplide.mount()
//             $('.det-popup-thumb-slide.splide').get(0).splide = thumbSplide
//         }


       

//         // -------- THUMB GALLERY --------
//         //$('.det-thumb-wrap script').remove()

//         if($('.page-container').find('.det-thumb-wrap.splide').first().length > 0 && $('.page-container').find('.det-thumb-wrap .splide__slide').first().length > 0){

//             var thumbSplide = new Splide($('.page-container').find('.det-thumb-wrap.splide').first().get(0), {
//                 type: 'loop',
//                 direction: 'ltr',
    
//                 autoWidth: true,
    
//                 // autoHeight: true,
//                 // heightRatio: 1,
    
//                 drag: 'free',
//                 flickPower: 150,
    
//                 arrows: false,
//                 speed: 1000,
    
//                 // arrows: {
//                 //     prev: $('.onda-slide-btn.prev')[0],
//                 //     next: $('.onda-slide-btn.next')[0]
//                 // },
//                 pagination: false,
    
    
//             } );
    
//             thumbSplide.on( 'ready', function () {
//                 setTimeout(()=>{
//                     thumbSplide.go('+1')
//                     thumbSplide.go('-1')

//                         // -------- THUMBS HERO POPUP CLICK--------
//                         $('.det-thumb-img').clickSet((el)=>{

//                             gsap.set($('.det-popup-gal'), {display: 'block', opacity: 0})
//                             gsap.to($('.det-popup-gal'), {
//                                 opacity: 1,
//                                 duration: 0.5,
//                                 ease: 'power2.inOut'
//                             })

//                             console.log("looooooooook in 2");
//                             $('.det-pop-list *').remove()
//                             $('.det-pop-thumb-list *').remove()
//                             console.log("looooooooook out 2");

//                             $('.det-thumb-img').not('.splide__slide--clone').each(function(idx, elem){
//                                 $('.det-pop-list').append($(elem).find('.full-res-img').children().clone())
//                                 $('.det-pop-thumb-list').append($(elem).clone())
//                             })

//                             $('.det-pop-list').children().wrap('<div class="det-pop-item-img"></div>')
//                             $('.det-pop-list').children().wrap('<div class="det-pop-item splide__slide"></div>')

//                             $('.det-pop-thumb-list').children().removeClass('det-thumb-img')
//                             $('.det-pop-thumb-list').children().addClass('det-thumb-img-popup')
                            

//                             let i = $(el).attr('aria-label').split(' ')[0]
//                             $('.det-popup-content.splide').get(0).splide.refresh()
//                             $('.det-popup-content.splide').get(0).splide.go(parseFloat(i)-1)
//                             $('.det-popup-thumb-slide.splide').get(0).splide.refresh()
//                             $('.det-popup-thumb-slide.splide').get(0).splide.go(parseFloat(i)-1)
//                         })
//                 }, 250)
//             } );
//             thumbSplide.mount()
//         }
        

//         // // -------- GALLERY --------
//         if($('.page-container').find('.onda-gal-item.splide').first().length > 0 && $('.page-container').find('.onda-gal-item .splide__slide').first().length > 0){
//             var galSplide = new Splide($('.page-container').find('.onda-gal-item.splide').first().get(0), {
//                 type: 'loop',
//                 direction: 'ltr',
    
//                 autoWidth: true,
    
//                 // autoHeight: true,
//                 // heightRatio: 1,
    
//                 drag: 'free',
//                 // rewind: 'true',
//                 // flickPower: 150,
    
//                 arrows: true,
//                 speed: 1000,
    
//                 focus: 'center',
    
//                 // arrows: {
//                 //     prev: $('.onda-slide-btn.prev')[0],
//                 //     next: $('.onda-slide-btn.next')[0]
//                 // },
//                 pagination: false,
    
    
//             } );
    
//             galSplide.on( 'ready', function () {
//                 setTimeout(()=>{
//                     galSplide.go('+1')
//                     galSplide.go('-1')
//                 }, 250)
//             } );
//             galSplide.mount()
//         }


//         // // -------- COMODIDADES GALLERY --------

//         if($('.page-container').find('.fac-splide.splide').first().length > 0 && $('.page-container').find('.fac-splide .splide__slide').first().length > 0){
//             var commSplide = new Splide($('.page-container').find('.fac-splide.splide').first().get(0), {
//                 type: 'slide',
//                 direction: 'ltr',
    
//                 autoWidth: true,
    
//                 // autoHeight: true,
//                 // heightRatio: 1,
    
//                 // drag: 'free',
//                 // flickPower: 150,
    
//                 arrows: true,
//                 speed: 1000,
    
//                 pagination: false,
    
//             } );
    
//             commSplide.mount()
//         }


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

//         if($('.page-container').find('.acc-gal-wrap.splide').first().length > 0 && $('.page-container').find('.acc-gal-wrap .splide__slide').first().length > 0){
//             let accGalSplide = new Splide($('.page-container').find('.acc-gal-wrap.splide').first().get(0), {
//                 type: 'slide',
//                 direction: 'ltr',
//                 autoWidth: true,
//                 arrows: false,
//                 speed: 1000,
//                 pagination: false,
//             } );

//             accGalSplide.mount()

//             $('.acc-list-item').clickSet(function(el){
//                 let name = $(el).attr('data-name')

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
//                             $('.acc-gal-item').not(`[data-name="${name}"]`).removeClass('splide__slide')
//                             $('.acc-gal-item').not(`[data-name="${name}"]`).removeAttr('id')
//                             $('.acc-gal-item').not(`[data-name="${name}"]`).removeAttr('role')
//                             $('.acc-gal-item').not(`[data-name="${name}"]`).removeAttr('aria-roledescription')
//                             $('.acc-gal-item').not(`[data-name="${name}"]`).removeAttr('aria-label')

//                             $(`.acc-gal-item[data-name="${name}"]`).addClass('splide__slide')

//                             gsap.set($(`.acc-gal-item[data-name="${name}"]`), {
//                                 display: 'flex'
//                             })

//                             accGalSplide.go(0)
//                             accGalSplide.refresh()

//                             gsap.set($('.acc-gal-item').not(`[data-name="${name}"]`), {
//                                 display: 'none'
//                             })

                            
//                         }
//                     })

//                 }, 10)
//             })
//         }

//         // -------- TESTEMUNHOS --------
//         if($('.page-container').find('.test-holder.splide').length > 0 && $('.page-container').find('.test-holder .splide__slide').first().length > 0){
//             $('.test-item').removeClass('.is-active')
//             if($('.prog-bar-holder').length == 1) gsap.set($('.test-prog'), {display: 'none'})
//             var testSplide = new Splide($('.page-container').find('.test-holder.splide').first().get(0), {
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
    
//             $('.page-container').find('.test-holder').find('.prog-bar-scrub').each(function(idx, el){
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
//                 let scrub = $('.page-container').find('.test-holder').find('.prog-bar-scrub')
    
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
    
//             $('.page-container').find('.test-holder').find('.prog-bar-holder').clickSet(function(el){
//                 let idx = $(el).index()
//                 testSplide.go(idx)
//             })
//         }


//         // ................................ VIDEOS ................................
       
//         $('.w-condition-invisible').remove()

//     //     if(Webflow.env('editor') == undefined){
//     //         $('.page-container').find('.det-dest-media .onda-video, .ondas .onda-video').each(function(idx, el){
//     //             // const controls = ['play', 'play-large', 'progress', 'current-time', 'fullscreen'];
//     //             let iframe = $(el).find('iframe')
    
//     //             let vidBaseSrc = iframe.attr('data-base-src')
//     //             let vidParams = iframe.attr('data-params')
//     // vidParams = vidParams + '&quality=240p';
//     //             let vidSrc = iframe.attr('data-src')
    
//     //             if(vidSrc != undefined){
//     //                 let vidCode = vidSrc.split('https://vimeo.com/')[1]
        
//     //                 iframe.attr('src', vidBaseSrc+vidCode+vidParams)
        
//     //                 let player = new Plyr($(el).find('.plyr__video-embed'), {
//     //                     autoplay: true,
//     //                     autopause: false,
//     //                     muted: true,
//     //                     //youtube: {noCookie: true}
//     //                 })
        
//     //                 el.player = player
    
//     //                 player.muted = true
        
//     //                 player.once('ready', ()=>{
//     //                     player.restart()
//     //                     player.play()
//     //                 })
        
//     //                 player.once('playing', ()=>{
//     //                     player.restart()
//     //                     player.play()
    
//     //                     gsap.to($(el),{
//     //                         opacity: 1,
//     //                         duration: 0.75,
//     //                         ease: 'power2.inOut'
//     //                     })
//     //                     gsap.to($(el).parent().find('.contain-img'),{
//     //                         opacity: 0,
//     //                         duration: 0.75,
//     //                         ease: 'power2.inOut'
//     //                     })
//     //                     $(el).find('.plyr__controls, .plyr__control').remove()
//     //                 })
//     //             }
    
//     //         })
//     //     }

//         // $('.onda-img').clickSet((el)=>{
//         //     if($(el).find('.onda-popup').length > 0){
//         //         let clone = $(el).find('.onda-popup').clone()

    
//         //         $('.global-fixed').append(clone)
                
    
//         //         const controls = ['play', 'play-large', 'progress', 'current-time', 'fullscreen'];
//         //         let iframe = $('.onda-popup').find('iframe')
    
//         //         let vidBaseSrc = iframe.attr('data-base-src')
//         //         let vidParams = iframe.attr('data-params')
    
//         //         let vidSrc = iframe.attr('data-src')
    
//         //         let vidCode = vidSrc.split('https://www.youtube.com/watch?v=')[1]
    
//         //         iframe.attr('src', vidBaseSrc+vidCode+vidParams)
    
//         //         let player = new Plyr(clone.find('.plyr__video-embed'), {
//         //             controls: controls,
//         //             youtube: {noCookie: true}
//         //         })
    
//         //         this.player = player
    
//         //         clone.find('.onda-vid-close').clickSet((el)=>{
//         //             $('.global-fixed .onda-popup').remove()
//         //         })

//         //     }

//         // })


        
//     }

//     async intro(){
//         //$('.loader').remove()
//     }

//     async leave(){
//         gsap.to($('.ancoras-fixed'), {
//             y: '100%',
//             duration: 0.25,
//             ease: 'power2.inOut',
//             onComplete: ()=>{
//                 $('.global-fixed *').remove()
//             }
//         })
//         return
//     }
// }

