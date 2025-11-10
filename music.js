const music = document.getElementById('bg-music');
const btn   = document.getElementById('music-toggle');

let playing = true;

// ensure playback starts after user interaction (mobile browsers block autoplay)
document.body.addEventListener('click', () => {
  if (!playing) {
    music.play();
    playing = true;
    btn.textContent = '⏸';
  }
}, { once: true });

// toggle music on button click
btn.addEventListener('click', () => {
  if (playing) {
    music.pause();
    btn.textContent = '▶';
  } else {
    music.play();
    btn.textContent = '⏸';
  }
  playing = !playing;
});
