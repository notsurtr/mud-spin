const sounds = ["sounds/mud1.mp3", "sounds/mud2.mp3", "sounds/mud3.mp3"];

let count = 0;

function updateCounter() {
  count++;
  const counterElement = document.getElementById("counter");
  counterElement.textContent = count.toString();
}

const playButton = document.getElementById("playButton");
const imageContainer = document.getElementById("imageContainer");

playButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const audio = new Audio(sounds[randomIndex]);
  audio.play();
  updateCounter();
  animationMud();
});

function animationMud() {
  const movingImage = document.createElement("img");

  // We place the route of the image that we want to use in this case the beauty of Mudrock
  movingImage.src = "img/mud-spin.gif";
  movingImage.className = "moving-image";
  imageContainer.appendChild(movingImage);

  // get random num
  const numRandom = Math.random();

  // Round the random number to 0 or 1
  const result = Math.round(numRandom);

  // Get the width of the browser window
  const windowWidth = window.innerWidth;

  // We start a variable to confirm where the animation started
  let confirm;

  if (windowWidth < 2048) {
    if (result == 0) {
      movingImage.style.left = `-30%`;
      confirm = 0;
    } else {
      movingImage.style.right = `-30%`;
      confirm = 1;
    }
  } else {
    if (result == 0) {
      movingImage.style.left = `-20%`;
      confirm = 0;
    } else {
      movingImage.style.right = `-20%`;
      confirm = 1;
    }
  }

  movingImage.style.width = "500px";
  movingImage.style.height = "500px";
  movingImage.style.position = "absolute";
  movingImage.style.transition = "linear 2s";

  setTimeout(() => {
    //if the variable confirm starts on the left (0) then it will animate from left to right otherwise it will animate from right to left
    if (confirm == 0) {
      movingImage.style.left = "100%";
      console.log("funciona salid izq");
    } else {
      movingImage.style.right = "100%";
      console.log("funciona salid der");
    }
  }, 50);

  setTimeout(() => {
    // Delete the image when done
    movingImage.addEventListener("transitionend", () => {
      movingImage.remove();
    });
  }, 1000);
}
//modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
