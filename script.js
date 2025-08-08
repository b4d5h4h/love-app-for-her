// Magical unlock
function checkMagic() {
  const input = document.getElementById("magicInput").value.toLowerCase().trim();
  if (input === "you are mine") {
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("loveScreen").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("loveScreen").classList.add("hidden");
      document.getElementById("gameScreen").classList.remove("hidden");
    }, 5000);
  } else {
    alert("Nope! Try again with your heart ❤️");
  }
}

// Game logic
let roseGiven = false;

function teddyTouched() {
  if (!roseGiven) {
    document.getElementById("rose").classList.remove("hidden");
    document.querySelector(".tap-msg").textContent = "Teddy loves you! 💖";
    roseGiven = true;
  }
}

// Heart animation
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  const x = Math.random() * canvas.width;
  const y = canvas.height + 10;
  const size = Math.random() * 8 + 5;
  const speed = Math.random() * 1 + 0.5;
  hearts.push({x, y, size, speed});
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let h of hearts) {
    ctx.beginPath();
    ctx.fillStyle = "#ff69b4";
    ctx.moveTo(h.x, h.y);
    ctx.arc(h.x - h.size / 2, h.y - h.size / 2, h.size / 2, 0, Math.PI * 2);
    ctx.arc(h.x + h.size / 2, h.y - h.size / 2, h.size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(h.x - h.size, h.y - h.size / 3);
    ctx.lineTo(h.x, h.y + h.size);
    ctx.lineTo(h.x + h.size, h.y - h.size / 3);
    ctx.fill();
    h.y -= h.speed;
  }
  hearts = hearts.filter(h => h.y + h.size > 0);
}

function animate() {
  drawHearts();
  requestAnimationFrame(animate);
}

setInterval(createHeart, 200);
animate();
