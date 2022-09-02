/*
     Crie uma classe para representar carros.
     Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
     Crie um método que dado a quantidade de KM e o preço do combustível nos dê o valor 
     gasto em reais para realizar este percurso.
*/

class Car{
    constructor(marca, color, averageKM){
        this.marca = marca;
        this.color = color;
        this.averageKM = averageKM;
    }

    calc(price, distance){
        console.log(`On your percursion, in terms of ful,  you will spend ${(price * this.averageKM * distance).toFixed(2)}`);
    }
}

let carLaFerrari = new Car('Ferrari', 'blue', 0.33);
let carMustang = new Car('Ford', 'blue dark', 0.22);

carLaFerrari.calc(5.79, 400);
carMustang.calc(5.79, 400);