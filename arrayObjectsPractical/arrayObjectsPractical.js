// just use arrays

// 1. be able to choose a number
let numberPick;
let msg = `Enter a number between 1 and 999`
do {
    numberPick = prompt(msg);
    numberPick = parseInt(numberPick);
    console.log(numberPick);
    convertToLetters(numberPick);
    msg = `Your choice is not valid, please choose a number between 1 and 999`;
} while (numberPick > 999 || numberPick < 1 || isNaN(numberPick));

// I need to pass down the function from above
function convertToLetters(numberPick) {

// 3. 
// I need numberPick % 1000, numberPick % 100, numberPick % 10
// each one will have a remainder which starts with a number
// I can use  
var stringUnit = numberPick % 10; // 365 % 10 = 5 unitss
var stringTen = ((numberPick % 100) - stringUnit) / 10; // 365 % 100 = 65 tens - unit = 60/10=6
var stringHundred = (numberPick - (numberPick % 100)) / 100 // 365 % 1000 = 365 hundreds - tens = 305 - units = 300/100=3

var stringUnits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
var stringTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
// var stringHundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

unitOutput = stringUnits[stringUnit];
tensOutput = stringTens[stringTen];
hundredOutput = stringHundreds[stringHundred];

return unitOutput;

// 4. I need to change these numbers, into a string

}




// for (let i = 0; i < numbers.length; i++) {
//     let location = locations[i];
//     // for (let index in location) {
//     //     console.log(index);
//     //     console.log(location[index]);
//     // }
//     console.log(location.lat);
//     console.log(location.lon);
// } 




// var nicks = [], // start by creating an empty array
//     nick;
// while (true) {
//     nick = prompt('Enter a name : ');
//     if(nick) {
//         nicks.push(nick); 
//         // instead of the string from before, push the variable which stores the name
//         // into the newly created array
//     } else {
//         break; // end of the loop
//     }
// }
// // outside of the for loop create a conditional statement
// if (nicks.length == 0) {
//     // if there is nothing in the array, display the alert below
//     alert("there is nothing to display");
// } else {
//     // otherwise create a new variable to store the array which has been joined 
//     // with an empty space in between
//     let str = nicks.join(' ');
//     // create an alert to show this
//     alert(str);
// }

// i think its a nested for loop

// i need an if statement to specify the condtiions

// i need to use the modular

// unit 
// ten
// hundred 