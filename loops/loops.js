var nb = 1;

// this is more about the order of incrementation
nb++ // priority to my variable
++nb // prioroity to first increment value

// List of the different loops 
// while(s) when I know how many times I want to loop

// while (check before excecution) 1.the condition in the parenthesis
// var userEntry = prompt("")
// while () {
    // code to excecute inisde the loop
// }

// do while (excecution good at least for the 1 time then I will check )

// for when I know how many times I want to loop
// 3 tries password
var userPWD = prompt("enter your password 3 times");
for (var i = 0; i < 3; i++) {
    if (userPWD == "soo") {
        break; // stop the loop
    } else {
        prompt("wromg password, try again")
    }
}

// next code to excecute
