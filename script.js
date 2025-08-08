const bgMusic = document.getElementById('bg-music');
bgMusic.volume = 0.6;

document.getElementById('numan-heart').addEventListener('click', () => {
  document.getElementById('magic-unlock').style.display = 'flex';
});

function checkMagic() {
  const input = document.getElementById('magic-input').value.trim().toLowerCase();
  if (input === "you are mine") {
    unlockLove();
  } else {
    document.getElementById('error-msg').innerText = "That's not the magic word 😢";
  }
}

function unlockLove() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('magic-unlock').style.display = 'none';
  document.getElementById('final-screen').style.display = 'flex';
  launchHearts();
  typeLove();
  setTimeout(() => {
    document.getElementById('final-screen').style.display = 'none';
    startGame();
  }, 6000);
}

function typeLove() {
  const loveText = document.getElementById('love-text');
  loveText.textContent = "I Love You ❤️";
}

function launchHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.fontSize = "24px";
    heart.style.opacity = 1;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

function startGame() {
  const game = document.getElementById('game-area');
  const teddy = document.getElementById('teddy');
  const rose = document.getElementById('rose');
  game.style.display = 'flex';

  teddy.addEventListener('mouseenter', () => {
    teddy.style.left = Math.random() * (window.innerWidth - 150) + 'px';
    teddy.style.top = Math.random() * (window.innerHeight - 150) + 'px';
  });

  teddy.addEventListener('click', () => {
    teddy.remove();
    rose.style.display = 'block';
  });
}
