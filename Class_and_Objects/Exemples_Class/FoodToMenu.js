class FoodToMenu{
    constructor(){
        this.id = 00
        this.title = '',
        this.ingredients = '',
        this.quantity = 0,
        this.price = 0.00
    }

    Prepare(){
        console.log("Prepared food!");
    }

    Serve(){
        console.log("Serve food!");
    }

    ToAdd(){
        console.log("Add food");
    }

    ThrowAway(){
        console.log("Throw away food!");
    }
}