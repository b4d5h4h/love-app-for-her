const music = document.getElementById('bg-music');
music.volume = 0.4;

function checkMagicWord() {
  const input = document.getElementById('magic-word').value.toLowerCase().trim();
  if (input === "you are mine") {
    document.getElementById('unlock-screen').classList.add('hidden');
    document.getElementById('heart-game').classList.remove('hidden');
    music.play();
    showParticles();
  } else {
    alert("Try again... Hint: It's a lovely phrase 😉");
  }
}

function nextHeart(step) {
  const hearts = document.querySelectorAll('.heart');
  if (step < hearts.length) {
    hearts[step].classList.remove('hidden');
  } else {
    document.getElementById('heart-game').classList.add('hidden');
    document.getElementById('teddy-game').classList.remove('hidden');
  }
}

let teddyTouches = 0;
function touchTeddy() {
  teddyTouches++;
  if (teddyTouches === 3) {
    document.getElementById('teddy-game').classList.add('hidden');
    document.getElementById('final-screen').classList.remove('hidden');
  }
}

function showParticles() {
  const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const hearts = [];
  for (let i = 0; i < 50; i++) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 10 + 10,
      speedY: Math.random() * -1 - 0.5
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => {
      ctx.beginPath();
      ctx.fillStyle = "pink";
      ctx.moveTo(h.x, h.y);
      ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
      ctx.fill();
      h.y += h.speedY;
      if (h.y < -h.size) h.y = canvas.height + h.size;
    });
    requestAnimationFrame(animate);
  }

  animate();
}
