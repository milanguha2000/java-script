const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const newNums = myNums.map( (num) => num + 10)
console.log(newNums);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//same problem using for-each loop 

const Nums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
let NewNums = []

Nums.forEach( (num) => {
    if(num > 0){
        NewNums.push(num+10)
    }
})
console.log(NewNums);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// chaining

const arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const newArr = arr
            .map( (num) => num * 10) //output : [10,20,30,40,50,60,70,80,90,100]
            .map( (num) => num + 1) //output : [11,21,31,41,51,61,71,81,91,101]
            .filter( (num) => num <= 40)    //output : [11,21,31]
console.log(newArr);
