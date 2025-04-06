# Destiny 2 Geoguessr

## Overview
Destiny 2 Geoguessr is a fan-made web-based game inspired by GeoGuessr, where you must identify in-game locations from Destiny 2. You are shown an image of a random location from the game and must pinpoint its coordinates on one of the different maps.

## Features
- **Randomized Locations:** Over 100-200 unique in-game locations with corresponding images and coordinates.
- **Interactive Map Selection:** Choose a specific map from various Destiny 2 destinations (e.g., Cosmodrome, Dreaming City, Europa, etc.).
- **Image-Based Guessing:** Players must match an image to a location and submit their best guess.
- **Score System (Future Feature):** Track accuracy and "award points" based on proximity. In quotation marks, because it only really calculates distance so far. More on "rounds" and actual scores to come in the future.

## How to Play
1. Click the **Play** button on the main screen.
2. A random in-game location will be selected. It can be viewed from the grey "Show Location" button which you should be able to see at the bottom of the screen.
3. Guess where the image was taken by placing your marker on the planet you think the image is taken from.
4. Submit your guess and compare it to the correct location.
5. Play again and improve your accuracy!

## File Structure
```
Destiny2Geoguessr/
│── index.html             # Main game menu
│── main.html              # Entry point to start the game
│── main.js                # Handles game start and random location generation
│── index-script.js        # Handles map selection and modal interactions
│── locations.js           # Stores location data (images, coordinates, map names)
│── style.css              # Styling for the main page
│── index-style.css        # Styling for the map selection page
│── map-viewer.html        # Displays the selected map, as well as allows for placing guesses and submitting them.
│── map-viewer-script.js   # Handles map interactions, marker placement, and distance calculation.
│── images/                # Folder containing location images
│── maps/                  # Folder containing map images
│── README.md              # This file (game documentation)
```

## Technologies Used
- **HTML, CSS, JavaScript**: Core web development technologies.
- **Leaflet.js**: Used for interactive maps.
- **LocalStorage API**: Stores randomly selected locations between pages.

## Installation & Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/NiklasBH/Destiny-2-Geoguessr.git
   ```
2. Navigate to the project folder:
   ```sh
   cd Destiny-2-Geoguessr
   ```
3. **IMPORTANT** Open `main.html` in a web browser. You can do this by just double-clicking the file.

## Future Enhancements
- **Scoring system**: Award points based on guess accuracy.
- **Rounds**: Play multiple rounds like in proper GeoGuessr. Unsure how to display all guesses afterwards though...
- **Multiplayer Mode**: Setting the code up so it runs on a server, allowing you to compete with friends (and just playing online).
- **More Locations**: Expand the database with additional in-game places.
- **Improving UI**: The program looks very basic and unpolished... Because it is very basic and unpolished.
- **Loading maps from Bungie API**: Exchange the stitched-together maps with maps loaded directly from Bungie's API, making navigating the maps much better.

## Credits
This project is a fan-made tribute to Destiny 2 and is not affiliated with Bungie.
Thank you so much to GTA (not the game) for helping me out with taking photos of the locations. He saved me hours of work, and I am eternally grateful!
His Bungie ID: Gta85, The Bulk Chicken#9599


You can contact me on discord for any inquiries: dove5373
