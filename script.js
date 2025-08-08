const music = document.getElementById("bg-music");
let isUnlocked = false;

function checkMagicWord() {
  const input = document.getElementById("magic-word").value.trim().toLowerCase();
  if (input === "you are mine") {
    unlockLove();
  } else {
    alert("Try again, my love 💌");
  }
}

function unlockLove() {
  document.getElementById("magic-entry").classList.add("hidden");
  document.getElementById("love-screen").classList.remove("hidden");
  music.play().catch(() => console.log("Autoplay blocked — user needs to interact."));
  startHeartShower();

  setTimeout(() => {
    document.getElementById("love-screen").classList.add("hidden");
    document.getElementById("final-screen").classList.remove("hidden");
  }, 7000);
}

function startHeartShower() {
  const container = document.getElementById("hearts-container");
  for (let i = 0; i < 100; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    container.appendChild(heart);
  }
}

document.getElementById("game-launcher").addEventListener("click", () => {
  document.getElementById("final-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
});

document.getElementById("teddy").addEventListener("click", () => {
  document.getElementById("rose").classList.remove("hidden");
});
.heart {
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  transform: rotate(45deg);
  animation: fall 5s linear infinite;
  opacity: 0.8;
}

.heart::before,
.heart::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
}

.heart::before {
  top: -10px;
  left: 0;
}

.heart::after {
  left: -10px;
  top: 0;
}

@keyframes fall {
  0% {
    transform: translateY(0) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(45deg);
    opacity: 0;
  }
}
