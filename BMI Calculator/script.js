function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid numbers for weight and height.";
        return;
    }

    var bmi = weight / (height * height);

    var resultMessage = "Your BMI is: " + bmi.toFixed(2);

    if (bmi < 18.5) {
        resultMessage += " - Underweight";
    } else if (bmi < 24.9) {
        resultMessage += " - Normal weight";
    } else if (bmi < 29.9) {
        resultMessage += " - Overweight";
    } else {
        resultMessage += " - Obesity";
    }

    document.getElementById("result").innerHTML = resultMessage;
}