// let a = 10 
// const b = 20 
// var c = 30

/*in scope if we use variable in curly bracket , then we can not access the value from outside 
    the bracket . Only we can access the var variable from outside thats why we don't use var variable.
    var is a global scope 
*/
if(true){
    let a = 10 
    const b = 20 
    var c = 30
}
//console.log(a);       // output - error
//console.log(b);       //output - error
// console.log(c);      //output - 30

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* if we call a variable globally then it will accessable from globally and we can the value in function
also. if we call the a value in block scope then it not return the value in globally . in block scope 
value return you have to console.log()in the block scope.
*/

let a = 300
if(true){
    let a = 10 
    const b = 20 
    console.log("inner value : " , a);  // output= inner value : 10
    
}
console.log(a);     //output - 300



// +++++++++++++++++++++++++++++ Nested Scope ++++++++++++++++++++++++++++++++++++++++

/* in nested scope child function can access the parent variable but parent function can not access 
the child variable
*/

function one(){
    const username = "milan"
    function two(){
        const website = "youtube"
        
        console.log(username);
    }
    //console.log(website);    //website is inside the child function , so parent function can't access it.
    
    two()
    
}
//one()       //this function return nothing because we don't print anything inside the one()function .


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

if(true){
    const username = "milan"
    if(username === "milan"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);       // error : website not defined
}
//console.log(username);      //error : username not defined


//++++++++++++++++++ interesting +++++++++++++++++++++++++++

function addOne(num){
    return num + 1
}
console.log(addOne(5))


console.log(addTwo(5))
function addTwo(num){
    return num + 1
}
/*line no (72-75) and (78-81) are working as a same and return same . we can call the function in fast
and in last also.
*/


//+++++++++++++++++++++++++++++++ Function Hoisting +++++++++++++++++++++++++++++++++++++++++
const addThree = function(num){
    return num + 2
}
console.log(addThree(5));       //output : 7


/*
console.log(addFour(5));
const addFour = function(num){
    return num + 2
}
*/

/* if we call a function and store in a variable the we can not print the function before initialization.
    it prints an error .
*/
