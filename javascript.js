window.document.getElementById('calculate').onclick = function () {

    // Get height and weight input values
    let height = window.document.getElementById('height').value
    let weight = window.document.getElementById('weight').value

    // Validate input values
    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid numbers for height and weight.")
        return
    }

    // Convert input values to numbers
    let heightNumber = Number(height)
    let weightNumber = Number(weight)

    // Calculate BMI
    let convert = weightNumber / Math.pow(heightNumber, 2)
    let BMI = convert * 10000

    // Display BMI result
    if (BMI < 18.5) {
        window.document.getElementById('result').innerHTML = `Your BMI is ${BMI.toFixed(1)}. <br> You are underweight`

    } else if (BMI >= 18.5 && BMI < 25) {
        window.document.getElementById('result').innerHTML = `Your BMI is ${BMI.toFixed(1)}. <br> You are in your normal weight`

    } else if (BMI >= 25 && BMI < 30) {
        window.document.getElementById('result').innerHTML = `Your BMI is ${BMI.toFixed(1)} <br> You are overwight`

    } else if (BMI >= 30 && BMI < 35) {
        window.document.getElementById('result').innerHTML = `Your BMI is ${BMI.toFixed(1)} <br> You are obese`

    } else {
        window.document.getElementById('result').innerHTML = `Your BMI is ${BMI.toFixed(1)} <br> You are extreme obese`
    }
}

// Reset height input value on focus    
window.document.getElementById('height').onfocus = function () {
    let inputheight = document.getElementById("height");
    inputheight.value = ""
}

// Reset weight input value on focus
window.document.getElementById('weight').onfocus = function () {
    let inputweight = document.getElementById("weight");
    inputweight.value = ""
}