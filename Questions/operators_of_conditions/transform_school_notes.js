// Transform school notes

/*
Create a algorithm what transform at number system notes for strings system notes type A, B, C

- de 90 para cima - A
- entre 80 - 89 - B
- entre 70 - 79 - C
- entre 60 - 69 - D
- menor que 50 - F
*/

let noteNumber;

function getNote(noteNumber){
    let noteFinal;
    if(noteNumber <0 || noteNumber > 100){
        console.log('Value Invalid!');
    }
    else if (noteNumber >= 90){
        noteFinal = 'A';
    } 
    else if(noteNumber >= 80){
        noteFinal = 'B';
    } 
    else if(noteNumber >= 70){
        noteFinal = 'C';
    } 
    else if(noteNumber >= 60){
        noteFinal = 'D';
    } else if(noteNumber < 60){
        noteFinal = 'F';
    }

    return `${noteFinal} - note is : ${noteNumber}` ;
}

console.log(getNote(102));
console.log(getNote(98));
console.log(getNote(80));
console.log(getNote(76));
console.log(getNote(62));
console.log(getNote(-54));
console.log(getNote(1));
console.log(getNote(2));


