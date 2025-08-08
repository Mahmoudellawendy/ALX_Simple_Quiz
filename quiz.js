// انتظر تحميل الصفحة بالكامل قبل تنفيذ الكود
document.addEventListener("DOMContentLoaded", function () {
    // جلب زر الإرسال
    const submitButton = document.getElementById("submit-answer");

    // تعريف دالة التحقق من الإجابة
    function checkAnswer() {
        // جلب القيمة الصحيحة (الإجابة الصحيحة)
        const correctAnswer = "b"; // عدلها حسب إجابتك الصحيحة

        // جلب إجابة المستخدم المختارة
        const userAnswer = document.querySelector('input[name="answer"]:checked');

        // مكان عرض النتيجة
        const feedbackDiv = document.getElementById("feedback");

        // تأكد إن المستخدم اختار إجابة
        if (!userAnswer) {
            feedbackDiv.textContent = "Please select an answer before submitting.";
            feedbackDiv.style.color = "#dc3545"; // أحمر
            return;
        }

        // مقارنة الإجابة
        if (userAnswer.value === correctAnswer) {
            feedbackDiv.textContent = "Correct! Well done.";
            feedbackDiv.style.color = "#28a745"; // أخضر
        } else {
            feedbackDiv.textContent = "Incorrect. Try again!";
            feedbackDiv.style.color = "#dc3545"; // أحمر
        }
    }

    // ربط الدالة بزر الإرسال
    submitButton.addEventListener("click", checkAnswer);
});
