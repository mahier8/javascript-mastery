// exercise 1

var nicks = [], // start by creating an empty array
    nick;
while (true) {
    nick = prompt('Enter a name : ');
    if(nick) {
        nicks.push(nick); 
        // instead of the string from before, push the variable which stores the name
        // into the newly created array
    } else {
        break; // end of the loop
    }
}
// outside of the for loop create a conditional statement
if (nicks.length == 0) {
    // if there is nothing in the array, display the alert below
    alert("there is nothing to display");
} else {
    // otherwise create a new variable to store the array which has been joined 
    // with an empty space in between
    let str = nicks.join(' ');
    // create an alert to show this
    alert(str);
}

// exercise 2
// var array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

var family = {
    wife : 'Angel',
    mother : 'Omma',
    father : 'Appa',
    brother : 'Baadier',
};

    // let family = family[i];
    for (let i in family) {
        console.log(i);
        console.log(`My ${i}'s first name is ${family[i]}`);
    }

