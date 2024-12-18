const responses ={
"hello":"Chào bạn",	
"hi":" Chào bạn",
"xin chào":"chào bạn",
"ở đây có những món gì?": "- gà chiên giòn.</br>- hamberger.</br>- khoai tây chiên.</br>- xúc xích chiên.",
"ở đây có những nước uống gì?": "- coca cola.</br>- pessi.</br>- nước lọc.</br>- nước lọc.</br>- trà đá.</br>- sting.</br>- v.v.",
"ở đây có những món ăn về đêm là gì?": "- Mì gói úp trứng (kèm xúc xích, rau cải, chả cá, phô mai).</br>- Hamburger hoặc bánh mì thịt.</br>- Bánh mì trứng, bánh mì pate.</br>- Xúc xích rán hoặc khoai tây chiên.",
"ở đây có những món ăn nhẹ là gì": "- Bắp xào bơ tỏi.</br>- Trứng cút lộn xào me.</br>- Nem chua rán, bánh gạo chiên.</br>- Bánh tráng trộn, bánh tráng nướng.</br>- Hạt dẻ rang, các loại hạt rang tẩm vị."




};

document.getElementById('chatbot-toggle-btn').addEventListener('click', toggleChatbot);
document.getElementById('close-btn').addEventListener('click', toggleChatbot);
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        appendMessage('user', userInput);
        respondToUser(userInput.toLowerCase());
        document.getElementById('user-input').value = '';
    }
}

function respondToUser(userInput) {
    const response = responses[userInput] || responses["default"];
    setTimeout(function() {
        appendMessage('bot', response);
    }, 500);
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    if (sender === 'bot' && message === responses["default"]) {
        const buttonYes = document.createElement('button');
        buttonYes.textContent = '✔ Yes';
        buttonYes.onclick = function() {
            appendMessage('bot', responses["expert"]);
        };
        const buttonNo = document.createElement('button');
        buttonNo.textContent = '✖ No';
        buttonNo.onclick = function() {
            appendMessage('bot', responses["no"]);
        };
const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(buttonYes);
        buttonContainer.appendChild(buttonNo);
        chatBox.appendChild(buttonContainer);
    }
}// JavaScript Document