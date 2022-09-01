// Manipulating Strings and Numbers

// De string for number =>
console.log("Teste!")

let string = '123';
console.log(Number(string));

let numberOneInString = '1';
let numberOneInNumber = 1;
let convert;

if (numberOneInString === '1'){
    convert = Number(numberOneInString)
    numberOneInString = convert;
    if(numberOneInNumber === '1'){
        convert = 0;
        convert = Number(numberOneInNumber)
        numberOneInNumber = convert
    }
}

let total = numberOneInNumber + numberOneInString
console.log(total)



// De number for string =>
let number = 321;
console.log(String(number));

// Contar quantos caracteres have a word and digitos have a number =>
let word = 'hello';
console.log(word.length)

let number2 = 1234;
console.log(String(number2).length);


