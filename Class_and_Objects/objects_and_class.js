/*
          ========> Object <========                                                          
    Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) 
    e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.
*/


const person = {
    name : 'Marcelo',
    age : 23,

    hi(){
        console.log(`Hi! My name is ${this.name} and have is ${this.age} years!`);
    }
}

person.hi();


/// A palavra reservada this refere se ao objeto a qual está sendo envocado ///

/*
            ========> Class <========
    Classe é uma estrutura que descreve estados e comportamentos de um determinado objeto.
    No Javascript utilizamos uma função para criar a classe. Para criar propriedades podemos 
    usar a palavra var ou this.

*/

class Person {
    constructor(){
        this.name_person = 'name padrão';
        this.age_person = 0;
    }

    hi(){
        console.log(`Hi!! My name is ${this.name_person}, and have ${this.age_person} years !!`);
    };
}

let personOne = new Person();
let personTwo = new Person();

personOne.hi();
personTwo.hi();


/*
        ========> Constructor <========
    O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
*/

/// Example 2 ///

class PersonTwo {

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    hi(){
        console.log(`Hi!!! My name is ${this.name} and have ${this.age} years !!!`);
    }
}

let personClassOne = new PersonTwo('João', 22);
let personClassTwo = new PersonTwo('Marcelo', 18);
 
personClassOne.hi();
personClassTwo.hi();