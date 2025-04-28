// Dates

let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

let createdDateOne = new Date(2000 , 9 , 31)
console.log(createdDateOne.toDateString());


let createdDateTwo = new Date(2000 , 9 , 31 , 11 )
console.log(createdDateTwo.toLocaleString());


let createdDateThree = new Date("2000-10-31")
console.log(createdDateThree.toLocaleString());


let createdDateFour = new Date("10-31-2000")
console.log(createdDateFour.toDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth());


console.log(newDate.toLocaleString('default' , {
    weekday : "long"
}))