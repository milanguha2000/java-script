const clock = document.getElementById('Clock')
// const clock = document.querySelector('#Clock')


setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleString());
    clock.innerHTML = date.toLocaleTimeString()
} , 1000)

