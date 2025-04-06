document.addEventListener('DOMContentLoaded', function () {
    // Executes page setup for map-viewer.html if the page is map-viewer.html
    if (window.location.pathname.includes("map-viewer.html")) {
        initializeFromUrl();
    }
    
    // Event Listeners for Buttons (Index and Map Viewer)
    document.getElementById('back-button')?.addEventListener('click', goBack);
    document.getElementById('submit-button')?.addEventListener('click', submitCoordinates);
});

document.addEventListener('keydown', function(event) {
    // Closes the image modal and results popup when Escape is pressed
    if (event.key === 'Escape') {
        closeModal();  
        closePopup();  
    }
});

// Function to show the image modal with the image based on the location stored in localStorage
function showImage() {
    const modal = document.getElementById('image-modal');
    const imagePopup = document.getElementById('image-popup');

    const generatedLocation = JSON.parse(localStorage.getItem('gameLocation'));

    if (generatedLocation) {
        imagePopup.src = `images/${generatedLocation.image}`;
    } else {
        imagePopup.src = `images/default.png`;
    }

    modal.style.display = 'flex';
}

// Function to close the image modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

// Event listener to close the image modal when the 'X' button is clicked
document.getElementById('close-btn')?.addEventListener('click', closeModal);

// Event listener to close the image modal when the 'Escape' key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Function to handle displaying an image in the modal based on passed data
function handleImageModalData(imageData) {
    const modal = document.getElementById('image-modal');
    const imagePopup = document.getElementById('image-popup');
    imagePopup.src = `destinations/${imageData.image}`;
    modal.style.display = 'flex';
    actualCoordinates = imageData.coordinates;
}

// Function to navigate back to the main menu page
function goBack() {
    window.location.href = 'index.html';
}

// Function to initialize the map with the specified map name
function initializeMap(mapName) {
    let map = L.map('map', {
        crs: L.CRS.Simple,
        maxZoom: 3,
        minZoom: -1,
    }).setView([500, 500], 1);

    let imageUrl = `maps/${mapName}.png`;
    let img = new Image();
    img.onload = function() {
        let imageBounds = [[0, 0], [img.height, img.width]];
        L.imageOverlay(imageUrl, imageBounds).addTo(map);
        map.fitBounds(imageBounds);
    };
    img.src = imageUrl;

    return map;
}

// Function to place a marker on the map and update the coordinates display
let currentMarker = null;
function placeMarker(e) {
    const latLng = e.latlng;

    if (currentMarker) {
        map.removeLayer(currentMarker);
    }

    currentMarker = L.marker(latLng).addTo(map);

    const coordinatesText = `X: ${latLng.lng.toFixed(2)}, Y: ${latLng.lat.toFixed(2)}`;
    document.getElementById('coordinates').innerText = coordinatesText;
}

// Function to set up the map by initializing it and adding the event listener to place markers
let map;
function setupMap(mapName) {
    map = initializeMap(mapName);
    map.on('click', placeMarker);
}

// Function to retrieve the actual coordinates of the selected location
function getActualCoordinates() {
    const generatedLocation = JSON.parse(localStorage.getItem('gameLocation'));

    if (!generatedLocation || !generatedLocation.coordinates) {
        console.error("❌ Error: No stored location data found in localStorage.");
        return null;
    }

    console.log("✅ Retrieved stored location:", generatedLocation);

    return generatedLocation.coordinates; // This should be [X, Y] → Make sure you return correctly
}

// Function to calculate the distance between guessed and actual coordinates
function calculateDistance(guessedCoordinates) {
    const actualCoordinates = getActualCoordinates();

    if (!actualCoordinates) {
        console.error("❌ Error: Actual coordinates not found.");
        return null;
    }

    console.log("✅ Actual Coordinates:", actualCoordinates);
    console.log("✅ Guessed Coordinates:", guessedCoordinates);

    // Extract values
    let x1 = actualCoordinates[0];
    let y1 = actualCoordinates[1];
    let x2 = guessedCoordinates.lat;
    let y2 = guessedCoordinates.lng;

    // Euclidean distance formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2)
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    distance = distance.toFixed(2);

    console.log(`📏 Calculated Distance: ${distance} units`);
    return distance;
}


// Function to handle the submit button click and calculate the distance
function submitCoordinates() {
    if (!currentMarker) {
        alert("Please place a marker on the map!");
        return;
    }

    let guessedCoordinates = currentMarker.getLatLng();
    const actualCoordinates = getActualCoordinates();

    if (!actualCoordinates) {
        console.error("❌ Error: Actual coordinates not found.");
        alert("Error: Could not retrieve actual coordinates.");
        return;
    }

    const generatedLocation = JSON.parse(localStorage.getItem('gameLocation'));
    const currentMapName = generatedLocation ? generatedLocation.map : '';

    const urlParams = new URLSearchParams(window.location.search);
    const currentUrlMap = urlParams.get('map');

    if (currentMapName !== currentUrlMap) {
        showPopup("Wrong planet :(", "You guessed on the wrong map! Try again!", null);
        return;
    }

    let distance = calculateDistance(guessedCoordinates);

    if (distance === null || isNaN(distance)) {
        console.error("❌ Error: Distance calculation failed.");
        alert("Error: Could not calculate distance.");
        return;
    }

    showPopup("Thank you for playing!", `You were ${distance} units from the correct location! The brighter marker is its actual location`, actualCoordinates);
}


// Function to display a popup with results, including the correct location and distance
function showPopup(title, message, correctLatLng, showPlayAgain) {
    document.getElementById('popup-overlay').style.display = 'block';

    const popupTitle = document.getElementById('popup-title');
    const popupMessage = document.getElementById('popup-message');
    const popupContent = document.getElementById('popup-content');

    popupTitle.innerText = title;
    popupMessage.innerText = message;

    if (correctLatLng) {
        const correctMarker = L.marker(correctLatLng).addTo(map);

        let polyline = L.polyline([currentMarker.getLatLng(), correctLatLng], { color: 'blue' }).addTo(map);

        popupContent.innerHTML = `Good guess! Press "ESC" to close this pop-up and view the map, or press play again!`;
    } else {
        popupContent.innerHTML = '';
    }

    document.getElementById('custom-popup').style.display = 'block';

    map.off('click', placeMarker);
    currentMarker.setOpacity(0.5);
    
    document.getElementById('submit-button').style.display = 'none';
    document.getElementById('play-again-button').style.display = 'block';
    document.getElementById('back-button').style.display = 'none';

}

// Function to handle the Play Again button click, redirecting to the main menu
document.getElementById('play-again-button')?.addEventListener('click', playAgain);
function playAgain() {
    window.location.href = 'main.html';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('custom-popup').style.display = 'none';
}

// Function to initialize the map based on URL parameters from map-viewer.html
function initializeFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const mapName = urlParams.get('map');
    if (mapName) {
        setupMap(mapName);
    } else {
        alert("No map specified in the URL!");
    }
}