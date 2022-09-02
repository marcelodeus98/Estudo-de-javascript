// Crie um programa que seja capaz de percorrer uma lista de números e imprimir cada número par encontrado //

const numbers = [0,1,2,3,4,5,6,7,6,7,8,9,10,12,13,41,23,24];

for(let indice = 0; indice < numbers.length; indice++){
    let number = numbers[indice];

    if(number % 2 === 0){
        console.log(number)
    }
        
}