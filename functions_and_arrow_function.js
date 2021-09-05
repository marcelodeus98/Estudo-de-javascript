// Declaração de uma arrow function
let teste  = () =>{
    let text = 'Hi, hello world!';
    return text;
}

console.log(teste())

let majority = (year) => {
    if(year < 18){
        return `You have ${year} year, is underage`;
    }
        return `You have ${year} year, is of legal age`;
}

console.log(majority(2));

// Retornando valores sem o uso do return 
let test2 = (number1, number2) => number1 + number2;

console.log(test2(20,5));

// Retornando valores sem uso de parâmetros
let text = () => {
    return "Hi, i'm Marcelo! "
}
console.log(text())

// Retornando valores sem uso de parâmetros e do return
let text2 = () => {
    return "\nHi, i'm Marcelo!! "
}
console.log(text2())

// Retornando um JSON com o uso do return e sem o uso do return
// Com  o uso de return:
let getPerson = () => {
    return {name: 'Marcelo'};
}

console.log(getPerson());

// Sem o uso de return:
let getPerson2 = () => ({name: 'João'});

console.log(getPerson2())

//function construct 
/*
 - use expression new,
 - create a new object,
 - this keyword

*/
// exemplo 1 =>
function Person () {
    that = this;
    that.year = 22;
    that.color = 'blue';
};

let name = new Person()

console.log(name)

// exemplo 2 =>
function Person2 (name) {
    //that = this;
    this.name = name;
    this.walk = function(){
        return this.name + ",está andando!";
    }
}

let name2 = new Person2('Marcelo');

console.log(name2.walk());

let calculator = (operator, value1, value2) => {
    let result;
    switch (operator){
        case '+' :
            result = value1 + value2;
            console.log(result);
        break;
        
        case '-' :
            result = value1 - value2;
            console.log(result);
        break;

        case '*' :
            result = value1 * value2;
            console.log(result);
        break;

        case '/' :
            result = value1 / value2;
            console.log(result);
        break;
    }

}

console.log(calculator('-', 5, 5))