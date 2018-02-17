document.addEventListener('DOMContentLoaded', () => {
  start();
})

function start () {
  let playScreen = document.getElementById('play-screen');
  let infoScreen = document.getElementById('info-screen');
  let iScreen = document.getElementById('screen');

  // create the pixel grid
  for (let y = 0; y < 30; y++) {
    for (let x = 0; x < 62; x++) {
      let div = document.createElement('div');
      div.classList.add('pixel');
      div.setAttribute('data-position-x', x);
      div.setAttribute('data-position-y', y);
      iScreen.appendChild(div);
    }
  }
  // playScreen.appendChild(document.createElement('br'));

  // playScreen.appendChild(infoScreen);
}
