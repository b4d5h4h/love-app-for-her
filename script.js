
function checkMagic() {
  const input = document.getElementById('magicInput').value.trim().toLowerCase();
  if (input === "you are mine") {
    document.getElementById("unlock-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    playHearts();
    setTimeout(() => {
      document.getElementById("main-content").classList.add("hidden");
      document.getElementById("game-section").classList.remove("hidden");
    }, 7000);
  }
}

function playHearts() {
  const container = document.querySelector(".heart-container");
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const teddy = document.getElementById("teddy");
  teddy.addEventListener("click", () => {
    teddy.style.transform = "scale(1.1) rotate(5deg)";
    setTimeout(() => {
      document.getElementById("game-section").classList.add("hidden");
      document.getElementById("final-screen").classList.remove("hidden");
    }, 1500);
  });

  const music = document.getElementById("bg-music");
  music.volume = 0.5;
  music.play().catch(() => {});
});
