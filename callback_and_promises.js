                    /*  -------> Callback Function <------- */

/* Uma função callback é uma função passada a outra função como argumento,
que é então invocado dentro da função externa para completar algum tipo de rotina ou ação. */

//Example 1
let print_out = (result) => console.log(`The result of operator is ${result}`)

let sum = (x, y, callback) => {
    let op = x + y;
    callback(op)
} 

let multupliy = (x, y, callback) => {
    let op = x * y;
    callback(op)
} 

sum(2, 4, print_out)
multupliy(8, 3, print_out)

//Example 2

let ifIsEven = (number) =>{
    if (number%2 == 0){
        sucessCallBack();
    }
    else {
        errorCallBack();
    }
}

let sucessCallBack = () => console.log(`Sucess! This number is even!`);

let errorCallBack = () => console.log(`Failed! This number is not even, is odd! `);

ifIsEven(93);

// Example 3

let isDevelopment = 'Marcelo';

let isDevelopmentCallBack = (callback, errorCallback) => {
    if(isDevelopment != `Marcelo`) {
        errorCallback({
            name: `This is wrong! `,
            message: `${isDevelopment} ? Really`
        })
    }
    else{
        callback({
            name: isDevelopment,
            message: `CDF's are the best!!!`
        })
    }
}

isDevelopmentCallBack((result) => {
    console.log(`${result.name} ? Yeeees, it is me! ${result.message}`)
}, (error) => {
    console.log(`${error.name} ${error.message}`)
})

//promises 

//Example 1 - Fazendo o exemplo 2 com promises

let p = new Promise((resolve, reject) => {
    let a = 2
    if (a%2 == 0){
        resolve('Sucess!');
    }
    else{
        reject('Failed!');
    }
})

p.then((message) => {
    console.log(`This is the then! ${message}`);
})
.catch((err) => {
    console.log(`This is the cath! ${err}`);
})

//Example 2 - Fazendo o example 3 em promise

let isDevelopmentName = 'Marcelo';

let isDevelopmentCallBack2 = (callback, errorCallback) => {
    
    return new Promise((resolve, reject) => {
        if(isDevelopmentName != `Marcelo`) {
            reject({
                name: `This is wrong! `,
                message: `${isDevelopmentName} ? Really`
            })
        }
        else{
            resolve({
                name: isDevelopmentName,
                message: `CDF's are the best!!!`
            })
        }
    })
}

isDevelopmentCallBack2()
.then((result) => {
    console.log(`${result.name} ? Yeeees, it is me! ${result.message}`)
})
.catch((error) => {
    console.log(`${error.name} ${error.message}`)
})