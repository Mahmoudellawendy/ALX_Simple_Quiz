document.addEventListener("DOMContentLoaded", function () {
    // مثال على متغير quiz - يمكن تمثيل السؤال والإجابة الصحيحة
    const quiz = {
        correctAnswer: "b"
    };

    const submitButton = document.getElementById("submit-answer");
    const feedbackDiv = document.getElementById("feedback");

    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');

        if (!selectedOption) {
            feedbackDiv.textContent = "Please select an answer before submitting.";
            feedbackDiv.style.color = "#dc3545";
            return;
        }

        const userAnswer = selectedOption.value;

        if (userAnswer === quiz.correctAnswer) {
            feedbackDiv.textContent = "Correct! Well done.";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.textContent = "That's incorrect. Try again!";
            feedbackDiv.style.color = "#dc3545";
        }
    }

    submitButton.addEventListener("click", checkAnswer);
});
