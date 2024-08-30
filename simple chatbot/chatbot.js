document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    function appendMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.innerText = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
    }

    function getBotResponse(input) {
        input = input.toLowerCase();
        if (input.includes("hello") || input.includes("hi")) {
            return "Hi there! How can I assist you?";
        } else if (input.includes("how are you")) {
            return "I'm just a bot, but I'm here to help you!";
        } else if (input.includes("your name")) {
            return "I'm just a simple chatbot created to help you.";
        } else if (input.includes("bye") || input.includes("exit")) {
            return "Goodbye! Have a great day!";
        } else {
            return "Sorry, I don't understand that. Could you rephrase?";
        }
    }

    sendBtn.addEventListener("click", function () {
        const userText = userInput.value.trim();
        if (userText === "") return;

        appendMessage("user", userText);
        const botResponse = getBotResponse(userText);
        appendMessage("bot", botResponse);

        userInput.value = ""; // Clear input field
    });

    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });
});
