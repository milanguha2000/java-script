const form = document.querySelector('form')

//this usecase wiil give you the empty value.we have to use the usecase into the function.
// const length = Number(document.querySelector('#Length').value)

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const length = Number(document.querySelector('#length').value);
    const width = Number(document.querySelector('#width').value);
    const result = document.querySelector('#results');

    if (length === '' || length <= 0 || isNaN(length)) {
        result.innerHTML = 'please give a valid length'
    }else if(width === '' || width <= 0 || isNaN(width)) {
        result.innerHTML = 'please give a valid width'
    }else{
        const cal = (2*(length+width)).toFixed(2)
        result.innerHTML=`The Parametar is : <span> ${cal} </span>`
    }
})