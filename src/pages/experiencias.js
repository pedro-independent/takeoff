import gsap from "gsap";
// import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin.min.js";
// import { Flip } from "gsap/Flip";
// import { ScrollTrigger } from "gsap/src/all";
// import { TextPlugin } from "gsap/TextPlugin";


/****************************************************************************************
---------------------------------------- Experiencias ---------------------------------------
*****************************************************************************************/

import { SetVariables, initCommonCode, navProtOn } from '../global.js';

export function runExperiencias()
{
let  navDark = true
let navProt = true

SetVariables(navProt, navDark, false) 

initCommonCode();

        // -------- NAV INIT --------

        navProtOn()


        // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
        $('.w-condition-invisible').remove()

        let page = window.location.pathname.split('/')[2]
        if($('.big-btn.oferta').length > 0){
            let href = $('.big-btn.oferta').attr('href')
            $('.big-btn.oferta').attr('href', href + '?experiencia=' + page)
        }

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
   
   
    



    // async leave(){
    //     $('.global-fixed *').remove()
    //      navDark = false
    //     return
    // }

    //???
    $('.global-fixed *').remove()

    }