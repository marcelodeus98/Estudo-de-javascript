let calculater = ()=> {
    let value_one;
    let value_two;
    let validate;

    let sum = () => {
        let total = parseInt(value_one)+parseInt(value_two);
        alert(`The value of sum is ${total}`);
    };

    let subtration = () => {
        let total = parseInt(value_one)-parseInt(value_two);
        alert(`The value of subtration is ${total}`);
    };

    let multiplication = () => {
        let total = parseInt(value_one)*parseInt(value_two);
        alert(`The value of multiplication is ${total}`);
    };

    let division = () => {
        let total = parseInt(value_one)/parseInt(value_two);
        alert(`The value of division is ${total}`);
    };

    do{
        const operator = prompt("Choose an operation: \n 1 - Sun; \n 2 - Subtraction; \n 3 - Multiplication; \n 4 - Division");

        value_one = prompt("Enter the first value.");
        value_two = prompt("Enter the second value.");

        if(operator == "1"){
            sum();
        };
        if(operator == "2"){
            subtration();
        };
        if(operator == "3"){
            multiplication();
        };
        if(operator == "4"){
            division();
        };

        validate = prompt("Do yo want to continue, yes or no?")
        if (validate == "no"){
            alert("Goodbye!")
        }
    
    }while(validate == "yes")
}

calculater()