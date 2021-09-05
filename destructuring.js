// Destructuring  ---> servi para quebrar( desestruturar ) um array ou objeto, facilitando assim a forma de manipula lós!

//Example one

let person = {
    name: 'João',
    age: '23',
    city: 'Fortaleza',
};

let person2 = {...person, number_phone:'85.89186110'};
console.log(person2);

// Example two - with function

let print_out_name = (dice) => {
    let { name, city} = dice;
    console.log(`Name is ${name} and live in ${city}`);
}

print_out_name(person);