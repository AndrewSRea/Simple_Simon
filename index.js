window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-event-key="${e.key}"]`);
  const button = document.querySelector(`.button[data-event-key="${e.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  button.classList.add('playing');
});