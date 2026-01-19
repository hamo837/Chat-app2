const messages = document.getElementById('messages');
const input = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const imageBtn = document.getElementById('imageBtn');
const imageInput = document.getElementById('imageInput');


sendBtn.onclick = sendMessage;


input.addEventListener('keypress', e => {
if (e.key === 'Enter') sendMessage();
});


imageBtn.onclick = () => imageInput.click();


imageInput.onchange = () => {
const file = imageInput.files[0];
if (!file) return;


const reader = new FileReader();
reader.onload = () => {
const img = document.createElement('img');
img.src = reader.result;
const msg = document.createElement('div');
msg.className = 'message';
msg.appendChild(img);
messages.appendChild(msg);
scrollDown();
};
reader.readAsDataURL(file);
};


function sendMessage() {
const text = input.value.trim();
if (!text) return;


const msg = document.createElement('div');
msg.className = 'message text';
msg.innerText = text;


messages.appendChild(msg);
input.value = '';
scrollDown();
}


function scrollDown() {
messages.scrollTop = messages.scrollHeight;
}