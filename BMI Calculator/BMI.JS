function calculateBMI() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    let resultEl = document.getElementById('result')

    if (!weight || !height) {
        alert("Please enter valid weight and height!");
        return;
    }


    let heightM = height / 100;
    let bmi = weight / (heightM * heightM);
    


    let category = "";
    if (bmi < 18.5) 
        category = "Underweight";
    else if (bmi < 24.9)
         category = "Normal weight";
    else if (bmi < 29.9) 
        category = "Overweight";
    else 
        category = "Obese";
    alert(`Your BMI is ${bmi} (${category})`);
}

function clearForm() {
    let confirmClear = confirm("Do you want to clear all fields?")
    if (confirmClear) {
        document.getElementById('weight').value = ""
        document.getElementById('height').value = ""
        document.getElementById('result').innerHTML = ""
    }
}
