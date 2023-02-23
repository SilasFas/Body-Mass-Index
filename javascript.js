window.document.getElementById('calculate').onclick = function () {

    // In this part, I am taking the HTML values and putting them into my javascript 
    let height = window.document.getElementById('height').value
    let weight = window.document.getElementById('weight').value

    // In this part, I am dismissing all in the input date that isn't a Number.
    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid numbers for height and weight.")
        return
    }
    // In this part, I am turning my values into Numbers so can calculate.
    let heightNumber = Number(height)
    let weightNumber = Number(weight)

    // In this part, I am using the BMI formula 
    let BMI = weightNumber / (heightNumber * heightNumber)
    let convert = BMI * 10000

    // This part is my output. I am showing the result of my input and calculations  
    window.document.getElementById('result').innerHTML = `Your BMI is ${convert.toFixed(1)}`
}

// In this part, I am using the 'onfocus' so that the user doesn't need to erase the first value to calculate another one. That's the height value.    
window.document.getElementById('height').onfocus = function () {
    let inputheight = document.getElementById("height");
    inputheight.value = ""
}

// In this part, I am using the 'onfocus' so that the user doesn't need to erase the first value to calculate another one. That's the weight value.
window.document.getElementById('weight').onfocus = function () {
    let inputweight = document.getElementById("weight");
    inputweight.value = ""
}