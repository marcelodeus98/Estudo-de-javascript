let validateName = ( name = '') => {
    if( name === '')
        throw 'Name is mandatory!'
}

try{
    validateName('Marcelo')
}
catch(expression){
    console.log(expression)
}

console.log('continuing test!')