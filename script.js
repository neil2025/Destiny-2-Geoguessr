let timerInterval, remainingTime, map, keydownListener, locationImageKeydownListener;
let currentRound = 1;
let totalScore = 0;
let currentMarker = null;
let guessedMap = '';
let roundScores = [];

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('game.html')) {
        startGame();
    }
});

function loadRound(imageFolder, mode) {
    if (currentRound > 5) {
        endGame();
        return;
    }

    const existingProgressBar = document.getElementById('timer-progress-bar');
    if (existingProgressBar) {
        existingProgressBar.remove();
    }

    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) {
        timerDisplay.innerText = ''; // Reset the timer display
    }

    document.getElementById('round-info').innerText = `Round ${currentRound} of 5`;
    document.getElementById('score-info').innerText = `Score: ${totalScore}`;

    const location = getRandomLocation(mode);
    document.getElementById('location-img').src = `${imageFolder}/${location.map.toLowerCase()}/${location.image}`;

    startTimer(45, () => onTimeUp(location));

    const mapButtons = document.getElementById('map-buttons');
    mapButtons.innerHTML = '';

    const mapDisplayNames = {
        'Cosmodrome': 'Cosmodrome',
        'DreamingCity': 'The Dreaming City',
        'EDZ': 'EDZ',
        'Europa': 'Europa',
        'Moon': 'Moon',
        'Neomuna': 'Neomuna',
        'Nessus': 'Nessus',
        'STW': 'Savathun\'s Throne World',
        'TPH': 'The Pale Heart'
    };

    const maps = Object.keys(mapDisplayNames);
    maps.forEach(mapName => {
        const button = document.createElement('button');
        button.innerText = mapDisplayNames[mapName];
        button.classList.add('map-button');

        const className = `map-${mapName.toLowerCase().replace(/[^a-z0-9]/gi, '')}`;
        button.classList.add(className);

        button.addEventListener('click', () => {
            guessedMap = mapName;
            openMapModal(mapName, location, imageFolder);
        });

        mapButtons.appendChild(button);
    });
}

function openMapModal(mapName, location, imageFolder) {
    const modal = document.getElementById('map-modal'); // Ensure modal is defined
    const modalContent = modal.querySelector('.modal-content'); // Now this will work

    // Check if the button already exists
    if (!modalContent.querySelector('.view-image-btn')) {
        const viewImageBtn = document.createElement('button');
        viewImageBtn.className = 'view-image-btn';
        viewImageBtn.innerHTML = 'View Location Image';
        modalContent.appendChild(viewImageBtn);

        viewImageBtn.onclick = () => {
            openLocationImage(imageFolder, location.image);
        };
    }

    // Define the keydown listener
    keydownListener = (event) => {
        if (event.key === 'Tab') {
            if (mapName && location && location.image) {
                openLocationImage(`${imageFolder}`, location.image);
            } else {
                alert('Error: Map name or location image is undefined.');
            }
        } else if (event.key === 'Escape') {
            closeLocationImage();
        } else if (event.key === 'Enter') {
            submitGuess(location);
        }
    };

    // Add the keydown listener
    document.addEventListener('keydown', keydownListener);

    guessedMap = mapName;
    modal.style.display = 'block';

    const closeBtn = document.querySelector('.close-btn');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        guessedMap = '';
        document.removeEventListener('keydown', keydownListener); // Remove listener on close

        // Remove the "View Location Image" button
        const viewImageBtn = modalContent.querySelector('.view-image-btn');
        if (viewImageBtn) {
            viewImageBtn.remove();
        }
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            guessedMap = '';
            document.removeEventListener('keydown', keydownListener); // Remove listener on close

            // Remove the "View Location Image" button
            const viewImageBtn = modalContent.querySelector('.view-image-btn');
            if (viewImageBtn) {
                viewImageBtn.remove();
            }
        }
    };

    initializeMap(mapName, location);
}

function initializeMap(mapName, location) {
    if (map) {
        map.remove();
    }

    map = L.map('map', {
        crs: L.CRS.Simple,
        maxZoom: 7,
        minZoom: -1,
    }).setView([500, 500], 1);

    const imageUrl = `maps/${mapName}.png`;
    const img = new Image();
    img.onload = function() {
        const imageBounds = [[0, 0], [img.height, img.width]];

        const extendedBounds = [
            [-50, -50],
            [img.height + 50, img.width + 50]
        ];

        L.imageOverlay(imageUrl, imageBounds).addTo(map);
        map.fitBounds(imageBounds);

        map.setMaxBounds(extendedBounds);
    };
    img.src = imageUrl;

    map.on('click', placeMarker);

    const submitButton = document.getElementById('submit-button');
    submitButton.style.display = 'none';
    submitButton.onclick = () => submitGuess(location);
}

function placeMarker(e) {
    const latLng = e.latlng;

    if (currentMarker) {
        map.removeLayer(currentMarker);
    }

    const redMarkerIcon = L.icon({
        iconUrl: 'icons/marker.png',
        iconSize: [30, 45],
        iconAnchor: [15, 45],
        popupAnchor: [0, -45],
    });

    currentMarker = L.marker(latLng, { icon: redMarkerIcon }).addTo(map);

    const submitButton = document.getElementById('submit-button');
    submitButton.style.display = 'block';
}

