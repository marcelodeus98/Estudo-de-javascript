/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto considerando o 
    preço normal de etiqueta e a escolha de condição para o pagamento.
    Utilize os códigos da tabela a seguir para ler qual condição de pagamento e efetuar o cálculo adequado
    
    Table for conditions of payment:

    1 => The view - Debit ( 10% of discount),
    2 => The view - Pix our money ( 15% of discount ),
    3 => 2x - price normal - interest-free (sem juros - tradution interest-free)
    4 => + of 2x - price normal + 10% interes
    
    */

    let priceOfProduct = 192.58;
    let optionPayment = 4;


    const calc = (conditionPayment,installments) => {
        if(conditionPayment === 1) {
            const valueDiscount = priceOfProduct * (10/100);
            const valueFinal = priceOfProduct - valueDiscount;

            console.log(`Your payment amount is R$:${valueFinal.toFixed(2)}.`);
        }
        if(conditionPayment === 2) {
            const valueDiscount = priceOfProduct * (15/100);
            const valueFinal = priceOfProduct - valueDiscount;

            console.log(`Your payment amount is R$:${valueFinal.toFixed(2)}.`);
        }
        if(conditionPayment === 3) {
            const valueFinal = priceOfProduct/2 ;

            console.log(`Your payment amount is R$:${valueFinal.toFixed(2)} in ${installments} installments.`);
        }
        if(conditionPayment === 4) {
            const valueDiscount = priceOfProduct * (10/100);
            const valueFinal = (priceOfProduct + valueDiscount)/installments;

            console.log(`Your payment amount is R$:${valueFinal.toFixed(2)} in ${installments} installments.`);
        }
    }

    calc(3,2);
