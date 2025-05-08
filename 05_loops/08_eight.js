const num = [1 , 2 , 3]

// const myTotal = num.reduce( function(acc , currVal){
//     console.log(`accumulator : ${acc} and current value : ${currVal}`);
    
//     return acc + currVal
// }, 0)
// console.log(myTotal);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//same problem using arrow function
const myTotal = num.reduce ( (acc , currVal) => (acc + currVal), 0)
console.log(myTotal);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const shoppingCart = [
    {
        courseName : "javascript",
        coursePrice : 999
    },
    {
        courseName : "python",
        coursePrice : 1999
    },
    {
        courseName : "java",
        coursePrice : 2999
    },
    {
        courseName : "data science",
        coursePrice : 3999
    },
]

const totalPrice = shoppingCart.reduce( (acc , item) => (acc + item.coursePrice ) , 0 )
console.log(totalPrice);
