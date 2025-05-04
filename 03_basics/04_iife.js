// Immediately Invoked Function Expressions (IIFE)

// this a normal function . 

// function chai(){
//     console.log(`DB connected`);
// }
// chai()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// how we write the iife , syntax : 

(function chai(){
    console.log(`DB connected`);
})();       
/* if we use the two iife , then we have to use ";" and this is a named iife because function
name is chai()
*/


// how we write the iife in a arrow function . 
(() => {
    console.log(`DB connected two`);
})();


//if a arrow function expect a variable
((name) => {
    console.log(`DB connected two ${name}`);    
})("milan")
