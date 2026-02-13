const container = document.body;

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // You can randomize this: ['❤️', '💖', '💝', '💕'][Math.floor(Math.random()*4)]
    
    // Randomize emoji
    const emojis = ['❤️', '💖', '💝', '💕', '🌹'];
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // 3-5s
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
