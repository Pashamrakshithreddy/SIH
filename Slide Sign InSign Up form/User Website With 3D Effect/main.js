var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove:false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel:true
});
swiper.sliderMove = function (s, e) {
    console.log(s)
}
function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")
    swiper.slideTo(indx, 1000, true)
}
function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    const chatIcon = document.querySelector('.chat-icon');

    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
        chatIcon.style.display = 'none';
    } else {
        chatBox.style.display = 'none';
        chatIcon.style.display = 'block';
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    const chatMessages = document.getElementById('chat-messages');
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'user';
    userMessageDiv.textContent = userInput;
    chatMessages.appendChild(userMessageDiv);

    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'bot';
        botMessageDiv.textContent = data.response;
        chatMessages.appendChild(botMessageDiv);
        document.getElementById('user-input').value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    })
    .catch(error => console.error('Error:', error));
}

