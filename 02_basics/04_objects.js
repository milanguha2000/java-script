//const fbUser = new Object()

const fbUser = {}

fbUser.name = "Milan"
fbUser.id = "milan123"
fbUser.email = "milan@gmail.com"
fbUser.isLoggedIn = false

console.log(fbUser);


const regularUser = {
    email : "mg@gmail.com",
    fullname : {
        name : {
            firstname : "Milan",
            lastname : "Guha"
        }
    }
}
console.log(regularUser.fullname.name.lastname);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}
const obj3 = {5 : "e" , 6 : "f"}

const obj4 = Object.assign(obj1 , obj2 , obj3)
console.log(obj4);

const obj5 = {...obj1 , ...obj2 , ...obj3}
console.log(obj5);
// assign and spread working as same . So line no 28 and 31 is same . So it will return the same object.

const users = [
    {
        id : 123,
        email : "m@gmail.com"
    },
    {
        id : 124,
        email : "m1@gmail.com"
    },
    {
        id : 125,
        email : "m2@gmail.com"
    },
    {
        id : 126,
        email : "m3@gmail.com"
    }
]
console.log(users[2].email);
console.log(users[1].id);

console.log(fbUser);

console.log(Object.keys(fbUser));   //output is array datatypes
console.log(Object.values(fbUser)); //output is array datatypes
console.log(Object.entries(fbUser));    //each and every key:value return in array within a Array

console.log(fbUser.hasOwnProperty("id"));
console.log(fbUser.hasOwnProperty("isLogged"));
// hasOwnProperty() method is checked the key is there or not . And it will return boolean type.