document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-answer");
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

        if (userAnswer === correctAnswer) {
            feedbackDiv.textContent = "Correct! Well done.";
            feedbackDiv.style.color = "#28a745";
        } else {
            // لازم النص ده بالظبط
            feedbackDiv.textContent = "That's incorrect. Try again!";
            feedbackDiv.style.color = "#dc3545";
        }
    }

    // ربط الزر بالحدث
    submitButton.addEventListener("click", checkAnswer);
});
