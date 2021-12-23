import { useEffect, useState } from "react"
import { Container } from "./style"

export function Dashboard(){
    const [currency, setCurrency] = useState([])
    const [currencyInitials, setCurrencyInitials] = useState([])

    useEffect(() =>{
        fetch(process.env.REACT_APP_BASE_URL)
            .then(response => response.json()
            .then(data=>{
                setCurrency(data.rates)
                setCurrencyInitials(Object.keys(data.rates))}))
    },[])

    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const fromSelect = document.getElementById("fromInitial");
    const toSelect = document.getElementById("toInitial");
    
    const fromCurrencyDefault = currency["EUR"]
    const toCurrencyDefault =  currency["BRL"]
    
    function handleInputChangeSecondInput(){
        var option1 = fromSelect.value
        var option2 = toSelect.value
        
        var convertedValue1 = toCurrency.value/currency[option2]*currency[option1]
        fromCurrency.value= Number(convertedValue1).toFixed(2)
    }
    function handleInputChange(){
        console.log("test1")
        var option3 = fromSelect.value
        var option4 = toSelect.value

        var convertedValue2 = fromCurrency.value/currency[option3]*currency[option4]
        return toCurrency.value= Number(convertedValue2).toFixed(2)

    }
    
    return(
        <Container>
        <input type="number" id="fromCurrency" min="1" defaultValue={fromCurrencyDefault} onInput={()=>handleInputChange()}></input>
        <select type="" id="fromInitial" onInput={()=>handleInputChange()}>
            {currencyInitials.map(currencyInitial=> {
                if (currencyInitial !== "EUR"){
                    return <option  key={currencyInitial}>{currencyInitial}</option>
                }  
                return <option key={currencyInitial} selected="selected">{currencyInitial}</option>
            })} 
        </select>
        <input type="number" id="toCurrency" min="1" defaultValue={toCurrencyDefault} onInput={()=>handleInputChangeSecondInput()}></input>
        <select type="" id="toInitial" onInput={()=>handleInputChange()}>
            {currencyInitials.map(currencyInitial=> {
                if (currencyInitial !== "BRL"){
                    return <option key={currencyInitial}>{currencyInitial}</option>
                }
                return <option key={currencyInitial} selected="selected">{currencyInitial}</option>
            })} 
        </select>
        </Container>
    )
}