document.addEventListener("DOMContentLoaded", function () {
    // استدعاء العنصر اللي يحتوي على الكويز كله
    const quiz = document.getElementById("quiz");

    // زر الإرسال
    const submitButton = document.getElementById("submit-answer");

    // مكان عرض النتيجة
    const feedbackDiv = document.getElementById("feedback");

    // الدالة اللي هتشتغل لما المستخدم يضغط على الزر
    function checkAnswer() {
        // الإجابة الصحيحة المتوقعة
        const correctAnswer = "b"; // عدلها حسب المطلوب

        // جلب إجابة المستخدم المختارة
        const userAnswer = document.querySelector('input[name="answer"]:checked');

        // لو المستخدم ما اختارش إجابة
        if (!userAnswer) {
            feedbackDiv.textContent = "Please select an answer before submitting.";
            feedbackDiv.style.color = "#dc3545";
            return;
        }

        // المقارنة بين الإجابة المختارة والصحيحة
        if (userAnswer.value === correctAnswer) {
            feedbackDiv.textContent = "Correct! Well done.";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.textContent = "Incorrect. Try again!";
            feedbackDiv.style.color = "#dc3545";
        }
    }

    // ربط الدالة بزر الإرسال
    submitButton.addEventListener("click", checkAnswer);
});
