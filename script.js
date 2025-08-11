/* Robust final script
   - Starts music on first meaningful interaction
   - Sequence: heart click -> unlock modal -> correct phrase -> bursts -> final -> teddy game
   - Teddy dodges on pointer proximity, clicking teddy increments touches; after threshold teddy offers rose.
*/

const bgMusic = document.getElementById('bg-music');
const heart = document.getElementById('numan-heart');
const unlockModal = document.getElementById('unlock-modal');
const magicInput = document.getElementById('magic-input');
const unlockBtn = document.getElementById('unlock-btn');
const cancelBtn = document.getElementById('cancel-btn');
const startScreen = document.getElementById('start-screen');
const finalScreen = document.getElementById('final-screen');
const typeText = document.getElementById('type-text');
const gameScreen = document.getElementById('game-screen');
const teddy = document.getElementById('teddy');
const rose = document.getElementById('rose');
const MAIN_PHRASE = 'you are mine';

// Ensure music plays only after a user gesture (start by clicking heart)
function startMusicIfNeeded() {
  if (bgMusic && bgMusic.paused) {
    bgMusic.play().catch(()=>{ /* ignore autoplay block */ });
    bgMusic.volume = 0.55;
  }
}

/* 1) Heart click -> show unlock modal and start music */
heart.addEventListener('click', (e)=>{
  startMusicIfNeeded();
  unlockModal.classList.remove('hidden');
  // focus input for convenience
  setTimeout(()=> magicInput.focus(), 120);
});

/* cancel button returns to start screen */
cancelBtn.addEventListener('click', ()=>{
  unlockModal.classList.add('hidden');
});

/* 2) Unlock button */
unlockBtn.addEventListener('click', ()=>{
  const txt = (magicInput.value || '').trim().toLowerCase();
  if (txt === MAIN_PHRASE) {
    unlockModal.classList.add('hidden');
    runRomanticSequence();
  } else {
    document.getElementById('unlock-error').textContent = 'Wrong phrase — try again with love 💗';
    magicInput.focus();
  }
});

/* main romantic sequence: bursts -> show bva + typewriter -> go to game */
function runRomanticSequence(){
  // 1) make small bursts overlaying start screen (hearts & flowers)
  burstEmojis(28, ['💖','🌸'], 2200);

  // 2) after short delay, show final screen with typewriter
  setTimeout(()=>{
    startScreen.classList.add('hidden');
    finalScreen.classList.remove('hidden');
    typeWriter(typeText, "I Love You ❤️", 90, ()=> {
      // after typewriter finishes, wait a moment then go to teddy game
      setTimeout(()=> {
        finalScreen.classList.add('hidden');
        showTeddyGame();
      }, 1200);
    });
  }, 1300);
}

/* utility: create burst of emojis for duration */
function burstEmojis(count, pool, duration){
  const created = [];
  for (let i=0;i<count;i++){
    const el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.left = (5 + Math.random()*90) + 'vw';
    el.style.top = (60 + Math.random()*30) + 'vh';
    el.style.fontSize = (18 + Math.random()*28) + 'px';
    el.style.willChange = 'transform, opacity';
    el.textContent = pool[Math.floor(Math.random()*pool.length)];
    el.style.zIndex = 40;
    document.body.appendChild(el);
    // animate upward + fade
    const dy = 120 + Math.random()*160;
    el.animate([
      { transform: `translateY(0) scale(1)`, opacity:1 },
      { transform: `translateY(-${dy}px) scale(${1 + Math.random()*0.5})`, opacity:0 }
    ], { duration: duration, easing:'cubic-bezier(.22,.9,.17,1)' });
    created.push(el);
    setTimeout(()=> el.remove(), duration + 20);
  }
}

/* typing helper */
function typeWriter(targetEl, text, speed=80, done){
  targetEl.textContent = '';
  let i=0;
  const t = setInterval(()=> {
    targetEl.textContent += text[i] || '';
    i++;
    if (i > text.length) {
      clearInterval(t);
      if (typeof done === 'function') done();
    }
  }, speed);
}

/* Show teddy game */
let touchCount = 0;
function showTeddyGame(){
  gameScreen.classList.remove('hidden');
  // place teddy centered
  placeTeddyAtCenter();

  // pointer proximity dodge: when pointer moves near teddy, move teddy away
  let dodgeCooldown = false;
  window.addEventListener('pointermove', (ev) => {
    if (gameScreen.classList.contains('hidden')) return;
    const rect = teddy.getBoundingClientRect();
    const dx = ev.clientX - (rect.left + rect.width/2);
    const dy = ev.clientY - (rect.top + rect.height/2);
    const dist = Math.hypot(dx,dy);
    // if pointer is within radius and not cooling down, dodge
    const radius = Math.max(120, rect.width * 0.9);
    if (dist < radius && !dodgeCooldown) {
      dodgeCooldown = true;
      moveTeddyRandom();
      setTimeout(()=> dodgeCooldown = false, 400);
    }
  });

  // click/tap teddy increments touches; after threshold show rose and message
  teddy.addEventListener('click', () => {
    touchCount++;
    // playful scale bounce
    teddy.animate([
      { transform: 'translate(-50%,-50%) scale(1)' },
      { transform: 'translate(-50%,-50%) scale(1.08)' },
      { transform: 'translate(-50%,-50%) scale(1)' }
    ], { duration: 260, easing: 'ease-out' });

    if (touchCount >= 3) {
      showRoseAndFinalText();
    } else {
      // slight move when clicked
      moveTeddyRandom(180);
    }
  });
}

function placeTeddyAtCenter(){
  teddy.style.left = '50%';
  teddy.style.top = '60%';
  teddy.style.transform = 'translate(-50%,-50%)';
}

function moveTeddyRandom(spread=280){
  // pick a new position inside viewport leaving margins
  const vw = Math.max(window.innerWidth, 320);
  const vh = Math.max(window.innerHeight, 480);
  const pad = 14; // avoid edges
  const targetX = pad + Math.random() * (vw - pad*2);
  const targetY = vh*0.35 + Math.random() * (vh*0.5);
  // set absolute coordinates by converting to percentages relative to viewport
  teddy.style.left = `${(targetX / vw) * 100}%`;
  teddy.style.top = `${(targetY / vh) * 100}%`;
  teddy.style.transform = 'translate(-50%,-50%)';
}

function showRoseAndFinalText(){
  rose.classList.remove('hidden');
  // final message overlay
  const final = document.createElement('div');
  final.textContent = "Forever yours — Numan ❤️";
  final.style.position = 'fixed';
  final.style.top = '18%';
  final.style.left = '50%';
  final.style.transform = 'translateX(-50%)';
  final.style.fontSize = '28px';
  final.style.color = '#ff6ba6';
  final.style.textShadow = '0 0 10px rgba(255,50,120,0.7)';
  final.style.zIndex = 80;
  document.body.appendChild(final);
  // small confetti-ish burst
  burstEmojis(20, ['✨','💫','🎀'], 1600);
}

/* ensure music plays after real gesture if browser blocked */
document.addEventListener('pointerdown', function onFirstPointer(){
  startMusicIfNeeded();
  document.removeEventListener('pointerdown', onFirstPointer);
});
