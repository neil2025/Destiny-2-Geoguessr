document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', () => {
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];

        localStorage.setItem('gameLocation', JSON.stringify(randomLocation));

        window.location.href = 'index.html';
    });
});
