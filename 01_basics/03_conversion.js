let score1 = 33
/*
let score2 = "33abc"
let score3 = "Milan"
let score4 = "33"
let score5 = null
let score6 = undefined
let score7 = true
*/
console.log("Type of Variables : ");

console.log(typeof score1);
/*
console.log(typeof score2);
console.log(typeof score3);
console.log(typeof score4);
console.log(typeof score5);
console.log(typeof score6);
console.log(typeof score7);
*/

console.log("Type of Variables by using method : ");
console.log(typeof (score1));
/*
console.log(typeof (score2));
console.log(typeof (score3));
console.log(typeof (score4));
console.log(typeof (score5));
console.log(typeof (score6));
console.log(typeof (score7));
*/

console.log("converting value into the number : ");


let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

/*
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);
console.log(valueInNumber5);

let valueInNumber6 = Number(score6)
console.log(typeof valueInNumber6);
console.log(valueInNumber6);

let valueInNumber7 = Number(score7)
console.log(typeof valueInNumber7);
console.log(valueInNumber7);
*/

// converting in booleanNumber
let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)             // 0 = false
console.log(booleanIsLoggedIn);

/*

let isLoggedIn1 = 1
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)           // 1 = true
console.log(booleanIsLoggedIn1);

let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)           //"" = false
console.log(booleanIsLoggedIn2);

let isLoggedIn3 = "Milan"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)           //"Milan" = true
console.log(booleanIsLoggedIn3);

*/

// converting in stringNumber
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
