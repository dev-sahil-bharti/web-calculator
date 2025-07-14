document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById('display');

    function appendValue(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function backspace() {
        display.value = display.value.slice(0, -1);
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    function calculateSqrt() {
        display.value = Math.sqrt(eval(display.value));
    }

    function calculateSquare() {
        display.value = Math.pow(eval(display.value), 2);
    }

    function calculateSin() {
        display.value = Math.sin(eval(display.value) * Math.PI / 180).toFixed(6);
    }

    function calculateCos() {
        display.value = Math.cos(eval(display.value) * Math.PI / 180).toFixed(6);
    }

    function calculateTan() {
        display.value = Math.tan(eval(display.value) * Math.PI / 180).toFixed(6);
    }

    function calculateLog() {
        display.value = Math.log10(eval(display.value)).toFixed(6);
    }

    function calculateExp() {
        display.value = Math.exp(eval(display.value)).toFixed(6);
    }

    function calculatePower() {
        display.value += "**";
    }

    // 🎯 **Keyboard Support**
    document.addEventListener("keydown", function (event) {
        if ((event.key >= '0' && event.key <= '9') || "+-*/.()%".includes(event.key)) {
            appendValue(event.key);
        } else if (event.key === "Enter") {
            calculateResult();
        } else if (event.key === "Backspace") {
            backspace();
        } else if (event.key === "Escape") {
            clearDisplay();
        }
    });

    // Global functions
    window.appendValue = appendValue;
    window.clearDisplay = clearDisplay;
    window.calculateResult = calculateResult;
    window.backspace = backspace;
    window.calculateSqrt = calculateSqrt;
    window.calculateSquare = calculateSquare;
    window.calculateSin = calculateSin;
    window.calculateCos = calculateCos;
    window.calculateTan = calculateTan;
    window.calculateLog = calculateLog;
    window.calculateExp = calculateExp;
    window.calculatePower = calculatePower;
});
