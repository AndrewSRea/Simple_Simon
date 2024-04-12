/* *** FINAL PRODUCT -- GITHUB VERSION *** */

window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-event-key="${e.key}"]`);
  const button = document.querySelector(`.button[data-event-key="${e.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  button.classList.add('playing');
});

// typing `genRandomNum()` in the console will push a randomly selected color into the
// `randColors` array (probably should have this array outside this function)
function genRandomColor() {
  let randColors = []
  let randomNum = Math.floor(Math.random() * 4) + 1;
  if (randomNum === 1) {
     randColors.push("green");
  } else if (randomNum === 2) {
     randColors.push("yellow")
  } else if (randomNum === 3) {
     randColors.push("red") 
  } else {
     randColors.push("blue")
  }
  console.log(randColors);
}