document.addEventListener('DOMContentLoaded', () => {
  start();
})

function start () {
  let playScreen = document.getElementById('play-screen');
  let iScreen = document.getElementById('screen');
  let pixel = document.getElementsByClassName('pixel');
  let person = document.getElementsByClassName('fa-user-secret');

  // create the pixel grid
  let i = 0; // index of pixel class
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 31; x++, i++) {
      let div = document.createElement('div');
      div.classList.add('pixel');
      div.setAttribute('data-index', i);
      div.setAttribute('data-position-x', x);
      div.setAttribute('data-position-y', y);
      iScreen.appendChild(div);
    }
  }

  // avatar position
  pixel[0].appendChild(person[0]);

  // listen for a keydown on keyboard
  document.addEventListener('keydown', (event) => {
    let whichKey = event.key;

    switch (whichKey) {
      case 'ArrowUp':
        if (Number(person[0].parentNode.dataset.positionY) - 1 >= 0) {
          pixel[Number(person[0].parentNode.dataset.index) - 31].appendChild(person[0]);
        }
        // person[0].parentNode
        break;
      case 'ArrowLeft':
        if (Number(person[0].parentNode.dataset.positionX) - 1 >= 0) {
          pixel[Number(person[0].parentNode.dataset.index) - 1].appendChild(person[0]);
        }
        break;
      case 'ArrowRight':
        if (Number(person[0].parentNode.dataset.positionX) + 1 < 31) {
          pixel[Number(person[0].parentNode.dataset.index) + 1].appendChild(person[0]);
        }
        break;
      case 'ArrowDown':
        if (Number(person[0].parentNode.dataset.positionY) + 1 < 16) {
          pixel[Number(person[0].parentNode.dataset.index) + 31].appendChild(person[0]);
        }
        break;
      default:
        console.log('Not an arrow key');
    }
  });
}
