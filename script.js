const words = [
    "Creative Thinker",
    "Aspiring Developer",
    "Artist",
    "Tech Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");


// TYPING ANIMATION FUNCTION
function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 120;

    // Pause after completing a word
    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    }

    // Move to the next word
    else if (deleting && charIndex === 0) {
        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}


// START ANIMATION
if (typingElement) {
    typeEffect();
}

