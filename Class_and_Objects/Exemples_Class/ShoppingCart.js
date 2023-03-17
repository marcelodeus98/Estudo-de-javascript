class ShopppingCart{
    constructor(){
        this.product = '',
        this.quantity = 0,
        this.price = 0.00
    }

    Purchase(){
        console.log("Product purchased!");
    }

    ToAdd(){
        console.log("Product added!")
    }

    ToRemove(){
        console.log("Product removed!");
    }
}