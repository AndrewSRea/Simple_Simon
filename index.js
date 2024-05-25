/* *** DISPLAY STRUCTURE IS LIKE THE SIMON GAME *** 
   BUT THE TRANSITION/TRANSFORM DOESN'T WORK CORRECTLY -- ALL THE BUTTONS TRANSITION
   TO LIGHT GREEN BUT THE TRANSITION ISN'T REMOVED AFTER THE BUTTONS ARE PRESSED --
   THIS CAN BE FIXED BY INCORPORATING THE CODE FROM THE `Simple_Simon_Hack` APP
*/

let randColors = [];

document.addEventListener("DOMContentLoaded", function() {
   const toggleRect = document.getElementById("toggleRect");
   const toggleCircle = document.getElementById("toggleCircle");
   let isOn = false;

   const toggleButton = () => {
      isOn = !isOn;

      if (isOn) {
         toggleRect.setAttribute("fill", "#00ff00");
         toggleCircle.setAttribute("cx", "407.25");
      } else {
         toggleRect.setAttribute("fill", "#ff0000");
         toggleCircle.setAttribute("cx", "394.75");
      }
   };

   toggleRect.addEventListener("click", toggleButton)
   toggleCircle.addEventListener("click", toggleButton)
});

// function to play sounds and add `playing` class to game buttons for transitions
function playSound(e) {
  const audio = document.querySelector(`audio[data-event-key="${e.key}"]`);
  const gameButton = document.querySelector(`.gameButton[data-event-key="${e.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  gameButton.classList.add('playing');
}

// function to remove `playing` class from game buttons
function removeTransition(e) {
   if (e.propertyName !== 'transform') return;
   this.classList.remove('playing');
}

const allGameButtons = document.querySelectorAll('.gameButton');
allGameButtons.forEach(gamebutton => gamebutton.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", playSound);

// YOUR solution for generating a random color and pushing it into an array
function genRandomColor() {
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

/* ChatGPT solution -- only generates a random color and pushes it into an array
   upon first opening the app in a browser -- and only once
*/
function addRandomColorToArray(array) {
   const colors = ['green', 'yellow', 'red', 'blue'];
   const randomIndex = Math.floor(Math.random() * colors.length);
   array.push(colors[randomIndex]);
   return array;
}

let randomArray = [];
addRandomColorToArray(randomArray);
console.log(randomArray);