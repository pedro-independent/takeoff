
/****************************************************************************************
---------------------------------------- Experiencias ---------------------------------------
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


