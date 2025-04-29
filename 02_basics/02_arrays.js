const marvel_heros = ["Spiderman" , "Thor" , "Ironman"]
const dc_heros = ["Superman" , "Batman" , "Shaktiman"]

const combind_heros = marvel_heros.concat(dc_heros)
console.log(combind_heros);

/*
marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][2]);     //we don't use push method to merge the arrays, it merge second
                                        array to the element
*/
const new_heros = [...marvel_heros , ...dc_heros]
console.log(new_heros);     // spread method and concat method work as same

const anotherArray = [1 , 2 , 3 , [4 , 5 , 6] , 7 , [6 , 7 , [4 , 5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);


console.log(Array.isArray("milan"))
console.log(Array.from("milan"));
console.log(Array.from({name : "milan"}));  //in this statement return empty array


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 ,score3));
