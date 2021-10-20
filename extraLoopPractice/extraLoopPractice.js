// 1
// var stars = "";
// for (var i = 0; i < 10; i++) {
//     stars +="*"
// }

// console.log(stars);

// 2
// var line1 = "";
// for (var i = 0; i < 10; i++) {
//     line1 +="*";
    
// }
// var line2 = "";
// for (var j = 0; j < 5; j++) {
//     line2 +="*";
    
// }
// var line3 = "";
// for (var k = 0; k < 20; k++) {
//     line3 +="*";
// } 
// console.log(line1);
// console.log(line2);
// console.log(line3);

// 3
// in this example I need two loops, one for the rows 
// and one for the columns each going down and across 10 times
// var line1 = "";
// for (var i = 0; i < 10; i++) {
//     line1 = "";
//     for (var j = 0; j < 10; j++) {
//         line1 +="*";
//     }
//     console.log(line1);
// } 

// 4 
// think of it as rows and columns
// var line1 = "";
// for (var i = 0; i < 10; i++) {
//     line1 = "";
//     for (var j = 0; j < 5; j++) {
//         line1 +="*";
//     }
//     console.log(line1);
// } 

// 5
// var line1 = "";
// for (var i = 0; i < 5; i++) {
//     line1 = "";
//     for (var j = 0; j < 20; j++) {
//         line1 +="*";
//     }
//     console.log(line1);
// } 

// 6
// var line1 = "";
// for (var i = 0; i < 10; i++) {
//     line1 = "";
//     for (var j = 0; j < 10; j++) {
//         line1 +=j;
//     }
//     console.log(line1);
// } 

// 7
// var line1 = "";
// for (var i = 0; i < 10; i++) {
//     line1 = "";
//     for (var j = 0; j < 10; j++) {
//         line1 +=i;
//     }
//     console.log(line1);
// } 

// 8
// I needed to add in i == j in an if statement and then 
// break afterwards
var line1 = "";
for (var i = 0; i < 10; i++) {
    line1 += i;
    for (var j = 0; j < 1; j++) {
        if (i == j) {
            break;
        }
    }
    console.log(line1);
} 