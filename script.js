const music = document.getElementById('bg-music');
const input = document.getElementById('magic-input');
const teddy = document.getElementById('teddy');
const rose = document.getElementById('rose');

function checkMagic() {
  const val = input.value.trim().toLowerCase();
  if (val === "you are mine") {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    startEffects();

    setTimeout(() => {
      document.getElementById("main-content").classList.add("hidden");
      document.getElementById("game-section").classList.remove("hidden");
    }, 7000);
  } else {
    alert("Try again, my love 💖");
  }
}

function startEffects() {
  createParticles('heart', 30, 'heart-burst');
  createParticles('flower', 20, 'flower-shower');
  document.getElementById("love-note").innerText = "I Love You ❤️";
  music.play().catch(() => {});
}

function createParticles(type, count, containerId) {
  const container = document.getElementById(containerId);
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = type;
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "100vh";
    container.appendChild(el);
  }
}

// Game logic
let moveCount = 0;
teddy.addEventListener("click", () => {
  moveCount++;
  teddy.style.left = Math.random() * 80 + "%";
  teddy.style.bottom = Math.random() * 50 + "%";

  if (moveCount >= 5) {
    rose.style.display = "block";
  }
});
