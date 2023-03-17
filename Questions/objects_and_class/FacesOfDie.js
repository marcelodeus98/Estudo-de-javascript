/// Desenvolva uma classe de dados
/// Que irá receber a quantidade de faces
/// Que ao rolar retorne uma face(número) 

class Die{
    static ToRoll(faces){
        let numbers = [];
        
        for(let face = 1; face <= faces; face++){
            numbers[face] = face;
        }

        console.log(numbers)

        let number = Math.floor(Math.random() * numbers.length);
        
        if(number == 0){
            number = Math.floor(Math.random() * numbers.length);
        }
        
        console.log(number);
    }
}

Die.ToRoll(8);