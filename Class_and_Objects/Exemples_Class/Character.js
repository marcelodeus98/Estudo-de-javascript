class Character{
    constructor(){
        this.nick = '',
        this.race = '',
        this.gender = '',
        this.typeClass = '',
        this.element = '' 
    }

    Speak(){
        console.log(`${this.nick}: Hi!`);
    }

    ToWalk(){
        console.log("Walking...");
    }

    ToFight(){
        console.log("Fighting!");
    }

    HealYourself(){
        console.log("Heal yourself!");
    }

    Rest(){
        console.log("Rest");
    }
} 