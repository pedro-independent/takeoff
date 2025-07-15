
import { SetVariables, initCommonCode, navProtOn } from './main.js';

let  navDark = true
let navProt = true

SetVariables(navProt, navDark, false) 

$('.w-condition-invisible').remove()

initCommonCode();

setTimeout(()=>{
    // console.log("POLITICAS Timeout Ran")
    navProtOn()
    }, 50)

//??
$('.global-fixed *').remove()

