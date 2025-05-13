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
    }else if(length === width){
        const cal = (4*length).toFixed(2)
        const cal1 = (length ** 2).toFixed(2)
        result.innerHTML = `This is not a Rectangular.This is a Square.<br> The Parametar is : (4 * length) =  ${cal}  <br> The Area is : (length * length ) = ${cal1}`
    }
    else{
        const cal = (2*(length+width)).toFixed(2)
        const cal1 = (length * width).toFixed(2)
       result.innerHTML=`This is a Rectangular .<br>The Parametar is : 2*(length + width) =<span> ${cal}     </span> <br> The Area is : (length * width) = ${cal1}`

    }
})