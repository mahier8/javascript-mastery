// 1
var count = 0;

while (count < 10) {
    count++;
    // console.log(count); 
}

// 2
var count = 0;

do {
    count++;
    // console.log(count)
} while (count < 7);

// 3
var passwordSet = 'explanation',
    password, 
    message = "please try again";
    // I dont know how to display this second message

while (true) {
    password = prompt('Please enter the password to end the loop');

    if (password == passwordSet) {
        alert("You have guessed the password " + password + " correctly!");
        break;
    } else {
        message;
    }  
}

    // How do I console log this??

// 4
// the below represents effecient code
var guess = "",
    sum = 0;
for (var i = 0; i < 3; i++) {
    guess = parseInt(prompt("give a number between 1-10?")); 
    if (guess < 1 || guess > 10) {
        guess = parseInt(prompt("Wrong entry - give a number between 1-10?"));
    }
    sum +=guess
    alert("your number equals " + sum);
}

// code from befores
if (sum >= 1 && sum <= 10) {
    console.log('number between 1-10');
} else if (sum >= 11 && sum <= 20) {
    console.log('number between 11-20');
} else if (sum >= 21 && sum <= 30) {
    console.log('number between 21-30');
} else {
    console.log('Ooops something went wrong');
}

    // 5
    var i = 0;

    while (i < 1000) {
        i++;
        if (i % 5 === 0 || i % 3 === 0)
        console.log(i); 
    } 

    // 6
    // I need a way to count the amount of numbers that were
    // entered into the console. I have to declare a variable
    // to count, then set it to 0 as the starting point. Now I have to
    // set the count variable to ++ to count the number of times my 
    // action happens. Outside of the while loop I console.log the 
    // count variable.

    var i = 0;
    var count = 0

    while (i < 1000) {
        i++;
        if (i % 5 === 0 || i % 3 === 0) {
            count ++; //could also be count = count + 1
        }
        
    } 
    console.log(count)

    // 7
    var i = 0;
    var count = 0;
    while (i < 1000) {
        i++;
        if (i % 5 === 0 && i % 3 === 0) {
            count++;
        }
        
    } 
    console.log(count);

    // 8
    var isPrime = false;
    var userEntry = parseInt(prompt("set the number until you want to display the prime numbers  : "));

    var count = 0;

    for (var i = 2; i <= 997; i++) {
        for (var j = 2; j <= i; j++) {
        if (i % j === 0 && i != j) {
            isPrime = false;
            break;
        } else {
            isPrime = true;
        }
    }
    if (isPrime) {
        count ++;
        console.log("Prime : " + i)
    }
}

    console.log("Total prime : ", count);

// 8 Maries Answer
// var isPrime = false;
// var userEntry = parseInt(prompt("set the number until you want to display the prime numbers  : "));
// var count = 0;
// for(var i=2 ; i<1000; i++) {// nb to compare
//     for(var j=2 ; j<=i ; j++) { // comparaison
//         if( i%j == 0 && i!=j){
//             isPrime = false;
//             break;
//         } else {
//             isPrime = true;
//         }
//     }
//     if(isPrime) {
//         count ++;
//         console.log("Prime : ", i);
//     }

// }
// console.log("Total prime : ", count);

    // 9
    var number = prompt("Display a number");

    if (number % 2 === 0) {
        alert("Your number is even");
    } else {
        alert("Your number is odd");
    }

    //9
    // Maries Answer
    // even or odd
//     var number, msg;
//     while (number = prompt("give me a number i will tell you if it's odd or even")) {
//     number = parseInt(number);
//     msg = (number%2 == 0) ? "even" : "odd";
//     console.log(msg);
// }

 