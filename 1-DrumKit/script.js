var drumKeyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76];

window.addEventListener("keydown", (event) => {
  if (drumKeyCodes.includes(event.keyCode)) {
    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    document.querySelector(`.key[data-key="${event.keyCode}"]`).classList.add("playing");
  };
})

window.addEventListener("keyup", (event) => {
  if (drumKeyCodes.includes(event.keyCode)) {
    document.querySelector(`.key[data-key="${event.keyCode}"]`).classList.remove("playing");
  }
})