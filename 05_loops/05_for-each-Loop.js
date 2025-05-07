//for-each Loop

const coding = ["c" , "java" , "python" , "javascript" , "HTML"]

coding.forEach( function (value) {
    console.log(value);
    
})


//for-each loop using arrow function

const name = ["milan" , "sayan" , "dip" , "sudhanshu"]

name.forEach( (item) => {
    console.log("friend name is : " ,item);
    
})


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const fruits = ["mango" , "pineapple" , "apple" , "watermelon"]

function fruitName(name){
    console.log(name);
    
}

fruits.forEach(fruitName)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//for-each loop can get the value,index	and full array


const food = ["chowmin" , "biryani" , "katlet" , "eggroll" , "chickenroll"]

food.forEach( (val , index , arr) => {
    console.log(val , index , arr);
    
})


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//if array has objects inside the values tehn how for-each loop work

const friends = [
    {
        friendName  : "sayan",
        age : 22,
        language : "hindi"
    },
    {
        friendName  : "dip",
        age : 23,
        language : "bengali"
    },
    {
        friendName  : "soham",
        age : 24,
        language : "english"
    },
]

friends.forEach( (val) => {
    //console.log("friend's name is : " ,val.friendName);
    // console.log("friend's age is : " ,val.age);
    console.log("friend's laguage is : " ,val.language);
    
})