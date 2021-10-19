var userEntry = prompt("Enter something :");

// if condition
if (userEntry) {
    console.log("your age is: " + userEntry);
}
// console.log("your age is: " , userEntry)
// we can also add in a , instead of the plus for concatenation

// if else condition
// if (userEntry > 20) {
//     console.log("welcome in our websiye" + userEntry);
// } else {
//     console.log("soory too young, come back later");
// }

// if elseif else condition
// var floor = prompt("whcih floor do you want to go to?");
// if (floor == 1) {
//     console.log("Wlecome in my living room")
// } else if (floor == 2) {
//     console.log("Welcome in my bathroom")
// } else if (floor == 3) {
//     console.log("Its my bedroom!") 
// }  else {
//     console.log("I dont knw that floor")
// }

//  Switch <<< love
// var floor = prompt("whcih floor do you want to go to?");
// the strict will do a strict === thats why we need to set the case
// 1 to a string or use parseInt to create numbers rather than strings 

// switch (true) {
//     case (floor == 1) : 
//         console.log("Welcome in your living room"); 
//     break;
//     case (floor == 2) : 
//         console.log("Welcome in my bathroom"); 
//     break;
//     case (floor == 3) : 
//         console.log("Its my bedroom!"); 
//     break;
//     default : 
//         console.log("I don know that floor!"); 
//     break;
// }

// 2 === (floor >= 1 && floor <= 4)
// 2 === (2 >= 1 && 2 <= 4)
// 2 === (true && true)
// 2 === true
// false



// true === (floor >= 1 && floor <= 4)
// true === (2 >= 1 && 2 <= 4)
// true === (true && true)
// true === true
// true


// var playAgain = confirm("Do you want to play again ???");
// if(playAgain) {
//     console.log("start the game again");
// } else {
//     console.log("bye bye see you next time");
// }
// ```

// if(floor >= 1 && floor <= 4) {
//     console.log("Welcome in my living room");
// } else if (floor >= 4 && floor <=6) {
//     console.log("welcome in the bathroom... toilets are on the right");
// } else if (floor >= 7 && floor <=9) {
//     console.log("it's my bedroom !! what are you doing here ?!");
// } else {
//     console.log("I don't know that floor.. my house is big but not that much !");
// }
