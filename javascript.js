window.document.getElementById('calculate').onclick = function () {

    let height = window.document.getElementById('height').value
    let weight = window.document.getElementById('weight').value

    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid numbers for height and weight.")
        return
    }

    let heightNumber = Number(height)
    let weightNumber = Number(weight)

    let BMI = weightNumber / (heightNumber * heightNumber)

    let convert = BMI * 10000

    window.document.getElementById('result').innerHTML = `Your BMI is ${convert.toFixed(1)}`
}

window.document.getElementById('height').onfocus = function () {
    let inputheight = document.getElementById("height");
    inputheight.value = ""
}

window.document.getElementById('weight').onfocus = function () {
    let inputweight = document.getElementById("weight");
    inputweight.value = ""
}