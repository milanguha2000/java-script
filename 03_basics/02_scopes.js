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
//console.log(a);
//console.log(b);
// console.log(c);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* if we call a variable globally then it will return global value. if we call the a value in block
scope then it not return the value ,in block scope value return you have to console.log()in the 
block scope.
*/
let a = 300
if(true){
    let a = 10 
    const b = 20 
    console.log("innter value : " , a);
    
}
console.log(a);

