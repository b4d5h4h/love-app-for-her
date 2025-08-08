const heart = document.getElementById("heart");
const unlockSection = document.getElementById("unlock-section");
const finalScreen = document.getElementById("final-screen");
const loveMessage = document.getElementById("love-message");
const gameArea = document.getElementById("game-area");
const teddy = document.getElementById("teddy");
const rose = document.getElementById("rose");

const music = document.getElementById("bg-music");
music.volume = 0.4;

heart.addEventListener("click", () => {
  heart.style.display = "none";
  unlockSection.classList.remove("hidden");
});

function checkMagicWord() {
  const input = document.getElementById("magic-input").value.trim().toLowerCase();
  if (input === "you are mine") {
    unlockSection.classList.add("hidden");
    showFinalScreen();
  } else {
    alert("Try again!");
  }
}

function showFinalScreen() {
  finalScreen.classList.remove("hidden");

  // Hearts & Flowers burst
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.fontSize = Math.random() * 30 + 20 + "px";
    heart.style.animation = "floatUp 3s ease forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }

  loveMessage.textContent = "I Love You ❤️";
}

function startGame() {
  finalScreen.classList.add("hidden");
  gameArea.classList.remove("hidden");
  moveTeddy();
}

function moveTeddy() {
  teddy.style.left = Math.random() * 80 + "%";
  teddy.style.top = Math.random() * 80 + "%";

  // After few touches, show rose
  let count = teddy.dataset.touchCount ? parseInt(teddy.dataset.touchCount) : 0;
  count++;
  teddy.dataset.touchCount = count;
  if (count > 5) {
    rose.classList.remove("hidden");
  }
}
