


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










