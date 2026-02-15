// script.js

// Functionality to handle the continue button
const continueButton = document.getElementById('continueButton');
const screens = document.querySelectorAll('.screen');
const audioPlayer = document.getElementById('audioPlayer');

let currentScreenIndex = 0;

// Function to show a specific screen
function showScreen(index) {
    screens.forEach((screen, i) => {
        screen.style.display = (i === index) ? 'block' : 'none';
    });
}

// Event listener for the continue button
continueButton.addEventListener('click', () => {
    currentScreenIndex++;
    if (currentScreenIndex < screens.length) {
        showScreen(currentScreenIndex);
    }
});

// Function to control the audio player
function controlAudio(action) {
    if (action === 'play') {
        audioPlayer.play();
    } else if (action === 'pause') {
        audioPlayer.pause();
    }
}

// Control audio as needed
controlAudio('play'); // Example to start playing audio

// Initially show the first screen
showScreen(currentScreenIndex);