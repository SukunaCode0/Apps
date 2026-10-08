let score = 0, timeLeft = 30, timer = null;
const scoreEl = document.getElementById('scoreEl');
const timeEl = document.getElementById('timeEl');
const targetBtn = document.getElementById('targetBtn');
const playEl = document.getElementById('playEl');

function render() { scoreEl.textContent = score; timeEl.textContent = timeLeft; }
function moveTarget() {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 60 - 30;
  targetBtn.style.transform = `translate(${x}px, ${y}px)`;
}
targetBtn.addEventListener('click', () => {
  if (timeLeft <= 0 || !timer) return;
  score++;
  playEl.textContent = ['Nice!', 'Fast!', 'Combo!', 'Tap tap!', '+1'][Math.floor(Math.random()*5)];
  moveTarget();
  render();
});
document.getElementById('startBtn').addEventListener('click', () => {
  if (timer) return;
  score = 0; timeLeft = 30; targetBtn.disabled = false;
  playEl.textContent = 'Go!';
  render();
  timer = setInterval(() => {
    timeLeft--;
    render();
    if (timeLeft <= 0) {
      clearInterval(timer); timer = null;
      targetBtn.disabled = true;
      playEl.textContent = 'Done! Score: ' + score + ' — press Start to replay';
    }
  }, 1000);
});
document.getElementById('resetBtn').addEventListener('click', () => {
  clearInterval(timer); timer = null;
  score = 0; timeLeft = 30; targetBtn.disabled = false;
  targetBtn.style.transform = '';
  playEl.textContent = 'Tap the target!';
  render();
});
render();
