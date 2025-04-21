/*
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);
*/


console.log("2" < 1);
console.log("02" < 1 );     //string value automatically convert into a number

console.log(null < 0);
console.log(null == 0);
console.log(null <= 0);     //in this statement the null value convert into 0(zero)


/*
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined <= 0);
//if compare undefined value with 0(zero) , it will return false for all statement
*/


//strict check (===)
//in this statement browser not only check the value , but it will check the datatype also.

console.log("2" === 2);
