//for-in loop

const myObj = {
    name : "Milan Guha",
    email : "milan@gmail.com",
    age : "25",
    graduate : 2021
}

console.log(myObj);

for (const key in myObj) {
    console.log(`${key} :-  ${myObj[key]}`);
    
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//for-in loop in array

const programmingLanguage = ["c" , "java" , "c++" , "python" , "javascript" , "HTML"]

for (const key in programmingLanguage) {
   console.log(`in ${key} index value is : ${programmingLanguage[key]}`);
   
}