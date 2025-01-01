{/* <script>
    // Calculator functionality
    function calculate() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const result = num1 + num2;
        document.getElementById('result').innerText = `Result: ${result}`;
    } */}


    // calculator.js

// Function to append a value to the calculator display
function appendToDisplay(value) {
    const display = document.getElementById('calculator-display');
    display.value = (display.value || "") + value; // Append value to the display
}

// Function to clear the calculator display
function clearDisplay() {
    const display = document.getElementById('calculator-display');
    display.value = ""; // Clear the display
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('calculator-display');
    try {
        // Evaluate the expression and update the display
        display.value = eval(display.value); 
    } catch (error) {
        // Handle invalid expressions
        display.value = "Error";
}
}