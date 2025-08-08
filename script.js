const music = document.getElementById('bg-music');
music.volume = 0.4;

function checkMagic() {
  const input = document.getElementById('magic-input').value.trim().toLowerCase();
  if (input === 'you are mine') {
    document.getElementById('lock-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
    startHeartRain();
    setTimeout(() => {
      document.getElementById('main-screen').classList.add('hidden');
      document.getElementById('final-screen').classList.remove('hidden');
    }, 7000);
    setTimeout(() => {
      document.getElementById('final-screen').classList.add('hidden');
      document.getElementById('game-screen').classList.remove('hidden');
    }, 12000);
  } else {
    alert('Try again with the correct magic words.');
  }
}

function startHeartRain() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '0';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.animation = 'fall 5s linear forwards';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 200);
}

function offerRose() {
  const rose = document.getElementById('rose');
  rose.classList.remove('hidden');
  rose.style.display = 'block';
}
