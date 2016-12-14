window.addEventListener('keydown', addActiveClass);

const controls = document.querySelectorAll('.Drumset-midi-control');
controls.forEach(control => {
  control.addEventListener('transitionend', removeActiveClass);
});

function addActiveClass(event) {
  const code = event.keyCode;
  const audio = document.querySelector(`audio[data-code='${code}']`);
  if (!audio) return;
  audio.currentTime = 0; // restart from the start of audio file
  audio.play();

  const midiBlock = document.querySelector(`.Drumset-midi-control[data-code='${code}']`);
  midiBlock.classList.add('active');
}

function removeActiveClass(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('active');
}
