// Get elements
const continueButton = document.getElementById('continueButton');
const backButton = document.getElementById('backButton');
const welcomeScreen = document.getElementById('welcomeScreen');
const musicScreen = document.getElementById('musicScreen');
const playBtn = document.getElementById('playBtn');
const audioPlayer = document.getElementById('audioPlayer');
const lyricsDisplay = document.getElementById('lyricsDisplay');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const progressFill = document.getElementById('progressFill');
const progressBar = document.querySelector('.progress-bar');

// Song lyrics that match the song
const songLyrics = [
    "My baby, My valentine",
    "You are the one I want",
    "Love nwantiti baby",
    "My love, My darling",
    "Forever with you"
];

let isPlaying = false;
let currentLyricIndex = 0;

// Continue button - go to music screen
continueButton.addEventListener('click', function() {
    welcomeScreen.classList.remove('active');
    musicScreen.classList.add('active');
});

// Back button - go to welcome screen
backButton.addEventListener('click', function() {
    musicScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
    audioPlayer.pause();
    isPlaying = false;
    playBtn.textContent = '▶';
});

// Play/Pause button
playBtn.addEventListener('click', function() {
    if (isPlaying) {
        audioPlayer.pause();
        playBtn.textContent = '▶';
        isPlaying = false;
    } else {
        audioPlayer.play();
        playBtn.textContent = '⏸';
        isPlaying = true;
    }
});

// Update time display
audioPlayer.addEventListener('timeupdate', function() {
    // Update progress bar
    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressFill.style.width = percentage + '%';
    
    // Update current time
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    
    // Update lyrics based on current time
    updateLyrics();
});

// When audio ends
audioPlayer.addEventListener('ended', function() {
    playBtn.textContent = '▶';
    isPlaying = false;
    audioPlayer.currentTime = 0;
    progressFill.style.width = '0%';
});

// When audio loads
audioPlayer.addEventListener('loadedmetadata', function() {
    durationEl.textContent = formatTime(audioPlayer.duration);
});

// Click on progress bar to seek
progressBar.addEventListener('click', function(e) {
    const rect = progressBar.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    audioPlayer.currentTime = percentage * audioPlayer.duration;
});

// Format time in MM:SS
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update lyrics based on song progress
function updateLyrics() {
    const progress = audioPlayer.currentTime / audioPlayer.duration;
    const lyricIndex = Math.floor(progress * songLyrics.length);
    
    if (lyricIndex < songLyrics.length && lyricIndex !== currentLyricIndex) {
        currentLyricIndex = lyricIndex;
        lyricsDisplay.textContent = songLyrics[currentLyricIndex];
    }
}