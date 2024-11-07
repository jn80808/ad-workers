function changeMessage() {
    const greetings = [
        "Hello World!",
        "¡Hola Mundo!",
        "Bonjour le Monde!",
        "Hallo Welt!",
        "你好，世界！",
        "こんにちは世界！"
    ];
    
    const greeting = document.getElementById('greeting');
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greeting.textContent = randomGreeting;
} 