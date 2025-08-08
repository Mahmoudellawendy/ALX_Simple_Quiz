function add(a, b) {
    return a + b;
}

function subtract(a, b) {  // ✅ تم تصحيح اسم الدالة
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "cannot divide by zero";
    }
    return a / b;
}

function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

document.getElementById('add').addEventListener('click', function() {
    const [a, b] = getInputValues();
    displayResult(add(a, b));  // ✅ صحيح
});

document.getElementById('subtract').addEventListener('click', function() {
    const [a, b] = getInputValues();
    displayResult(subtract(a, b));  // ✅ تم إصلاح الاسم وتمرير القيم
});

document.getElementById('multiply').addEventListener('click', function() {
    const [a, b] = getInputValues();
    displayResult(multiply(a, b));  // ✅ تم تمرير القيم
});

document.getElementById('divide').addEventListener('click', function() {
    const [a, b] = getInputValues();
    displayResult(divide(a, b));  // ✅ تم تمرير القيم
});
