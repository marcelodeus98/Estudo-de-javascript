// Destructuring  ---> servi para quebrar( desestruturar ) um array ou objeto, facilitando assim a forma de manipula lós!

//Example one

let person = {
    name: 'João',
    age: '23',
    city: 'Fortaleza',
};

<<<<<<< HEAD
let personTwo = {...person, number_phone:'85.89186110'};
console.log(personTwo);
=======
let person2 = {...person, number_phone:'85.89186110'};
console.log(person2);
>>>>>>> 688bb38b4328ee5261c913aa36404a9a4b34053b

// Example two - with function

let print_out_name = (dice) => {
    let { name, city} = dice;
<<<<<<< HEAD
    console.log(`${name} live in ${city}`);
}

print_out_name(person);

// Example three - with variables

let {name, age} = person;
console.log(name, age)
=======
    console.log(`Name is ${name} and live in ${city}`);
}

print_out_name(person);
>>>>>>> 688bb38b4328ee5261c913aa36404a9a4b34053b
