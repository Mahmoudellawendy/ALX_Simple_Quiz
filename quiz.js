function checkAnswer() {
    // 1. تحديد الإجابة الصحيحة
    const correctAnswer = "4";

    // 2. جلب إجابة المستخدم من الراديو المختار
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // 3. إذا المستخدم ما اختارش حاجة، ندي رسالة تنبيه
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return; // نوقف الدالة هنا لأن مافيش إجابة
    }

    // 4. الحصول على قيمة إجابة المستخدم
    const userAnswer = selectedOption.value;

    // 5. المقارنة بين إجابة المستخدم والإجابة الصحيحة
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// 6. إضافة حدث الضغط على زر "Submit Answer" ليشغل دالة checkAnswer
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
