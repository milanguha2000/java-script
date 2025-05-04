const user = {
    username : "milan",
    price : 999,
    welcomemessage : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}
user.welcomemessage()       //output : milan , welcome to the website
user.username = "sam"
user.welcomemessage()       //output : sam , welcome to the website

/*
this indicates current content . line no 9 will print username : "milan" , but the 10 line we assign
username value is : "sam" . so now current content is "sam". so line no 11 print username : "sam" .
*/


//console.log(this);     //in this line output will be : {} , because there is no current content globally.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// "this" keyword only work on object . "this" keyword does not work on function


// function chai(){
//     username : "milan"
//     console.log(this.username);
// }
// chai()       //output : undefined


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// if we store the function in a variable , in same case "this" keyword is not workable

// const chai = function(){
//     username : "milan"
//     console.log(this.username);
// }
// chai()       //output : undefined


// ++++++++++++++++++++++++++++ Arrow Function +++++++++++++++++++++++++++++++++++++
// arrow function synta. :   () => {}
const chai = () => {
    username : "milan"
    console.log(this.username);
}
//chai()      //output : undefined

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3 , 4));

// const addTwo = (num1 , num2) => num1 + num2
// console.log(addTwo(3 , 4));

const addTwo = (num1 , num2) => (num1 + num2)
console.log(addTwo(3 , 4));

/*line no (52-55) & (57-58) & (60-61) all are same . we can use the arrow function same way.
   in line no (52-55) , if we use arrow function in curly bracket then you have to "return" value ,
   otherwise we don't have to use "return"
*/


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// in arrow function if we use the object

const add = (num1 , num2) => ({user : "milan"})
console.log(add());        //output : {user : 'milan'}
// if we use object then you have to rap up curly bracket in a bracket like line no 73 .

