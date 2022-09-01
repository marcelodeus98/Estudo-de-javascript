/// Faça um programa para calclar o valor gasto de combustivél em uma viagem ///

let priceGasoline = 6.74;
let priceEthanol = 4.32;

let typeFuel = 'gasoline';

let calc = (price) => {
    let averageConsumeCar = 13;
    let valueConsumeForKM = price/averageConsumeCar;
    let distance = 300;
    console.log(`On your trip, in terms of ful,  you will spend ${(distance*valueConsumeForKM).toFixed(2)}`);
}

if(typeFuel === 'gasoline'){
    calc(priceGasoline);
}
else{
    calc(priceEthanol);
}

