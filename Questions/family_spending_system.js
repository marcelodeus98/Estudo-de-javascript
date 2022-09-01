/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.*/

let financial = {
    input_of_money: [
        950.00, 150.00 , 50.00
    ],
    output_of_money: [
        126.00 , 100.00, 225.00
    ],
}

function calculationBalance(){
    let total_money_of_input = financial.input_of_money.reduce((total_money_of_input, currentElement) => total_money_of_input + currentElement);    

    let total_money_of_output = financial.output_of_money.reduce((total_money_of_output, currentElement) => total_money_of_output + currentElement);

    let total_value = total_money_of_input - total_money_of_output;

    if(total_value >= 0){
        return `The balance is positive - R$:${total_value}!`
        
    }
    return `The balance is negative - R$:${total_value}!`
}

console.log(calculationBalance())