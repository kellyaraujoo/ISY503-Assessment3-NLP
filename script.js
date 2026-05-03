const textarea = document.getElementById("reviewInput");
const chatInput = document.querySelector(".chat-input");

function resetTextarea() {
    textarea.style.height = "42px";
}

function autoResize() {
    textarea.style.height = "42px";
    textarea.style.height = textarea.scrollHeight + "px";
}

function analyzeReview() {
    const text = textarea.value.trim().toLowerCase();

    if (text === "") {
        showResult("Please enter a review.", "negative");
        textarea.focus();
        resetTextarea();
        return;
    }

    if (
        text.includes("good") ||
        text.includes("love") ||
        text.includes("amazing")
    ) {
        showResult("This review looks positive 😊", "positive");
    } else {
        showResult("This review looks negative 😕", "negative");
    }

    textarea.value = "";
    resetTextarea();
    textarea.focus();
}

function showResult(message, type) {
    const popup = document.getElementById("resultPopup");
    const resultText = document.getElementById("resultText");

    resultText.innerText = message;

    popup.classList.remove("positive", "negative", "show");

    setTimeout(() => {
        popup.classList.add(type, "show");
    }, 10);
}

chatInput.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") {
        textarea.focus();
    }
});

textarea.addEventListener("input", autoResize);