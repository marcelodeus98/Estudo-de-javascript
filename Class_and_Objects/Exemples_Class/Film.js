class Film{
    constructor(){
        this.title = '',
        this.gender = '',
        this.year = 2023,
        this.director = '',
        this.actors = [],
        this.sinapse = ''
    }

    Start(){
        console.log("Started film!");
    }

    Pause(){
        console.log("Film is paused! ||");
    }

    Advance(){
        console.log("Advancing >|");
    }

    Recede(){
        console.log("|< Receding");
    }

    Close(){
        console.log("Closed film!");
    }

}