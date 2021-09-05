// Manipulating a array

/* Create array with constructor */
let myArray = new Array('a','b','c','d');
console.log(myArray);

/* 
 - Separe um texto que contém espaços em um novo array, no new array cada word será a postion of array.
 Depois disso, transform the array in a text and where eram espaces, colocar _ =>
*/

let phrase = "Se a vida é curta, é nela que vou curtir!";
let myArray2 = phrase.split(" "); // utiliza se the split for transform in array, and dentro do ("") definimos a parti do que iremos separar.
console.log(myArray);

let pharseInText = myArray.join("_"); // utiliza se the join for transform in string, and dentro do ("") definimos o elemento que irá separar the text. 
console.log(pharseInText);

//Verificar if in a text contém a word especifica
let pharse2 = "Eu vou estudar para ser um programador";
console.log(pharse2.includes('estudar'));

//Create a new field at the end of the array
let languages = ['nodejs', 'python', 'ruby', 'java'];
languages.push('c++')
console.log(languages)

//Create a new field at the beginning of the array
languages.unshift('elixir')
console.log(languages)

// Remove a iten in beginning of the array
languages.shift()
console.log(languages)

//Remove a iten in end of the array
languages.pop()
console.log(languages)

//Pega somente alguns elements of array
console.log(languages.slice(1,3))

//Remove one our more itens of array
languages.splice(1,2)
console.log(languages)