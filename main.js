const sounds = [
    'sounds/mud1.mp3',
    'sounds/mud2.mp3',
    'sounds/mud3.mp3'
];

let count = 0;

function updateCounter() {
    count++;
    const counterElement = document.getElementById('counter');
    counterElement.textContent = count.toString();
}

const playButton = document.getElementById('playButton');
const imageContainer = document.getElementById('imageContainer');

playButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const audio = new Audio(sounds[randomIndex]);
    audio.play();
    updateCounter();

    const movingImage = document.createElement('img');
    movingImage.src = 'img/mud-spin.gif';
    movingImage.className = 'moving-image';
    imageContainer.appendChild(movingImage);

    movingImage.style.transition = 'transform 1.2s linear, opacity 2s linear';
    movingImage.style.opacity = '1';

    let value = [-150, 260];

    // get random index
    let randomNum = Math.floor(Math.random() * value.length);

    let randomValue = value[randomNum];
    
    movingImage.style.transform = `translateX(${randomValue}%)`;
    movingImage.style.width = '500px';
    movingImage.style.height = '500px';
    movingImage.style.position = 'absolute';
    movingImage.style.overflow = 'hidden';
    

    setTimeout(() => {
        if(randomNum == 0) {
            movingImage.style.transform = 'translateX(260%)';
        } else {
            movingImage.style.transform = 'translateX(-150%)';
        }
    }, 100);

    setTimeout(() => {
        // Delete the image when done
        movingImage.addEventListener('transitionend', () => {
            movingImage.remove();
        });
    }, 1000);
});
