const bgMusic = document.getElementById("bg-music");
const bgImage = document.getElementById("bg-image");
const finalImage = document.getElementById("final-image");
const unlockScreen = document.getElementById("unlock-screen");
const loveMessage = document.getElementById("love-message");
const romanticText = document.getElementById("romantic-text");
const tapInstructions = document.getElementById("tap-instructions");
const teddyGame = document.getElementById("teddy-game");
const teddy = document.getElementById("teddy");
const rose = document.getElementById("rose");
const heartsContainer = document.getElementById("hearts-container");
const flowersContainer = document.getElementById("flowers-container");

function checkMagic() {
  const val = document.getElementById("magic-input").value.trim().toLowerCase();
  if (val === "you are mine") {
    unlockScreen.classList.add("hidden");
    loveMessage.classList.remove("hidden");
    playEffects();
    setTimeout(() => {
      tapInstructions.classList.remove("hidden");
    }, 3000);
  } else {
    alert("Wrong magic words!");
  }
}

function playEffects() {
  romanticText.textContent = "I Love You 💖";
  for (let i = 0; i < 40; i++) {
    createFloating("❤️", heartsContainer);
    createFloating("🌸", flowersContainer);
  }
}

function createFloating(char, container) {
  const el = document.createElement("div");
  el.className = char === "❤️" ? "heart" : "flower";
  el.textContent = char;
  el.style.left = Math.random() * 100 + "vw";
  el.style.top = Math.random() * 100 + "vh";
  el.style.fontSize = (Math.random() * 20 + 20) + "px";
  container.appendChild(el);
  setTimeout(() => container.removeChild(el), 5000);
}

tapInstructions.addEventListener("click", () => {
  loveMessage.classList.add("hidden");
  teddyGame.classList.remove("hidden");
});

teddy.addEventListener("click", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  teddy.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 20 - 10}deg)`;
  setTimeout(() => {
    teddy.style.transform = "translate(0, 0)";
    setTimeout(() => {
      rose.classList.remove("hidden");
      setTimeout(() => {
        teddyGame.classList.add("hidden");
        finalImage.classList.remove("hidden");
      }, 2000);
    }, 1000);
  }, 500);
});
