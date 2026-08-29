let display = document.getElementById("display");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let clear = document.getElementById("clear");
let deleteButton = document.getElementById("delete");
let equal = document.getElementById("equal");
let firstNumber = "";
let operator = "";
let newNumber = false;
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        let value = numbers[i].innerText;
        if (display.value == "0" || newNumber == true) {
            display.value = value;
            newNumber = false;
        }
        else {
            display.value = display.value + value;
        }
    });
}
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
        if (display.value == "Error") {
            return;
        }
        if (firstNumber != "" && operator != "") {
            let result = calculate(
                Number(firstNumber),
                Number(display.value),
                operator
            );
            display.value = result;
            firstNumber = result;
        }
        else {
            firstNumber = display.value;
        }
        operator = operators[i].innerText;
        newNumber = true;
    });
}
equal.addEventListener("click", function () {
    if (firstNumber == "" || operator == "") {
        return;
    }
    let secondNumber = display.value;
    let result = calculate(
        Number(firstNumber),
        Number(secondNumber),
        operator
    );
    display.value = result;
    firstNumber = "";
    operator = "";
    newNumber = true;
});
function calculate(num1, num2, operator) {
    if (operator == "+") {
        return num1 + num2;
    }
    else if (operator == "−") {
        return num1 - num2;
    }
    else if (operator == "×") {
        return num1 * num2;
    }
    else if (operator == "÷") {
        if (num2 == 0) {
            return "Error";
        }
        return num1 / num2;
    }
    else if (operator == "%") {
        return num1 % num2;
    }
}
clear.addEventListener("click", function () {
    display.value = "0";
    firstNumber = "";
    operator = "";
    newNumber = false;
});
deleteButton.addEventListener("click", function () {
    if (display.value == "Error") {
        display.value = "0";
        return;
    }
    if (display.value.length > 1) {
        display.value =
            display.value.slice(0, -1);
    }
    else {
        display.value = "0";
    }
});