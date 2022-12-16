//DETECTING DRUM INNER_HTML
var numberOfbtn = document.querySelectorAll(".drum");
for (var i = 0; i < numberOfbtn.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    animationKey(buttonInnerHTML);
  });
}
// IDENTIFYING KEY PRESSED IN KEYBOARD
document.addEventListener("keypress", function (event) {
  playSound(event.key);
  animationKey(event.key);
});
//PAYS MUSIC ACCORDINGLY KEY PRESSED
function playSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    // default:
    //   console.log(buttonInnerHTML);
  }
}

function animationKey(x) {
  let pressedKey = document.querySelector("." + x);
  pressedKey.classList.add("pressed");
  setTimeout(function () {
    pressedKey.classList.remove("pressed");
  }, 100);
}
