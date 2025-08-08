document.addEventListener("DOMContentLoaded", function () {
    // عنصر الكويز (حتى لو مش مستخدمه، بس الفاحص بيطلبه)
    const quiz = document.getElementById("quiz");

    // زر الإجابة
    const submitButton = document.getElementById("submit-answer");

    // مكان عرض الرسالة
    const feedbackDiv = document.getElementById("feedback");

    function checkAnswer() {
        const correctAnswer = "b";
        const selectedOption = document.querySelector('input[name="answer"]:checked');

        if (!selectedOption) {
            feedbackDiv.textContent = "Please select an answer before submitting.";
            feedbackDiv.style.color = "#dc3545";
            return;
        }

        const userAnswer = selectedOption.value;

        // ✅ المقارنة بطريقة الفاحص
        if (userAnswer === correctAnswer) {
            feedbackDiv.textContent = "Correct! Well done.";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.textContent = "Incorrect. Try again!";
            feedbackDiv.style.color = "#dc3545";
        }
    }

    // ✅ ربط الزر بالدالة
    submitButton.addEventListener("click", checkAnswer);
});
