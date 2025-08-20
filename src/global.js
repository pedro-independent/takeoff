import "./styles/style.css";


//import barba from '@barba/core'
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin.min.js";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/src/all";
import { TextPlugin } from "gsap/TextPlugin";
// import Mixitup from "mixitup";
// import Plyr from 'plyr'
//import csv from 'jquery-csv'

//import Splide from '@splidejs/splide';
// import "@splidejs/splide/css";

import AirDatepicker from "air-datepicker";
import AirDatepickerPT from "air-datepicker/locale/pt";
/**/

// -------------------------------- GLOBAL VARS/VARIABLES

// const isHome = document.querySelector('body')?.dataset.page === 'home';

// if (isHome) 
// {
//   home()
// }




export const colors = {};
colors.white = "#FFFFFF";
colors.black = "#171717";
colors.darkblue = "#213353";
colors.blue = "#009ABF";
colors.lightblue = "#EFF4F5";
colors.yellow = "#F4B71B";

let navProt = false;
let navDark = false;
let navMenu = false;

  let lenis;
  let  lightbox ;

  document.addEventListener('click', function(event) {
  const lightbox = document.querySelector('[data-vimeo-lightbox-init]');
  if (lightbox && lightbox.contains(event.target) && !lightbox.querySelector('.vimeo-lightbox__calc-wrap').contains(event.target)) {
    // This only works if you manually close the lightbox here
    lenis.start();
  }
});

export function SetVariables(newNavProt, newNavDark, newNavMenu) {
  navProt = newNavProt;
  navDark = newNavDark;
  navMenu = newNavMenu;
}

/***************************************************************************************
----------------------------------------- INITS ----------------------------------------
****************************************************************************************/
export function initCommonCode() {
  
  window.scrollTo(0, 0);

  if ($(".w-editor-body").length > 0) {
    $(".page-load").remove();
  }

  // window.mixitup = Mixitup
  // $.loadScript('https://cdn.jsdelivr.net/gh/psantos-duall/rand-libs@main/dist/mixitup-multifilter.min.js', ()=>{
  //     console.log('loaded script')
  // })

  //let lottie = window.Webflow.require('lottie')

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(DrawSVGPlugin);
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(Flip);

  //var não usada e, lado nenhum
  //const isTouchMobile = !((navigator.maxTouchPoints || 'ontouchstart' in document.documentElement) == false)

  // -------------------------------- PAGE VARS
  const page = {};
  page.intro = () => {};

  //const pageClasses = {}

  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "DOMContentLoaded,load,visibilitychange",
  });

  /***************************************************************************************
----------------------------------------- LENIS ----------------------------------------
****************************************************************************************/

  //gsap.ticker.fps(60)

