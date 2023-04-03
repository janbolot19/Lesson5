
var som = document.querySelector('#som')
var usd = document.querySelector('#usd')
var eur = document.querySelector('#eur')

const convert = (elem, target1, target2) => {
    elem.addEventListener("input", () => {
        const reguest = new XMLHttpRequest()
        reguest.open("GET", "data.json")
        reguest.setRequestHeader("Content-type", "application/json")
        reguest.send()
        reguest.addEventListener("load", () => {
            const response = JSON.parse(reguest.response)
            if(elem === som) {
                target1.value = (elem.value / response.usd).toFixed(2)
                target2.value = (elem.value / response.eur).toFixed(2)
            
            }else if (elem === usd) {
                target1.value = (elem.value * response.usd).toFixed(2)
                target2.value = (elem.value * response.eur2).toFixed(2)
                
            }else if (elem === eur) {
                target1.value = (elem.value * response.usd).toFixed(2)
                target2.value = (elem.value / response.eur2).toFixed(2)
            }
            elem.value === "" && (target1.value = "")
            elem.value === "" && (target2.value = "")
        })
   })
}


convert(som, usd, eur);    
convert(usd, som, eur); 
convert(eur, som, usd);







