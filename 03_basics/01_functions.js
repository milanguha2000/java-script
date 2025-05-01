function sayMyName(){
console.log("M");
console.log("I");
console.log("L");
console.log("A");
console.log("N");
}

sayMyName()

function addTwoNumbers(num1 , num2){
    console.log(num1 + num2);
}
addTwoNumbers(3,4)
// addTwoNumbers(3,"4")        //return 34
// addTwoNumbers(3,"a")        //return 3a
// addTwoNumbers(3,null)       //return 3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addTwoNumbersTwo(num1 , num2){
    console.log(num1 + num2);
}
const result1 = addTwoNumbersTwo(3,5)     //in this statement it will return : 8
console.log("Result is : " , result1);    //in this statement it will retun - Result is : undefined

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addTwoNumbersThree(num1 , num2){
    let result = num1 + num2
    return result
}
const result2 = addTwoNumbersThree(3,5)     
console.log("Result is : " , result2);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addThreeNumbers(num1 , num2 , num3){
    return num1 + num2 + num3
}
const result3 = addThreeNumbers(5,5,5)     
console.log("Result is : " , result3);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function loginUserMessage(username){
    return`${username} just logged in`
}
console.log(loginUserMessage("milan"))

//+++++++++++++++++++++++++++ using If Statement +++++++++++++++++++++++++++++

function UserMessage(username){
    if(username === undefined){                     //if(!username){}  : same statement as line no 54
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}
console.log(UserMessage())

//++++++++++++++++++++++ Using a default value if no value is given by user +++++++++++++++++++++

function UserMessageOne(username = "SAM"){
    if(username === undefined){                     //if(!username){}  : same statement as line no 65
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}
console.log(UserMessageOne())