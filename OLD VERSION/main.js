document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-button');
    
    playButton.addEventListener('click', () => {
        // Generate a random location (if not already done)
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        
        // Save the location to localStorage
        localStorage.setItem('gameLocation', JSON.stringify(randomLocation));

        // Redirect to the index.html page (main game page)
        window.location.href = 'index.html';
    });
});
