// operator : < , > , <= , >= , == , != , === , !==

const temperature = 46
if(temperature < 45 ){
    console.log("temperature is less than 45");
} else{
console.log("temperature is gretter than 45");
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power : ${power}`);
}
//console.log(power);       

/* we can't access the power because power define into the block scope . we can't access the power 
    from outside the block scope . if we decline the power with "var" variable , then we can acces the 
    power globally .
*/


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const balance = 1000

//if we want to write the in one line , without scope .

//if(balance > 500) console.log("test") , console.log("test2");

if(balance < 500){
    console.log("less than 500");

}else if(balance < 750){
    console.log("less than 750");

}else if(balance < 900){
    console.log("less than 900");

}else{
    console.log("less than 1200");
    
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* 
    "&&" this operator checks all the conditions are true ? if all the condition is true then it will
    run the program .
    "||" this operator checks one condition is true ? if one condition is true then it will run the 
    program . if all coditions are true then also run the program . 
*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("you are allow to buy");
    
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
    
}
