const mySymbol = Symbol("key1")

const jsUser = {
    name : "Milan",
    "fullName" : "Milan Guha",
    [mySymbol] : "mykey1",
    age : 25,
    email : "milan@gmail.com",
    location : "Burdwan",
    isLoggedIn : false,
    lastLoggedInDays : ["monday" , "Sunday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["fullName"]);
console.log(jsUser[mySymbol]);


jsUser.email = "milanguha@gmail.com"
console.log(jsUser.email);
console.log(jsUser);

// Object.freeze(jsUser)         //if we use freeze() method then it will not changed object's key value
// jsUser.email = "mg@gmail.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello , js user");
    
}
console.log(jsUser.greeting);   // in this statement it will return a function but not return the value
console.log(jsUser.greeting()); // in this statement it will return : hello , js user



jsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`); 
    //when i need to do reference the same object , "this" will access the same object and key values 
    
}
console.log(jsUser.greetingTwo());
