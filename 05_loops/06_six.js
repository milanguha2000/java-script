// const coding = ["c" , "java" , "python" , "javascript" , "HTML"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);    //output : undefined , because for-each loop don't return anything.


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//filter

const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//if we want the same problem solve using curly bracket({}) :

const myNumsOne = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const newNumsOne = myNumsOne.filter( (num) => {
    return num > 4 //if we using the scope then you have to return the value otherwise it will return empty array
})
console.log(newNumsOne);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//if we want the same problem solve with the for-each loop :

const myNumsTwo = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const newNumsTwo = []

myNumsTwo.forEach( (num) => {
    if(num > 5){
        newNumsTwo.push(num)
    }
})
console.log(newNumsTwo);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBook = books.filter( (bk) => bk.genre === "Science")
  console.log(userBook);

  userBook = books.filter ( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBook);
  

  