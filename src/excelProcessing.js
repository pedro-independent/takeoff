/****************************************************************************************
------------------------------------ FILE PROCESSING ------------------------------------
*****************************************************************************************/
import csv from 'jquery-csv'

export const globalVarSurfistaOrMotorista = '';

export class ResortData {
    constructor(obj){

        let startIdx = 0
        let endIdx = 0

        let type = 'A'

        obj.forEach((el, idx) => {
            let findStart = el.findIndex((el)=>{ return el === 'START'})
            if(findStart >= 0) startIdx = idx

            let findEnd = el.findIndex((el)=>{ return el === 'END'})
            if(findEnd >= 0) endIdx = idx

            let tipoA = el.findIndex((el)=>{ return el === 'TIPO A'})
            let tipoB = el.findIndex((el)=>{ return el === 'TIPO B'})
            let tipoC = el.findIndex((el)=>{ return el === 'TIPO C'})
            let tipoD = el.findIndex((el)=>{ return el === 'TIPO D'})

            if(tipoA >= 0) {
                type = 'A'
                if(tipoA > findStart) startIdx = idx
            }
            if(tipoB >= 0) {
                type = 'B'
                if(tipoB > findStart) startIdx = idx
            }
            if(tipoC >= 0) {
                type = 'C'
                if(tipoC > findStart) startIdx = idx
            }
            if(tipoD >= 0) {
                type = 'D'
                if(tipoD > findStart) startIdx = idx
            } 

        });

        obj = obj.slice(startIdx+1, endIdx)
        window.obj = obj

        // cleanup fully empty rows
        let toSplice = []
        obj.forEach((row, outerIdx, object) =>{
            let filter = row.filter(n=>n)
            if(filter.length === 0) toSplice.push(outerIdx)
        })
        toSplice.forEach((idx, arrIdx) => {
            obj.splice(idx - arrIdx, 1)
        })



        this.resortName = obj[0][0]
        this.optPeriods = obj[0].filter(n => n).splice(1)

        let perStart = obj[0].findIndex((el)=>{return el == this.optPeriods[0]})
        let perEnd = obj[0].findIndex((el)=>{return el == this.optPeriods[1]})
        this.perLength = perEnd - perStart
        // this.perLength = Math.abs(this.perLength);

        //tiago
        if(this.perLength <0) 
        {perEnd = 5;
          perEnd = obj[1].filter((n) => n).splice(1).length + 1;
          this.perLength = perEnd - perStart;
        }

        this.options = {}
        Array.from(new Set(obj[1].filter(n => n).splice(0, perStart))).forEach(el => {
            if(el == 'Noites'){
                this.options['Noites no alojamento'] = []    
            }
            else{
                this.options[el] = []
            }
        })

        this.optLen = Object.values(this.options).length

        this.options['Noites no alojamento'] = Array.from(new Set(obj[1].filter(n => n).splice(perStart, perEnd)))

        
        obj.splice(0, 1)

        if(obj[0][obj[0].length-1] == ''){
            obj.forEach((row, rowIdx) => {
                row.pop()
            })
        }

        this.headers = obj[0]

        obj.splice(0, 1)


        obj.forEach((el, outerIdx) =>{
            el.forEach((attr, idx) => {
                //console.log(outerIdx)
                if(attr === ''){
                    if(idx < this.optLen) {
                        obj[outerIdx][idx] = obj[outerIdx-1][idx]
                    }
                    else if(idx >= this.optLen){
                        obj[outerIdx][idx] = '0 €'
                    }
                } 
                
                // else if(attr === '' && outerIdx == 0){
                //     obj[outerIdx][idx] = '0'
                // }
            })
        })

        // cleanup fully priceless
        toSplice = []
        obj.forEach((row, outerIdx, object) =>{
            let filter = row.filter(n=> n == '0 €')
            if(filter.length === this.headers.length - this.optLen) toSplice.push(outerIdx)
        })
        toSplice.forEach((idx, arrIdx) => {
            obj.splice(idx - arrIdx, 1)
        })


        this.objDict = []


        let foundPromo = false

        obj.forEach((row, rowIdx) =>{
            this.objDict[rowIdx] = {}
            this.objDict[rowIdx]['Prices'] = []
            this.objDict[rowIdx]['Options'] = {}

            let promo = false
            let originalIdx = 0

            let period = 0

            //console.log('outer: ' + rowIdx)
            //tiago
            //console.log(row);
            row.forEach((col, colIdx) => {
                //console.log('inner: ' + colIdx)
                let key = this.headers[colIdx]

                if(colIdx < (this.optLen - 1)){
                    // console.log(1);
                    this.objDict[rowIdx]['Options'][key] = col
                    this.options[key].push(col)
                }
                else if(colIdx == (this.optLen-1)){
                    // console.log(2);
                    this.objDict[rowIdx]['Options'][key] = col
                    this.options[key].push(col)

                    if(this.objDict.find((el, idx)=>{
                        // console.log(2.1);
                        if(idx !== rowIdx){
                                if(JSON.stringify(this.objDict[rowIdx]['Options']) == JSON.stringify(el.Options)){
                                    originalIdx = idx
                                    return true
                                }
                                else{
                                    return false
                                }
                                
                        }
                    })){
                        // console.log(2.2);
                        promo = true
                        this.objDict[rowIdx] = ''
                    }
                }
                else{
                    if(promo == false){
                        period = Math.floor((colIdx - this.optLen)/ this.perLength)

                        if(period == this.objDict[rowIdx]['Prices'].length){
                            this.objDict[rowIdx]['Prices'][period] = [[],[],[]]
                        }

                        let price = col.replaceAll('€', ' ').trim().replace(',', "").replace('.', "").replace(' ', "")
                        price = price.toLocaleString().replaceAll(',', ' ')
                        //this.objDict[rowIdx][key] = {'nonPromo': col, 'Promo': '0 €'}
                        //  console.log( key + " "  + price);
                         
                         try{
                        this.objDict[rowIdx]['Prices'][period][0][(colIdx - this.optLen) - (period * this.perLength)] = key
                        this.objDict[rowIdx]['Prices'][period][1][(colIdx - this.optLen) - (period * this.perLength)] = price
                        }
                         catch (error) {  
                              this.objDict[rowIdx]['Prices'][period][0][(colIdx - this.optLen) - (period * (this.perLength*-1))] = key
                        this.objDict[rowIdx]['Prices'][period][1][(colIdx - this.optLen) - (period * (this.perLength*-1))] = price
                    }   
                        
    
                    }
                    else if(promo == true){
                        period = Math.floor((colIdx - this.optLen)/ this.perLength)
                        let price = col.replaceAll('€', ' ').trim().replace(',', "").replace('.', "").replace(' ', "")
                        price = price.toLocaleString().replaceAll(',', ' ')
                        this.objDict[originalIdx]['Prices'][period][2][(colIdx - this.optLen) - (period * this.perLength)] = price
                        if(parseInt(col) > 1){
                            foundPromo = true
                        }
                        //this.objDict[originalIdx][key]['Promo'] = col
                    }
                }

                
            })
        })

        if(foundPromo){
               if (type == "C" )
        {
            $(".consulta-quartos-tag").remove();
            $(".promo-price").first().parent().remove();
        }
        else
        {
            $('.consulta-price').not('.promo').parent().remove()
        }
    }
        else{
            //tiago
             if (type == "C" )
        {
          // $(".consulta-promo-tag").remove();
            $(".consulta-quartos-tag").remove();
            // $(".consulta-price.promo").first().parent().remove();
            // $(".consulta-price.promo").eq(1).parent().remove();
            $(".promo-price").parent().remove();
        }
        else
        {
            $('.consulta-promo-tag').remove()
            $('.consulta-price.promo').parent().remove()
        }
            
        }

        this.objDict = this.objDict.filter((n) => n)


        let perFilter
        if($(window).outerWidth() >= 992){ // DESKTOP
            perFilter = $('.loader .flt-dd-wrap.desktop').clone()
        }
        else{
            perFilter = $('.loader .flt-dd-wrap.mobile').clone()
        }

        let perRes = $('.loader .consulta-detalhe-line').clone()
        let perInput = $('.loader .form-input-hidden').clone()

        let perController = $('.loader .flt-dd-hidden').clone()

        perFilter.attr('data-req', '')
        perFilter.find('.flt-input-label').children().text('Periodo')

        perFilter.attr('data-filter-sync', 'Periodo')
        perController.attr('data-filter-sync', 'Periodo')


        perRes.find('.consulta-detalhe-title').children().text('Periodo')
        perRes.attr('data-filter-sync', 'Periodo')

        perInput.attr('data-filter-sync', 'Periodo')
        perInput.attr('id', 'Periodo')
        perInput.attr('name', 'Periodo')


        // filter fully empty periods

        // console.log('optLen: ' + this.optLen)
        // console.log('perLength: ' + this.perLength)

        toSplice = []
        this.optPeriods.forEach((period, idx)=>{
            let startRow = 0
            let endRow = obj.length
            let startColumn = this.optLen + idx * this.perLength
            let endColumn = this.optLen + (idx+1) * this.perLength
            
            let section = obj.slice(startRow, endRow).map(i => i.slice(startColumn, endColumn))
            
            // let len = 0
            // section.forEach((row)=>{
            //     len = row.filter(n=> n == '0 €').length
            // })
            // if(len == this.perLength){
            //     toSplice.push(idx)
            // }
        })
        // toSplice.forEach((idx, arrIdx) => {
        //     this.optPeriods.splice(idx - arrIdx, 1)
        // })


        this.optPeriods.forEach((period)=>{
            let newItem = $('.loader .flt-cont-item.radio-item').clone()
            newItem.find('input').attr('name', 'Periodo'.toLowerCase())
            
            //newItem.find('input.flt-check-visual').attr('name', 'periodo-visual')

            //newItem.find('.flt-check').attr('value', item.toLowerCase())
            newItem.find('.flt-check').attr('value', `[data-periodo="${period}"]`)
            newItem.find('.flt-filter-txt').children().text(period)

            perController.find('.flt-item').append(newItem)

            let visItem = newItem.clone()
            visItem.find('input').attr('name', visItem.find('.flt-check').attr('name') + '-visual')
            perFilter.find('.flt-cont-list').append(visItem)
        })
        
        if($(window).outerWidth() >= 992){ // DESKTOP
            $('.consulta-hero .flt-wrap').append(perFilter)
            $('.consulta-mod-filter-wrap .flt-wrap').append(perFilter.clone())
        }
        else{
            $('.consulta-wrap .flt-pop-list').append(perFilter)
        }

        $('.consulta-hero .flt-wrap').append(perController)

        $('.consulta-detalhe').append(perRes)

        $('.pop-form-hidden-input').append(perInput)


        Object.keys(this.options).forEach((key)=>{
            this.options[key] = [...new Set(this.options[key])]

            const filterKey = key.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-')

            if(key != 'Categoria' && key != 'Modalidade'){
                let newFilter
                if($(window).outerWidth() >= 992){ // DESKTOP
                    newFilter = $('.loader .flt-dd-wrap.desktop').clone()
                }
                else{
                    newFilter = $('.loader .flt-dd-wrap.mobile').clone()
                }
                let newController = $('.loader .flt-dd-hidden').clone()

                newFilter.find('.flt-input-label').children().text(key)
                newFilter.attr('data-filter-sync', filterKey)

                newController.attr('data-filter-sync', filterKey)
                

                this.options[key].forEach((item)=>{
                    let newItem
                    if(key !== 'Regime' && key !== 'Noites no alojamento'){
                        newItem = $('.loader .flt-cont-item.check').clone()
                    }
                    else{
                        newFilter.attr('data-req', '')

                        newItem = $('.loader .flt-cont-item.radio-item').clone()
                        newItem.find('input').attr('name', filterKey)
                        //newItem.find('input.flt-check-visual').attr('name', key.toLowerCase() + '-visual')
                    }

                    //newItem.find('.flt-check').attr('value', item.toLowerCase())
                    newItem.find('.flt-check').attr('value', `[data-${filterKey}="${item}"]`)
                    newItem.find('.flt-filter-txt').children().text(item)


                    newController.find('.flt-item').append(newItem)
   
                    let visItem = newItem.clone()
                    visItem.find('input').attr('name', visItem.find('.flt-check').attr('name') + '-visual')
                    newFilter.find('.flt-cont-list').append(visItem)
                })

                if($(window).outerWidth() >= 992){ // DESKTOP
                    $('.consulta-hero .flt-wrap').append(newFilter)
                    $('.consulta-mod-filter-wrap .flt-wrap').append(newFilter.clone())
                }
                else{
                    $('.consulta-wrap .flt-pop-list').append(newFilter)
                }
                $('.consulta-hero .flt-wrap').append(newController)

                

                if(key != 'Ocupação'){
                    let newRes = $('.loader .consulta-detalhe-line').clone()
                    newRes.find('.consulta-detalhe-title').children().text(key)
                    newRes.attr('data-filter-sync', filterKey)
                    $('.consulta-detalhe').append(newRes)


                    let newInput = $('.loader .form-input-hidden').clone()
                    newInput.attr('data-filter-sync', filterKey)
                    newInput.attr('id', filterKey)
                    newInput.attr('name', key)
                    $('.pop-form-hidden-input').append(newInput)
                }
            }

        })

        let priceInput = $('.loader .form-input-hidden').clone()
        priceInput.attr('id', 'Valor Total')
        priceInput.attr('name', 'Valor Total')
        priceInput.attr('data-input-sync', 'Valor Total')
        $('.pop-form-hidden-input').append(priceInput)

        let capacityInput = $('.loader .form-input-hidden').clone()
        capacityInput.attr('id', 'Capacidade')
        capacityInput.attr('name', 'Capacidade')
        capacityInput.attr('data-input-sync', 'Capacidade')
        
        let lowestPrice = 999999999999990;
    document.querySelector('.dest-ofertas-pricing.notused')?.classList.remove('notused');
        $('.consulta-form-wrap').append(capacityInput)
   
        this.objDict.forEach((entry)=>{
        
            
            entry['Prices'].forEach((period, perIdx) => {
                period[0].forEach((noites, noitesIdx) => {
                    let newCard = $('.loader .consulta-res-card').clone()

                    if(type == 'A' || type == 'B'){
                        newCard.attr('data-order', this.options['Ocupação'].findIndex((item)=>{
                            return item === entry['Options']['Ocupação']
                        }))
                    }
                    else if(type == 'C'){
                        // newCard.attr('data-order', entry['Options']['Ocupação']) 
                        //tiago
                            newCard.attr('data-order', this.options['Ocupação'].findIndex((item)=>{
                            return item === entry['Options']['Ocupação']
                        }))
                    }
                    else{
                        newCard.attr('data-order', 0)
                    }

                    let cardTitle = newCard.find('.consulta-res-title').children()
                    let cardSubtitle = newCard.find('.consulta-res-subtitle').children()

                    let cardSurfista = newCard.find('.consulta-surfista').children()

                    let cardPreco = newCard.find('.price')
                    let cardPromoPreco = newCard.find('.promo-price')

                    
                    if(parseInt(entry['Prices'][perIdx][1]) != 0){ // only process card and add it if it doesn't have a 0 value
                        //add noites filter to card, this doesnt work if they decide to change it again
                        newCard.attr('data-noites-no-alojamento', noites)
    
                        Object.entries(entry['Options']).forEach((option)=>{
                            newCard.attr(`data-${option[0].replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-')}`, option[1])
                        })
    
                        newCard.attr('data-periodo', this.optPeriods[perIdx])

                        if(parseInt(entry['Prices'][perIdx][2]) != 0 && !Number.isNaN(parseInt(entry['Prices'][perIdx][2]))){
                            newCard.find('.consulta-picker-block input').attr('data-price', period[2][noitesIdx]) 
                            newCard.find('input.consulta-checkbox').attr('data-price', period[2][noitesIdx])
                        }
                        else{
                            newCard.find('.consulta-picker-block input').attr('data-price', period[1][noitesIdx])
                            newCard.find('input.consulta-checkbox').attr('data-price', period[1][noitesIdx])
                        }
                        if(type == 'A' || type == 'B'){
                            switch ((entry["Options"]["Ocupação"] || "").toLowerCase()){
                                case 'individual':
                                    newCard.find('.consulta-picker-block input').attr('data-mult', 1) 
                                    newCard.find('input.consulta-checkbox').attr('data-mult', 1)
                                    break;
                                case 'duplo':
                                    newCard.find('.consulta-picker-block input').attr('data-mult', 2) 
                                    newCard.find('input.consulta-checkbox').attr('data-mult', 2)
                                    break; 
                                case 'triplo':  
                                    newCard.find('.consulta-picker-block input').attr('data-mult', 3) 
                                    newCard.find('input.consulta-checkbox').attr('data-mult', 3)
                                    break;
                                case 'quadruplo':
                                    newCard.find('.consulta-picker-block input').attr('data-mult', 4) 
                                    newCard.find('input.consulta-checkbox').attr('data-mult', 4)
                                    break;
                                case 'quádruplo':
                                    newCard.find('.consulta-picker-block input').attr('data-mult', 4) 
                                    newCard.find('input.consulta-checkbox').attr('data-mult', 4)
                                    break;
                                case 'quintuplo': 
                                    newCard.find('.consulta-picker-block input').attr('data-mult', 4) 
                                    newCard.find('input.consulta-checkbox').attr('data-mult', 4)
                                    break;
                                case 'quíntuplo': 
                                    newCard.find('.consulta-picker-block input').attr('data-mult', 4) 
                                    newCard.find('input.consulta-checkbox').attr('data-mult', 4)
                                    break;
                                default: 
                                    newCard.find('.consulta-picker-block input').attr('data-mult', 1) 
                                    newCard.find('input.consulta-checkbox').attr('data-mult', 1)
                                    break;
                            } 
                        }   
                         else if(type == 'C')
                         {
                            newCard.find('.consulta-picker-block input').attr('data-mult', parseInt(entry["Options"]["Ocupação"], 10)) 
                            newCard.find('input.consulta-checkbox').attr('data-mult',  parseInt(entry["Options"]["Ocupação"], 10))
                        }
                        else{
                            let ocupacao = (entry["Options"]["Ocupação"] || "").toLowerCase();
                            let mult = 1;

                            if (ocupacao.includes("individual")) {
                            mult = 1;
                            } else if (ocupacao.includes("dupla")) {
                            mult = 2;
                            } else if (ocupacao.includes("tripla")) {
                            mult = 3;
                            } else if (ocupacao.includes("quadrupla") || ocupacao.includes("quádrupla")) {
                            mult = 4;
                            } else if (ocupacao.includes("quintupla") || ocupacao.includes("quíntupla")) {
                            mult = 5;
                            }

                            newCard.find(".consulta-picker-block input").attr("data-mult", mult);
                            newCard.find("input.consulta-checkbox").attr("data-mult", mult);
                        
                            // newCard.find('.consulta-picker-block input').attr('data-mult', 1) 
                            // newCard.find('input.consulta-checkbox').attr('data-mult', 1)
                        }
    
                        cardPreco.text(parseFloat(period[1][noitesIdx]).toLocaleString().replaceAll(',', ' '))
                        
                        //tiago
                        if(period[2][noitesIdx] !=0 && period[2][noitesIdx] != undefined)
                        {
                        
                        cardPromoPreco.text(parseFloat(period[2][noitesIdx]).toLocaleString().replaceAll(",", " "));


                        if(lowestPrice  > parseFloat(period[2][noitesIdx]))
                        {
                        //     console.log("with discount");
                        // console.log(lowestPrice);

                            lowestPrice = parseFloat(period[2][noitesIdx]);
                           // console.log(lowestPrice);

                            $("#precoSemDescontoCortado").text(cardPreco.text()+ " €");
                            $("#precoDesconto").text(cardPromoPreco.text()+ " €");

                            $("#precoSemDesconto").text(cardPreco.text()+ " €").addClass("hide");
                            $("#precoSemDescontoCortado").text(cardPreco.text()+ " €").removeClass("hide");
                            $("#precoDesconto").text(cardPromoPreco.text()+ " €").removeClass("hide");
                        }                           

                        }             
                        else //caso não tenha desconto
                        {           

                        cardPromoPreco.text("0");
                        cardPreco.next(".consulta-price-slash").remove();
                        cardPreco.parent().parent().removeClass("slashed");

                        let euroDiv = cardPreco.next(".consulta-price-euro.slashed");

                        // Remove the 'slashed' class from the euroDiv
                        euroDiv.removeClass("slashed");

                        // Inside euroDiv, find the child with the class 'fgr-10-400-10' and update its class
                        euroDiv.find(".fgr-10-400-10").removeClass("fgr-10-400-10").addClass("fgr-16-400-18 mob-13");

                        // cardPreco.next(".consulta-price-euro.slashed").removeClass("slashed");
                        
                        //  cardPreco.next(".fgr-10-400-10").removeClass("fgr-10-400-10").addClass("fgr-16-400-18 mob-13");

                        if(lowestPrice > parseFloat(period[1][noitesIdx]))
                            {
                            // console.log("witout____ discount");
                            // console.log(lowestPrice);

                            lowestPrice = parseFloat(period[1][noitesIdx]);

                            // console.log(lowestPrice);
                            
                            $("#precoSemDescontoCortado").text(cardPreco.text()+ " €");
                            $("#precoDesconto").text(cardPromoPreco.text()+ " €");

                            $("#precoSemDesconto").text(cardPreco.text()+ " €").removeClass("hide");
                            $("#precoSemDescontoCortado").text(cardPreco.text()+ " €").addClass("hide");
                            $("#precoDesconto").text(cardPromoPreco.text()+ " €").addClass("hide");
                            } 
                        }


                        switch (type) {
                            case 'A': // RESORT/GUEST c/ Surfista
                                $('.consulta-select-tag').remove()
    
                                cardTitle.text('Quarto ' + entry['Options']['Ocupação'])
                                cardSubtitle.text(entry['Options']['Categoria'])

                                if(  entry['Options']['Modalidade'].toLowerCase().includes('motorista'))
                                {
                                    globalVarSurfistaOrMotorista = 'motorista';
                                   const parent = document.querySelector('.consulta-surfista-tag');
                                    if (parent) {
                                    const target = parent.querySelector('.fgr-13-400-16.no-space');
                                    if (target) {
                                        target.textContent = 'Com Motorista?';
                                    }
                                        }
                                }
                                else if(entry['Options']['Modalidade'].toLowerCase().includes('surfista'))
                                {
                                    globalVarSurfistaOrMotorista = 'surfista';
                                }
    
                                if (  entry['Options']['Modalidade'].toLowerCase() === 'surfista' ||  entry['Options']['Modalidade'].toLowerCase() === 'com motorista')
                                {
                                    cardSurfista.text('Sim')
                                }
                                else{
                                    cardSurfista.text('Não')
                                }
                                break;
    
    
                            case 'B': // RESORT/GUEST sem Surfista
                                cardTitle.text('Quarto ' + entry['Options']['Ocupação'])
                                cardSubtitle.text(entry['Options']['Categoria'])
                                break;
    
    
                            case 'C': // SURF BOAT - Full Charter
                                cardTitle.text(entry['Options']['Ocupação'] + ' pessoas')
                                cardSubtitle.text(this.optPeriods[perIdx])
                                break;
    
    
                            case 'D': // SURF BOAT - Open Boat
                                cardTitle.text(entry['Options']['Ocupação'])
                                cardSubtitle.text(this.optPeriods[perIdx])
                                //cardSubtitle.text(entry['Options']['Categoria'])
                                break;
    
    
                            default:
                                break;
                        }
    
                        $('.consulta-res-card-wrap').append(newCard)
                    }
                })
            })

        })

        $('.loader .consulta-res-card').remove()

        window.objData = this

    }
}


export function sheetInit(pageURL, callback){
    //console.log(csv)

    // let obj

    $.ajax({
        type: "GET",
        url: pageURL,
        dataType: "text",
        success: function(data) {
            callback(data)
        }
    });
     
}