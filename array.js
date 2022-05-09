// Declaration of a array =>
let names = ['Marcelo', 'Laryssa', 'João'];

console.log(names)

// student and student_two are objects 

let student = {
    name: 'João',
    age: 23,
}

let student_two = {
    name: 'Marcelo',
    age: 21,
}

// students it's an array

let students = [
    student,
    student_two
]

console.log(students)

<<<<<<< HEAD
// Percorrendo um array 

let friends= ['Marcelo', 'Laryssa', 'João'];
let i = 0;

for (let friend in friends){
	console.log(`${friend} = ${friends[friend]}`)
}

for (let s = friends.length; i <= s; i++ ){
	console.log(friends[i])
=======

// Percorrendo um array 

let students2 = ['Marcelo', 'Laryssa', 'João'];
let i = 0;

for (let student in students2){
	console.log(student+'='+students2[student])
}

for (let s = students2.length; i <= s; i++ ){
	console.log(students2[i])
>>>>>>> 688bb38b4328ee5261c913aa36404a9a4b34053b
}
 
let numbers = [10];
let j;

for (j = 0; j  < 10;  j++){
    numbers = j;
    console.log(numbers)
}

console.log(numbers)