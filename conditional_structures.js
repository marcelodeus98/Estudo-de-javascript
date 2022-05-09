            // Conditional If

let player_one = 0;
let player_two = 2;
let billboard;

// Example one
console.log("Example 1:")

if ( player_one > 0){
    console.log("Player one is victorious!")
}
console.log("Player two is victorious!")

// Example two
console.log("Example 2:")

if ( player_one > 0){
    console.log("Player one is victorious!")
    billboard = 1;
}
else if(player_two > 0){
    console.log("Player two is victorious!")
    billboard = 1;
}
else {
    console.log("No one won!")
}

            // If ternário => verificar em uma única linha
// Ex => condição ? instrução1 : instrução2;

console.log("Example If Ternário")

player_one != -1 && player_two !== 1 ? console.log("The players is valid!") : console.log("The players is not valid!");

if ( player_one > 0 && player_two == 0){
    billboard = player_one > player_two
    console.log("Player one is victorious!");
    
}
else if(player_two > 0 && player_one == 0 ){
    billboard = player_two > player_one
    console.log("Player two is victorious!") 
}
else {
    console.log("No one won!")
}

            // Conditional switch
 //Example one:
console.log("Example one - conditional switch")

 switch(billboard){
     case billboard = player_one > player_two:
        console.log("The player one is victorious!")
        break;
    case billboard = player_two > player_one:
        console.log("The player two is victorius!")
        break;
    default:
    console.log("No one won!")

 }
