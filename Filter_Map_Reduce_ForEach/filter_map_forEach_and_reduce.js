const pets = [
    {
        name : 'Alucard',
        age : 5,
        weight : 4.5,
        type : 'dog',
        genre: 'masculine'   
    },

    {
        name : 'Luna',
        age : 2,
        weight : 2,
        type : 'cat',
        genre : 'female'
    },

    {
        name : 'Python',
        age : 5,
        weight : 4.5,
        type : 'dog',
        genre: 'female'    
    },

    {
        name : 'Tom',
        age : 4,
        weight : 8,
        type : 'cat',
        genre: 'masculine'    
    },

    {
        name : 'Poseidon',
        age : 7,
        weight : 50,
        type : 'horse',
        genre: 'masculine'    
    },

    {
        name : 'Nami',
        age : 3,
        weight : 0.8,
        type : 'hamster',
        genre: 'female'    
    },    
];


/*                 ***** Filter *****
O método filter()cria um novo array com todos os elementos que não são testados pela função fornecida.
*/

const petsFemale = pets.filter((pet) => {return pet.genre === 'female'});

//console.log(petsFemale);

//console.log(pets.filter((pet) => {return pet.type === 'dog'}));


/*                 ***** Map *****
O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
*/

const petsName = pets.map((pet) => {return pet.name});

//console.log(petsName)

/*                 ***** ForEach *****
Não retorna um novo array com a mesma quantidade de elementos, e tão pouco outro valor, ele não retorno nada, a não ser que você passe para ele retornar.
*/

const petsName2 = pets.forEach((pet) => {return pet.name});

//console.log(petsName2); // Não irá retornar nenhum valor, a não ser undefined

const petsName3 = [];

pets.forEach((pet) => { petsName3.push(pet.name)});

//console.log(petsName3); // Retorna o array petsName3

/*                 ***** Reduce *****
O método reduce()executa uma função redutora (fornecida por você) para cada elemento do array, resultando em um único valor de retorno.
*/

const totalWeight = pets.reduce((total, pet) => {return total + pet.weight}, 0);

//console.log(totalWeight);  // Retorna um único valor, no caso sendo o valor da soma de todos os pesos dos pets


const totalWeightOfDogs = pets.reduce((total, pet) => {
    if(pet.type !== 'dog') return total

    return total + pet.weight

},0);

//console.log(totalWeightOfDogs); // Retorna a soma dos pesos dos pets do tipo cachorro


// Encadeamento

const genreMasculine = pets.filter((pet) => {return pet.genre === 'masculine'}).map((pet) => {return pet.name});

console.log(genreMasculine);