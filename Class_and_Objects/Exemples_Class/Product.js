class Product{
    constructor(){
        this.name = '',
        this.description = '',
        this.quantity = 1,
        this.price = 1.99,
        this.code = 000
    }

    Register(){
        console.log("The product has been registered!");
    }

    Entry(){
        console.log("Quantity successfully updated!");
    }
    
    Sold(){
        console.log("Product sold!");
    }

    Update(){
        console.log("Product successfully updated!")
    }
}