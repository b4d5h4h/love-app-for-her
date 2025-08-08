function unlockPrompt() {
  document.getElementById('unlock-container').classList.remove('hidden');
}

function checkMagic() {
  const input = document.getElementById('magicInput').value.toLowerCase().trim();
  if (input === "you are mine") {
    startFinalSequence();
  } else {
    alert("That's not the magic phrase, my love 💔");
  }
}

function startFinalSequence() {
  document.getElementById('main-container').classList.add('hidden');
  document.getElementById('unlock-container').classList.add('hidden');
  document.getElementById('final-screen').classList.remove('hidden');
  typeLoveMessage("I Love You ❤️");
  animateTeddy();
}

function typeLoveMessage(message) {
  let index = 0;
  const loveText = document.getElementById("love-text");
  loveText.innerHTML = "";

  const typing = setInterval(() => {
    loveText.innerHTML += message.charAt(index);
    index++;
    if (index >= message.length) clearInterval(typing);
  }, 150);
}

function animateTeddy() {
  const teddy = document.getElementById("teddy");
  const rose = document.getElementById("rose");

  let moveCount = 0;
  teddy.addEventListener("mouseenter", () => {
    if (moveCount >= 5) {
      teddy.style.transform = "scale(1.2)";
      rose.classList.remove("hidden");
      return;
    }

    const x = Math.random() * 80 + 10;
    const y = Math.random() * 40 + 10;

    teddy.style.left = `${x}%`;
    teddy.style.top = `${y}%`;
    moveCount++;
  });
}
