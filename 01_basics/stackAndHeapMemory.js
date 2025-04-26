// in primitive datatype we are using the stack memory

let name = "Milan"

let anotherName = name
anotherName = "Sayan"

console.log(name);
console.log(anotherName);


// in non-primitive data type we are using heap memory

let userOne = {
    email : "milan@gmail.com",
    upi : "milan123"
}

let userTwo = userOne

userTwo.email = "mg@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

