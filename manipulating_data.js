// Manipulating Strings and Numbers

// De string for number =>
let string = '123';
console.log(Number(string));

// De number for string =>
let number = 321;
console.log(String(number));

// Contar quantos caracteres have a word and digitos have a number =>
let word = 'hello';
console.log(word.length)

let number2 = 1234;
console.log(String(number2).length);

/* 
 - Separe um texto que contém espaços em um novo array, no new array cada word será a postion of array.
 Depois disso, transform the array in a text and where eram espaces, colocar _ =>
*/

let phrase = "Se a vida é curta, é nela que vou curtir!";
let myArray = phrase.split(" "); // utiliza se the split for transform in array, and dentro do ("") definimos a parti do que iremos separar.
console.log(myArray);

let pharseInText = myArray.join("_"); // utiliza se the join for transform in string, and dentro do ("") definimos o elemento que irá separar the text. 
console.log(pharseInText);

//Verificar if in a text contém a word especifica
let pharse2 = "Eu vou estudar para ser um progranador";
console.log(pharse2.includes('estudar'));

