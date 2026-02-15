// script.js

const lyricsTiming = {
    27.8: "Line 1",
    30.0: "Line 2",
    33.2: "Line 3",
    36.5: "Line 4",
    40.0: "Line 5",
    43.5: "Line 6",
    47.0: "Line 7",
    50.5: "Line 8",
    54.0: "Line 9"
};

function displayLyrics(currentTime) {
    for (const time in lyricsTiming) {
        if (currentTime >= time) {
            console.log(lyricsTiming[time]);
        }
    }
}

// Example: Simulated playback at 55 seconds
setInterval(() => {
    const currentTime = ...; // Replace with actual current playback time
    displayLyrics(currentTime);
}, 1000);