// first version

// step 1 functionality for creating a random number
// function nb_random(min,max){
//     var nb = min +(max-min+1) * Math.random();
//     return Math.floor(nb);
// }

// step 2 we create variables to set the range, set a message, store
// the response from the prompt and set a default for tries(cpt) 
// let rNumber = nb_random(1, 10);
// let msg = `Please choose a number between 1 and 10`;
// let chooseNumber = prompt(msg);
// let cpt = 1;

// this is a do while loop version, it needs an extra step 
// do {   
//     chooseNumber = parseInt(chooseNumber);
//     alert(`you have chosen ${chooseNumber}`);
//     if (chooseNumber == rNumber) {
//         break;
//     } else if (chooseNumber > rNumber) {
//         chooseNumber =  prompt("The number you chose is too high")
//     } else {
//         chooseNumber = prompt("The number you chose is too low")
//     }
   
// } while (chooseNumber != rNumber || isNaN(rNumber) ); 

// this is the while loop version
// we convert the chosen number into a number, and store it again.
// we then increment the amount of tries(cpt). 
// while (chooseNumber != rNumber || isNaN(rNumber) ){
//     chooseNumber = parseInt(chooseNumber);
//     cpt++
//     // console.log(cpt);
//     if (chooseNumber > rNumber) {
//         chooseNumber =  prompt(`The number you chose is too high`)
//     } else {
//         chooseNumber = prompt(`The number you chose is too low`)
//     }
// }

// an alert to tell user how many tries it took(cpt)
// alert(`Congratulations, you chose the correct number, it took you ${cpt} tries.`)

// second version
function nb_random(min, max){
    var nb = min +(max - min + 1) * Math.random();
    return Math.floor(nb);
}

function loM_round(min, max) {
    let rNumber = nb_random(min, max);
    let msg = `Please choose a number between 1 and ${max}.`;
    let chooseNumber = prompt(msg);
    let cpt = 1; // Question 1. Should this be 1 or 0? difference between while and do while.

    while (chooseNumber != rNumber || isNaN(rNumber)){

        chooseNumber = parseInt(chooseNumber);
        cpt++;
        // console.log(cpt);
        if (chooseNumber > rNumber) {
            chooseNumber =  prompt(`The number you chose is too high`);
        } else {
            chooseNumber = prompt(`The number you chose is too low`);
        }
    }
    // we return the tries(cpt) as loM_round to be used below
    return cpt;
}

// do while
// cpt global is the number of tries of each round played in the game
// we will use it to calculate the best score
// let nbRounds = 0; // this variable will be used to calculate the number of rounds played during a game
// let bestScore = 999999999999;
// do {
//     let cptGlobal = loM_round();
//     if(bestScore>cptGlobal) {
//         bestScore = cptGlobal;
//     }
//     nbRounds++; // to increment the the amount of rounds played in the game
//     alert(`Congratulations, you chose the correct number, it took you ${cptGlobal} tries.`);

// } while (confirm(`Do you want to play again?`)); // asking the user if they want to play again
// // telling the user the amount of rounds played
// alert(`You played ${nbRounds} times. And you best score is ${bestScore}`);



// version 3
function loM_game(min, max){
    let nbRounds = 0; // this variable will be used to calculate the number of rounds played during a game
    let bestScore = Infinity;
    do {
        let cptGlobal = loM_round(min, max); // takes in the arguments from the html, changing the amounts 
        // according to the html
        if (bestScore > cptGlobal) { // Question 2. I don't think I understand this.
            bestScore = cptGlobal; // Can I have an example of what would hypothetical happen in this case?
        }
        // calculate the best score 
        // while I am playing I need to keep track of the highest score it took me to
        // guess the random number. right now I have the tries(cpt) after each round  
        // what kind of condition do i need
        nbRounds++; // to increment the the amount of rounds played in the game
        alert(`Congratulations, you chose the correct number, it took you ${cptGlobal} tries.`);

    } while (confirm(`Do you want to play again?`)); // asking the user if they want to play again
    // telling the user the amount of rounds played
    alert(`You played ${nbRounds} times. And you best score is ${bestScore}`);
}

// why isnt the function initiated after being defined
