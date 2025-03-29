// Function to open the map viewer with the selected map
function openMap(mapName) {
    // Navigate to map viewer with selected map
    window.location.href = `map-viewer.html?map=${mapName}`;
}

// Function to show the image modal
function showImage() {
    const modal = document.getElementById('image-modal');
    const imagePopup = document.getElementById('image-popup');

    // Retrieve the location data from localStorage (it was stored as a string, so we need to parse it)
    const generatedLocation = JSON.parse(localStorage.getItem('gameLocation'));

    if (generatedLocation) {
        // Correctly construct the image URL using just the 'image' property
        imagePopup.src = `images/${generatedLocation.image}`;
    } else {
        // Handle case where no location is stored (fallback behavior)
        imagePopup.src = `images/default.png`;  // Default fallback image
    }

    modal.style.display = 'flex';  // Show the modal
}

// Function to close the image modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';  // Hide the modal
}

// Event listener for the 'X' button to close the modal
document.getElementById('close-btn').addEventListener('click', closeModal);

// Event listener for the 'Escape' key to close the modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();  // Close the modal when Escape is pressed
    }
});

// Ensure the modal displays the correct image when the page is loaded
window.onload = function() {
    // Retrieve the location data from localStorage
    const generatedLocation = JSON.parse(localStorage.getItem('gameLocation'));

    // If the location data exists, update the modal image source
    if (generatedLocation) {
        const imagePopup = document.getElementById('image-popup');
        imagePopup.src = `images/${generatedLocation.image}`;
    }
};
