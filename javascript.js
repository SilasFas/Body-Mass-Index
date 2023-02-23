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
    let convert = weightNumber / Math.pow(heightNumber, 2)
    let BMI = convert * 10000

    if (BMI < 18.5) {
        // This part is my output. I am showing the result of my input and calculations  
        window.document.getElementById('result').innerHTML = `Your BMI is ${BMI.toFixed(1)}. <br> You are underweight`

    } else if (BMI >= 18.5 && BMI < 25) {
        // This part is my output. I am showing the result of my input and calculations  
        window.document.getElementById('result').innerHTML = `Your BMI is ${BMI.toFixed(1)}. <br> You are in your normal weight`

    } else if (BMI >= 25 && BMI < 30) {
        // This part is my output. I am showing the result of my input and calculations 
        window.document.getElementById('result').innerHTML = `Your BMI is ${BMI.toFixed(1)} <br> You are overwight`

    } else if (BMI >= 30 && BMI < 35) {
        // This part is my output. I am showing the result of my input and calculations 
        window.document.getElementById('result').innerHTML = `Your BMI is ${BMI.toFixed(1)} <br> You are obese`

    } else {
        // This part is my output. I am showing the result of my input and calculations 
        window.document.getElementById('result').innerHTML = `Your BMI is ${BMI.toFixed(1)} <br> You are extreme obese`
    }
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