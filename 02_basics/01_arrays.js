// Arrays

const myArr1 = [0 , 1 , 2 , 4 , 5]
console.log(myArr1[1]);

const myHeros = ["Bheem" , "Shaktiman" , "Tony" , "Thor"]
console.log(myHeros[3]);

const newArr = new Array(0 , 1 , 2 , 3 , 4 , 5)
console.log(newArr[5]);

// Array methods
const myArr = [0 , 1 , 2 , 3 , 4 , 5]
console.log(myArr.length);

myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9))
console.log(myArr.includes(4))

console.log(myArr.indexOf(9))
console.log(myArr.indexOf(4))


const newArrOne = myArr.join()
console.log(myArr);
console.log(newArrOne);
console.log(typeof newArrOne);


//slice and splice

const myn1 = myArr.slice(1 , 3)
console.log("A " ,myArr);
console.log(myn1);

console.log("B " ,myArr);

const myn2 = myArr.splice(1 , 3)
console.log("c " ,myArr);
console.log(myn2);

