

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