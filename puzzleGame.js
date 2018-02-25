document.addEventListener('DOMContentLoaded', () => {
  start();
})

function start () {
  let playScreen = document.getElementById('play-screen');
  let iScreen = document.getElementById('screen');
  let pixel = document.getElementsByClassName('pixel');
  let person = document.getElementsByClassName('fa-user-secret');
  let keyCode = {
    0: 'Ha', 1: 'cK', 2: 'In', 3: 'gI', 4: 'Sa', 5: 'pU', 6: 'Zz', 7: 'le', 8: '</>', 9: '@^*'
  };

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

  // icons and their data
  placeIcons(pixel, person[0]);

  // avatar position
  pixel[232].appendChild(person[0]);

  // listen for a keydown on keyboard
  document.addEventListener('keydown', (event) => {
    console.log(event);
    let whichKey = event.key;
    // let personPositionX = Number(person[0].parentNode.dataset.positionX;
    // let personPositionY = Number(person[0].parentNode.dataset.positionY;
    // (whichkey !== 66 || whichkey !== 88 || whichkey !== 314 || whichkey !== 336)

    switch (whichKey) {
      case 'ArrowUp':
      if (Number(person[0].parentNode.dataset.positionY) - 1 >= 0) {
        pixel[Number(person[0].parentNode.dataset.index) - 31].appendChild(person[0]);
      }
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

function placeIcons (pixel, person) {
  // avatar position
  pixel[232].appendChild(person);
  // icon and ^ positions
  pixel[66].appendChild(document.getElementsByClassName('fa-chess-pawn')[0]);
  pixel[128].textContent = '^';
  pixel[88].appendChild(document.getElementsByClassName('fa-slack')[0]);
  pixel[150].textContent = '^';
  pixel[314].appendChild(document.getElementsByClassName('fa-futbol')[0]);
  pixel[376].textContent = '^';
  pixel[336].appendChild(document.getElementsByClassName('fa-bug')[0]);
  pixel[398].textContent = '^';

}