function submitGuess(location, timeUp = false) {
    if (!currentMarker && !timeUp) {
        alert('Please place a marker on the map!');
        return;
    }

    stopTimer();

    const guessedCoordinates = currentMarker ? currentMarker.getLatLng() : null;
    const actualCoordinates = location ? location.coordinates : null;
    const mapName = location ? location.map : null;

    const distance = timeUp ? Infinity : calculateDistance(guessedCoordinates, actualCoordinates);
    const points = timeUp ? 0 : calculatePoints(distance, mapName, remainingTime);

    totalScore += points;
    roundScores.push(points);
    localStorage.setItem('roundScores', JSON.stringify(roundScores));

    showRoundSummary(
        guessedCoordinates,
        actualCoordinates,
        points,
        distance,
        mapName,
        location ? location.image : null,
        timeUp
    );

    currentRound++;
    localStorage.setItem('totalScore', totalScore);
}

function calculateDistance(guessedCoordinates, actualCoordinates) {
    const x1 = actualCoordinates[0];
    const y1 = actualCoordinates[1];
    const x2 = guessedCoordinates.lat;
    const y2 = guessedCoordinates.lng;

    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function calculatePoints(distance, mapName, timeRemaining) {
    if (guessedMap !== mapName || timeRemaining === 0) {
        return 0;
    }

    const maxPoints = 1500;
    const perfectRadius = 40;
    const falloffRadius = 500;
    const totalTime = 45;

    let score;
    if (distance <= perfectRadius) {
        return maxPoints;
    } else if (distance > falloffRadius) {
        const tailScore = Math.max(1, 300 - 0.1 * (distance - falloffRadius));
        score = Math.max(1, Math.ceil(tailScore));
    } else {
        const decay = (distance - perfectRadius) / (falloffRadius - perfectRadius);
        score = maxPoints * Math.pow(1 - decay, 2);
        score = Math.ceil(score);
    }

    const timePenalty = ((totalTime - timeRemaining) / totalTime) * maxPoints * 0.2;
    score -= Math.floor(timePenalty);

    return Math.max(1, score);
}


function showRoundSummary(guessedCoordinates, actualCoordinates, points, distance, mapName, locationImage, timeUp = false) {
    // Remove the keydown listener to prevent further submissions
    if (keydownListener) {
        document.removeEventListener('keydown', keydownListener);
        keydownListener = null;
    }

    const modal = document.getElementById('map-modal');
    modal.style.display = 'none';

    const summaryModal = document.createElement('div');
    summaryModal.className = 'modal';
    summaryModal.style.display = 'block';

    const summaryContent = document.createElement('div');
    summaryContent.className = 'modal-content';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.innerHTML = 'Next &rarr;';

    const viewImageBtn = document.createElement('button');
    viewImageBtn.className = 'view-image-btn';
    viewImageBtn.innerHTML = 'View Location Image';

    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode') || 'normal';

    let imageFolder = 'images';
    if (mode === 'hard') {
        imageFolder = 'hard_images';
    }

    nextBtn.onclick = () => {
        summaryModal.style.display = 'none';
        if (map && currentMarker) {
            map.removeLayer(currentMarker); // Ensure map and currentMarker are defined
        }
        loadRound(imageFolder, mode);
    };

    viewImageBtn.onclick = () => {
        openLocationImage(imageFolder, locationImage);
    };

    const mapContainer = document.createElement('div');
    mapContainer.id = 'summary-map';
    mapContainer.style.width = '800px';
    mapContainer.style.height = '600px';
    mapContainer.style.margin = '0 auto';

    const mapDisplayNames = {
        'Cosmodrome': 'Cosmodrome',
        'DreamingCity': 'The Dreaming City',
        'EDZ': 'EDZ',
        'Europa': 'Europa',
        'Moon': 'Moon',
        'Neomuna': 'Neomuna',
        'Nessus': 'Nessus',
        'STW': 'Savathun\'s Throne World',
        'TPH': 'The Pale Heart'
    };

    const guessedMapDisplayName = mapDisplayNames[guessedMap] || guessedMap;
    const actualMapDisplayName = mapDisplayNames[mapName] || mapName;

    const summaryText = document.createElement('p');
    if (timeUp) {
        summaryText.innerText = `Sorry! Time is up! \nYou earned 0 points.\n`;
    } else if (guessedMap !== mapName) {
        summaryText.innerText = `Sorry! Wrong planet :( \nYou guessed ${guessedMapDisplayName} but the correct location was on ${actualMapDisplayName}.\n You earned 0 points.\n`;
    } else {
        if (points === 1500) {
            summaryText.innerHTML = `You were ${distance.toFixed(2)} units away from the correct location. You earned <span class="golden-glow">${points}</span> points.\n`;
        } else {
            summaryText.innerText = `You were ${distance.toFixed(2)} units away from the correct location. You earned ${points} points.\n`;
        }
    }
    summaryText.innerHTML += `<br><strong>Total Score: ${totalScore}</strong>`;
    summaryContent.appendChild(mapContainer);
    summaryContent.appendChild(summaryText);
    summaryContent.appendChild(viewImageBtn);
    summaryContent.appendChild(nextBtn);
    summaryModal.appendChild(summaryContent);
    document.body.appendChild(summaryModal);

    const summaryMap = L.map(mapContainer, {
        crs: L.CRS.Simple,
        maxZoom: 5,
        minZoom: -1,
    }).setView([500, 500], 1);
    const imageUrl = `maps/${mapName}.png`;
    const img = new Image();
    img.onload = function() {
        const imageBounds = [[0, 0], [img.height, img.width]];
        L.imageOverlay(imageUrl, imageBounds).addTo(summaryMap);
        summaryMap.fitBounds(imageBounds);

        const actualMarker = L.marker(actualCoordinates, {
            icon: L.icon({
                iconUrl: 'icons/flag.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }).addTo(summaryMap);

        summaryMap.setView(actualCoordinates, 0);

        if (guessedMap === mapName) {
            const guessedMarker = L.marker(guessedCoordinates, {
                icon: L.icon({
                    iconUrl: 'icons/marker.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                })
            }).addTo(summaryMap);
            L.polyline([guessedCoordinates, actualCoordinates], { color: 'blue' }).addTo(summaryMap);
        }
    };
    img.src = imageUrl;
}

function openLocationImage(imageFolder, mapName) {
    const imageModal = document.createElement('div');
    imageModal.className = 'image-modal';
    imageModal.style.display = 'block';

    const imageContent = document.createElement('div');
    imageContent.className = 'image-modal-content';

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-image-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => closeLocationImage(imageModal);

    const image = document.createElement('img');
    const baseMapName = mapName.replace(/\d+\.png$/, '');
    image.src = `${imageFolder}/${baseMapName.toLowerCase()}/${mapName}`;
    image.className = 'location-image';

    image.onerror = () => {
        alert('Image not found. Please check the file path or folder structure.');
        closeLocationImage(imageModal);
    };

    imageContent.appendChild(closeBtn);
    imageContent.appendChild(image);
    imageModal.appendChild(imageContent);
    document.body.appendChild(imageModal);

    locationImageKeydownListener = (event) => {
        if (event.key === 'Escape') {
            closeLocationImage(imageModal);
        }
    };
    document.addEventListener('keydown', locationImageKeydownListener);
}

function closeLocationImage() {
    const imageModal = document.querySelector('.image-modal');
    if (imageModal) {
        imageModal.style.display = 'none';
        imageModal.remove();
    }

    if (locationImageKeydownListener) {
        document.removeEventListener('keydown', locationImageKeydownListener);
        locationImageKeydownListener = null;
    }
}

function getRandomLocation(mode) {
    let locationPool = locations;

    if (mode === 'hard') {
        locationPool = hardLocations;
    }

    const randomIndex = Math.floor(Math.random() * locationPool.length);
    return locationPool[randomIndex];
}

function startTimer(duration, onTimeUp) {
    const timerDisplay = document.getElementById('timer-display');
    let progressContainer = document.getElementById('timer-progress-container');

    // Ensure timer display is visible
    if (timerDisplay) {
        timerDisplay.style.display = 'block';
        timerDisplay.style.color = 'white';
    }

    // Create progress container if it doesn't exist
    if (!progressContainer) {
        progressContainer = document.createElement('div');
        progressContainer.id = 'timer-progress-container';
        document.body.appendChild(progressContainer);
    } else {
        progressContainer.style.display = 'block'; // Ensure it's visible
    }

    // Create progress bar if it doesn't exist
    let progressBar = document.getElementById('timer-progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'timer-progress-bar';
        progressContainer.appendChild(progressBar);
    } else {
        progressBar.style.display = 'block'; // Ensure it's visible
    }

    let timeRemaining = duration;
    timerDisplay.innerText = formatTime(timeRemaining);

    timerInterval = setInterval(() => {
        timeRemaining--;
        remainingTime = timeRemaining;

        const progressPercentage = Math.max(timeRemaining / duration, 0);
        progressBar.style.transform = `scaleX(${progressPercentage})`;

        if (timeRemaining <= 10) {
            timerDisplay.style.color = 'red';
            progressBar.style.backgroundColor = 'red';
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            progressBar.style.transform = 'scaleX(0)';
            onTimeUp();
        } else {
            timerDisplay.innerText = formatTime(timeRemaining);
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function stopTimer() {
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) {
        timerDisplay.style.display = 'none';
    }

    const progressContainer = document.getElementById('timer-progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'none';
    }

    clearInterval(timerInterval);
}

function onTimeUp(location) {
    stopTimer();
    if (currentMarker) {
        map.removeLayer(currentMarker);
        currentMarker = null;
    }
    submitGuess(location, true);
}
function startGame() {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode') || 'normal';

    let imageFolder = 'images';
    if (mode === 'hard') {
        imageFolder = 'hard_images';
    }

    loadRound(imageFolder, mode);
}

function endGame() {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    localStorage.setItem('gameMode', mode);
    window.location.href = 'results.html';
}