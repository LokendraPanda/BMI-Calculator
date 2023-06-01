function calculateBmi() {
    let heightInput = document.getElementById("height");
    let weightInput = document.getElementById("weight");
    let outcome = document.getElementById("outcome");

    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight)) {
        return outcome.innerHTML = "Please enter your valid height and weight.";
    }

    let bmi = Math.floor(weight / (height / 100) ** 2);
    outcome.innerHTML = "Your BMI is " + bmi.toFixed(2);
}

/* now we are adding an event listener to the "Refresh" button using JavaScript. So When the button is clicked, it clears the BMI calculation result, as well as resets the height and weight input fields without pausing the video.  */

document.getElementById("refreshBtn").addEventListener("click", function () {
    let outcome = document.getElementById("outcome");
    let heightInput = document.getElementById("height");
    let weightInput = document.getElementById("weight");

    outcome.innerHTML = ""; // Clearing the BMI calculation result
    heightInput.value = ""; // Clearing the height input
    weightInput.value = ""; // Clearing the weight input
});
