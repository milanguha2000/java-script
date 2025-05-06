// For loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//using if statement inside the for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        console.log("your number is 5");
    }
    console.log(element);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// using for loop inside a for loop

for (let i = 0 ; i <= 5 ; i++) {
    console.log(`outer value : ${i}`)
    for (let j = 0 ; j <= 5 ; j++) {
    console.log(`inner value : ${j} and outer value : ${i}`);
    }
} 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// if we want to print table by using foor loop

for (let i = 1 ; i <= 5 ; i++) {
    console.log(`Table of : ${i}`)
    for (let j = 1 ; j <= 10 ; j++) {
    console.log(i + ' * ' +  j + ' =' , i*j);
    }
} 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// array using for loop

const myArray = ["spiderman" , "batman" , "ironman" , "superman"]
console.log("array length is : " , myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// break And continue

for (let i = 1 ; i < 20 ; i++) {
    if(i == 5){
        console.log("deteced 5");
        break
    }
    console.log(`value of i : ${i}`);
    
}

for (let i = 1 ; i < 20 ; i++) {
    if(i == 5){
        console.log("deteced 5");
        continue
    }
    console.log(`value of i : ${i}`);
    
}


// print "*" by using for loop

for (let i = 1 ; i < 5 ; i++) {
    let row = ' '
    for(let j = 0 ; j < i ; j++){
        row += "*"
    }
    console.log(row);
    
}