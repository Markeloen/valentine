// Elements
const music = document.getElementById('bg-music');
const muteBtn = document.getElementById('mute-btn');
const musicControl = document.getElementById('music-control');

// Stages
const stageGreeting = document.getElementById('stage-greeting');
const stagePole = document.getElementById('stage-pole');
const stageYin = document.getElementById('stage-yin');
const stageIntro = document.getElementById('stage-intro'); // Original "Hi Love" page
const stageBoxes = document.getElementById('stage-boxes'); // Original Box page

// Buttons & Actions
const btnGreetingNext = document.getElementById('btn-greeting-next');
const btnPoleStart = document.getElementById('btn-pole-start');
const btnPoleNext = document.getElementById('btn-pole-next');
const poleGifsContainer = document.getElementById('pole-gifs-container');

const btnYinReveal = document.getElementById('btn-yin-reveal');
const btnYinNext = document.getElementById('btn-yin-next');
const yinStatic = document.getElementById('yin-static');
const yinGif = document.getElementById('yin-gif');

const startBtn = document.getElementById('start-btn'); // From original code
const nextBtn = document.getElementById('next-btn'); // From original code
const boxMessage = document.getElementById('box-message'); // From original code
const boxes = document.querySelectorAll('.box'); // From original code

// --- Music Control ---
let isMuted = false;
muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    music.muted = isMuted;
    muteBtn.textContent = isMuted ? '🔇' : '🔊';
});

// --- Stage 1: Greeting -> Pole ---
btnGreetingNext.addEventListener('click', () => {
    stageGreeting.classList.add('hidden');
    stagePole.classList.remove('hidden');
    
    // Start Music
    music.play().catch(e => console.log("Audio play failed (user interaction needed?):", e));
    musicControl.classList.remove('hidden');
});

// --- Stage 2: Pole Dance ---
btnPoleStart.addEventListener('click', () => {
    btnPoleStart.classList.add('hidden');
    poleGifsContainer.classList.remove('hidden');
    
    // Wait for gifs to play a bit (e.g., 6 seconds)
    setTimeout(() => {
        btnPoleNext.classList.remove('hidden');
    }, 6000);
});

btnPoleNext.addEventListener('click', () => {
    stagePole.classList.add('hidden');
    stageYin.classList.remove('hidden');
});

// --- Stage 3: Yin Yang ---
btnYinReveal.addEventListener('click', () => {
    btnYinReveal.classList.add('hidden');
    yinStatic.classList.add('hidden');
    yinGif.classList.remove('hidden');

    // Wait for gif to play (e.g., 5 seconds)
    setTimeout(() => {
        btnYinNext.classList.remove('hidden');
    }, 5000);
});

btnYinNext.addEventListener('click', () => {
    stageYin.classList.add('hidden');
    stageIntro.classList.remove('hidden');
});

// --- Stage 4: Original Intro (Hi Love) ---
startBtn.addEventListener('click', () => {
    stageIntro.classList.add('hidden');
    stageBoxes.classList.remove('hidden');
});

// --- Stage 5: Boxes ---

// Messages hidden in boxes

const messages = [

    "You're the sweetest! 🍬",

    "You make me smile! 😊",

    "I adore you! 💖"

];



// Helper to make selectBox available globally or attach listeners differently

// Since onclick="selectBox(1)" is in HTML, we need to attach it to window or add listeners here.

// Better to add listeners here to keep it clean.



boxes.forEach((box, index) => {

    box.addEventListener('click', () => {

        if (box.classList.contains('opened')) return;

        

        // Reset all boxes pointer events to prevent multiple clicks

        boxes.forEach(b => b.style.pointerEvents = 'none');



        // Animate selected box

        box.classList.add('opened');

        box.textContent = '❤️';



        // Show message

        const randomMsg = messages[Math.floor(Math.random() * messages.length)];

        boxMessage.textContent = randomMsg;

        boxMessage.classList.remove('hidden');



        // Show continue button

        nextBtn.classList.remove('hidden');

    });

});



nextBtn.addEventListener('click', () => {

    // Redirect to the "Ask" page

    stageBoxes.classList.add('hidden');

    document.getElementById('stage-ask').classList.remove('hidden');

    

    // Ensure music continues

});



// --- Stage 6: The Ask (Envelope & Letter) ---

const envelope = document.getElementById("envelope-container");

const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");

const yesBtn = document.querySelector(".yes-btn");

const letterTitle = document.getElementById("letter-title");

const letterCat = document.getElementById("letter-cat");

const letterButtons = document.getElementById("letter-buttons");

const finalText = document.getElementById("final-text");

const flowerStage = document.getElementById("stage-flowers");



envelope.addEventListener("click", () => {

    envelope.style.display = "none";

    letter.style.display = "flex";

    

    setTimeout( () => {

        document.querySelector(".letter-window").classList.add("open");

    },50);

});



noBtn.addEventListener("mouseover", () => {

    const min = 50;

    const max = 200;

    const distance = Math.random() * (max - min) + min;

    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;

    const moveY = Math.sin(angle) * distance;

    

    noBtn.style.transition = "transform 0.3s ease";

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

});



yesBtn.addEventListener("click", () => {



    letterTitle.textContent = "Yippeeee!";



    letterCat.src = "ask/cat_dance.gif";



    document.querySelector(".letter-window").classList.add("final");



    letterButtons.style.display = "none";



    finalText.style.display = "block";



    



    // Redirect to flower page after a short delay (using iframe)



    setTimeout(() => {



        document.getElementById('stage-ask').classList.add('hidden');



        flowerStage.classList.remove('hidden');



        flowerStage.src = "flowers/flower.html"; // Start the animation



        



        // Mute bg music if flowers page has its own or if requested



        // Or keep it playing. The user said: "start of second page so at the start of second page the songs start playing :D"



        // It implies music should continue or start.



    }, 2000);



});
