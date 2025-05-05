//Truthy Values Code :

const email = "milan@gmail.com"

if(email){
    console.log("got your email");
}else{
    console.log("don't get your email");
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Falsey Values Code :

const userEmail = ""    //empty string

if(userEmail){
    console.log("got your email");
}else{
    console.log("don't get your email");
}

/*
    falsey values :
    false , 0 , -0 , BigInt 0n , "" , null , undefined , Nan .

    truethy values :
    true , "0" , 'false' , "  " , [] , {} , function(){}
*/

const emptyArray = []

if(emptyArray.length === 0){
    console.log( "array is empty" )
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("obj is empty ")
    
}
