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

let students2 = ['Marcelo', 'Laryssa', 'João'];
let i = 0;

for (let student in students2){
	console.log(student+'='+students2[student])
}

for (let s = students.length; i <= s; i++ ){
	console.log(students[i])
}
 
