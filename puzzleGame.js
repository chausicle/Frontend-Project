document.addEventListener('DOMContentLoaded', () => {
  start();
})

function start () {
  let playScreen = document.getElementById('play-screen');
  let iScreen = document.getElementById('screen');
  let pixel = document.getElementsByClassName('pixel');
  let person = document.getElementsByClassName('fa-user-secret');
  // let arrayOfPix = [];

  // create the pixel grid
  for (let y = 0; y < 31; y++) {
    for (let x = 0; x < 16; x++) {
      let div = document.createElement('div');
      // let temp = [];
      div.classList.add('pixel');
      // div.setAttribute('data-position-x', x);
      // temp.push(x);
      // div.setAttribute('data-position-y', y);
      // temp.push(y);
      iScreen.appendChild(div);
      // arrayOfPix.push(temp);
      // temp = [];
    }
  }

  // avatar position
  console.log('pixel = ', pixel);
  console.log('pixel[0] = ', pixel[0]);
  console.log('pixel[0].innerHTML = ', pixel[0].innerHTML);
  console.log('person = ', person);
  console.log('person[0] = ', person[0]);
  pixel[0].appendChild(person[0]);

  // listen for a keydown on keyboard
  addEventListener('keydown', (event) => {
    console.log(event);
    console.log(event.target);
    let whichKey = event.key;

    switch (whichKey) {
      case 'ArrowUp':
        console.log('This key is up');
        break;
      case 'ArrowLeft':
        console.log('This key is left');
        break;
      case 'ArrowRight':
        console.log('This key is right');
        break;
      case 'ArrowDown':
        console.log('This key is down');
        break;
      default:
        console.log('Not an arrow key');
    }
  });
}
