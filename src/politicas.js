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