//if (!document.documentElement.classList.contains('w-editor')) {}

  lenis = new Lenis({
    //duration: 1.5,
    lerp: 0.1,
    orientation: "vertical", // vertical, horizontal
    gestureOrientation: "both", // vertical, horizontal, both
    syncTouch: false,
    wheelMultiplier: 0.6,
    //easing: (x) => Math.min(1 - Math.pow(1 - x, 3))
    //content: $('.fouc-hide')[0]
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);

  ScrollTrigger.refresh();
  lenis.resize();
  lenis.scrollTo(0, { immediate: true });

  
  // ---------------- NAV SETUP ----------------
  // await new Promise(resolve => {
  navInit();
  //   resolve()
  //  })

  btnInit();

  //Isto  é codigo pageClass que deve ser para morrer
  // active.page = new pageClasses[data.next.namespace](data, data.next.namespace)
  // await active.page.launch()

  footerInit();
  navSetupScroll();

  //Ainda precisamos do ScrollTrigger.refresh()?
  ScrollTrigger.refresh();

  lenis.resize();
  lenis.stop();
  lenis.start();

  formReset();

  /****************************************************************************************
---------------------------------- WINDOW GENERAL HOOKS ---------------------------------
*****************************************************************************************/

  //Da fuck's this for?

  let sizeW = $(window).outerWidth();
  window.addEventListener("resize", (e) => {
    e.preventDefault();
    let newW = $(window).outerWidth();
    if (newW != sizeW) {
      // console.log("ref event");
      ScrollTrigger.refresh();
      lenis.resize();
      sizeW = newW;
    }
  });

  window.addEventListener("orientationchange", function () {
    console.log("ref orientation");
    ScrollTrigger.refresh();
    lenis.resize();
  });

  /****************************************************************************************
--------------------------------------- GLOBALS -----------------------------------------
*****************************************************************************************/

  /****************************************************************************************
------------------------------------- FLOW HOOKS ----------------------------------------
Cenas random do barba. Limpei conteudo barba, deixei o resto do codigo para perceber o que é util ou não
*****************************************************************************************/

  function formReset() {
    $(".popup-form").each(function (idx, el) {
      $(el).find('input:not([type="radio"])').not(".center").val("");
      $(el).find("input.center").val("0");
      $(el).find('input[type="radio"]').prop("checked", false);
      $(el).find(".w-radio-input").removeClass("w--redirected-checked");
      $(el).find("form").get(0).reset();
      gsap.set($(el).find(".pop-form-input-label"), { clearProps: "all" });

      $("#Adultos, #Criancas").val(0);
    });
  }

  // Phase Hierarchy:
  // 1 -> SETUP  -  Programmatical behaviour, hovers, clicks, etc (SPLITS & INITS happen here, other than timeout)
  // 2 -> INTRO  -  Initial animations and page entering
  // 2.5 -> RENDER (if needed)  -  Tickers and screen renders (find way to plug to tickers and cleanup after leaving)

  //Não me parecem uteis agora
  const active = {};
  let firstLoad = true;
  let renderStopped = true;

  /****************************************************************************************
------------------------------- BARBA GENERAL HOOKS ------------------------------
MAIS Cenas random do barba. Limpei conteudo barba, deixei o resto do codigo para perceber o que é util ou não
*****************************************************************************************/
  //ScrollTrigger.killAll()
  //lenis.resize()

  /****************************************************************************************
--------------------------------------- COMPONENTS --------------------------------------
Codigo de gestão da navbar
Form da navbar
Ancoras
Muita coisa geral
*****************************************************************************************/


/* Page Transition */
function initPageTransitions() {
    $(document).ready(function() {

        gsap.to(".load-transition-item", {
            yPercent: -100,
            duration: 0.75,
            ease: "power3.inOut",
            transformOrigin: "bottom",
            onComplete: () => {
                gsap.set(".load-transition", { display: "none" });
            }
        });

        $("a").on("click", function(e) {
            if (
                $(this).prop("hostname") === window.location.host &&
                $(this).attr("href").indexOf("#") === -1 &&
                $(this).attr("target") !== "_blank"
            ) {
                e.preventDefault();
                let destination = $(this).attr("href");
                
                gsap.set(".load-transition", { display: "block" });

                gsap.fromTo(
                    ".load-transition-item", {
                        yPercent: -100
                    }, {
                        yPercent: 0,
                        duration: 0.75,
                        ease: "power3.inOut",
                        transformOrigin: "top",
                        onComplete: () => {
                            window.location = destination;
                        }
                    }
                );
            }
        });

        window.onpageshow = function(event) {
            if (event.persisted) {
                window.location.reload();
            }
        };
    });
}

initPageTransitions();



  function navScaleDown() {
    gsap.to($(".nav-holder"), {
      y: -$(".nav-banner").outerHeight(),
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to($(".nav-banner"), {
      y: -$(".nav-banner").outerHeight(),
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to($(".nav-takeoff-svg"), {
      width: $(".nav-takeoff-svg-sizer.small").outerWidth(),
      height: $(".nav-takeoff-svg-sizer.small").outerHeight(),
      duration: 0.5,
      ease: "power2.inOut",
    });

    if ($(window).outerWidth() >= 992) {
      // DESKTOP
      gsap.to($(".nav-wrap"), {
        paddingTop: "0.75em",
        paddingBottom: "0.75em",
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to($(".nav-menu-expand"), {
        paddingTop: "1.25em",
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to($(".nav-wrap"), {
        paddingTop: "0.75em",
        paddingBottom: "0.75em",
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to($(".nav-menu-expand"), {
        paddingTop: "1.25em",
        duration: 0.5,
        ease: "power2.inOut",
      });
      // gsap.to($('.nav-wrap'), {
      //     backgroundColor: colors.white,
      //     duration: 0.5,
      //     ease: 'power2.inOut'
      // })

      gsap.to($(".nav-holder"), {
        marginBottom: -$(".nav-banner").outerHeight(),
        duration: 0.5,
        ease: "power2.inOut",
      });
    }

    if (navDark === true) {
      gsap.to($(".nav-holder"), {
        boxShadow: "0 2px 120px rgba(0, 0, 0, .2)",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }

  function navScaleUp() {
    gsap.to($(".nav-holder"), {
      y: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to($(".nav-banner"), {
      y: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to($(".nav-takeoff-svg"), {
      width: $(".nav-takeoff-svg-sizer.big").outerWidth(),
      height: $(".nav-takeoff-svg-sizer.big").outerHeight(),
      duration: 0.5,
      ease: "power2.inOut",
    });

    if ($(window).outerWidth() >= 992) {
      // DESKTOP
      gsap.to($(".nav-wrap"), {
        paddingTop: "2.1875em",
        paddingBottom: "2.1875em",
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to($(".nav-menu-expand"), {
        paddingTop: "0em",
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to($(".nav-wrap"), {
        paddingTop: "1.875em",
        paddingBottom: "1.875em",
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to($(".nav-menu-expand"), {
        paddingTop: "0em",
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to($(".nav-holder"), {
        marginBottom: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
      // gsap.to($('.nav-wrap'), {
      //     backgroundColor: colors.white,
      //     duration: 0.5,
      //     ease: 'power2.inOut'
      // })
    }

    if (navDark === true) {
      gsap.to($(".nav-holder"), {
        boxShadow: "0 2px 120px rgba(0, 0, 0, .0)",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }

  function navProtOff() {
    gsap.to($(".nav-holder"), {
      backgroundColor: "transparent",
      boxShadow: "0 2px 120px rgba(0, 0, 0, 0)",
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to($(".nav-menu-bottom"), {
      backgroundColor: "transparent",
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to($(".nav-takeoff-svg"), {
      color: colors.white,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to($(".nav-lang, .nav-search"), {
      borderColor: "rgba(255, 255, 255, 0.15)",
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to($(".nav-cta"), {
      borderColor: "rgba(255, 255, 255, 1)",
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to($(".nav-wrap"), {
      color: colors.white,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }

  function navMenuOpen(hoverAttr) {
    if ($(window).outerWidth() >= 992) {
      // DESKTOP
      lenis.stop();

      let activeTab = $(`[data-hover-tab='${hoverAttr}']`);

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

      gsap.to($(".nav-menu"), {
        height: "auto",
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.set(activeTab, {
        opacity: 1,
        pointerEvents: "auto",
        overwrite: true,
      });
      gsap.set($(".nav-menu-tab-container").not(activeTab), {
        opacity: 0,
        pointerEvents: "none",
      });
      // gsap.to(activeTab,{
      //     opacity: 1,
      //     pointerEvents: 'auto',
      //     duration: 0.5,
      //     ease: 'power2.inOut'
      // })

      gsap.to($(".nav-menu-bg"), {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to($(".nav-holder"), {
        borderBottomRightRadius: "1.5em",
        borderBottomLeftRadius: "1.5em",
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.set($("body"), {
        overflow: "hidden",
      });
      // gsap.to($('.nav-holder'),{
      //     height: '100dvh',
      //     duration: 0.5,
      //     ease: 'power2.inOut'
      // })

      gsap.to($(".nav-menu"), {
        height: "100vh",
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to($(".nav-menu-bg"), {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });

      if (navProt == false && navMenu == false) {
        navProtOn();
      }
      navMenu = true;
    }
  }

  function navMenuClose() {
    lenis.start();

    gsap.set($("body"), {
      overflow: "unset",
    });

    // if(navProt == false){
    //     gsap.to($('.nav-holder, .nav-menu-expand'), {
    //         backgroundColor: 'transparent',
    //         duration: 0.5,
    //         ease: 'power2.inOut'
    //     })
    // }

    if ($(window).outerWidth() >= 992) {
      // DESKTOP
      gsap.to($(".nav-menu"), {
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to($(".nav-menu-tab-container"), {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to($(".nav-menu-bg"), {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to($(".nav-holder"), {
        borderBottomRightRadius: "0em",
        borderBottomLeftRadius: "0em",
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      // gsap.to($('.nav-holder'),{
      //     height: 'auto',
      //     duration: 0.5,
      //     ease: 'power2.inOut'
      // })

      gsap.to($(".nav-menu"), {
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to($(".nav-menu-bg"), {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      if (navProt == false && navDark === false) {
        navProtOff();
      }
      navMenu = false;
    }
  }

  function navSetupScroll() {
    ScrollTrigger.create({
      trigger: $(".fouc-hide"),
      start: "top+=25px top",
      end: "top+=25px top",
      invalidateOnRefresh: true,
      onEnter: () => {
        navProt = true;
        if (navDark === false) {
          navProtOn();
        }
        navScaleDown();
      },
      onLeaveBack: () => {
        navProt = false;
        if (navDark === false) {
          navProtOff();
        }
        navScaleUp();
      },
    });
  }

  function navInit() {
    gsap.set($(".nav-wrap"), {
      paddingTop: "2.1875em",
      paddingBottom: "2.1875em",
    });

    gsap.set($(".nav"), {
      y: "0em",
    });

    if ($(".nav-banner").hasClass("w-condition-invisible"))
      $(".nav-banner").remove();
    gsap.set($(".page-container"), {
      paddingTop: $(".nav-banner").outerHeight(),
    });

    gsap.set($(".nav-holder"), {
      backgroundColor: "transparent",
    });

    gsap.set($(".nav-menu-bg, .popup-wrap-bg"), {
      opacity: 0,
    });

    gsap.to($(".nav-banner-looper-bloc"), {
      x: "-100%",
      repeat: -1,
      duration: 24,
      ease: "linear",
    });

    navSetupScroll();

    // -------------------- NAV MENU SETUP
    if ($(window).outerWidth() >= 992) {
      // DESKTOP
      gsap.set($(".nav-menu-tab-container"), {
        opacity: 0,
        backgroundColor: "transparent",
      });
    } else {
      gsap.set($(".nav-menu-expand"), {
        height: () => {
          return $(window).height() - parseFloat($(".nav").outerHeight());
        },
      });
    }

    $(".nav-link[data-hover]").hoverSet(
      (el) => {
        if (navProt == false && navMenu == false) {
          navProtOn();
        }
        navMenuOpen($(el).attr("data-hover"));
        navMenu = true;

        lenis.stop();

        gsap.to($(el).children(), {
          color: colors.blue,
          duration: 0.35,
          ease: "power2.inOut",
        });
        gsap.to($(el).find(".nav-arrow"), {
          rotate: 180,
          duration: 0.35,
          ease: "power2.inOut",
        });

        if (!$(el).hasClass("active")) {
          if ($(".nav-link.active").length > 0) {
            gsap.to($(".nav-link.active").children(), {
              color: $(".nav-link").not($(el)).css("color"),
              duration: 0.35,
              ease: "power2.inOut",
              clearProps: "color",
            });
            gsap.to($(".nav-link.active").find(".nav-arrow"), {
              rotate: 0,
              duration: 0.35,
              ease: "power2.inOut",
            });
          }

          $(".nav-link.active").removeClass("active");
          $(el).addClass("active");
        }

        let tab = $(`[data-hover-tab="${$(el).attr("data-hover")}"]`);
        let idx = 0;
        let activeIdx = tab
          .find(".nav-img-item")
          .index(tab.find(".nav-img-item.active"));

        gsap.set(tab.find(".nav-img-item.active"), {
          width: "100%",
          overwrite: true,
        });

        if (idx > activeIdx) {
          gsap.set(tab.find(".nav-img-item.active .cover-img"), {
            right: "auto",
            left: "-15%",
          });
          gsap.to(tab.find(".nav-img-item.active"), {
            width: "0%",
            flexFlow: "row",
            duration: 0.75,
            ease: "power3.inOut",
          });
          gsap.to(tab.find(".nav-img-item.active .cover-img"), {
            left: "-50%",
            duration: 0.75,
            ease: "power3.inOut",
          });

          gsap.set(tab.find(".nav-img-item .cover-img")[idx], {
            left: "auto",
            right: "-50%",
          });
          gsap.to(tab.find(".nav-img-item")[idx], {
            width: "100%",
            flexFlow: "row-reverse",
            duration: 0.75,
            ease: "power3.inOut",
          });
          gsap.to(tab.find(".nav-img-item .cover-img")[idx], {
            right: "-15%",
            duration: 0.75,
            ease: "power3.inOut",
          });
        } else if (idx < activeIdx) {
          gsap.set(tab.find(".nav-img-item.active .cover-img"), {
            right: "-15%",
            left: "auto",
          });
          gsap.to(tab.find(".nav-img-item.active"), {
            width: "0%",
            flexFlow: "row-reverse",
            duration: 0.75,
            ease: "power3.inOut",
          });
          gsap.to(tab.find(".nav-img-item.active .cover-img"), {
            right: "-50%",
            duration: 0.75,
            ease: "power3.inOut",
          });

          gsap.set(tab.find(".nav-img-item .cover-img")[idx], {
            left: "-50%",
            right: "auto",
          });
          gsap.to(tab.find(".nav-img-item")[idx], {
            width: "100%",
            flexFlow: "row",
            duration: 0.75,
            ease: "power3.inOut",
          });
          gsap.to(tab.find(".nav-img-item .cover-img")[idx], {
            left: "-15%",
            duration: 0.75,
            ease: "power3.inOut",
          });
        }
        if (idx != activeIdx) {
          tab.find(".nav-img-item.active").removeClass("active");

          $(tab.find(".nav-img-item")[idx]).addClass("active");
        }
      },
      (el) => {}
    );

    $(".nav").hoverSet(
      (el) => {},
      (el) => {
        if ($(".nav-link.active").length > 0) {
          if (navProt == false && navDark === false) {
            navProtOff();
          }
          navMenuClose();
          navMenu = false;
          lenis.start();

          if (navProt == false) {
            gsap.to($(".nav-link.active").children(), {
              color: colors.white,
              duration: 0.35,
              ease: "power2.inOut",
              clearProps: "color",
            });
          } else {
            gsap.to($(".nav-link.active").children(), {
              color: colors.black,
              duration: 0.35,
              ease: "power2.inOut",
              clearProps: "color",
            });
          }

          gsap.to($(".nav-link.active").find(".nav-arrow"), {
            rotate: 0,
            duration: 0.35,
            ease: "power2.inOut",
          });
          $(".nav-link.active").removeClass("active");
        }
      }
    );

    $(".nav-link")
      .not("[data-hover]")
      .hoverSet(
        (el) => {
          gsap.to($(el).children(), {
            color: colors.blue,
            duration: 0.35,
            ease: "power2.inOut",
          });

          if ($(".nav-link.active").length > 0) {
            if (navProt == false && navDark === false) {
              navProtOff();
            }
            navMenuClose();
            navMenu = false;
            lenis.start();

            if (navProt == false) {
              gsap.to($(".nav-link.active").children(), {
                color: colors.white,
                duration: 0.35,
                ease: "power2.inOut",
                clearProps: "color",
              });
            } else {
              gsap.to($(".nav-link.active").children(), {
                color: colors.black,
                duration: 0.35,
                ease: "power2.inOut",
                clearProps: "color",
              });
            }

            gsap.to($(".nav-link.active").find(".nav-arrow"), {
              rotate: 0,
              duration: 0.35,
              ease: "power2.inOut",
            });
            $(".nav-link.active").removeClass("active");
          }
        },
        (el) => {
          gsap.to($(el).children(), {
            color: $(el).css("color"),
            duration: 0.35,
            ease: "power2.inOut",
            clearProps: "color",
          });
        }
      );

    $(".nav-svg-wrap, .nav-right *").hoverSet(
      (el) => {
        if ($(".nav-link.active").length > 0) {
          if (navProt == false && navDark === false) {
            navProtOff();
          }
          navMenuClose();
          navMenu = false;
          lenis.start();

          if (navProt == false) {
            gsap.to($(".nav-link.active").children(), {
              color: colors.white,
              duration: 0.35,
              ease: "power2.inOut",
              clearProps: "color",
            });
          } else {
            gsap.to($(".nav-link.active").children(), {
              color: colors.black,
              duration: 0.35,
              ease: "power2.inOut",
              clearProps: "color",
            });
          }

          gsap.to($(".nav-link.active").find(".nav-arrow"), {
            rotate: 0,
            duration: 0.35,
            ease: "power2.inOut",
          });
          $(".nav-link.active").removeClass("active");
        }
      },
      (el) => {}
    );

    $(".nav-menu-link").clickSet((el) => {
      navMenuClose();
    });

    $(".nav-menu-tab-mob-title").clickSet((el) => {
      if (!$(el).hasClass("open")) {
        $(el).addClass("open");

        gsap.to($(el).siblings(".nav-menu-tab"), {
          height: "auto",
          duration: 0.5,
          ease: "power3.inOut",
        });
      } else {
        $(el).removeClass("open");

        gsap.to($(el).siblings(".nav-menu-tab"), {
          height: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    });

    $(".nav-burg").clickSet((el) => {
      if (!$(el).hasClass("open")) {
        $(el).addClass("open");

        navMenuOpen("");
      } else {
        $(el).removeClass("open");

        navMenuClose();
      }
    });

    $(".popup-back").hoverSet(
      (el) => {
        gsap.to($(el).find(".path-fill"), {
          drawSVG: "100% 0%",
          duration: 0.3,
          ease: "power2.inOut",
        });

        gsap.to($(el).find(".popup-back-svg"), {
          color: colors.blue,
          duration: 0.3,
          ease: "power2.inOut",
        });
      },
      (el) => {
        gsap.to($(el).find(".path-fill"), {
          drawSVG: "0% 0%",
          duration: 0.3,
          ease: "power2.inOut",
        });

        gsap.to($(el).find(".popup-back-svg"), {
          color: () => {
            return $(el).find(".popup-back-svg").parent().css("color");
          },
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    );

    $(".nav-menu-tab-container").each(function (idx, el) {
      gsap.set(
        $(el).find(".nav-img-item").not($(el).find(".nav-img-item").first()),
        {
          width: "0%",
        }
      );

      $(el)
        .find(".nav-img-list")
        .append($(el).find(".nav-menu-tab .nav-img-item"));
    });

    $(".nav-menu-tab-container").each(function (idx, el) {
      $(el).find(".nav-img-item").first().addClass("active");
    });

    $(".nav-menu-link").hoverSet(
      (el) => {
        gsap.to($(el), {
          color: colors.blue,
          duration: 0.35,
          ease: "power2.inOut",
        });

        let idx =
          $(el)
            .parents(".nav-menu-tab-container")
            .find(".nav-menu-link")
            .index($(el)) + 1;
        let activeIdx = $(el)
          .parents(".nav-menu-tab-container")
          .find(".nav-img-item")
          .index(
            $(el)
              .parents(".nav-menu-tab-container")
              .find(".nav-img-item.active")
          );

        gsap.set(
          $(el).parents(".nav-menu-tab-container").find(".nav-img-item.active"),
          {
            width: "100%",
            overwrite: true,
          }
        );

        if (idx > activeIdx) {
          gsap.set(
            $(el)
              .parents(".nav-menu-tab-container")
              .find(".nav-img-item.active .cover-img"),
            {
              right: "auto",
              left: "-15%",
            }
          );
          gsap.to(
            $(el)
              .parents(".nav-menu-tab-container")
              .find(".nav-img-item.active"),
            {
              width: "0%",
              flexFlow: "row",
              duration: 0.75,
              ease: "power3.inOut",
            }
          );
          gsap.to(
            $(el)
              .parents(".nav-menu-tab-container")
              .find(".nav-img-item.active .cover-img"),
            {
              left: "-50%",
              duration: 0.75,
              ease: "power3.inOut",
            }
          );

          gsap.set(
            $(el)
              .parents(".nav-menu-tab-container")
              .find(".nav-img-item .cover-img")[idx],
            {
              left: "auto",
              right: "-50%",
            }
          );
          gsap.to(
            $(el).parents(".nav-menu-tab-container").find(".nav-img-item")[idx],
            {
              width: "100%",
              flexFlow: "row-reverse",
              duration: 0.75,
              ease: "power3.inOut",
            }
          );
          gsap.to(
            $(el)
              .parents(".nav-menu-tab-container")
              .find(".nav-img-item .cover-img")[idx],
            {
              right: "-15%",
              duration: 0.75,
              ease: "power3.inOut",
            }
          );
        } else if (idx < activeIdx) {
          gsap.set(
            $(el)
              .parents(".nav-menu-tab-container")
              .find(".nav-img-item.active .cover-img"),
            {
              right: "-15%",
              left: "auto",
            }
          );
          gsap.to(
            $(el)
              .parents(".nav-menu-tab-container")
              .find(".nav-img-item.active"),
            {
              width: "0%",
              flexFlow: "row-reverse",
              duration: 0.75,
              ease: "power3.inOut",
            }
          );
          gsap.to(
            $(el)
              .parents(".nav-menu-tab-container")
              .find(".nav-img-item.active .cover-img"),
            {
              right: "-50%",
              duration: 0.75,
              ease: "power3.inOut",
            }
          );

          gsap.set(
            $(el)
              .parents(".nav-menu-tab-container")
              .find(".nav-img-item .cover-img")[idx],
            {
              left: "-50%",
              right: "auto",
            }
          );
          gsap.to(
            $(el).parents(".nav-menu-tab-container").find(".nav-img-item")[idx],
            {
              width: "100%",
              flexFlow: "row",
              duration: 0.75,
              ease: "power3.inOut",
            }
          );
          gsap.to(
            $(el)
              .parents(".nav-menu-tab-container")
              .find(".nav-img-item .cover-img")[idx],
            {
              left: "-15%",
              duration: 0.75,
              ease: "power3.inOut",
            }
          );
        }
        if (idx != activeIdx) {
          $(el)
            .parents(".nav-menu-tab-container")
            .find(".nav-img-item.active")
            .removeClass("active");

          $(
            $(el).parents(".nav-menu-tab-container").find(".nav-img-item")[idx]
          ).addClass("active");
        }
      },
      (el) => {
        gsap.to($(el), {
          color: colors.black,
          duration: 0.35,
          ease: "power2.inOut",
        });
      }
    );

    $(".nav").hoverSet(
      (elem) => {},
      (elem) => {
        $(".nav-menu-tab-container").each(function (idxEl, el) {
          let idx = 0;
          let activeIdx = $(el)
            .find(".nav-img-item")
            .index($(".nav-img-item.active"));

          if (idx > activeIdx) {
            gsap.set($(el).find(".nav-img-item.active .cover-img"), {
              right: "auto",
              left: "-15%",
            });
            gsap.to($(el).find(".nav-img-item.active"), {
              width: "0%",
              flexFlow: "row",
              duration: 0.75,
              ease: "power3.inOut",
            });
            gsap.to($(el).find(".nav-img-item.active .cover-img"), {
              left: "-50%",
              duration: 0.75,
              ease: "power3.inOut",
            });

            gsap.set($(el).find(".nav-img-item .cover-img")[idx], {
              left: "auto",
              right: "-50%",
            });
            gsap.to($(el).find(".nav-img-item")[idx], {
              width: "100%",
              flexFlow: "row-reverse",
              duration: 0.75,
              ease: "power3.inOut",
            });
            gsap.to($(el).find(".nav-img-item .cover-img")[idx], {
              right: "-15%",
              duration: 0.75,
              ease: "power3.inOut",
            });
          } else if (idx < activeIdx) {
            gsap.set($(el).find(".nav-img-item.active .cover-img"), {
              right: "-15%",
              left: "auto",
            });
            gsap.to($(el).find(".nav-img-item.active"), {
              width: "0%",
              flexFlow: "row-reverse",
              duration: 0.75,
              ease: "power3.inOut",
            });
            gsap.to($(el).find(".nav-img-item.active .cover-img"), {
              right: "-50%",
              duration: 0.75,
              ease: "power3.inOut",
            });

            gsap.set($(el).find(".nav-img-item .cover-img")[idx], {
              left: "-50%",
              right: "auto",
            });
            gsap.to($(el).find(".nav-img-item")[idx], {
              width: "100%",
              flexFlow: "row",
              duration: 0.75,
              ease: "power3.inOut",
            });
            gsap.to($(el).find(".nav-img-item .cover-img")[idx], {
              left: "-15%",
              duration: 0.75,
              ease: "power3.inOut",
            });
          }
          if (idx != activeIdx) {
            $(el).find(".nav-img-item.active").removeClass("active");

            $($(el).find(".nav-img-item")[idx]).addClass("active");
          }
        });
      }
    );

    // -------------------- ORCAMENTO POP-UP
    $(".nav-cta.orcamento").clickSet((el) => {

      $('.popup-wrap.orcamento').on('mousewheel DOMMouseScroll', function(e) {
    e.stopPropagation();
});

      gsap.to($(".popup-wrap.orcamento"), {
        x: "0%",
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to($(".popup-wrap-bg"), {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power2.inOut",
      });
    });

    $(".nav")
      .find(
        ".popup-wrap.orcamento .popup-back, .popup-wrap.orcamento .form-succ-back, .popup-wrap-bg"
      )
      .clickSet((el) => {
        gsap.to($(".popup-wrap.orcamento"), {
          x: "100%",
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            if ($(".w-form").hasClass("submitted")) {
              formReset();

              const successMessage = $(".popup-wrap.orcamento")
                .find(".w-form-done")
                .get(0);
              const form = $(".popup-wrap.orcamento").find("form").get(0);
              // Hide the success message
              successMessage.style.display = "none";

              // Show the form
              form.style.display = "flex";
            }
          },
        });
        gsap.to($(".popup-wrap-bg"), {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.5,
          ease: "power2.inOut",
        });
      });
    $(".nav")
      .find(
        ".popup-wrap.contacto .popup-back, .popup-wrap.contacto .form-succ-back, .popup-wrap-bg"
      )
      .clickSet((el) => {
        gsap.to($(".popup-wrap.contacto"), {
          x: "100%",
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            if ($(".w-form").hasClass("submitted")) {
              formReset();

              const successMessage = $(".popup-wrap.contacto")
                .find(".w-form-done")
                .get(0);
              const form = $(".popup-wrap.contacto").find("form").get(0);
              // Hide the success message
              successMessage.style.display = "none";

              // Show the form
              form.style.display = "flex";
            }
          },
        });
        gsap.to($(".popup-wrap-bg"), {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.5,
          ease: "power2.inOut",
        });
      });

    $("#Partida").attr("readonly", "");

    let dpMin = new AirDatepicker("#Partida", {
      locale: AirDatepickerPT,
      autoClose: true,
      container: $(".pop-form-calendar")[0],
      zIndex: 10000,
    });
    dpMin.update({
      minDate: new Date(),
    });

    $(".nav")
      .find(".pop-form-input-wrap, .pop-form-dd-wrap")
      .each(function (idx, el) {
        $(el).on("focus click", () => {
          /*tiago*/
          var valuePop = $(el).find(".pop-form-input").val();
          if (valuePop && valuePop.trim() !== "") {
            if ($(el).find(".pop-form-input-label").length > 0) {
              gsap.to($(el).find(".pop-form-input-label"), {
                paddingTop: 0,
                marginTop: "-0.25em",
                opacity: 0.6,
                scale: 0.8,
                ease: "power2.inOut",
                duration: 0.35,
              });
            }
          }
        });
      });
    $(".nav")
      .find(".pop-form-input")
      .each(function (idx, el) {
        $(el).on("focus", () => {
          if ($(el).siblings(".pop-form-input-label").length > 0) {
            gsap.to($(el).siblings(".pop-form-input-label"), {
              paddingTop: 0,
              marginTop: "-0.25em",
              opacity: 0.6,
              scale: 0.8,
              ease: "power2.inOut",
              duration: 0.35,
            });
          }
        });
      });
    $("#Adultos, #Criancas").attr("readonly", "");

    $(".nav")
      .find(".pop-form-picker")
      .each(function (idx, el) {
        $(el).find("input").val(0);
        $(el)
          .find(".minus")
          .clickSet(() => {
            let input = parseFloat($(el).find("input").val());
            let num = input - 1;
            if (num < 0) num = 0;
            $(el).find("input").val(num);
          });
        $(el)
          .find(".plus")
          .clickSet(() => {
            let input = parseFloat($(el).find("input").val());
            let num = input + 1;
            $(el).find("input").val(num);
          });
      });

    /* Tiago Fix de dropdown formulario */
    $(".nav")
      .find(".pop-form-input-wrap")
      .not(".datepickerwrap")
      .each(function (idx, el) {
        let isTouchDevice =
          "ontouchstart" in window || navigator.maxTouchPoints; // Detect mobile

        const openForm = (element) => {
          datePickerOpen = false;
          // Close all other forms first
          $(".pop-form-input-wrap")
            .not(".datepickerwrap")
            .each(function (i, otherEl) {
              if (otherEl !== element) {
                closeForm(otherEl);
              }
            });

          // Open the current form
          gsap.to($(element), {
            zIndex: 100,
            ease: "power2.inOut",
            duration: 0.35,
          });

          if ($(element).find(".pop-form-expand").length > 0) {
            gsap.to($(element).find(".pop-form-expand"), {
              height: "auto",
              opacity: 1,
              ease: "power2.inOut",
              duration: 0.35,
            });
          }

          $(element).addClass("open");
        };

        const closeForm = (element) => {
          datePickerOpen = false;
          gsap.to($(element), {
            zIndex: 0,
            ease: "power2.inOut",
            duration: 0.35,
          });

          if ($(element).find(".pop-form-expand").length > 0) {
            gsap.to($(element).find(".pop-form-expand"), {
              height: 0,
              opacity: 0,
              ease: "power2.inOut",
              duration: 0.35,
            });
          }

          $(element).removeClass("open");
        };

        const toggleForm = (event) => {
          event.stopPropagation();
          if ($(el).hasClass("open")) {
            closeForm(el);
          } else {
            openForm(el);
          }
        };

        $(el).on("click", toggleForm);
        
        // Handle mobile touch
        // if (isTouchDevice) {
        //   $(el).on("touchstart", toggleForm);
        // } else {
        //   // Handle click behavior for desktop
        //   $(el).on("click", toggleForm);

        //   $(el).on("mouseenter", () => {
        //     openForm(el);
        //   });

        //   $(el).on("mouseleave", () => {
        //     closeForm(el);
        //   });
        // }

        // Close when clicking outside
        $(document).on("click touchstart", (event) => {
          if (!$(event.target).closest(".pop-form-input-wrap").length) {
            $(".pop-form-input-wrap.open").each(function (i, openEl) {
              closeForm(openEl);
            });
          }
        });
      });

    let datePickerOpen = false;
    // Handle click for .pop-form-input-wrap.datepickerwrap
    $(".pop-form-input.datepicker").on("click", function () {
      gsap.to($(".pop-form-input-wrap.datepickerwrap"), {
        zIndex: 100,
        ease: "power2.inOut",
        duration: 0.35,
      });

      if (datePickerOpen && dpMin.visible) {
        //  document.querySelector('.air-datepicker').style.visibility = 'hidden';
        if (dpMin.visible) dpMin.hide();
        console.log("hide");
      } else {
        // document.querySelector('.air-datepicker').style.visibility = 'visible';
        // if(!dpMin.visible)
        dpMin.show();
      }

      datePickerOpen = !datePickerOpen;
    });

    //**********end******* */

    $(".nav")
      .find(".pop-cont-radio")
      .each(function (idx, el) {
        $(el).find(".radio").attr("value", $(el).find(".w-form-label").text());
        $(el).find("input").attr("value", $(el).find(".w-form-label").text());
      });
    $(".nav")
      .find(".pop-cont-radio")
      .clickSet((el) => {
        let textDiv = $(el)
          .parents(".pop-form-input-wrap")
          .find(".pop-form-input");
        textDiv.val($(el).children().text());

        console.log($(el).parents(".pop-form-input-wrap"));
        setTimeout(() => {
          $(el).parents(".pop-form-input-wrap").trigger("mouseleave");
        }, 25);
      });

    $(".nav")
      .find("#pop-zone-list .pop-cont-sub-item")
      .each(function (idx, el) {
        let destTarget = $(el).attr("data-pop-dest");

        $(`[data-pop-item="${destTarget}"]`)
          .find(".pop-cont-sub-list")
          .append($(el));
      });
    $(".nav").find("#pop-zone-rem").remove();

    let activeDest = undefined;
    let activeType = undefined;
    /*Tiago: Não sei porquªe, mas tive de declarar esta variavel */let activeSubDest = undefined;

    $(".nav")
      .find('#pop-dest-radios input[type="radio"]')
      .each(function (idx, el) {
        $(el).on("change", () => {
          activeDest = $(el).parents(".pop-cont-item").attr("data-pop-dest");
          activeSubDest = $(el)
            .parents(".pop-cont-sub-item")
            .attr("data-pop-subdest");
          console.log(activeSubDest);

          if (activeType !== undefined) {
            gsap.set($(`#pop-aloj-list .pop-cont-item`), { display: "flex" });
            if (activeDest !== "all") {
              gsap.set(
                $(
                  `#pop-aloj-list .pop-cont-item[data-form-dest!="${activeDest}"]`
                ),
                { display: "none" }
              );
              if (activeSubDest !== undefined) {
                gsap.set(
                  $(
                    `#pop-aloj-list .pop-cont-item[data-form-subdest!="${activeSubDest}"]`
                  ),
                  { display: "none" }
                );
              }
            }
            if (activeType !== "all") {
              gsap.set(
                $(
                  `#pop-aloj-list .pop-cont-item[data-form-tipo!="${activeType}"]`
                ),
                { display: "none" }
              );
            }
          } else {
            gsap.set($(`#pop-aloj-list .pop-cont-item`), { display: "flex" });
            if (activeDest !== "all") {
              gsap.set(
                $(
                  `#pop-aloj-list .pop-cont-item[data-form-dest!="${activeDest}"]`
                ),
                { display: "none" }
              );

              if (activeSubDest !== undefined) {
                gsap.set(
                  $(
                    `#pop-aloj-list .pop-cont-item[data-form-subdest!="${activeSubDest}"]`
                  ),
                  { display: "none" }
                );
              }
            }
          }
        });
      });

    $(".nav")
      .find('#pop-type-radios input[type="radio"]')
      .each(function (idx, el) {
        $(el).on("change", () => {
          activeType = $(el).attr("data-slug");

          if (activeDest !== undefined) {
            gsap.set($(`#pop-aloj-list .pop-cont-item`), { display: "flex" });
            if (activeDest !== "all") {
              gsap.set(
                $(
                  `#pop-aloj-list .pop-cont-item[data-form-dest!="${activeDest}"]`
                ),
                { display: "none" }
              );
            }
            if (activeType !== "all") {
              gsap.set(
                $(
                  `#pop-aloj-list .pop-cont-item[data-form-tipo!="${activeType}"]`
                ),
                { display: "none" }
              );
            }
          } else {
            gsap.set($(`#pop-aloj-list .pop-cont-item`), { display: "flex" });
            if (activeType !== "all") {
              gsap.set(
                $(
                  `#pop-aloj-list .pop-cont-item[data-form-tipo!="${activeType}"]`
                ),
                { display: "none" }
              );
            }
          }

          if ($(el).attr("data-other") !== undefined) {
            gsap.to($(".pop-cont-oth-expand"), {
              height: "auto",
              opacity: 1,
              ease: "power2.inOut",
              duration: 0.35,
            });
          } else {
            gsap.to($(".pop-cont-oth-expand"), {
              height: 0,
              opacity: 0,
              ease: "power2.inOut",
              duration: 0.35,
            });
          }
        });
      });

    // -------- FORM VERIFICATION --------

    $(".nav")
      .find(".popup-form")
      .each(function () {
        let elem = this;
        let divClass = ".pop-form-input-wrap";

        $(this).find('[wr-type="error"]').hide(); // Hide errors
        $(this).find('[wr-type="required-field"]').removeClass("error"); // Remove error state from fields

        var formErrors = false;

        const fieldError = function (field) {
          field.parents(divClass).find('[wr-type="error"]').show(); // Show error message
          field.siblings('[wr-type="error"]').show();
          field.addClass("error"); // Add error state to this field
          field.siblings().addClass("error"); // Add error state to field siblings

          // if(field.parents(divClass).find('.form-dropdown-txt-wrap').length > 0)
          //     field.parents(divClass).find('.form-dropdown-txt-wrap').addClass('error')

          formErrors = true;
        };

        // Click on the Submit button
        $(this)
          .find('[wr-type="submit"], [wr-type="progress"]')
          .click(function () {
            // Check each required field
            $(elem)
              .find('[wr-type="required-field"]')
              .each(function () {
                if ($(this).val().length === 0) {
                  // If this field is empty
                  fieldError($(this));
                } else if (
                  $(this).attr("type") === "email" && // Validation for email fields
                  ($(this).val().indexOf("@") === -1 ||
                    $(this).val().indexOf(".") === -1)
                ) {
                  fieldError($(this));
                } else if (
                  $(this).attr("type") === "tel" && // Validation for phone fields
                  isNaN(parseInt($(this).val()))
                ) {
                  fieldError($(this));
                } else if (
                  $(this).attr("type") === "checkbox" && // Validation for required checkbox
                  $(this).siblings(".w--redirected-checked").length < 1
                ) {
                  fieldError($(this));
                }
              });
            $(elem)
              .find('[wr-type="required-radio"]')
              .each(function () {
                if ($(this).children(".w--redirected-checked").length < 1) {
                  fieldError($(this));
                }
              });

            // Submit parent form if there are no errors
            if (!formErrors && $(this).attr("wr-type") === "submit") {
              $(elem).find("form").submit();
              $(".w-form").addClass("submitted");
            }
          });

        // Remove errors from field
        $(this)
          .find(
            '[wr-type="required-field"], [wr-type="required-radio"], [wr-type="file-field"], [wr-type="required-dropdown"]'
          )
          .on("keypress blur", function () {
            $(this).siblings().removeClass("error"); // Add error state to field siblings
            $(this).removeClass("error");

            $(this).siblings('[wr-type="error"]').hide();

            $(this).parents(divClass).find('[wr-type="error"]').hide();
            if (
              $(this).parents(divClass).find(".form-dropdown-txt-wrap").length >
              0
            ) {
              $(this)
                .parents(divClass)
                .find(".form-dropdown-txt-wrap")
                .removeClass("error");
            }
            formErrors = false;
          });

        // Press Enter
        $(this)
          .find("input, textarea")
          .keypress(function (e) {
            if (e.keyCode == 13) {
              e.preventDefault();
              $(this).trigger("change");
              $(this).find('[wr-type="submit"], [wr-type="progress"]').click();
            }
          });
      });
  }

  function footerInit() {
    $(".ftr-back-top").click(() => {
      lenis.scrollTo(0);
      if ($(window).outerWidth() < 992) {
        // MOBILE
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else {
        $("html, body").animate({ scrollTop: 0 }, "slow");
      }
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });


      const categoryToListMap = {
        dest: "#ftr-dest-list",
        trip: "#ftr-trip-list",
        exp: "#ftr-exp-list",
      };

      $(".nav .ftr-link-item").each(function (index, element) {
        const $item = $(element);
        const category = $item.attr("data-ftr-item");
        const targetListId = categoryToListMap[category];

        if (targetListId) {
          $(targetListId).append($item.clone());
        }
      });


    $(".contact-form").clickSet((el) => {
      gsap.to($(".popup-wrap.contacto"), {
        x: "0%",
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to($(".popup-wrap-bg"), {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power2.inOut",
      });
    });

    $(".ftr-link").hoverSet(
      (el) => {
        gsap.to($(el), {
          color: colors.blue,
          duration: 0.35,
          ease: "power2.inOut",
        });
      },
      (el) => {
        gsap.to($(el), {
          color: colors.white,
          duration: 0.35,
          ease: "power2.inOut",
        });
      }
    );

    $(".ftr-form .form-submit-btn").hoverSet(
      (el) => {
        gsap.to($(el), {
          borderColor: colors.blue,
          duration: 0.35,
          ease: "power2.inOut",
        });
        gsap.to($(el).find(".form-arrow-svg"), {
          color: colors.blue,
          duration: 0.35,
          ease: "power2.inOut",
        });
      },
      (el) => {
        gsap.to($(el), {
          borderColor: "rgba(255, 255, 255, 0.15)",
          duration: 0.35,
          ease: "power2.inOut",
        });
        gsap.to($(el).find(".form-arrow-svg"), {
          color: colors.white,
          duration: 0.35,
          ease: "power2.inOut",
        });
      }
    );

    // -------- FORM VERIFICATION --------

    $(".footer")
      .find(".ftr-form-block")
      .each(function () {
        let elem = this;
        let divClass = ".form-input-wrap";

        $(this).find('[wr-type="error"]').hide(); // Hide errors
        $(this).find('[wr-type="required-field"]').removeClass("error"); // Remove error state from fields

        var formErrors = false;

        const fieldError = function (field) {
          field.parents(divClass).find('[wr-type="error"]').show(); // Show error message
          field.siblings('[wr-type="error"]').show();
          field.addClass("error"); // Add error state to this field
          field.siblings().addClass("error"); // Add error state to field siblings

          // if(field.parents(divClass).find('.form-dropdown-txt-wrap').length > 0)
          //     field.parents(divClass).find('.form-dropdown-txt-wrap').addClass('error')

          formErrors = true;
        };

        // Click on the Submit button
        $(this)
          .find('[wr-type="submit"]')
          .click(function () {
            // Check each required field
            $(elem)
              .find('[wr-type="required-field"]')
              .each(function () {
                if ($(this).val().length === 0) {
                  // If this field is empty
                  fieldError($(this));
                } else if (
                  $(this).attr("type") === "email" && // Validation for email fields
                  ($(this).val().indexOf("@") === -1 ||
                    $(this).val().indexOf(".") === -1)
                ) {
                  fieldError($(this));
                } else if (
                  $(this).attr("type") === "checkbox" && // Validation for required checkbox
                  $(this).siblings(".w--redirected-checked").length < 1
                ) {
                  fieldError($(this));
                }
              });

            // Submit parent form if there are no errors
            if (!formErrors && $(this).attr("wr-type") === "submit") {
              $(elem).find("form").submit(); // FIX THIS
            }
          });

        // Remove errors from field
        $(this)
          .find('[wr-type="required-field"]')
          .on("keypress blur", function () {
            $(this).siblings().removeClass("error"); // Add error state to field siblings
            $(this).removeClass("error");

            $(this).siblings('[wr-type="error"]').hide();

            $(this).parents(divClass).find('[wr-type="error"]').hide();

            formErrors = false;
          });

        // Press Enter
        $(this)
          .find("input, textarea")
          .keypress(function (e) {
            if (e.keyCode == 13) {
              e.preventDefault();
              $(this).trigger("change");
              $(this).find('[wr-type="submit"]').click();
            }
          });
      });

    $(".footer")
      .find(".form-input-wrap")
      .each(function (idx, el) {
        $(el).on("focus click", () => {
          if ($(el).find(".form-input-label").length > 0) {
            gsap.to($(el).find(".form-input-label"), {
              paddingTop: 0,
              marginTop: "-1.25em",
              opacity: 0.6,
              scale: 0.8,
              ease: "power2.inOut",
              duration: 0.35,
            });
          }
        });
      });
  }

  
} /*Fim initComonCode*/

/* Vimeo Lightbox Init */
  export function initVimeoLightboxAdvanced() {
  // Single lightbox container
   lightbox = document.querySelector('[data-vimeo-lightbox-init]');
  if (!lightbox) return;

  // Open & close buttons
  const openButtons  = document.querySelectorAll('[data-vimeo-lightbox-control="open"]');
  const closeButtons = document.querySelectorAll('[data-vimeo-lightbox-control="close"]');

  // Core elements inside lightbox
  let iframe            = lightbox.querySelector('iframe');               // ← now let
  const placeholder     = lightbox.querySelector('.vimeo-lightbox__placeholder');
  const calcEl          = lightbox.querySelector('.vimeo-lightbox__calc');
  const wrapEl          = lightbox.querySelector('.vimeo-lightbox__calc-wrap');
  const playerContainer = lightbox.querySelector('[data-vimeo-lightbox-player]');

  // State
  let player = null;
  let currentVideoID = null;
  let videoAspectRatio = null;
  let globalMuted = lightbox.getAttribute('data-vimeo-muted') === 'true';
  const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  const playedOnce = new Set();  // track first play on touch

  // Format time (seconds → "m:ss")
  function formatTime(s) {
    const m   = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }

  // Clamp wrap height
  function clampWrapSize(ar) {
    const w = calcEl.offsetWidth;
    const h = calcEl.offsetHeight;
    wrapEl.style.maxWidth = Math.min(w, h / ar) + 'px';
  }

  // Adjust sizing in "cover" mode
  function adjustCoverSizing() {
    if (!videoAspectRatio) return;
    const cH = playerContainer.offsetHeight;
    const cW = playerContainer.offsetWidth;
    const r  = cH / cW;
    const wEl = lightbox.querySelector('.vimeo-lightbox__iframe');
    if (r > videoAspectRatio) {
      wEl.style.width  = (r / videoAspectRatio * 100) + '%';
      wEl.style.height = '100%';
    } else {
      wEl.style.height = (videoAspectRatio / r * 100) + '%';
      wEl.style.width  = '100%';
    }
  }

  // Close & pause lightbox
  function closeLightbox() {
    lightbox.setAttribute('data-vimeo-activated', 'false');
    if (player) {
      player.pause();
      lightbox.setAttribute('data-vimeo-playing', 'false');
    }
  }

  // Wire Escape key & close buttons
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
  closeButtons.forEach(btn => btn.addEventListener('click', closeLightbox));

  // Setup Vimeo Player event handlers
  function setupPlayerEvents() {
    // Hide placeholder when playback starts
    player.on('play', () => {
      lightbox.setAttribute('data-vimeo-loaded', 'true');
      lightbox.setAttribute('data-vimeo-playing', 'true');
    });
    // Close on video end
    player.on('ended', closeLightbox);

    // Paused
    player.on('pause', () => {
      lightbox.setAttribute('data-vimeo-playing', 'false');
    });

    // Duration UI
    const durEl = lightbox.querySelector('[data-vimeo-duration]');
    player.getDuration().then(d => {
      if (durEl) durEl.textContent = formatTime(d);
      lightbox.querySelectorAll('[data-vimeo-control="timeline"],progress')
        .forEach(el => el.max = d);
    });

    // Timeline & progress updates
    const tl = lightbox.querySelector('[data-vimeo-control="timeline"]');
    const pr = lightbox.querySelector('progress');
    player.on('timeupdate', data => {
      if (tl) tl.value = data.seconds;
      if (pr) pr.value = data.seconds;
      if (durEl) durEl.textContent = formatTime(Math.trunc(data.seconds));
    });
    if (tl) {
      ['input','change'].forEach(evt =>
        tl.addEventListener(evt, e => {
          const v = e.target.value;
          player.setCurrentTime(v);
          if (pr) pr.value = v;
        })
      );
    }

    // Hover → hide controls after a timeout
    let hoverTimer;
    playerContainer.addEventListener('mousemove', () => {
      lightbox.setAttribute('data-vimeo-hover', 'true');
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        lightbox.setAttribute('data-vimeo-hover', 'false');
      }, 0);
    });

    // Fullscreen toggle on player container
    const fsBtn = lightbox.querySelector('[data-vimeo-control="fullscreen"]');
    if (fsBtn) {
      const isFS = () => document.fullscreenElement || document.webkitFullscreenElement;
      if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled)) {
        fsBtn.style.display = 'none';
      }
      fsBtn.addEventListener('click', () => {
        if (isFS()) {
          lightbox.setAttribute('data-vimeo-fullscreen', 'false');
          (document.exitFullscreen || document.webkitExitFullscreen).call(document);
        } else {
          lightbox.setAttribute('data-vimeo-fullscreen', 'true');
          (playerContainer.requestFullscreen || playerContainer.webkitRequestFullscreen)
            .call(playerContainer);
        }
      });
      ['fullscreenchange','webkitfullscreenchange'].forEach(evt =>
        document.addEventListener(evt, () =>
          lightbox.setAttribute('data-vimeo-fullscreen', isFS() ? 'true' : 'false')
      ));
    }
  }

  // Run sizing logic
  async function runSizing() {
    const mode = lightbox.getAttribute('data-vimeo-update-size');
    const w    = await player.getVideoWidth();
    const h    = await player.getVideoHeight();
    const ar   = h / w;
    const bef  = lightbox.querySelector('.vimeo-lightbox__before');

    if (mode === 'true') {
      if (bef) bef.style.paddingTop = (ar * 100) + '%';
      clampWrapSize(ar);
    } else if (mode === 'cover') {
      videoAspectRatio = ar;
      if (bef) bef.style.paddingTop = '0%';
      adjustCoverSizing();
    } else {
      clampWrapSize(ar);
    }
  }

  // Re-run sizing on viewport resize
  window.addEventListener('resize', () => {
    if (player) runSizing();
  });

  // Open or switch video
  async function openLightbox(id, placeholderBtn) {
    lenis.stop();
    
    // Enter loading state immediately
    lightbox.setAttribute('data-vimeo-activated', 'loading');
    lightbox.setAttribute('data-vimeo-loaded',    'false');

    // — FULL RESET if new video ID —
    if (player && id !== currentVideoID) {
      await player.pause();
      await player.unload();

      // Replace old iframe with a fresh one
      const oldIframe = iframe;
      const newIframe = document.createElement('iframe');
      newIframe.className = oldIframe.className;
      newIframe.setAttribute('allow', oldIframe.getAttribute('allow'));
      newIframe.setAttribute('frameborder', '0');
      newIframe.setAttribute('allowfullscreen', 'true');
      newIframe.setAttribute('allow', 'autoplay; encrypted-media');
      oldIframe.parentNode.replaceChild(newIframe, oldIframe);

      // Reset state
      iframe         = newIframe;
      player         = null;
      currentVideoID = null;
      lightbox.setAttribute('data-vimeo-playing', 'false');
    }

    // Update placeholder image attributes
    if (placeholderBtn) {
      ['src','srcset','sizes','alt','width'].forEach(attr => {
        const val = placeholderBtn.getAttribute(attr);
        if (val != null) placeholder.setAttribute(attr, val);
      });
    }

    // Build a brand-new player if needed
    if (!player) {
      iframe.src = `https://player.vimeo.com/video/${id}?api=1&background=1&autoplay=0&loop=0&muted=0`;
      
      player = new Vimeo.Player(iframe);
      setupPlayerEvents();
      currentVideoID = id;
      await runSizing();
    }

    // Now sizing is ready — show lightbox
    lightbox.setAttribute('data-vimeo-activated', 'true');

    // Autoplay logic
    if (!isTouch) {
      player.setVolume(globalMuted ? 0 : 1).then(() => {
        lightbox.setAttribute('data-vimeo-playing', 'true');
        setTimeout(() => player.play(), 50);
      });
    } else if (playedOnce.has(currentVideoID)) {
      player.setVolume(globalMuted ? 0 : 1).then(() => {
        lightbox.setAttribute('data-vimeo-playing', 'true');
        player.play();
      });
    }
  }

  // Internal controls
  lightbox.querySelector('[data-vimeo-control="play"]').addEventListener('click', () => {
    if (isTouch) {
      if (!playedOnce.has(currentVideoID)) {
        player.setVolume(0).then(() => {
          lightbox.setAttribute('data-vimeo-playing', 'true');
          player.play();
          if (!globalMuted) {
            setTimeout(() => {
              player.setVolume(1);
              lightbox.setAttribute('data-vimeo-muted', 'false');
            }, 100);
          }
          playedOnce.add(currentVideoID);
        });
      } else {
        player.setVolume(globalMuted ? 0 : 1).then(() => {
          lightbox.setAttribute('data-vimeo-playing', 'true');
          player.play();
        });
      }
    } else {
      player.setVolume(globalMuted ? 0 : 1).then(() => {
        lightbox.setAttribute('data-vimeo-playing', 'true');
        setTimeout(() => player.play(), 50);
      });
    }
  });

  lightbox.querySelector('[data-vimeo-control="pause"]').addEventListener('click', () => {
    player.pause();
  });

  lightbox.querySelector('[data-vimeo-control="mute"]').addEventListener('click', () => {
    globalMuted = !globalMuted;
    player.setVolume(globalMuted ? 0 : 1).then(() =>
      lightbox.setAttribute('data-vimeo-muted', globalMuted ? 'true' : 'false')
    );
  });

  // Wire up open buttons
  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const vid = btn.getAttribute('data-vimeo-lightbox-id');
      const img = btn.querySelector('[data-vimeo-lightbox-placeholder]');
      openLightbox(vid, img);
           
    });
  });
}

export function navProtOn() {
  if (navDark === false) {
    gsap.to($(".nav-holder"), {
      backgroundColor: colors.white,
      boxShadow: "0 2px 120px rgba(0, 0, 0, .2)",
      duration: 0.5,
      ease: "power2.inOut",
    });
  } else {
    gsap.to($(".nav-holder"), {
      backgroundColor: colors.white,
      boxShadow: "0 2px 120px rgba(0, 0, 0, .0)",
      duration: 0.5,
      ease: "power2.inOut",
    });
  }
  gsap.to($(".nav-menu-bottom"), {
    backgroundColor: colors.white,
    duration: 0.5,
    ease: "power2.inOut",
  });

  gsap.to($(".nav-takeoff-svg"), {
    color: colors.darkblue,
    duration: 0.5,
    ease: "power2.inOut",
  });

  gsap.to($(".nav-lang, .nav-search, .nav-cta"), {
    borderColor: "rgba(23, 23, 23, 0.2)",
    duration: 0.5,
    ease: "power2.inOut",
  });

  gsap.to($(".nav-wrap"), {
    color: colors.black,
    duration: 0.5,
    ease: "power2.inOut",
  });
}

export function createAnchor(targetDiv, targetBtn, prevBtn = "") {
  ScrollTrigger.create({
    trigger: $(targetDiv),
    start: "top center",
    end: "top center",
    onEnter: () => {
      let otherBtn = $(".ancoras-wrap .ancora-btn-wrap")
        .not(targetBtn)
        .add(".ancoras-fixed-wrap .ancora-btn-wrap")
        .not(targetBtn);
      gsap.to(
        $(".ancoras-wrap")
          .find(targetBtn)
          .add($(".ancoras-fixed-wrap").find(targetBtn))
          .find(".ancora-sel"),
        {
          opacity: 1,
          duration: 0.35,
          ease: "power2.inOut",
        }
      );
      gsap.to(otherBtn.find(".ancora-sel"), {
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    },
    onLeaveBack: () => {
      gsap.to(
        $(".ancoras-wrap")
          .find(targetBtn)
          .add($(".ancoras-fixed-wrap").find(targetBtn))
          .find(".ancora-sel"),
        {
          opacity: 0,
          duration: 0.35,
          ease: "power2.inOut",
        }
      );
      if (prevBtn != "") {
        gsap.to(
          $(".ancoras-wrap")
            .find(prevBtn)
            .add($(".ancoras-fixed-wrap").find(prevBtn))
            .find(".ancora-sel"),
          {
            opacity: 1,
            duration: 0.35,
            ease: "power2.inOut",
          }
        );
      }
    },
  });
}

// -------------------------------- FUNCS
 $.fn.extend({
  hoverSet: function (
    hover_in_function = () => {},
    hover_out_function = () => {}
  ) {
    if (
      (navigator.maxTouchPoints ||
        "ontouchstart" in document.documentElement) == false
    ) {
      // DESKTOP ONLY
      $(this).each(function (idx, el) {
        $(el).on("mouseenter", () => {
          hover_in_function(el);
        });
        $(el).on("mouseleave", () => {
          hover_out_function(el);
        });
      });
    } else {
      $(this).each(function (idx, el) {
        $(el).on("click", () => {
          hover_in_function(el);
        });
        $(el).on("mouseleave", () => {
          hover_out_function(el);
        });
      });
    }
  },
  clickSet: function (click_function = () => {}) {
    $(this).each(function (idx, el) {
      $(el).on("click", () => {
        click_function(el);
      });
    });
  },
});



export function btnInit() {
    // -------- ARROW BUTTONS
    gsap.set($(".btn-hover-arr-wrap"), {
      width: 0,
      opacity: 0,
    });

    $(".nav-cta, .nav-search, .big-btn, .btn").hoverSet(
      (el) => {
        gsap.to($(el).find(".btn-hover-arr-wrap"), {
          opacity: 1,
          width: "auto",
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
      (el) => {
        gsap.to($(el).find(".btn-hover-arr-wrap"), {
          opacity: 0,
          width: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    );

    // -------- SPLIDE BUTTONS
    $(".path-fill").each(function (idx, el) {
      if ($(el).parents(".splide__arrow--next").length > 0) {
        gsap.set(el, {
          drawSVG: "100% 100%",
        });
      } else {
        gsap.set(el, {
          drawSVG: "0% 0%",
        });
      }
    });

    $(".nav-btn").hoverSet(
      (el) => {
        gsap.to($(el).find(".path-fill"), {
          drawSVG: "100% 0%",
          duration: 0.3,
          ease: "power2.inOut",
        });

        gsap.to($(el).find(".btn-arrow-svg").not(".white"), {
          color: colors.blue,
          duration: 0.3,
          ease: "power2.inOut",
        });
      },
      (el) => {
        if ($(el).hasClass("splide__arrow--next")) {
          gsap.to($(el).find(".path-fill"), {
            drawSVG: "100% 100%",
            duration: 0.3,
            ease: "power2.inOut",
          });
        } else {
          gsap.to($(el).find(".path-fill"), {
            drawSVG: "0% 0%",
            duration: 0.3,
            ease: "power2.inOut",
          });
        }

        gsap.to($(el).find(".btn-arrow-svg").not(".white"), {
          color: () => {
            return $(el).find(".btn-arrow-svg").parent().css("color");
          },
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    );
  }