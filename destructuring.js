// Destructuring  ---> servi para quebrar( desestruturar ) um array ou objeto, facilitando assim a forma de manipula lós!

//Example one

let person = {
    name: 'João',
    age: '23',
    city: 'Fortaleza',
};

let personTwo = {...person, number_phone:'85.89186110'};
console.log(personTwo);

// Example two - with function

let print_out_name = (dice) => {
    let { name, city} = dice;
    console.log(`${name} live in ${city}`);
}

print_out_name(person);

// Example three - with variables

let {name, age} = person;
console.log(name, age)