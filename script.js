const music = document.getElementById("bg-music");
const magicInput = document.getElementById("magic-word");

function checkMagicWord() {
  const val = magicInput.value.toLowerCase().trim();
  if (val === "you are mine") {
    document.getElementById("unlock-screen").classList.add("hidden");
    document.getElementById("love-screen").classList.remove("hidden");
    startHearts();
    setTimeout(() => showGameScreen(), 12000);
    music.volume = 0.7;
    music.play().catch(e => console.log("Autoplay failed:", e));
  } else {
    alert("Try again, my love 💖");
  }
}

function startHearts() {
  const container = document.getElementById("heart-container");
  setInterval(() => {
    const h = document.createElement("div");
    h.className = Math.random() > 0.5 ? "heart" : "flower";
    h.style.left = Math.random() * 100 + "vw";
    h.style.top = "100vh";
    h.style.animationDuration = 2 + Math.random() * 3 + "s";
    container.appendChild(h);
    setTimeout(() => container.removeChild(h), 4000);
  }, 200);
}

function showGameScreen() {
  document.getElementById("love-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  document.getElementById("bva-img").classList.remove("hidden");

  const teddy = document.getElementById("teddy");
  const rose = document.getElementById("rose");
  const finalMessage = document.getElementById("final-message");

  teddy.addEventListener("click", () => {
    teddy.style.transform = "translateX(-50%) translateY(-20px) rotate(-5deg)";
    setTimeout(() => {
      teddy.style.transform = "translateX(-50%)";
      rose.classList.remove("hidden");
      finalMessage.classList.remove("hidden");
    }, 1000);
  });
}
