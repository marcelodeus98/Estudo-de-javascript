/* 
    Crie uma classe pessoa, onde será instanciado duas pessoas , contendo os atributos nome e idade.
    Compare a idade entre as pessoas e diga quem é mais velho
*/

class Person {

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

}

let personOne = new Person('João', 23);
let personTwo = new Person('Marcelo', 24);

let WhoIsOlder = (person1_age, person2_age, person1_name, person2_name) => {
    if(person1_age > person2_age){
        console.log(`${person1_name} is older than ${person2_name}!`);
    } 
    console.log(`${person2_name} is older than ${person1_name}!`);
}

WhoIsOlder(personOne.age, personTwo.age, personOne.name, personTwo.name);