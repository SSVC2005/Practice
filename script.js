// Simple interaction: cycle greetings when button is clicked
const greeting = document.getElementById('greeting');
const btn = document.getElementById('changeBtn');
const messages = ['Hello, world!', 'Hi there!', 'Howdy!', 'Bonjour!', '¡Hola!'];
let idx = 0;
btn.addEventListener('click', () => {
  idx = (idx + 1) % messages.length;
  greeting.textContent = messages[idx];
});
