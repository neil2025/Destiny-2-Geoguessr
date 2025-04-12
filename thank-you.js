const imageDirectory = 'assets/thank-you';

const imageFiles = [
    { fileName: 'ashtral.png', caption: 'Ashtral', subcaption: 'For helping me create all the maps'},
    { fileName: 'gta.png', caption: 'Gta85', subcaption: 'For capturing the first many locations, which came with version 1 of the game' },
    { fileName: 'matt.png', caption: 'Matt', subcaption: 'For setting up the site to play on' },
    { fileName: 'slasher.png', caption: 'Slasher', subcaption: 'For helping with locations' },
    { fileName: 'julia.png', caption: 'Julia', subcaption: 'For helping with the discord, locations, and being endlessly supportive' },
];

const container = document.querySelector('.container');

const portraitContainer = document.createElement('div');
portraitContainer.classList.add('portrait-container');

imageFiles.forEach(({ fileName, caption, subcaption }) => {
    const portraitItem = document.createElement('div');
    portraitItem.classList.add('portrait-item');

    const img = document.createElement('img');
    img.src = `${imageDirectory}/${fileName}`;
    img.alt = caption;
    img.classList.add('portrait');

    const captionText = document.createElement('p');
    captionText.innerText = caption;
    captionText.classList.add('portrait-caption');

    if (caption === 'Kevin') {
        captionText.style.cursor = 'pointer';
        captionText.style.textDecoration = 'underline';
        captionText.addEventListener('click', () => {
            window.open('https://linktr.ee/Fallerion', '_blank');
        });
    }

    portraitItem.appendChild(img);
    portraitItem.appendChild(captionText);

    if (subcaption) {
        const subcaptionText = document.createElement('p');
        subcaptionText.innerText = subcaption;
        subcaptionText.classList.add('portrait-subcaption');
        portraitItem.appendChild(subcaptionText);
    }

    portraitContainer.appendChild(portraitItem);
});

const backButton = document.getElementById('back-button');
container.insertBefore(portraitContainer, backButton);