var test = "hello";
var nb = 8;

// alert(typeof test);

// string concatenation
console.log("result of nb " + nb);

// can also use , as well
console.log("result of nb ", nb);

// can use for all calculations
var result = 1 + 2;

var result = 1 * 2;

var result = 1 - 2;

// a modular, which is used often, basically what is the remainder
var result = 1 % 2;

// this will erase the previous result in memory
result = result + 2;
result += 2; // This is a shortcut for the above
result -= 2;
result *= 2;
result %= 2;
result /= 2;

console.log(result);

var nb = 1,
  nb1 = "2";
var nb1Converted = parseInt(nb1);
var nbConverted = 1 + "";
var stringN = parseInt("hello");
console.log(stringN);
var userEntry = parseInt(prompt("Enter your age : "));
var kAge = userEntry + 1;
console.log("User entered :", kAge);
