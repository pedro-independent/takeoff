/****************************************************************************************
---------------------------------------- POLITICAS ---------------------------------------
Not gonna lie, all of this is probably trash
*****************************************************************************************/

 
// pageClasses['Politica'] = class Politica extends Page {
//     async setup(){
//         // -------- REMOVE ELEMS THAT DONT FULLFILL CMS CONDITION --------
//         $('.w-condition-invisible').remove()


//         // -------- NAV INIT --------
//          navDark = true
//         navProt = true
//         setTimeout(()=>{
//             navProtOn()
//         }, 50)
//     }

//     async render(){
        
//     }

//     async intro(){
//     }

//     async leave(){
//         $('.global-fixed *').remove()
//         return
//     }
// }



import { SetVariables, initCommonCode, navProtOn } from './main.js';

let  navDark = true
let navProt = true

SetVariables(navProt, navDark, false) 

$('.w-condition-invisible').remove()

initCommonCode();

setTimeout(()=>{
    console.log("POLITICAS Timeout Ran")
    navProtOn()
    }, 50)

//??
$('.global-fixed *').remove()