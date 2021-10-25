// normal arrays

let notes = [15, 17, 18, 19, 20];
console.dir(notes);

for (let i=0; i< notes.length; i++) {
    // console.log(i);
    // console.log(notes[i]);
}

// ES6 for each
notes.forEach((value,index)=>{
    // console.log("value ", value);
    // console.log("index ",index);
});


// literal arrays or associative arrays
let gangnam = {
    "lat" : 453627345,
    lon : 46283475649,
}
let hongdae = {
    "lat" : 453627367,
    lon : 46283475679,
}
let yeouido = {
    "lat" : 453627388,
    lon : 462834756499,
}
console.dir(gangnam);
console.log(yeouido.lat)
for (let index in gangnam) {
    console.log(index);
    console.log(gangnam[index]);
}

let locations = [
    gangnam,
    hongdae,
    yeouido
];

for(let i=0; i<locations.length; i++){
    let location = locations[i];
    // for (let index in location) {
    //     console.log(index);
    //     console.log(location[index]);
    // }
    console.log(location.lat);
    console.log(location.lon);
}

// methods specific to Array
// add something at the end of the array ==> push method
notes.push(12);
// remove something at the end of the array ==> pop method
let valuePop = notes.pop();
console.log(notes);
console.log(valuePop);
// add something at the begin of the array ==> unshift method
notes.unshift(9);
// remove something at the begin of the array ==> shift method
let lengthshift = notes.shift();
console.log(notes);
console.log(lengthshift);

/// join an Array to make it a string
let notesJoin = notes.join(',');
console.log(notesJoin);
/// split a string to make it an Array
let testStr = " Kaba, Martin, Angel, Mahier";
let names = testStr.split(", ");
console.log(names);