






/****************************************************************************************
--------------------------------------- COMPONENTS --------------------------------------
*****************************************************************************************/

function navScaleDown(){
    gsap.to($('.nav-holder'), {
        y: -$('.nav-banner').outerHeight(),
        duration: 0.5,
        ease: 'power2.inOut'
    })

    gsap.to($('.nav-banner'), {
        y: -$('.nav-banner').outerHeight(),
        duration: 0.5,
        ease: 'power2.inOut'
    })

    gsap.to($('.nav-takeoff-svg'), {
        width: $('.nav-takeoff-svg-sizer.small').outerWidth(),
        height: $('.nav-takeoff-svg-sizer.small').outerHeight(),
        duration: 0.5,
        ease: 'power2.inOut'
    })


    if($(window).outerWidth() >= 992){ // DESKTOP
        gsap.to($('.nav-wrap'), {
            paddingTop: '0.75em',
            paddingBottom: '0.75em',
            duration: 0.5,
            ease: 'power2.inOut'
        })

        gsap.to($('.nav-menu-expand'), {
            paddingTop: '1.25em',
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }
    else{
        gsap.to($('.nav-wrap'), {
            paddingTop: '0.75em',
            paddingBottom: '0.75em',
            duration: 0.5,
            ease: 'power2.inOut'
        })

        gsap.to($('.nav-menu-expand'), {
            paddingTop: '1.25em',
            duration: 0.5,
            ease: 'power2.inOut'
        })
        // gsap.to($('.nav-wrap'), {
        //     backgroundColor: colors.white,
        //     duration: 0.5,
        //     ease: 'power2.inOut'
        // })

        gsap.to($('.nav-holder'), {
            marginBottom: -$('.nav-banner').outerHeight(),
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }

    if(navDark === true){
        gsap.to($('.nav-holder'), {
            boxShadow: '0 2px 120px rgba(0, 0, 0, .2)',
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }
}

function navScaleUp(){
    gsap.to($('.nav-holder'), {
        y: 0,
        duration: 0.5,
        ease: 'power2.inOut'
    })
    gsap.to($('.nav-banner'), {
        y: 0,
        duration: 0.5,
        ease: 'power2.inOut'
    })
    gsap.to($('.nav-takeoff-svg'), {
        width: $('.nav-takeoff-svg-sizer.big').outerWidth(),
        height: $('.nav-takeoff-svg-sizer.big').outerHeight(),
        duration: 0.5,
        ease: 'power2.inOut'
    })

    if($(window).outerWidth() >= 992){ // DESKTOP
        gsap.to($('.nav-wrap'), {
            paddingTop: '2.1875em',
            paddingBottom: '2.1875em',
            duration: 0.5,
            ease: 'power2.inOut'
        })

        gsap.to($('.nav-menu-expand'), {
            paddingTop: '0em',
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }
    else{
        gsap.to($('.nav-wrap'), {
            paddingTop: '1.875em',
            paddingBottom: '1.875em',
            duration: 0.5,
            ease: 'power2.inOut'
        })

        gsap.to($('.nav-menu-expand'), {
            paddingTop: '0em',
            duration: 0.5,
            ease: 'power2.inOut'
        })

        gsap.to($('.nav-holder'), {
            marginBottom: 0,
            duration: 0.5,
            ease: 'power2.inOut'
        })
        // gsap.to($('.nav-wrap'), {
        //     backgroundColor: colors.white,
        //     duration: 0.5,
        //     ease: 'power2.inOut'
        // })
    }

    if(navDark === true){
        gsap.to($('.nav-holder'), {
            boxShadow: '0 2px 120px rgba(0, 0, 0, .0)',
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }
}


function navProtOn(){
    if(navDark === false){
        gsap.to($('.nav-holder'), {
            backgroundColor: colors.white,
            boxShadow: '0 2px 120px rgba(0, 0, 0, .2)',
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }
    else{
        gsap.to($('.nav-holder'), {
            backgroundColor: colors.white,
            boxShadow: '0 2px 120px rgba(0, 0, 0, .0)',
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }
    gsap.to($('.nav-menu-bottom'), {
        backgroundColor: colors.white,
        duration: 0.5,
        ease: 'power2.inOut'
    })


    gsap.to($('.nav-takeoff-svg'), {
        color: colors.darkblue,
        duration: 0.5,
        ease: 'power2.inOut'
    })

    gsap.to($('.nav-lang, .nav-search, .nav-cta'),{
        borderColor: 'rgba(23, 23, 23, 0.2)',
        duration: 0.5,
        ease: 'power2.inOut'
    })

    gsap.to($('.nav-wrap'), {
        color: colors.black,
        duration: 0.5,
        ease: 'power2.inOut'
    })

}

function navProtOff(){

    gsap.to($('.nav-holder'), {
        backgroundColor: 'transparent',
        boxShadow: '0 2px 120px rgba(0, 0, 0, 0)',
        duration: 0.5,
        ease: 'power2.inOut'
    })
    gsap.to($('.nav-menu-bottom'), {
        backgroundColor: 'transparent',
        duration: 0.5,
        ease: 'power2.inOut'
    })


    gsap.to($('.nav-takeoff-svg'), {
        color: colors.white,
        duration: 0.5,
        ease: 'power2.inOut'
    })

    gsap.to($('.nav-lang, .nav-search'),{
        borderColor: 'rgba(255, 255, 255, 0.15)',
        duration: 0.5,
        ease: 'power2.inOut'
    })

    gsap.to($('.nav-cta'),{
        borderColor: 'rgba(255, 255, 255, 1)',
        duration: 0.5,
        ease: 'power2.inOut'
    })

    gsap.to($('.nav-wrap'), {
        color: colors.white,
        duration: 0.5,
        ease: 'power2.inOut'
    })

}

function navMenuOpen(hoverAttr){
    if($(window).outerWidth() >= 992){ // DESKTOP
        lenis.stop()

        let activeTab = $(`[data-hover-tab='${hoverAttr}']`)

        // if(navProt == false && navMenu == false){
        //     gsap.set($('.nav-menu-expand'), {
        //         backgroundColor: 'transparent'
        //     })

        //     gsap.to($('.nav-menu-expand'), {
        //         backgroundColor: colors.white,
        //         duration: 0.5,
        //         ease: 'power2.inOut'
        //     })
        // }
        // else{
        //     gsap.set($('.nav-menu-expand'), {
        //         backgroundColor: colors.white
        //     })
        // }
        
        gsap.to($('.nav-menu'),{
            height: 'auto',
            duration: 0.5,
            ease: 'power2.inOut'
        })

        gsap.set(activeTab, {
            opacity: 1,
            pointerEvents: 'auto',
            overwrite: true
        })
        gsap.set($('.nav-menu-tab-container').not(activeTab), {
            opacity: 0,
            pointerEvents: 'none',
        })
        // gsap.to(activeTab,{
        //     opacity: 1,
        //     pointerEvents: 'auto',
        //     duration: 0.5,
        //     ease: 'power2.inOut'
        // })

        gsap.to($('.nav-menu-bg'),{
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut'
        })
        gsap.to($('.nav-holder'), {
            borderBottomRightRadius: '1.5em',
            borderBottomLeftRadius: '1.5em',
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }
    else{
        gsap.set($('body'), {
            overflow: 'hidden'
        })
        // gsap.to($('.nav-holder'),{
        //     height: '100dvh',
        //     duration: 0.5,
        //     ease: 'power2.inOut'
        // })

        gsap.to($('.nav-menu'),{
            height: '100vh',
            duration: 0.5,
            ease: 'power2.inOut'
        })

        gsap.to($('.nav-menu-bg'),{
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut'
        })

        if(navProt == false && navMenu == false){
            navProtOn()
        }
        navMenu = true
    }

}

function navMenuClose(){
    lenis.start()

    gsap.set($('body'), {
        overflow: 'unset'
    })

    // if(navProt == false){
    //     gsap.to($('.nav-holder, .nav-menu-expand'), {
    //         backgroundColor: 'transparent',
    //         duration: 0.5,
    //         ease: 'power2.inOut'
    //     })
    // }

    if($(window).outerWidth() >= 992){ // DESKTOP
        gsap.to($('.nav-menu'),{
            height: 0,
            duration: 0.5,
            ease: 'power2.inOut'
        })

        gsap.to($('.nav-menu-tab-container'),{
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.5,
            ease: 'power2.inOut'
        })

        gsap.to($('.nav-menu-bg'),{
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut'
        })

        gsap.to($('.nav-holder'), {
            borderBottomRightRadius: '0em',
            borderBottomLeftRadius: '0em',
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }
    else{
        // gsap.to($('.nav-holder'),{
        //     height: 'auto',
        //     duration: 0.5,
        //     ease: 'power2.inOut'
        // })

        gsap.to($('.nav-menu'),{
            height: 0,
            duration: 0.5,
            ease: 'power2.inOut'
        })

        gsap.to($('.nav-menu-bg'),{
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut'
        })

        if(navProt==false && navDark === false){
            navProtOff()
        }
        navMenu = false
    
    }
}


function navSetupScroll(){
    ScrollTrigger.create({
        trigger: $('.fouc-hide'),
        start: "top+=25px top",
        end: "top+=25px top",
        invalidateOnRefresh: true,
        onEnter: ()=>{
            navProt = true
            if(navDark === false){
                navProtOn()
            }
            navScaleDown()
        },
        onLeaveBack: ()=>{
            navProt = false
            if(navDark === false){
                navProtOff()
            }
            navScaleUp()
        }
    })
}


function navInit(){
    gsap.set($('.nav-wrap'),{
        paddingTop: '2.1875em',
        paddingBottom: '2.1875em',
    })

    gsap.set($('.nav'),{
        y: '0em'
    })

    if($('.nav-banner').hasClass('w-condition-invisible'))$('.nav-banner').remove()
    gsap.set($('.page-container'), {
        paddingTop: $('.nav-banner').outerHeight()
    })

    gsap.set($('.nav-holder'), {
        backgroundColor: 'transparent'
    })

    gsap.set($('.nav-menu-bg, .popup-wrap-bg'), {
        opacity: 0
    })

    gsap.to($('.nav-banner-looper-bloc'), {
        x: '-100%',
        repeat: -1,
        duration: 24,
        ease: 'linear'
    })

    navSetupScroll()

    // -------------------- NAV MENU SETUP
    if($(window).outerWidth() >= 992){ // DESKTOP
        gsap.set($('.nav-menu-tab-container'), {
            opacity: 0,
            backgroundColor: 'transparent'
        })
    }
    else{
        gsap.set($('.nav-menu-expand'), {
            height: ()=>{
                return $(window).height() - parseFloat($('.nav').outerHeight())
            }
        })
    }

    $('.nav-link[data-hover]').hoverSet(
        (el)=>{
            if(navProt == false && navMenu == false){
                navProtOn()
            }
            navMenuOpen($(el).attr('data-hover'))
            navMenu = true

            lenis.stop()

            gsap.to($(el).children(), {
                color: colors.blue,
                duration: 0.35,
                ease: 'power2.inOut'
            })
            gsap.to($(el).find('.nav-arrow'), {
                rotate: 180,
                duration: 0.35,
                ease: 'power2.inOut'
            })


            if(!$(el).hasClass('active')){
                if($('.nav-link.active').length > 0){
                    gsap.to($('.nav-link.active').children(), {
                        color: $('.nav-link').not($(el)).css('color'),
                        duration: 0.35,
                        ease: 'power2.inOut',
                        clearProps: 'color'
                    })
                    gsap.to($('.nav-link.active').find('.nav-arrow'), {
                        rotate: 0,
                        duration: 0.35,
                        ease: 'power2.inOut'
                    })
                }
    
                $('.nav-link.active').removeClass('active')
                $(el).addClass('active')
            }


            let tab = $(`[data-hover-tab="${$(el).attr('data-hover')}"]`)
            let idx = 0
            let activeIdx = tab.find('.nav-img-item').index(tab.find('.nav-img-item.active'))
    
            gsap.set(tab.find('.nav-img-item.active'), {
                width: '100%',
                overwrite: true
            })

            if(idx > activeIdx){
                gsap.set(tab.find('.nav-img-item.active .cover-img'), {
                    right: 'auto',
                    left: '-15%'
                })
                gsap.to(tab.find('.nav-img-item.active'), {
                    width: '0%',
                    flexFlow: 'row',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                gsap.to(tab.find('.nav-img-item.active .cover-img'), {
                    left: '-50%',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
    
    
                gsap.set(tab.find('.nav-img-item .cover-img')[idx], {
                    left: 'auto',
                    right: '-50%'
                })
                gsap.to(tab.find('.nav-img-item')[idx], {
                    width: '100%',
                    flexFlow: 'row-reverse',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                gsap.to(tab.find('.nav-img-item .cover-img')[idx], {
                    right: '-15%',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
    
    
            }
            else if(idx < activeIdx){
                gsap.set(tab.find('.nav-img-item.active .cover-img'), {
                    right: '-15%',
                    left: 'auto'
                })
                gsap.to(tab.find('.nav-img-item.active'), {
                    width: '0%',
                    flexFlow: 'row-reverse',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                gsap.to(tab.find('.nav-img-item.active .cover-img'), {
                    right: '-50%',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
    
    
                gsap.set(tab.find('.nav-img-item .cover-img')[idx], {
                    left: '-50%',
                    right: 'auto'
                })
                gsap.to(tab.find('.nav-img-item')[idx], {
                    width: '100%',
                    flexFlow: 'row',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                gsap.to(tab.find('.nav-img-item .cover-img')[idx], {
                    left: '-15%',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
            }
            if(idx != activeIdx){
                tab.find('.nav-img-item.active').removeClass('active')
        
                $(tab.find('.nav-img-item')[idx]).addClass('active')
            }

        },
        (el)=>{
        }
    )

    $('.nav').hoverSet(
        (el)=>{
            
        },
        (el)=>{
            if($('.nav-link.active').length > 0){
                if(navProt==false && navDark === false){
                    navProtOff()
                }
                navMenuClose()
                navMenu = false
                lenis.start()
    
                if(navProt == false){
                    gsap.to($('.nav-link.active').children(), {
                        color: colors.white,
                        duration: 0.35,
                        ease: 'power2.inOut',
                        clearProps: 'color'
                    })
                }
                else{
                    gsap.to($('.nav-link.active').children(), {
                        color: colors.black,
                        duration: 0.35,
                        ease: 'power2.inOut',
                        clearProps: 'color'
                    })
    
                }
    
                gsap.to($('.nav-link.active').find('.nav-arrow'), {
                    rotate: 0,
                    duration: 0.35,
                    ease: 'power2.inOut'
                })
                $('.nav-link.active').removeClass('active')
            }
        }
    )

    $('.nav-link').not('[data-hover]').hoverSet(
        (el)=>{
            gsap.to($(el).children(), {
                color: colors.blue,
                duration: 0.35,
                ease: 'power2.inOut'
            })

            if($('.nav-link.active').length > 0){
                if(navProt==false && navDark === false){
                    navProtOff()
                }
                navMenuClose()
                navMenu = false
                lenis.start()
    
                if(navProt == false){
                    gsap.to($('.nav-link.active').children(), {
                        color: colors.white,
                        duration: 0.35,
                        ease: 'power2.inOut',
                        clearProps: 'color'
                    })
                }
                else{
                    gsap.to($('.nav-link.active').children(), {
                        color: colors.black,
                        duration: 0.35,
                        ease: 'power2.inOut',
                        clearProps: 'color'
                    })
    
                }
    
                gsap.to($('.nav-link.active').find('.nav-arrow'), {
                    rotate: 0,
                    duration: 0.35,
                    ease: 'power2.inOut'
                })
                $('.nav-link.active').removeClass('active')
            }
        },
        (el)=>{
            gsap.to($(el).children(), {
                color: $(el).css('color'),
                duration: 0.35,
                ease: 'power2.inOut',
                clearProps: 'color'
            })
        }
    )

    $('.nav-svg-wrap, .nav-right *').hoverSet(
        (el)=>{

            if($('.nav-link.active').length > 0){
                if(navProt==false && navDark === false){
                    navProtOff()
                }
                navMenuClose()
                navMenu = false
                lenis.start()
    
                if(navProt == false){
                    gsap.to($('.nav-link.active').children(), {
                        color: colors.white,
                        duration: 0.35,
                        ease: 'power2.inOut',
                        clearProps: 'color'
                    })
                }
                else{
                    gsap.to($('.nav-link.active').children(), {
                        color: colors.black,
                        duration: 0.35,
                        ease: 'power2.inOut',
                        clearProps: 'color'
                    })
    
                }
    
                gsap.to($('.nav-link.active').find('.nav-arrow'), {
                    rotate: 0,
                    duration: 0.35,
                    ease: 'power2.inOut'
                })
                $('.nav-link.active').removeClass('active')
            }
        },
        (el)=>{}
    )

    $('.nav-menu-link').clickSet((el)=>{
        navMenuClose()
    })

    $('.nav-menu-tab-mob-title').clickSet((el)=>{
        if(!$(el).hasClass('open')){
        
            $(el).addClass('open')

            gsap.to($(el).siblings('.nav-menu-tab'), {
                height: 'auto',
                duration: 0.5,
                ease: 'power3.inOut'
            })
    
        }
        else{
            $(el).removeClass('open')

            gsap.to($(el).siblings('.nav-menu-tab'), {
                height: 0,
                duration: 0.5,
                ease: 'power3.inOut'
            })
        }
    })

    $('.nav-burg').clickSet((el)=>{
        if(!$(el).hasClass('open')){
        
            $(el).addClass('open')

            navMenuOpen('')
        }
        else{
            $(el).removeClass('open')

            navMenuClose()
        }
    })

    $('.popup-back').hoverSet((el)=>{
        gsap.to($(el).find('.path-fill'), {
            drawSVG: '100% 0%',
            duration: 0.3,
            ease: 'power2.inOut'
        })

        gsap.to($(el).find('.popup-back-svg'), {
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
        

        gsap.to($(el).find('.popup-back-svg'), {
            color: ()=>{
                return $(el).find('.popup-back-svg').parent().css('color')
            },
            duration: 0.3,
            ease: 'power2.inOut'
        })
    })

    $('.nav-menu-tab-container').each(function(idx, el){
        gsap.set($(el).find('.nav-img-item').not($(el).find('.nav-img-item').first()), {
            width: '0%'
        })

        $(el).find('.nav-img-list').append($(el).find('.nav-menu-tab .nav-img-item'))
    })


    $('.nav-menu-tab-container').each(function(idx, el){
        $(el).find('.nav-img-item').first().addClass('active')
    })

    $('.nav-menu-link').hoverSet((el)=>{
        gsap.to($(el), {
            color: colors.blue,
            duration: 0.35,
            ease: 'power2.inOut'
        })


        let idx = $(el).parents('.nav-menu-tab-container').find('.nav-menu-link').index($(el)) + 1
        let activeIdx = $(el).parents('.nav-menu-tab-container').find('.nav-img-item').index($(el).parents('.nav-menu-tab-container').find('.nav-img-item.active'))

        gsap.set($(el).parents('.nav-menu-tab-container').find('.nav-img-item.active'), {
            width: '100%',
            overwrite: true
        })

        if(idx > activeIdx){
            gsap.set($(el).parents('.nav-menu-tab-container').find('.nav-img-item.active .cover-img'), {
                right: 'auto',
                left: '-15%'
            })
            gsap.to($(el).parents('.nav-menu-tab-container').find('.nav-img-item.active'), {
                width: '0%',
                flexFlow: 'row',
                duration: 0.75,
                ease: 'power3.inOut'
            })
            gsap.to($(el).parents('.nav-menu-tab-container').find('.nav-img-item.active .cover-img'), {
                left: '-50%',
                duration: 0.75,
                ease: 'power3.inOut'
            })


            gsap.set($(el).parents('.nav-menu-tab-container').find('.nav-img-item .cover-img')[idx], {
                left: 'auto',
                right: '-50%'
            })
            gsap.to($(el).parents('.nav-menu-tab-container').find('.nav-img-item')[idx], {
                width: '100%',
                flexFlow: 'row-reverse',
                duration: 0.75,
                ease: 'power3.inOut'
            })
            gsap.to($(el).parents('.nav-menu-tab-container').find('.nav-img-item .cover-img')[idx], {
                right: '-15%',
                duration: 0.75,
                ease: 'power3.inOut'
            })


        }
        else if(idx < activeIdx){
            
            gsap.set($(el).parents('.nav-menu-tab-container').find('.nav-img-item.active .cover-img'), {
                right: '-15%',
                left: 'auto'
            })
            gsap.to($(el).parents('.nav-menu-tab-container').find('.nav-img-item.active'), {
                width: '0%',
                flexFlow: 'row-reverse',
                duration: 0.75,
                ease: 'power3.inOut'
            })
            gsap.to($(el).parents('.nav-menu-tab-container').find('.nav-img-item.active .cover-img'), {
                right: '-50%',
                duration: 0.75,
                ease: 'power3.inOut'
            })


            gsap.set($(el).parents('.nav-menu-tab-container').find('.nav-img-item .cover-img')[idx], {
                left: '-50%',
                right: 'auto'
            })
            gsap.to($(el).parents('.nav-menu-tab-container').find('.nav-img-item')[idx], {
                width: '100%',
                flexFlow: 'row',
                duration: 0.75,
                ease: 'power3.inOut'
            })
            gsap.to($(el).parents('.nav-menu-tab-container').find('.nav-img-item .cover-img')[idx], {
                left: '-15%',
                duration: 0.75,
                ease: 'power3.inOut'
            })
        }
        if(idx != activeIdx){
            $(el).parents('.nav-menu-tab-container').find('.nav-img-item.active').removeClass('active')
    
            $($(el).parents('.nav-menu-tab-container').find('.nav-img-item')[idx]).addClass('active')
        }
    }, 
    (el)=>{
        gsap.to($(el), {
            color: colors.black,
            duration: 0.35,
            ease: 'power2.inOut'
        })
    })

    $('.nav').hoverSet((elem)=>{

    }, (elem)=>{
        $('.nav-menu-tab-container').each(function(idxEl, el){
            let idx = 0
            let activeIdx = $(el).find('.nav-img-item').index($('.nav-img-item.active'))
    
            if(idx > activeIdx){
                gsap.set($(el).find('.nav-img-item.active .cover-img'), {
                    right: 'auto',
                    left: '-15%'
                })
                gsap.to($(el).find('.nav-img-item.active'), {
                    width: '0%',
                    flexFlow: 'row',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                gsap.to($(el).find('.nav-img-item.active .cover-img'), {
                    left: '-50%',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
    
    
                gsap.set($(el).find('.nav-img-item .cover-img')[idx], {
                    left: 'auto',
                    right: '-50%'
                })
                gsap.to($(el).find('.nav-img-item')[idx], {
                    width: '100%',
                    flexFlow: 'row-reverse',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                gsap.to($(el).find('.nav-img-item .cover-img')[idx], {
                    right: '-15%',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
    
    
            }
            else if(idx < activeIdx){
                
                gsap.set($(el).find('.nav-img-item.active .cover-img'), {
                    right: '-15%',
                    left: 'auto'
                })
                gsap.to($(el).find('.nav-img-item.active'), {
                    width: '0%',
                    flexFlow: 'row-reverse',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                gsap.to($(el).find('.nav-img-item.active .cover-img'), {
                    right: '-50%',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
    
    
                gsap.set($(el).find('.nav-img-item .cover-img')[idx], {
                    left: '-50%',
                    right: 'auto'
                })
                gsap.to($(el).find('.nav-img-item')[idx], {
                    width: '100%',
                    flexFlow: 'row',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                gsap.to($(el).find('.nav-img-item .cover-img')[idx], {
                    left: '-15%',
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
            }
            if(idx != activeIdx){
                $(el).find('.nav-img-item.active').removeClass('active')
        
                $($(el).find('.nav-img-item')[idx]).addClass('active')
            }
        })
    })






    // -------------------- NAV SCROLL UP/DOWN
    var unlockNav = 1;
    let currentScroll = 0;
    let oldScroll = 0;  
    let tolerance = 5;
    let scrolled = 0;

    // $(window).on('scroll', function () {
    //     if(unlockNav){
    //     currentScroll = window.scrollY;
    //     if (Math.abs(currentScroll - oldScroll) > tolerance){
    //     if (currentScroll > oldScroll){
    //         if(!scrolled){
    //             gsap.to($('.nav'), {
    //                 y: "-100%",
    //                 duration: 0.5,
    //                 ease: 'power2.inOut'
    //             });
    //         scrolled = 1;
    //         }
    //     }
    //     else{
    //         if(scrolled){
    //             gsap.to($('.nav'), {
    //                 y: "0%",
    //                 duration: 0.5,
    //                 ease: 'power2.inOut'
    //             });
    //         scrolled = 0;
    //         }
    //     }
    //     }
    //     oldScroll = currentScroll;
    // }
    // });


    // -------------------- ORCAMENTO POP-UP
    $('.nav-cta.orcamento').clickSet((el)=>{
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

    $('.nav').find('.popup-wrap.orcamento .popup-back, .popup-wrap.orcamento .form-succ-back, .popup-wrap-bg').clickSet((el)=>{
        gsap.to($('.popup-wrap.orcamento'), {
            x: '100%',
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: ()=>{
                if($('.w-form').hasClass('submitted')){
                    formReset()
                    
                    const successMessage = $('.popup-wrap.orcamento').find('.w-form-done').get(0)
                    const form = $('.popup-wrap.orcamento').find('form').get(0)
                    // Hide the success message
                    successMessage.style.display = 'none';
        
                    // Show the form
                    form.style.display = 'flex';
                }
            }
        })
        gsap.to($('.popup-wrap-bg'),{
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.5,
            ease: 'power2.inOut'
        })

    })
    $('.nav').find('.popup-wrap.contacto .popup-back, .popup-wrap.contacto .form-succ-back, .popup-wrap-bg').clickSet((el)=>{
        gsap.to($('.popup-wrap.contacto'), {
            x: '100%',
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: ()=>{
                
                if($('.w-form').hasClass('submitted')){
                    formReset()

                    const successMessage = $('.popup-wrap.contacto').find('.w-form-done').get(0)
                    const form = $('.popup-wrap.contacto').find('form').get(0)
                    // Hide the success message
                    successMessage.style.display = 'none';

                    // Show the form
                    form.style.display = 'flex';
                }
            }
        })
        gsap.to($('.popup-wrap-bg'),{
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.5,
            ease: 'power2.inOut'
        })
    })

    

    $('#Partida').attr('readonly', '')

    let dpMin = new AirDatepicker('#Partida', {
        locale: AirDatepickerPT,
        autoClose: true,
        container: $('.pop-form-calendar')[0],
        zIndex: 10000
    })
    dpMin.update({
        minDate: new Date()
    })
    
    


    $('.nav').find('.pop-form-input-wrap, .pop-form-dd-wrap').each(function(idx, el){
        $(el).on('focus click', ()=>{
            /*tiago*/
            var valuePop = $(el).find(".pop-form-input").val();
            if (valuePop && valuePop.trim() !== "") 
              {
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
        }
        })
    })
    $('.nav').find('.pop-form-input').each(function(idx, el){
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
    $('#Adultos, #Criancas').attr('readonly', '')

    $('.nav').find('.pop-form-picker').each(function(idx, el){
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
    })


    

//     /* Tiago Fix de dropdown formulario */
// $('.nav').find('.pop-form-input-wrap').each(function (idx, el) {
//     let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints; // Detect mobile

//     const openForm = (element) => {
//         // Close all other forms first
//         $('.pop-form-input-wrap').each(function (i, otherEl) {
//             if (otherEl !== element) {
//                 closeForm(otherEl);
//             }
//         });
        
//         // Open the current form
//         if ($(element).find('.pop-form-input.datepicker').length) {
//             dpMin.show();
//         }
        
//         gsap.to($(element), {
//             zIndex: 100,
//             ease: 'power2.inOut',
//             duration: 0.35
//         });
        
//         if ($(element).find('.pop-form-expand').length > 0) {
//             gsap.to($(element).find('.pop-form-expand'), {
//                 height: 'auto',
//                 opacity: 1,
//                 ease: 'power2.inOut',
//                 duration: 0.35
//             });
//         }
        
//         $(element).addClass('open');
//     };

//     const closeForm = (element) => {
//         if (dpMin.visible) {
//             document.querySelector('.air-datepicker').style.visibility = 'hidden';
//         }

//         gsap.to($(element), {
//             zIndex: 0,
//             ease: 'power2.inOut',
//             duration: 0.35
//         });

//         if ($(element).find('.pop-form-expand').length > 0) {
//             gsap.to($(element).find('.pop-form-expand'), {
//                 height: 0,
//                 opacity: 0,
//                 ease: 'power2.inOut',
//                 duration: 0.35
//             });
//         }

//         $(element).removeClass('open');
//     };

//     const toggleForm = (event) => {
//         event.stopPropagation();
//         if ($(el).hasClass('open')) {
//             closeForm(el);
//         } else {
//             openForm(el);
//         }
//     };

//     // Handle mobile touch
//     if (isTouchDevice) {
//         $(el).on('touchstart', toggleForm);
//     } else {
//         // Handle click behavior for desktop
//         $(el).on('click', toggleForm);
        
//         $(el).on('mouseenter', () => {
//             openForm(el);
//         });

//         $(el).on('mouseleave', () => {
//             if (!$(el).find('.pop-form-input.datepicker').length) {
//                 closeForm(el);
//             }
//         });
//     }

//     // Close when clicking outside
//     $(document).on('click touchstart', (event) => {
//         if (!$(event.target).closest('.pop-form-input-wrap').length) {
//             $('.pop-form-input-wrap.open').each(function (i, openEl) {
//                 closeForm(openEl);
//             });
//         }
//     });
// });


/* Tiago Fix de dropdown formulario */
$('.nav').find('.pop-form-input-wrap').not('.datepickerwrap').each(function (idx, el) {
    let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints; // Detect mobile

    const openForm = (element) => {
        datePickerOpen= false;
        // Close all other forms first
        $('.pop-form-input-wrap').not('.datepickerwrap').each(function (i, otherEl) {
            if (otherEl !== element) {
                closeForm(otherEl);
            }
        });
        
        // Open the current form
        gsap.to($(element), {
            zIndex: 100,
            ease: 'power2.inOut',
            duration: 0.35
        });
        
        if ($(element).find('.pop-form-expand').length > 0) {
            gsap.to($(element).find('.pop-form-expand'), {
                height: 'auto',
                opacity: 1,
                ease: 'power2.inOut',
                duration: 0.35
            });
        }
        
        $(element).addClass('open');
    };

    const closeForm = (element) => {
        datePickerOpen= false;
        gsap.to($(element), {
            zIndex: 0,
            ease: 'power2.inOut',
            duration: 0.35
        });

        if ($(element).find('.pop-form-expand').length > 0) {
            gsap.to($(element).find('.pop-form-expand'), {
                height: 0,
                opacity: 0,
                ease: 'power2.inOut',
                duration: 0.35
            });
        }

        $(element).removeClass('open');
    };

    const toggleForm = (event) => {
        event.stopPropagation();
        if ($(el).hasClass('open')) {
            closeForm(el);
        } else {
            openForm(el);
        }
    };

    // Handle mobile touch
    if (isTouchDevice) {
        $(el).on('touchstart', toggleForm);
    } else {
        // Handle click behavior for desktop
        $(el).on('click', toggleForm);
        
        $(el).on('mouseenter', () => {
            openForm(el);
        });

        $(el).on('mouseleave', () => {
            closeForm(el);
        });
    }

    // Close when clicking outside
    $(document).on('click touchstart', (event) => {
        if (!$(event.target).closest('.pop-form-input-wrap').length) {
            $('.pop-form-input-wrap.open').each(function (i, openEl) {
                closeForm(openEl);
            });
        }
    });
});

let datePickerOpen = false;
    // Handle click for .pop-form-input-wrap.datepickerwrap
$('.pop-form-input.datepicker').on('click', function () {
    gsap.to($('.pop-form-input-wrap.datepickerwrap'), {
        zIndex: 100,
        ease: 'power2.inOut',
        duration: 0.35
    });

    

    if (datePickerOpen && dpMin.visible) {
                    //  document.querySelector('.air-datepicker').style.visibility = 'hidden';
                     if(dpMin.visible)
                         dpMin.hide();
                    console.log("hide");
                 }
                 else
                 {
                    // document.querySelector('.air-datepicker').style.visibility = 'visible';
                    // if(!dpMin.visible)
                        dpMin.show();
                 }

                 datePickerOpen = !datePickerOpen;
});


    //**********end******* */

    $('.nav').find('.pop-cont-radio').each(function(idx, el){
        $(el).find('.radio').attr('value', $(el).find('.w-form-label').text())
        $(el).find('input').attr('value', $(el).find('.w-form-label').text())
    })
    $('.nav').find('.pop-cont-radio').clickSet((el)=>{
        let textDiv = $(el).parents('.pop-form-input-wrap').find('.pop-form-input')
        textDiv.val($(el).children().text())

        console.log($(el).parents('.pop-form-input-wrap'))
        setTimeout(()=>{
            $(el).parents('.pop-form-input-wrap').trigger('mouseleave')
        }, 25)
    })

    $('.nav').find('#pop-zone-list .pop-cont-sub-item').each(function(idx, el){
        let destTarget = $(el).attr('data-pop-dest')

        $(`[data-pop-item="${destTarget}"]`).find('.pop-cont-sub-list').append($(el))
    })
    $('.nav').find('#pop-zone-rem').remove()


    let activeDest = undefined
    let activeType = undefined

    $('.nav').find('#pop-dest-radios input[type="radio"]').each(function(idx, el){
        $(el).on("change", ()=>{

            activeDest = $(el).parents('.pop-cont-item').attr('data-pop-dest')
            activeSubDest = $(el).parents('.pop-cont-sub-item').attr('data-pop-subdest')
            console.log(activeSubDest)

            if(activeType !== undefined){
                gsap.set($(`#pop-aloj-list .pop-cont-item`), {display: 'flex'})
                if(activeDest !== 'all'){
                    gsap.set($(`#pop-aloj-list .pop-cont-item[data-form-dest!="${activeDest}"]`), {display: 'none'})
                    if(activeSubDest !== undefined){
                        gsap.set($(`#pop-aloj-list .pop-cont-item[data-form-subdest!="${activeSubDest}"]`), {display: 'none'})
                    }
                }
                if(activeType !== 'all'){
                    gsap.set($(`#pop-aloj-list .pop-cont-item[data-form-tipo!="${activeType}"]`), {display: 'none'})
                }
            }
            else{
                gsap.set($(`#pop-aloj-list .pop-cont-item`), {display: 'flex'})
                if(activeDest !== 'all'){
                    gsap.set($(`#pop-aloj-list .pop-cont-item[data-form-dest!="${activeDest}"]`), {display: 'none'})
                    
                    if(activeSubDest !== undefined){
                        gsap.set($(`#pop-aloj-list .pop-cont-item[data-form-subdest!="${activeSubDest}"]`), {display: 'none'})
                    }
                }
            }
        })
    })

    $('.nav').find('#pop-type-radios input[type="radio"]').each(function(idx, el){
        $(el).on("change", ()=>{
            
            activeType = $(el).attr('data-slug')

            if(activeDest !== undefined){
                gsap.set($(`#pop-aloj-list .pop-cont-item`), {display: 'flex'})
                if(activeDest !== 'all'){
                    gsap.set($(`#pop-aloj-list .pop-cont-item[data-form-dest!="${activeDest}"]`), {display: 'none'})
                }
                if(activeType !== 'all'){
                    gsap.set($(`#pop-aloj-list .pop-cont-item[data-form-tipo!="${activeType}"]`), {display: 'none'})
                }
                
            }
            else{
                gsap.set($(`#pop-aloj-list .pop-cont-item`), {display: 'flex'})
                if(activeType !== 'all'){
                    gsap.set($(`#pop-aloj-list .pop-cont-item[data-form-tipo!="${activeType}"]`), {display: 'none'})
                }
            }


            if($(el).attr('data-other') !== undefined){
                gsap.to($('.pop-cont-oth-expand'), {
                    height: 'auto',
                    opacity: 1,
                    ease: 'power2.inOut',
                    duration: 0.35
                })
            }
            else{
                gsap.to($('.pop-cont-oth-expand'), {
                    height: 0,
                    opacity: 0,
                    ease: 'power2.inOut',
                    duration: 0.35
                })
            }



        })
    })



    // -------- FORM VERIFICATION --------

    $('.nav').find('.popup-form').each(function(){
        
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
                if ($(this).val().length === 0) { // If this field is empty
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
                if ($(this).children('.w--redirected-checked').length < 1)
                {
                        fieldError($(this))
                    }
            })

            // Submit parent form if there are no errors
            if (!formErrors && ($(this).attr('wr-type') === 'submit')) {
                $(elem).find('form').submit()
                $('.w-form').addClass('submitted')
            }
        });
        
        // Remove errors from field
        $(this).find('[wr-type="required-field"], [wr-type="required-radio"], [wr-type="file-field"], [wr-type="required-dropdown"]').on('keypress blur', function() {
            $(this).siblings().removeClass('error') // Add error state to field siblings
            $(this).removeClass('error')

            $(this).siblings('[wr-type="error"]').hide()

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
    
}




function footerInit(data){
    
    $('.ftr-back-top').click(()=>{
        lenis.scrollTo(0)
        if($(window).outerWidth() < 992){ // MOBILE
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
        else {    $('html, body').animate({ scrollTop: 0 }, 'slow');}
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    })

    $('.nav .ftr-link-item').each(function(idx, el){
        if($(el).attr('data-ftr-item') === "dest"){
            $(data.next.container).find('#ftr-dest-list').append($(el).clone())
        }
        else if($(el).attr('data-ftr-item') === "trip"){
            $(data.next.container).find('#ftr-trip-list').append($(el).clone())
        }
        else if($(el).attr('data-ftr-item') === "exp"){
            $(data.next.container).find('#ftr-exp-list').append($(el).clone())
        }
    })


    $('.contact-form').clickSet((el)=>{
        gsap.to($('.popup-wrap.contacto'), {
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

    $('.ftr-link').hoverSet((el)=>{
        gsap.to($(el), {
            color: colors.blue,
            duration: 0.35,
            ease: 'power2.inOut'
        })
    }, (el)=>{
        gsap.to($(el), {
            color: colors.white,
            duration: 0.35,
            ease: 'power2.inOut'
        })
    })

    $('.ftr-form .form-submit-btn').hoverSet((el)=>{
        gsap.to($(el), {
            borderColor: colors.blue,
            duration: 0.35,
            ease: 'power2.inOut'
        })
        gsap.to($(el).find('.form-arrow-svg'), {
            color: colors.blue,
            duration: 0.35,
            ease: 'power2.inOut'
        })
    }, (el)=>{
        gsap.to($(el), {
            borderColor: 'rgba(255, 255, 255, 0.15)',
            duration: 0.35,
            ease: 'power2.inOut'
        })
        gsap.to($(el).find('.form-arrow-svg'), {
            color: colors.white,
            duration: 0.35,
            ease: 'power2.inOut'
        })
    })



    // -------- FORM VERIFICATION --------

    $('.footer').find('.ftr-form-block').each(function(){
        
        let elem = this;
        let divClass = '.form-input-wrap'

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
        $(this).find('[wr-type="submit"]').click(function() {
            // Check each required field
            $(elem).find('[wr-type="required-field"]').each(function() {
                if ($(this).val().length === 0) { // If this field is empty
                    fieldError($(this));
                } 
                else if ($(this).attr('type') === 'email' // Validation for email fields
                    && ( $(this).val().indexOf('@') === -1 || $(this).val().indexOf('.') === -1) ) 
                {
                        fieldError($(this))
                }
                else if ($(this).attr('type') === 'checkbox' // Validation for required checkbox
                            && ($(this).siblings('.w--redirected-checked').length < 1))
                {
                    fieldError($(this))
                }
            })

            // Submit parent form if there are no errors
            if (!formErrors && ($(this).attr('wr-type') === 'submit')) {
                $(elem).find('form').submit() // FIX THIS
            }
        });
        
        // Remove errors from field
        $(this).find('[wr-type="required-field"]').on('keypress blur', function() {
            $(this).siblings().removeClass('error') // Add error state to field siblings
            $(this).removeClass('error')

            $(this).siblings('[wr-type="error"]').hide()

            $(this).parents(divClass).find('[wr-type="error"]').hide()

            formErrors = false
        });
        
        // Press Enter
        $(this).find('input, textarea').keypress(function(e) { 
            if (e.keyCode == 13) {  
                e.preventDefault()
                $(this).trigger("change")
                $(this).find('[wr-type="submit"]').click()
            }
        })
    })

    $('.footer').find('.form-input-wrap').each(function(idx, el){
        $(el).on('focus click', ()=>{
            if($(el).find('.form-input-label').length > 0){
                gsap.to($(el).find('.form-input-label'), {
                    paddingTop: 0,
                    marginTop: '-1.25em',
                    opacity: 0.6,
                    scale: 0.8,
                    ease: 'power2.inOut',
                    duration: 0.35
                })
            }
        })
    })
}


function btnInit(){
    // -------- ARROW BUTTONS
    gsap.set($('.btn-hover-arr-wrap'), {
        width: 0,
        opacity: 0
    })

    $('.nav-cta, .nav-search, .big-btn, .btn').hoverSet((el)=>{
        gsap.to($(el).find('.btn-hover-arr-wrap'), {
            opacity: 1,
            width: 'auto',
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }, (el)=>{
        gsap.to($(el).find('.btn-hover-arr-wrap'), {
            opacity: 0,
            width: 0,
            duration: 0.5,
            ease: 'power2.inOut'
        })
    })



    // -------- SPLIDE BUTTONS
    $('.path-fill').each(function(idx, el){
        if($(el).parents('.splide__arrow--next').length > 0){
            gsap.set(el, {
                drawSVG: "100% 100%",
            })
        }
        else{
            gsap.set(el, {
                drawSVG: "0% 0%",
            })
        }
    })
    



    $('.nav-btn').hoverSet((el)=>{
        gsap.to($(el).find('.path-fill'), {
            drawSVG: '100% 0%',
            duration: 0.3,
            ease: 'power2.inOut'
        })

        gsap.to($(el).find('.btn-arrow-svg').not('.white'), {
            color: colors.blue,
            duration: 0.3,
            ease: 'power2.inOut'
        })

    }, (el)=>{
        if($(el).hasClass('splide__arrow--next')){
            gsap.to($(el).find('.path-fill'), {
                drawSVG: '100% 100%',
                duration: 0.3,
                ease: 'power2.inOut'
            })
        }
        else{
            gsap.to($(el).find('.path-fill'), {
                drawSVG: '0% 0%',
                duration: 0.3,
                ease: 'power2.inOut'
            })
        }

        gsap.to($(el).find('.btn-arrow-svg').not('.white'), {
            color: ()=>{
                return $(el).find('.btn-arrow-svg').parent().css('color')
            },
            duration: 0.3,
            ease: 'power2.inOut'
        })
    })

}

function createAnchor(targetDiv, targetBtn, prevBtn=''){
    ScrollTrigger.create({
        trigger: $(targetDiv),
        start: 'top center',
        end: 'top center',
        onEnter: ()=>{
            let otherBtn = $('.ancoras-wrap .ancora-btn-wrap').not(targetBtn)
                        .add('.ancoras-fixed-wrap .ancora-btn-wrap').not(targetBtn)
            gsap.to($('.ancoras-wrap').find(targetBtn).add($('.ancoras-fixed-wrap').find(targetBtn)).find('.ancora-sel'), {
                opacity: 1,
                duration: 0.35,
                ease: 'power2.inOut'
            })
            gsap.to(otherBtn.find('.ancora-sel'), {
                opacity: 0,
                duration: 0.35,
                ease: 'power2.inOut'
            })
        },
        onLeaveBack: ()=>{
            gsap.to($('.ancoras-wrap').find(targetBtn).add($('.ancoras-fixed-wrap').find(targetBtn)).find('.ancora-sel'), {
                opacity: 0,
                duration: 0.35,
                ease: 'power2.inOut'
            })
            if(prevBtn != ''){
                gsap.to($('.ancoras-wrap').find(prevBtn).add($('.ancoras-fixed-wrap').find(prevBtn)).find('.ancora-sel'), {
                    opacity: 1,
                    duration: 0.35,
                    ease: 'power2.inOut'
                })
            }
        }
    }) 
}

/****************************************************************************************
--------------------------------------- PAGE CLASS --------------------------------------
*****************************************************************************************/
class Page {
    constructor(data, name='N/A'){
        this.name = name
        this.container = data.next.container
        this.reflection = null
    }

     // -------- PAGE LOAD
    // async pageLoadSetup(){
    // }
    // async pageLoad_GEN(){
    // }

    async setup(){}
    async render(){}
    async intro(){}

    async launch(){
        await this.setup()
        this.render()
    }


    // async pageRender(){
    // }

    async leave(){
        return
    }

}


barba.hooks.afterEnter(async (data)=>{
    await active.page.intro()
    firstLoad = false
})



// ---------------- PAGE EXAMPLE ----------------
// pageClasses['ETC'] = class ETC extends Page {
//     async setup(){
//         // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
//         $('.w-condition-invisible').remove()


//         // -------- NAV INIT --------
//         navInit()

//     }

//     async render(){
        
//     }

//     async intro(){

//     }

//     async leave(){
        
//     }
// }



/****************************************************************************************
------------------------------------------ HOME -----------------------------------------
*****************************************************************************************/

pageClasses['Home'] = class Home extends Page {
    async setup(){

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

        $(this.container).find('.off-card-list').append($(this.container).find('.off-card'))
        $(this.container).find('.off-card-loader').remove()

        $('[data-col="Home - Módulo Destaques"] .h-hero-pop-item').remove()



        


        // -------- HERO POPUP CARDS --------
        $(this.container).find('.h-hero-popup').append($(this.container).find('.h-hero-pop-item'))
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
        $(this.container).find([$(this.container).find('.off-card')[0], $(this.container).find('.off-card')[1]]).wrapAll('<div class="off-card-row"></div>')
        $(this.container).find([$(this.container).find('.off-card')[2], $(this.container).find('.off-card')[3]]).wrapAll('<div class="off-card-row"></div>')
        $(this.container).find([$(this.container).find('.off-card')[0], $(this.container).find('.off-card')[3]]).addClass('dest')

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
        if($(this.container).find('.test-item').length == 0){
            $('.testemunhos').remove()
        }


    }

    async render(){
        // ................................ SPLIDES ................................
        if($(window).outerWidth() < 992){ // MOBILE
            $('.desktop.splide__arrows').remove()
        }


        // -------- EXPERIENCIAS --------
        var expSplide = new Splide($(this.container).find('.exp-bottom.splide').first().get(0), {
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


            var testSplide = new Splide($(this.container).find('.test-holder.splide').first().get(0), {
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
    
            $(this.container).find('.test-holder').find('.prog-bar-scrub').each(function(idx, el){
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
                let scrub = $(this.container).find('.test-holder').find('.prog-bar-scrub')
    
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
    
            $(this.container).find('.test-holder').find('.prog-bar-holder').clickSet(function(el){
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
        var popSplide = new Splide($(this.container).find('.h-hero-right.splide').first().get(0), {
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

        $(this.container).find('.h-hero-prog').find('.prog-bar-scrub').each(function(idx, el){
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
            let scrub = $(this.container).find('.h-hero-prog').find('.prog-bar-scrub')

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

        $(this.container).find('.h-hero-prog').find('.prog-bar-holder').clickSet(function(el){
            let idx = $(el).index()
            popSplide.go(idx)
        })

        }
        


        // -------- GALLERY --------
        var galSplide = new Splide($(this.container).find('.destinos .splide').first().get(0), {
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
        var instaSplide = new Splide($(this.container).find('.instagram .splide').first().get(0), {
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





        // ................................ VIDEOS ................................


removePageLoadVideos();

    //     if(Webflow.env('editor') == undefined){
    //         $(this.container).find('.onda-video').each(function(idx, el){
    //             // const controls = ['play', 'play-large', 'progress', 'current-time', 'fullscreen'];
    //             let iframe = $(this).find('iframe')
    
    //             let vidBaseSrc = iframe.attr('data-base-src')
    //             let vidParams = iframe.attr('data-params')
    // vidParams = vidParams + '&quality=240p';
    //             let vidSrc = iframe.attr('data-src')
    
    //             let vidCode = vidSrc.split('https://vimeo.com/')[1]
    
    //             iframe.attr('src', vidBaseSrc+vidCode+vidParams)
    
    //             let player = new Plyr($(this).find('.plyr__video-embed'), {
    //                 autoplay: true,
    //                 autopause: false,
    //                 muted: true,
    //                 //youtube: {noCookie: true}
    //             })
    
    //             this.player = player
    //             player.config.quality.default=240;
    //             player.once('ready', ()=>{
    //                 player.restart()
    //                 player.play()
    
    //                 player.muted = true
    //             })
    
    //             player.once('playing', ()=>{
    
    //                 player.restart()
    //                 player.play()
    
    //                 player.muted = true
    
                    
    //                 gsap.to($(el),{
    //                     opacity: 1,
    //                     duration: 0.75,
    //                     ease: 'power2.inOut'
    //                 })
    //                 gsap.to($(el).parent().find('.contain-img, .cover-img'),{
    //                     opacity: 0,
    //                     duration: 0.75,
    //                     ease: 'power2.inOut'
    //                 })
    //                 $(el).find('.plyr__controls, .plyr__control').remove()
    //             })
    //         })
    //     }
    }

    async intro(){
        // $('.loader').remove()
    }

    async leave(){
        $('.nav-svg-wrap').removeClass('prevent')
        $('.nav-svg-wrap').attr('href', '/')
        $('.global-fixed *').remove()
        return
    }
}


/****************************************************************************************
---------------------------------------- DESTINOS ---------------------------------------
*****************************************************************************************/

pageClasses['Destino'] = class Destino extends Page {
    async setup(){
        

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
         $('.global-fixed').append($(this.container).find('.det-popup-gal'))

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

        $('.global-fixed').append($(this.container).find('.ancoras-fixed'))

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


        // ................................ VIDEOS ................................
    //     if(Webflow.env('editor') == undefined){
    //         $(this.container).find('.hero-bg-vid').each(function(idx, el){
    //             // const controls = ['play', 'play-large', 'progress', 'current-time', 'fullscreen'];
    //             let iframe = $(el).find('iframe')
    
    //             let vidBaseSrc = iframe.attr('data-base-src')
    //             let vidParams = iframe.attr('data-params')
    // vidParams = vidParams + '&quality=240p';
    //             let vidSrc = iframe.attr('data-src')
    
    
    //             if(vidSrc != undefined){
    
    //                 let vidCode = vidSrc.split('https://vimeo.com/')[1]
        
    //                 iframe.attr('src', vidBaseSrc+vidCode+vidParams)
        
        
    //                 let player = new Plyr($(this).find('.plyr__video-embed'), {
    //                     autoplay: true,
    //                     autopause: false,
    //                     muted: true, 
    //                     //youtube: {noCookie: true}
    //                 })
        
    //                 this.player = player
    //     player.config.quality.default=240;
    //                 player.muted = true
        
                    
    //                 player.once('ready', ()=>{
    //                     player.restart()
    //                     player.play()
        
    //                     player.muted = true
    //                 })
    
    //                 player.once('playing', ()=>{
    //                     player.restart()
    //                     player.play()
        
    //                     player.muted = true
        
    //                     gsap.to($('.hero-bg-vid'),{
    //                         opacity: 1,
    //                         duration: 0.75,
    //                         ease: 'power2.inOut'
    //                     })
    //                     gsap.to($('.dest-hero-bg .cover-img'),{
    //                         opacity: 0,
    //                         duration: 0.75,
    //                         ease: 'power2.inOut'
    //                     })
    //                     // $(el).find('.plyr__controls, .plyr__control').remove()
    //                 })
        
    //                 player.play()
    
    //             }
    
    
    //         })
    //     }


        // -------- SETUP OFFER CARDS --------
        $([$(this.container).find('.off-card')[0], $(this.container).find('.off-card')[1]]).wrapAll('<div class="off-card-row"></div>')
        $([$(this.container).find('.off-card')[2], $(this.container).find('.off-card')[3]]).wrapAll('<div class="off-card-row"></div>')
        $([$(this.container).find('.off-card')[0], $(this.container).find('.off-card')[3]]).addClass('dest')
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
       

        // -------- LOAD ONDAS --------

        if($(this.container).find('.od-zona').length > 0){
            let container = this.container
            await new Promise(resolve => {
                $(container).find('.od-zona').each(function(idx, el){
                    
                    let slug = $(el).attr('data-slug') 
        
                    $(el).find('.loader').load(`/galeria-de-ondas/${slug} .blue-col`, ()=>{
                        $(el).find('.blue-card').attr('data-card-zone', slug)



                        if(el === $('.od-zona').last().get(0)){

                            $(container).find('.od-zona').each(function(index, elem){
                                if($(elem).find('.loader .w-dyn-empty').length > 0) $(elem).remove()
                            })
                            resolve()
                        }
                    })
        
                })
            })

            await new Promise(resolve => {
                console.log('') // load bearing console log, NÃO APAGAR PFV!!!!!!!!
                setTimeout(()=>{
                    $(container).find('.od-onda-wrap').append($('.blue-card'))
                    resolve()
                }, 750)
            })

            
        }

        gsap.set($('.od-zona').not($('.od-zona').first()), {
            opacity: 0.6
        })

        $(this.container).find('.od-zona').first().addClass('active')

        gsap.set($('.blue-card').not(`[data-card-zone="${$(this.container).find('.od-zona').first().attr('data-slug')}"]`), {
            display: 'none'
        })
        $('.blue-card').not(`[data-card-zone="${$(this.container).find('.od-zona').first().attr('data-slug')}"]`).removeClass('splide__slide')


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



        // -------- ATRAÇÕES --------
        if($(this.container).find('.acc-list-item').length > 0){
            await new Promise(resolve => {
                let container = this.container
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

                                    console.log("looooooooook in 3");
                                    $('.det-pop-list *').remove()
                                    $('.det-pop-thumb-list *').remove()
                                    console.log("looooooooook out 3");

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

                                resolve()
                            }, 500)
                        }
                    })
        
                })
            })
        }

        $(this.container).find('.acc-content-item').first().addClass('active')
        $(this.container).find('.acc-list-item').first().addClass('active')

        gsap.set($('.acc-gal-item').not(`[data-name="${$(this.container).find('.acc-list-item').first().attr('data-name')}"]`), {
            display: 'none'
        })
        $('.acc-gal-item').not(`[data-name="${$(this.container).find('.acc-list-item').first().attr('data-name')}"]`).removeClass('splide__slide')

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
        if($(this.container).find('.test-item').length == 0){
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
    }

    async render(){

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
            var testSplide = new Splide($(this.container).find('.test-holder.splide').first().get(0), {
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
    
            $(this.container).find('.test-holder').find('.prog-bar-scrub').each(function(idx, el){
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
                let scrub = $(this.container).find('.test-holder').find('.prog-bar-scrub')
    
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
    
            $(this.container).find('.test-holder').find('.prog-bar-holder').clickSet(function(el){
                let idx = $(el).index()
                testSplide.go(idx)
            })
        }

        // -------- GALLERY --------
        if($(this.container).find('.onda-gal-item.splide').first().length > 0){

            var galSplide = new Splide($(this.container).find('.onda-gal-item.splide').first().get(0), {
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
        if($(this.container).find('.od-wrap.splide').first().length > 0){
            var ondaSplide = new Splide($(this.container).find('.od-wrap.splide').first().get(0), {
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
        if($(this.container).find('.dicas-list-wrap.splide').first().length > 0){
            var dicasSplide = new Splide($(this.container).find('.dicas-list-wrap.splide').first().get(0), {
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
        if($(this.container).find('.fac-wrap.splide').first().length > 0){

            var commSplide = new Splide($(this.container).find('.fac-wrap.splide').first().get(0), {
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
        if($(this.container).find('.acc-left-wrap.splide').first().length > 0){
            if($(window).outerWidth() < 992){ // MOBILE
                let accTitleSplide = new Splide($(this.container).find('.acc-left-wrap.splide').first().get(0), {
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

        if($(this.container).find('.acc-gal-wrap.splide').first().length > 0){
            let accGalSplide = new Splide($(this.container).find('.acc-gal-wrap.splide').first().get(0), {
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


        // ................................ VIDEOS ................................
        $('.w-condition-invisible').remove()

    //     if(Webflow.env('editor') == undefined){
    //         $(this.container).find('.ondas .onda-video, .ondas-destino .onda-video').each(function(idx, el){
    //             // const controls = ['play', 'play-large', 'progress', 'current-time', 'fullscreen'];
    //             let iframe = $(el).find('iframe')
    
    //             let vidBaseSrc = iframe.attr('data-base-src')
    //             let vidParams = iframe.attr('data-params')
    // vidParams = vidParams + '&quality=240p';
    //             let vidSrc = iframe.attr('data-src')
    
    //             if(vidSrc != undefined){
    //                 let vidCode = vidSrc.split('https://vimeo.com/')[1]
        
    //                 iframe.attr('src', vidBaseSrc+vidCode+vidParams)
        
    //                 let player = new Plyr($(el).find('.plyr__video-embed'), {
    //                     autoplay: true,
    //                     autopause: false,
    //                     muted: true,
    //                     //youtube: {noCookie: true}
    //                 })
        
    //                 el.player = player
    
    //                 player.muted = true
        
    //                 player.once('ready', ()=>{
    //                     player.restart()
    //                     player.play()
    
    //                     player.muted = true
    //                 })
        
    //                 player.once('playing', ()=>{
    //                     player.restart()
    //                     player.play()
    
    //                     player.muted = true
    
    //                     gsap.to($(el),{
    //                         opacity: 1,
    //                         duration: 0.75,
    //                         ease: 'power2.inOut'
    //                     })
    //                     gsap.to($(el).parent().find('.contain-img'),{
    //                         opacity: 0,
    //                         duration: 0.75,
    //                         ease: 'power2.inOut'
    //                     })
    //                     $(el).find('.plyr__controls, .plyr__control').remove()
    //                 })
    //             }
    
    //         })
    //     }

        // $('.onda-img').clickSet((el)=>{
        //     if($(el).find('.onda-popup').length > 0){
        //         let clone = $(el).find('.onda-popup').clone()
    
        //         $('.global-fixed').append(clone)
                
    
        //         const controls = ['play', 'play-large', 'progress', 'current-time', 'fullscreen'];
        //         let iframe = $('.onda-popup').find('iframe')
    
        //         let vidBaseSrc = iframe.attr('data-base-src')
        //         let vidParams = iframe.attr('data-params')
    
        //         let vidSrc = iframe.attr('data-src')
    
        //         let vidCode = vidSrc.split('https://www.youtube.com/watch?v=')[1]
    
        //         iframe.attr('src', vidBaseSrc+vidCode+vidParams)
    
        //         let player = new Plyr(clone.find('.plyr__video-embed'), {
        //             controls: controls,
        //             youtube: {noCookie: true}
        //         })
    
        //         this.player = player
    
        //         clone.find('.onda-vid-close').clickSet((el)=>{
        //             $('.global-fixed .onda-popup').remove()
        //         })

        //     }

        // })


    }

    async intro(){
        //$('.loader').remove()
    }

    async leave(){
        gsap.to($('.ancoras-fixed'), {
            y: '100%',
            duration: 0.25,
            ease: 'power2.inOut',
            onComplete: ()=>{
                $('.global-fixed *').remove()
            }
        })
    }
}


/****************************************************************************************
---------------------------------------- DESTINOS ---------------------------------------
*****************************************************************************************/

pageClasses['Experiencias'] = class Experiencias extends Page {
    async setup(){

        // -------- NAV INIT --------

        navDark = true
        navProt = true
        navProtOn()


        // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
        $('.w-condition-invisible').remove()

        let page = window.location.pathname.split('/')[2]
        if($('.big-btn.oferta').length > 0){
            let href = $('.big-btn.oferta').attr('href')
            $('.big-btn.oferta').attr('href', href + '?experiencia=' + page)
        }

        // -------- SETUP OFFER CARDS --------
        $([$(this.container).find('.off-card')[0], $(this.container).find('.off-card')[1]]).wrapAll('<div class="off-card-row"></div>')
        $([$(this.container).find('.off-card')[2], $(this.container).find('.off-card')[3]]).wrapAll('<div class="off-card-row"></div>')
        $([$(this.container).find('.off-card')[0], $(this.container).find('.off-card')[3]]).addClass('dest')
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
   
        // ................................ VIDEOS ................................
    //     if(Webflow.env('editor') == undefined){
    //         $(this.container).find('.hero-bg-vid').each(function(idx, el){
    //             // const controls = ['play', 'play-large', 'progress', 'current-time', 'fullscreen'];
    //             let iframe = $(el).find('iframe')
    
    //             let vidBaseSrc = iframe.attr('data-base-src')
    //             let vidParams = iframe.attr('data-params')
    // vidParams = vidParams + '&quality=240p';
    //             let vidSrc = iframe.attr('data-src')
    
    
    //             if(vidSrc != undefined){
    
    //                 let vidCode = vidSrc.split('https://vimeo.com/')[1]
        
    //                 iframe.attr('src', vidBaseSrc+vidCode+vidParams)
        
        
    //                 let player = new Plyr($(this).find('.plyr__video-embed'), {
    //                     autoplay: true,
    //                     autopause: false,
    //                     muted: true,
    //                     //youtube: {noCookie: true}
    //                 })
        
    //                 this.player = player
    //     player.config.quality.default=240;
    //                 player.muted = true
        
                    
    //                 player.once('ready', ()=>{
    //                     player.restart()
    //                     player.play()
        
    //                     player.muted = true
    //                 })
    
    //                 player.once('playing', ()=>{
    //                     player.restart()
    //                     player.play()
        
    //                     player.muted = true
        
    //                     gsap.to($('.hero-bg-vid'),{
    //                         opacity: 1,
    //                         duration: 0.75,
    //                         ease: 'power2.inOut'
    //                     })
    //                     gsap.to($('.dest-hero-bg .cover-img'),{
    //                         opacity: 0,
    //                         duration: 0.75,
    //                         ease: 'power2.inOut'
    //                     })
    //                     // $(el).find('.plyr__controls, .plyr__control').remove()
    //                 })
        
    //                 player.play()
    
    //             }
    
    
    //         })
    //     }


    }

    async render(){




    }

    async intro(){
        //$('.loader').remove()
    }

    async leave(){
        $('.global-fixed *').remove()
         navDark = false
        return
    }
}



/****************************************************************************************
---------------------------------------- PRODUTO ----------------------------------------
*****************************************************************************************/

pageClasses['Produto'] = class Produto extends Page {
    async setup(){

        
        // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
        $('.w-condition-invisible').remove()


        if(Webflow.env('editor') == undefined){
            $('.consulta-page-wrap, .consulta-wrap, .consulta-hero-wrap').removeClass('editor')
        }

        // -------- GALERIA DE ONDAS --------
        if($(this.container).find('.onda-list').length > 0){
            let container = this.container
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
        removePageLoadVideos();

document.querySelectorAll('.page-load-vid-alt-dest').forEach((vid) => {
  const nextCoverImg = vid.nextElementSibling;
  if (nextCoverImg && nextCoverImg.classList.contains('cover-img')) {
    nextCoverImg.remove();
  }
});

    //     if(Webflow.env('editor') == undefined){
    //         $(this.container).find('.hero-bg-vid').each(function(idx, el){
    //             // const controls = ['play', 'play-large', 'progress', 'current-time', 'fullscreen'];
    //             let iframe = $(this).find('iframe')
    
    //             let vidBaseSrc = iframe.attr('data-base-src')
    //             let vidParams = iframe.attr('data-params')
    //             vidParams = vidParams + '&quality=240p';
    //             let vidSrc = iframe.attr('data-src')
    
    //             let vidCode = vidSrc.split('https://vimeo.com/')[1]
    
    //             iframe.attr('src', vidBaseSrc+vidCode+vidParams)
    
    //             let player = new Plyr($(this).find('.plyr__video-embed'), {
    //                 autoplay: true,
    //                 autopause: false,
    //                 muted: true,
    //                 //youtube: {noCookie: true}
    //             })
    
    //             this.player = player
    // player.config.quality.default=240;
    //             player.once('ready', ()=>{
    //                 player.restart()
    //                 player.play()
    //             })
    
    //             player.once('playing', ()=>{
                    
    //                 setTimeout(()=>{                    
    //                     player.restart()
    //                     player.play()
    //                     gsap.to($('.hero-bg-vid'),{
    //                         opacity: 1,
    //                         duration: 0.75,
    //                         ease: 'power2.inOut'
    //                     })
    //                     gsap.to($('.det-hero-bg .cover-img'),{
    //                         opacity: 0,
    //                         duration: 0.75,
    //                         ease: 'power2.inOut'
    //                     })
    //                     $(el).find('.plyr__controls, .plyr__control').remove()
    //                 })
    //             }, 250)
    
    //         })
    //     }


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
        $('.global-fixed').append($(this.container).find('.det-popup-gal'))

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

        $('.global-fixed').append($(this.container).find('.ancoras-fixed'))

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

        if($(this.container).find('.acc-list-item').length > 0){
            await new Promise(resolve => {
                let container = this.container
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
        
        $(this.container).find('.acc-content-item').first().addClass('active')
        $(this.container).find('.acc-list-item').first().addClass('active')

        gsap.set($('.acc-gal-item').not(`[data-name="${$(this.container).find('.acc-list-item').first().attr('data-name')}"]`), {
            display: 'none'
        })
        $('.acc-gal-item').not(`[data-name="${$(this.container).find('.acc-list-item').first().attr('data-name')}"]`).removeClass('splide__slide')

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
        if($(this.container).find('.test-item').length == 0){
            $('.testemunhos').remove()
            $('.ancoras-fixed-wrap #testemunhos-btn').remove()
            $('.ancoras-wrap #testemunhos-btn').remove()
        }

        // -------- DESTAQUES --------
        $(this.container).find('.det-dest-desc').first().addClass('active')
        $(this.container).find('.det-dest-media').first().addClass('active')

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
    
                    mixer = mixitup($(this.container).find('.consulta-wrap')[0], {
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
        

    }

    async render(){
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

        if($(this.container).find('.det-thumb-wrap.splide').first().length > 0 && $(this.container).find('.det-thumb-wrap .splide__slide').first().length > 0){

            var thumbSplide = new Splide($(this.container).find('.det-thumb-wrap.splide').first().get(0), {
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
        if($(this.container).find('.onda-gal-item.splide').first().length > 0 && $(this.container).find('.onda-gal-item .splide__slide').first().length > 0){
            var galSplide = new Splide($(this.container).find('.onda-gal-item.splide').first().get(0), {
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

        if($(this.container).find('.fac-splide.splide').first().length > 0 && $(this.container).find('.fac-splide .splide__slide').first().length > 0){
            var commSplide = new Splide($(this.container).find('.fac-splide.splide').first().get(0), {
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
        if($(this.container).find('.acc-left-wrap.splide').first().length > 0 && $(this.container).find('.acc-left-wrap .splide__slide').first().length > 0){
            if($(window).outerWidth() < 992){ // DESKTOP
                let accTitleSplide = new Splide($(this.container).find('.acc-left-wrap.splide').first().get(0), {
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

        if($(this.container).find('.acc-gal-wrap.splide').first().length > 0 && $(this.container).find('.acc-gal-wrap .splide__slide').first().length > 0){
            let accGalSplide = new Splide($(this.container).find('.acc-gal-wrap.splide').first().get(0), {
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
        if($(this.container).find('.test-holder.splide').length > 0 && $(this.container).find('.test-holder .splide__slide').first().length > 0){
            $('.test-item').removeClass('.is-active')
            if($('.prog-bar-holder').length == 1) gsap.set($('.test-prog'), {display: 'none'})
            var testSplide = new Splide($(this.container).find('.test-holder.splide').first().get(0), {
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
    
            $(this.container).find('.test-holder').find('.prog-bar-scrub').each(function(idx, el){
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
                let scrub = $(this.container).find('.test-holder').find('.prog-bar-scrub')
    
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
    
            $(this.container).find('.test-holder').find('.prog-bar-holder').clickSet(function(el){
                let idx = $(el).index()
                testSplide.go(idx)
            })
        }


        // ................................ VIDEOS ................................
       
        $('.w-condition-invisible').remove()

    //     if(Webflow.env('editor') == undefined){
    //         $(this.container).find('.det-dest-media .onda-video, .ondas .onda-video').each(function(idx, el){
    //             // const controls = ['play', 'play-large', 'progress', 'current-time', 'fullscreen'];
    //             let iframe = $(el).find('iframe')
    
    //             let vidBaseSrc = iframe.attr('data-base-src')
    //             let vidParams = iframe.attr('data-params')
    // vidParams = vidParams + '&quality=240p';
    //             let vidSrc = iframe.attr('data-src')
    
    //             if(vidSrc != undefined){
    //                 let vidCode = vidSrc.split('https://vimeo.com/')[1]
        
    //                 iframe.attr('src', vidBaseSrc+vidCode+vidParams)
        
    //                 let player = new Plyr($(el).find('.plyr__video-embed'), {
    //                     autoplay: true,
    //                     autopause: false,
    //                     muted: true,
    //                     //youtube: {noCookie: true}
    //                 })
        
    //                 el.player = player
    
    //                 player.muted = true
        
    //                 player.once('ready', ()=>{
    //                     player.restart()
    //                     player.play()
    //                 })
        
    //                 player.once('playing', ()=>{
    //                     player.restart()
    //                     player.play()
    
    //                     gsap.to($(el),{
    //                         opacity: 1,
    //                         duration: 0.75,
    //                         ease: 'power2.inOut'
    //                     })
    //                     gsap.to($(el).parent().find('.contain-img'),{
    //                         opacity: 0,
    //                         duration: 0.75,
    //                         ease: 'power2.inOut'
    //                     })
    //                     $(el).find('.plyr__controls, .plyr__control').remove()
    //                 })
    //             }
    
    //         })
    //     }

        // $('.onda-img').clickSet((el)=>{
        //     if($(el).find('.onda-popup').length > 0){
        //         let clone = $(el).find('.onda-popup').clone()

    
        //         $('.global-fixed').append(clone)
                
    
        //         const controls = ['play', 'play-large', 'progress', 'current-time', 'fullscreen'];
        //         let iframe = $('.onda-popup').find('iframe')
    
        //         let vidBaseSrc = iframe.attr('data-base-src')
        //         let vidParams = iframe.attr('data-params')
    
        //         let vidSrc = iframe.attr('data-src')
    
        //         let vidCode = vidSrc.split('https://www.youtube.com/watch?v=')[1]
    
        //         iframe.attr('src', vidBaseSrc+vidCode+vidParams)
    
        //         let player = new Plyr(clone.find('.plyr__video-embed'), {
        //             controls: controls,
        //             youtube: {noCookie: true}
        //         })
    
        //         this.player = player
    
        //         clone.find('.onda-vid-close').clickSet((el)=>{
        //             $('.global-fixed .onda-popup').remove()
        //         })

        //     }

        // })


        
    }

    async intro(){
        //$('.loader').remove()
    }

    async leave(){
        gsap.to($('.ancoras-fixed'), {
            y: '100%',
            duration: 0.25,
            ease: 'power2.inOut',
            onComplete: ()=>{
                $('.global-fixed *').remove()
            }
        })
        return
    }
}




/****************************************************************************************
--------------------------------------- OFERTAS ----------------------------------------
*****************************************************************************************/

pageClasses['Ofertas'] = class Ofertas extends Page {
    async setup(){
        // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
        $('.w-condition-invisible').remove()


        // -------- NAV INIT --------

        navDark = true
        navProt = true
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

        $(this.container).find('#dest-zone-list .flt-cont-item').each(function(idx, el){
            let destTarget = $(el).attr('data-dest')

            $(`[data-dest-item="${destTarget}"]`).find('.flt-sub-list').append($(el))
        })



        let mixer

        $(this.container).find('#flt-reset').clickSet((el)=>{
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
            $(this.container).find('.flt-item').each(function(idx, el){
                $($('.flt-pop-wrap .flt-pop-expand').get(idx)).append($(el).find('.flt-expand-content'))
            })

            $('.flt-container').remove()
        }


        setTimeout(()=>{ // ---- SETUP MIXER ----
            mixer = mixitup($(this.container).find('.search-wrap')[0], {
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



    }

    async render(){
        
    }

    async intro(){
        //$('.loader').remove()
    }

    async leave(){
        $('.global-fixed *').remove()
        navDark = false
        return
    }
}



/****************************************************************************************
--------------------------------------- SOBRE NÓS ---------------------------------------
*****************************************************************************************/

pageClasses['About'] = class About extends Page {
    async setup(){
        // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
        $('.w-condition-invisible').remove()


    }

    async render(){
        // ................................ SPLIDES ................................
        if($(window).outerWidth() < 992){ // MOBILE
            $('.desktop.splide__arrows').remove()
        }

        
        // -------- TESTEMUNHOS --------
         // -------- TESTEMUNHOS --------
        if($('.test-holder.splide').length > 0){
            $('.test-item').removeClass('.is-active')

            if($('.prog-bar-holder').length == 1){
                gsap.set($('.test-prog'), {display: 'none'})
            }
            else{
                $('.test-prog-list').append($('.test-list .prog-bar-holder'))
            }


            var testSplide = new Splide($(this.container).find('.test-holder.splide').first().get(0), {
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
    
            $(this.container).find('.test-holder').find('.prog-bar-scrub').each(function(idx, el){
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
                let scrub = $(this.container).find('.test-holder').find('.prog-bar-scrub')
    
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
    
            $(this.container).find('.test-holder').find('.prog-bar-holder').clickSet(function(el){
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
        var popSplide = new Splide($(this.container).find('.h-hero-right.splide').first().get(0), {
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

        $(this.container).find('.h-hero-prog').find('.prog-bar-scrub').each(function(idx, el){
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
            let scrub = $(this.container).find('.h-hero-prog').find('.prog-bar-scrub')

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

        $(this.container).find('.h-hero-prog').find('.prog-bar-holder').clickSet(function(el){
            let idx = $(el).index()
            popSplide.go(idx)
        })

        }
        


        // -------- GALLERY --------
        var galSplide = new Splide($(this.container).find('.destinos .splide').first().get(0), {
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


        // ................................ VIDEOS ................................

            removePageLoadVideos();

    //     if(Webflow.env('editor') == undefined){
    //         $(this.container).find('.onda-video').each(function(idx, el){
    //             // const controls = ['play', 'play-large', 'progress', 'current-time', 'fullscreen'];
    //             let iframe = $(this).find('iframe')
    
    //             let vidBaseSrc = iframe.attr('data-base-src')
    //             let vidParams = iframe.attr('data-params')
    // vidParams = vidParams + '&quality=240p';
    //             let vidSrc = iframe.attr('data-src')
    
    //             if(vidSrc != undefined){
    //                 let vidCode = vidSrc.split('https://vimeo.com/')[1]
        
    //                 iframe.attr('src', vidBaseSrc+vidCode+vidParams)
        
    //                 let player = new Plyr($(this).find('.plyr__video-embed'), {
    //                     autoplay: true,
    //                     autopause: false,
    //                     muted: true,
    //                     //youtube: {noCookie: true}
    //                 })
        
    //                 this.player = player
    //     player.config.quality.default=240;
    //                 player.once('ready', ()=>{
    //                     player.restart()
    //                     player.play()
        
    //                     player.muted = true
    //                 })
                    
    //                 player.once('playing', ()=>{
        
    //                     player.restart()
    //                     player.play()
        
    //                     player.muted = true
        
                        
    //                     gsap.to($(el),{
    //                         opacity: 1,
    //                         duration: 0.75,
    //                         ease: 'power2.inOut'
    //                     })
    //                     gsap.to($(el).parent().find('.contain-img, .cover-img'),{
    //                         opacity: 0,
    //                         duration: 0.75,
    //                         ease: 'power2.inOut'
    //                     })
    //                     $(el).find('.plyr__controls, .plyr__control').remove()
    //                 })
    //             }
    
    
    //         })
    //     }
    }

    async intro(){
        //$('.loader').remove()
    }

    async leave(){
        $('.global-fixed *').remove()
        navDark = false
        return
    }
}



/****************************************************************************************
---------------------------------------- PESQUISA ---------------------------------------
*****************************************************************************************/


pageClasses['Pesquisa'] = class ETC extends Page {
    async setup(){
        // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
        $('.w-condition-invisible').remove()


        // -------- NAV INIT --------
        navDark = true
        navProt = true
        setTimeout(()=>{
            navProtOn()
        }, 50)
 

        // -------- NAV INIT --------
        $('.pesq-search-wrap').each(function(idx, el){
            $(el).on('focus click', ()=>{
                if($(el).find('.search-input-label').length > 0){
                    gsap.to($(el).find('.search-input-label'), {
                        paddingTop: 0,
                        marginTop: '-1.25em',
                        opacity: 0.6,
                        scale: 0.5,
                        ease: 'power2.inOut',
                        duration: 0.35
                    })
                }
            })
        })






    // ---------------- SEARCH

    // if search: 
    // search all -> get valid targets -> filter valid targets -> animate only relevant
    // if mix: 
    // get valid targets from current search -> filter valid targets -> animate only relevant

    gsap.set($('.pesq-sec-card-link'), {
        pointerEvents: 'auto'
    })

    // $('.search-tag').each(function(i, elem){
    //     // remove punctuation, double spaces, etc from tags and lowercase it
    //     let format = $(elem).attr('data-search').toLowerCase()
    //     $(elem).attr('data-search', format)
    // })

    // $('.pesq-sec-res-card').each(function(idx, el){
    //     let format = $(el).text().toLowerCase()
    //     $(el).find('search-txt').text(format)
    // })

    $('.pesq-sec-res-card-wrap').addClass('invalid-search')
    gsap.set($('.pesq-sec-res-card-wrap.invalid-search'), { height: 0, opacity: 0 })
    gsap.set($('.pesq-section'), { height: 0, opacity: 0 })

    gsap.set($('.pesq-none'), {opacity: 1})


    $.fn.extend({
        search: function(callback,timeout){
            timeout = timeout || 500; // 1 second default timeout
            var timeoutReference,
                search = function(el){
                    if (!timeoutReference) return;
                    timeoutReference = null;
                    callback.call(el);
                };
            return this.each(function(i,el){
                var $el = $(el);
                // Chrome Fix (Use keyup over keypress to detect backspace)
                // thank you @palerdot

                $el.is(':input') && $el.on('keyup keypress paste',function(e){

                    // This catches the backspace button in chrome, but also prevents
                    // the event from triggering too preemptively. Without this line,
                    // using tab/shift+tab will make the focused element fire the callback.
                    if (e.type=='keyup' && e.keyCode!=8) return;
                    
                    // Check if timeout has been set. If it has, "reset" the clock and
                    // start over again.
                    if (timeoutReference) clearTimeout(timeoutReference);
                    timeoutReference = setTimeout(function(){
                        var valor = el.value.toLowerCase();

                        if(valor){
                            
                            //let targets = $('.pesq-sec-res-card').text().indexOf(valor.toLowerCase())

                            $('.pesq-sec-res-card-wrap').each(function(idx, el){

                                if($(el).text().toLowerCase().indexOf(valor.toLowerCase()) < 0){                                    

                                    $(el).addClass('invalid-search')
                                }
                                else{
                                    $(el).removeClass('invalid-search')
                                }
                            })
                        }
                        else{
                            $('.pesq-sec-res-card-wrap').addClass('invalid-search')
                        }

                        gsap.to($('.pesq-sec-res-card-wrap.invalid-search'), {
                            height: 0,
                            opacity: 0,
                            duration: 0.5,
                            ease: 'power2.inOut'
                        })
                        gsap.to($('.pesq-sec-res-card-wrap').not('.invalid-search'), {
                            height: 'auto',
                            opacity: 1,
                            duration: 0.5,
                            ease: 'power2.inOut'
                        })

                        $('.pesq-section').each(function(idx, el){
                            if($(el).find('.pesq-sec-res-card-wrap').not('.invalid-search').length <= 0){
                                gsap.to($(el), {
                                    height: 0,
                                    opacity: 0,
                                    duration: 0.5,
                                    ease: 'power2.inOut'
                                })
                            }
                            else{
                                gsap.to($(el), {
                                    height: 'auto',
                                    opacity: 1,
                                    duration: 0.5,
                                    ease: 'power2.inOut'
                                })
                            }
                        })


                        if($('.pesq-sec-res-card-wrap').not('.invalid-search').length <= 0){
                            gsap.to($('.pesq-none'), {
                                opacity: 1,
                                duration: 0.5,
                                ease: 'power2.inOut'
                            })
                        }
                        else{
                            gsap.to($('.pesq-none'), {
                                opacity: 0,
                                duration: 0.5,
                                ease: 'power2.inOut'
                            })
                        }

                        search(el);

                    }, timeout);
                }).on('blur',function(){
                            //when leaving the input
                            search(el);
                });
            });
        }
    });
    
    $('.search-input').search(()=>{})

    }

    async render(){
        
    }

    async intro(){
        //$('.loader').remove()
    }

    async leave(){
        $('.global-fixed *').remove()
        return
    }
}


/****************************************************************************************
---------------------------------------- POLITICAS ---------------------------------------
*****************************************************************************************/


pageClasses['Politica'] = class Politica extends Page {
    async setup(){
        // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
        $('.w-condition-invisible').remove()


        // -------- NAV INIT --------
        navDark = true
        navProt = true
        setTimeout(()=>{
            navProtOn()
        }, 50)
    }

    async render(){
        
    }

    async intro(){
    }

    async leave(){
        $('.global-fixed *').remove()
        return
    }
}

