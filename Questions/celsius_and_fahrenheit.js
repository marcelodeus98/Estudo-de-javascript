/* 
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

let transformCelsius = (value) => {
    let valueTransformed = Number(value.replace('F', ''));
    let celsius = (valueTransformed - 32) * 5/9;
    return celsius; 
}

let transformFahrenheit = (value) => {
    let valueTransformed = Number(value.replace('C', ''));
    let fahrenheit = valueTransformed * 9/5 + 32;
    return fahrenheit;
}

let transformDegree = (value) => {
    let valueInString = value.toUpperCase();
    if(valueInString.includes('C')){
        let valueTranformed = transformFahrenheit(valueInString);
        console.log(`The value in Fahrenheit is = ${valueTranformed}F`);
    }
    if(valueInString.includes('F')){
        let valueTranformed =  transformCelsius(valueInString);
        console.log(`The value in Celsius is = ${valueTranformed}C`);
    }
    if(!valueInString.includes('C') && !valueInString.includes('F')){
        throw new Error("Invalid Degree!");
    }    
}

try{
    transformDegree('120f');
    transformDegree('120C');
    transformDegree('120m')
}
catch(error){
    console.log(error.message);
}
