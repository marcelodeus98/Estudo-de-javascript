// Catching the name of client, without losing the rest.
let client = {
    name: 'Marcelo Deus',
    cpf: '222.000.202.22',
    birth: '29/09/1998',
    andress: {
        street: 'Benfica',
        district: 'São Teresa do Almirante',
        number: '22',
        city: 'Fortaleza',
        state: 'Ceará',
        country: 'Brazil',
    },
    email:'jmarcelodeus98@gmail.com',
    number_phone: '85-992330657' 
}

let {name, ...rest} = client;

console.log(`Name: ${name}`);
console.log(rest);

// Function what sum X values

let sun =  (...rest) => rest.reduce((acc, value) => acc + value);

console.log(sun(12, 4, 6, 2, 1));

// Concatenando array 
 
let values = [1, 2, 3];
let values_two = [4, 5, 6];

let array = [...values, ...values_two];

console.log(array);

// Add a element  in the beginning  and end of array

let array2 = [3, ...values_two];

console.log(array2);

array2 = [...values_two, 7];

console.log(array2)

// Function that takes an array of values, and multiplies the first number by all the others

let multiplies =  ([valueOne, ...rest]) => rest.map(n => n * valueOne);

console.log(multiplies(values_two));

//Add new attribute in client object : updateAtDate

let cli = {...client, updateAtDate : new Date()};

console.log(cli);

//Change the customer number to 85.89186110

let cli2 = {...client, number_phone: '85.89186110'};

console.log(cli2);
