//CASINO GAME //
/*
Principle : 
--> at the beginning we have an amount of money (1000$)
--> we seat at a table
--> we choose a number between 0 to 36 for our bet
--> we need to decide an amount for our bet
--> we trigger a random number between 0 and 36
--> winning rules decision maker : 
    --> same number as the roulette : bet multipled by 36
    --> same color  :  bet multiplied by 18
    --> otherwise we lose the bet
--> we add or substract the money
--> we ask the player if he wants to leave the table.
*/

// the randomNumber is declared as a constant at the beginning 
// the function will retrieve a random number from 1 - 36 as argumuments
// where its declared. Math.random to generate a number, Math.floor to 
// round it down.
// const randomNumber = function(min, max) {
//     let nb = min + (max-min+1) * Math.random();
//     return Math.floor(nb);
// }

// function casino() {
//     // to be able to play the game, I need to declare that the game 
//     // is being played and the game is not being played, this will come 
//     // into effect when I want to leave the game or continue playing later
//     let isPlaying = true;
//     let money = 1000; // starting money
//     alert(`Welcome to the table, you have $${money}`);
//     do {
//         // here the user chooses their number
//         let msg = `Please choose a number between 1 and 36`;
//         let numberPick; // local variable declared to later store number pick
//         do {
//             numberPick = prompt(msg);
//             // this is how to exit the game at this stage, by returning 
//             // instead of picking a number
//             if(!numberPick){ // the !numberPick matches to the isNan(numberPick) on line 650
//                 // we removed the parseInt to make sure that a number wasnt created when we 
//                 // passed it to the isNan() function on line 50
//                 return;
//             }
//             // the game continues at this point
//             numberPick = parseInt(numberPick);
//             console.log(numberPick);
//             msg = `Your choice is not valid, please choose a number between 1 and 36`;
//         } while (numberPick < 1 || numberPick > 36 || isNaN(numberPick)); //

//         // Now the user is asked how much you would like to bet
//         msg = `How much would you like to bet?`;
//         let placeBet; // // local variable declared to later store bet
//         do {
//             placeBet = prompt(msg);
//             // this is how to exit the game at this stage, by returning
//             // instead of placebet a bet
//             console.log(placeBet);
//             if(!placeBet){
//                 return;
//             }
//             placeBet = parseInt(placeBet);
//             //console.log(placeBet);
//             msg = `Your bet is not valid, how much would you like to bet?`;
//         } while (placeBet <= 1 || placeBet > money || isNaN(placeBet)); 

//         // I have to store the variable from the random chosen number
//         let rNumber = randomNumber(1, 36);
//         alert(`The dealer spinnnnnnns the roulette wheel and the ball suddenly comes to a halt. You feel nervous.`);

//         // I have to decide if the choice of the user matches the choice  
//         // of the random number generated 
//         if (numberPick == rNumber) {
//             alert(`The ball landed on the same number you chose!.`)
//             // first add money to the money total. And remember, the amount will be 
//             // added to the total money, and then subtracted from the amount you bet  
//             money += placeBet * 36 - placeBet;
//             alert(`Wow, you won! You now have $${money}`);
//             // calculation for red or black square, which is either or really
//         } else if (numberPick % 2 == 0) {
//             alert(`The ball landed on the right color!`)
//             money = placeBet * 18 - placeBet;
//             alert(`Wow, you won! You now have $${money}`);
//         } else {
//             alert(`The ball ... didn't land on anything!`)
//             // subtracting the amount betted 
//             money -= placeBet;
//             alert(`You lost. You now have $${money}`)
            
//         }
//         console.log(isPlaying);
//         if (isPlaying = confirm('Do you want to play again?'))
//         // here the user either confirms to play again which is why we set the 
//         // isPlaying to true or if the has no money, the user moves to the next conditional
//         {
//             // if I have no money I still get asked the above do you want to play again
//             if (money == 0) {
//                 alert(`Unfortunately because you have $${money} left, you cannot continue to play. If you wish to continue, we have an an ATM near the food court.`)
//                 isPlaying = false;
//             }
            
//         }
//         console.log(isPlaying);
//     }while(isPlaying); // this while do loop matches with the above do part on line 33
// } 

// casino();

// 1
// function hello() {
//     alert("Hello World");
// }

// hello();

// 2
function askNumber() {
    let msg = `Please enter a number`;
    var guess;
    do {
        guess = parseInt(prompt(msg))} 
        
    while (isNaN(guess));
    return guess
}

askNumber();

// alert("the number is : " + askNumber());

// use version 3 to explain