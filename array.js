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

// Percorrendo um array 

let friends= ['Marcelo', 'Laryssa', 'João'];
let i = 0;

for (let friend in friends){
	console.log(`${friend} = ${friends[friend]}`)
}

for (let s = friends.length; i <= s; i++ ){
	console.log(friends[i])
}