// for of loop

const arr = [1 , 2 , 3 , 4 , 5]
for (const num of arr) {
    console.log(num);   
}

const name = "milan guha"
for (const element of name) {
    console.log(`each element is ${element}`);
    
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//maps

const map = new Map()
map.set("In" , "India")
map.set("USA" , "United States of America")
map.set("Fr" , "France")

console.log(map);

for (const [key , values] of map) {
    console.log(key , ":-" , values);
    
}
