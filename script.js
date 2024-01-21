document.addEventListener('DOMContentLoaded', () => {
    // Initialize the drum kit
    initializeDrumKit();
});

function initializeDrumKit() {
    const drumButtons = document.querySelectorAll('.drum-button');
    drumButtons.forEach(button => button.addEventListener('click', handleDrumButtonClick));

    // Key mappings for drum beats
    const keyToBeatMap = {
        '1': 'beat1',
        '2': 'beat2',
        '3': 'beat3',
        '4': 'beat4',
        '5': 'beat5',
        '6': 'beat6',
        '7': 'beat7',
        '8': 'beat8'
    };

    // Event listener for keyboard interactions
    document.addEventListener('keydown', event => {
        if (keyToBeatMap[event.key]) {
            playSound(keyToBeatMap[event.key]);
        }
    });
}

function handleDrumButtonClick() {
    const soundId = this.getAttribute('data-sound');
    playSound(soundId);
}

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0; // Rewind to the start
    sound.play();
}
