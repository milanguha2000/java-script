let name = "Milan"
let repoCount = 5

//console.log(name + repoCount + " value");

console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("valo-rent")
console.log(gameName);
console.log(typeof gameName);
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4)   //in substring method the inde+ value should be posative
console.log(newString);

const anotherString = gameName.slice(-9,4)  //in slice method the inde+ value can be negetive or posative
console.log(anotherString);     

const newStringOne = "     Milan     "
console.log(newStringOne);
console.log(newStringOne.trim());   //in trim method there is no space in string 

const url = "https://milan.com/milan%20guha"
console.log(url.replace("%20","-"));

console.log(url.includes("milan"));

console.log(url.includes("sayan"));

const nameOne = new String("my-name-is-milan-guha")
console.log(nameOne.split('-'));
console.log(nameOne.split('-','4'));

const newName = new String("my-name-is-milan-guha")
const newNameOne = newName.replaceAll('-',' ');
const newNameTwo = "hello"
const result = newNameTwo.concat(" " ,newNameOne ,' !')
console.log(result);
