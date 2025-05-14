const randomNumber = parseInt((Math.random()*100)+1)
// console.log(randomNumber);

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.result')

const p = document.createElement('p')

let prevGuess = []
let numOfGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numOfGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over . Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is TOOO Low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is TOOO High`)
    }
}
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}`
    numOfGuess++
    remaining.innerHTML = `10 - ${numOfGuess}`
}
function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){

}
function newGame(){

}}
