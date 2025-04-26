let timerInterval, remainingTime, locationImageKeydownListener;
let currentRound = 1;
let totalScore = 0;
let roundScores = [];
let selectedMap = '';
let currentMarker = null;
let map = null;
keydownListener = null

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('pvp.html')) {
        setupMapDropdown();
        startGame();
    }
});

function loadRound() {
    if (currentRound > 5) {
        endGame();
        return;
    }

    document.getElementById('round-info').textContent = `Round ${currentRound} of 5`;
    document.getElementById('score-info').textContent = `Score: ${totalScore}`;

    const location = getRandomLocation();
    document.getElementById('location-img').src = `pvp_images/${location.map}/${location.image}`;

    startTimer(5, () => onTimeUp(location));
    document.getElementById('submit-button').style.display = 'none';
}

function getRandomLocation(mode) {
    let locationPool = pvpLocations;

    const randomIndex = Math.floor(Math.random() * locationPool.length);
    return locationPool[randomIndex];
}

function setupMapDropdown() {
    const dropdown = document.getElementById('map-dropdown');
    const mapDisplayNames = {
        "javelin": "Javelin-4",
        // Add more maps here
    };

    dropdown.innerHTML = '<option value="" disabled selected>Select a map</option>';
    Object.entries(mapDisplayNames).forEach(([value, text]) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        dropdown.appendChild(option);
    });

    dropdown.addEventListener('change', (event) => {
        selectedMap = event.target.value;
        updateMapDisplay(selectedMap);
    });
}

function startGame() {
    loadRound();
    document.getElementById('submit-button').addEventListener('click', () => {
        if (!selectedMap) {
            alert('Please select a map first!');
            return;
        }
        if (!currentMarker) {
            alert('Please place a marker on the map!');
            return;
        }
        submitGuess(getRandomLocation());
    });
}

function endGame() {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    localStorage.setItem('gameMode', mode);
    window.location.href = 'results.html';
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

    const imageUrl = `pvp_maps/${mapName}.png`;
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

function placeMarker(e, map) {
    if (currentMarker) {
        map.removeLayer(currentMarker);
    }

    const markerIcon = L.icon({
        iconUrl: 'icons/marker.png',
        iconSize: [30, 45],
        iconAnchor: [15, 45]
    });

    currentMarker = L.marker(e.latlng, { icon: markerIcon }).addTo(map);
    document.getElementById('submit-button').style.display = 'block';
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
    const perfectRadius = 10;
    const totalTime = 30;

    let score;

    if (distance <= perfectRadius) {
        return maxPoints;
    } else {
        const decayFactor = 0.01;
        score = Math.ceil(maxPoints * Math.exp(-decayFactor * (distance - perfectRadius)));
    }

    const timePenalty = ((totalTime - timeRemaining) / totalTime) * maxPoints * 0.3;
    score -= Math.floor(timePenalty);

    return Math.max(1, score);
}


function showRoundSummary(guessedCoordinates, actualCoordinates, points, distance, mapName, locationImage, timeUp = false) {
    if (keydownListener) {
        document.removeEventListener('keydown', keydownListener);
        keydownListener = null;
    }

    const existingModal = document.getElementById('map-modal');
    if (existingModal) existingModal.style.display = 'none';

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

    nextBtn.onclick = () => {
        summaryModal.style.display = 'none';
        if (map && currentMarker) {
            map.removeLayer(currentMarker);
        }
        loadRound();
    };

    viewImageBtn.onclick = () => {
        openLocationImage(`pvp_images/${mapName}`, locationImage);
    };

    const mapContainer = document.createElement('div');
    mapContainer.id = 'summary-map';
    mapContainer.style.width = '800px';
    mapContainer.style.height = '600px';
    mapContainer.style.margin = '0 auto';

    const mapDisplayNames = {
        "javelin": "Javelin-4",
        // Add more PvP maps here if you want to prettify names
    };

    const guessedMapDisplayName = mapDisplayNames[selectedMap] || selectedMap;
    const actualMapDisplayName = mapDisplayNames[mapName] || mapName;

    const summaryText = document.createElement('p');

    if (timeUp) {
        summaryText.innerText = `Sorry! Time is up!\nYou earned 0 points.\nThe correct location was on ${actualMapDisplayName}.`;
    } else if (guessedMap !== mapName) {
        summaryText.innerText = `Sorry! Wrong map.\nYou guessed ${guessedMapDisplayName}, but the correct location was on ${actualMapDisplayName}.\nYou earned 0 points.`;
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

    // Initialize the map
    const summaryMap = L.map(mapContainer, {
        crs: L.CRS.Simple,
        maxZoom: 7,
        minZoom: -1,
        dragging: false,
        zoomControl: false,
        scrollWheelZoom: false
    }).setView([500, 500], 1);

    const imageUrl = `pvp_maps/${mapName}.png`;
    const img = new Image();
    img.onload = function () {
        const imageBounds = [[0, 0], [img.height, img.width]];
        L.imageOverlay(imageUrl, imageBounds).addTo(summaryMap);
        summaryMap.fitBounds(imageBounds);

        const actualMarker = L.marker(actualCoordinates, {
            icon: L.icon({
                iconUrl: 'icons/flag.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41]
            })
        }).addTo(summaryMap);

        summaryMap.setView(actualCoordinates, 1);

        if (selectedMap === mapName && guessedCoordinates) {
            const guessedMarker = L.marker(guessedCoordinates, {
                icon: L.icon({
                    iconUrl: 'icons/marker.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41]
                })
            }).addTo(summaryMap);

            L.polyline([guessedCoordinates, actualCoordinates], { color: 'blue' }).addTo(summaryMap);
        }
    };
    img.src = imageUrl;
}



function updateMapDisplay(mapName) {
    const mapContainer = document.getElementById('static-map');
    mapContainer.innerHTML = '';

    const map = L.map(mapContainer, {
        crs: L.CRS.Simple,
        maxZoom: 7,
        minZoom: -1,
        dragging: true,
        zoomControl: true,
        scrollWheelZoom: true
    }).setView([500, 500], 1);

    const imageUrl = `pvp_maps/${mapName}.png`;
    const img = new Image();

    img.onload = function() {
        const imageBounds = [[0, 0], [img.height, img.width]];
        L.imageOverlay(imageUrl, imageBounds).addTo(map);
        map.fitBounds(imageBounds);

        map.on('click', (e) => placeMarker(e, map));
    };
    img.src = imageUrl;
}

function openLocationImage(imageFolder, locationImage) {
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
    image.src = `${imageFolder}/${locationImage}`;
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

function startTimer(duration, onTimeUp) {
    const timerDisplay = document.getElementById('timer-display');
    let progressContainer = document.getElementById('timer-progress-container');

    if (timerDisplay) {
        timerDisplay.style.display = 'block';
        timerDisplay.style.color = 'white';
    }

    if (!progressContainer) {
        progressContainer = document.createElement('div');
        progressContainer.id = 'timer-progress-container';
        document.body.appendChild(progressContainer);
    } else {
        progressContainer.style.display = 'block';
    }

    let progressBar = document.getElementById('timer-progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'timer-progress-bar';
        progressContainer.appendChild(progressBar);
    } else {
        progressBar.style.display = 'block';
    }

    let timeRemaining = duration;
    timerDisplay.innerText = formatTime(timeRemaining);

    setTimeout(() => {
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
    }, 1000);
}

//could maybe do some optimization on formatiing time, here as well as in script.js
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
    if (currentMarker && map) {
        map.removeLayer(currentMarker);
        currentMarker = null;
    }
    submitGuess(location, true);
}