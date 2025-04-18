const mode = localStorage.getItem('gameMode') || 'Unknown Mode';
const formattedMode = mode.charAt(0).toUpperCase() + mode.slice(1) + ' Mode';

const modeElement = document.getElementById('mode');

document.getElementById('mode').innerText = formattedMode;

const modeColors = {
    normal: '#6687a5',
    hard: '#d5b27d',
    pvp: '#a56666',
    datto: '#96be8e'
};

if (modeColors[mode]) {
    modeElement.style.color = modeColors[mode];
} else {
    modeElement.style.color = 'white';
}


document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});

const totalScore = localStorage.getItem('totalScore') || 0;
document.getElementById('total-score').innerHTML = `<strong>Total Score: ${totalScore} / 7500</strong>`;

const scoreMeter = document.getElementById('score-meter');
scoreMeter.value = totalScore;

const percentage = (totalScore / 7500) * 100;
scoreMeter.style.setProperty('--value', `${percentage}%`);

if (totalScore >= 7250) {
    scoreMeter.classList.add('golden-glow');
}



const roundScores = JSON.parse(localStorage.getItem('roundScores')) || [];
const roundScoresContainer = document.getElementById('round-scores');

let highestScore = Math.max(...roundScores);

roundScores.forEach((score, index) => {
    const roundScoreElement = document.createElement('p');
    roundScoreElement.innerText = `Round ${index + 1}: ${score} points`;
    roundScoresContainer.appendChild(roundScoreElement);

    if (score === highestScore && highestScore === 1500) {
        roundScoreElement.classList.add('highest-score');
    }
});