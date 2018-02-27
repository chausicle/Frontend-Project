document.addEventListener('DOMContentLoaded', () => {
  start();
})

function start() {
  let playScreen = document.getElementById('play-screen');
  let infoScreen = document.getElementById('screen');
  let pixel = document.getElementsByClassName('pixel');
  let person = document.getElementsByClassName('fa-user-secret');
  let password = makePassword();



  // create the pixel grid
  let i = 0; // index of pixel class
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 31; x++, i++) {
      let div = document.createElement('div');
      div.classList.add('pixel');
      div.setAttribute('data-index', i);
      div.setAttribute('data-position-x', x);
      div.setAttribute('data-position-y', y);
      infoScreen.appendChild(div);
    }
  }

  // icons and their data
  placeIcons(pixel, person[0]);

  // listen for a keydown on keyboard
  document.addEventListener('keydown', (event) => {
    // console.log(event);
    let whichKey = event.key;

    switch (whichKey) {
      case 'ArrowUp':
      // check if the move isn't out of y-axis on top of screen
      if (Number(person[0].parentNode.dataset.positionY) - 1 >= 0) {
        // check if the move isn't in the the icon index
        if (notIconIndex(Number(person[0].parentNode.dataset.index), whichKey)) {
          pixel[Number(person[0].parentNode.dataset.index) - 31].appendChild(person[0]);
          carrotOrQuestionIndex(Number(person[0].parentNode.dataset.index));
        }
      }
      break;
      case 'ArrowLeft':
      // check if the move isn't out of x-axis on left of screen
      if (Number(person[0].parentNode.dataset.positionX) - 1 >= 0) {
        // check if the move isn't in the the icon index
        if (notIconIndex(Number(person[0].parentNode.dataset.index), whichKey)) {
          pixel[Number(person[0].parentNode.dataset.index) - 1].appendChild(person[0]);
          carrotOrQuestionIndex(Number(person[0].parentNode.dataset.index));
        }
      }
      break;
      case 'ArrowRight':
      // check if the move isn't out of y-axis on right of screen
      if (Number(person[0].parentNode.dataset.positionX) + 1 < 31) {
        // check if the move isn't in the the icon index
        if (notIconIndex(Number(person[0].parentNode.dataset.index), whichKey)) {
          pixel[Number(person[0].parentNode.dataset.index) + 1].appendChild(person[0]);
          carrotOrQuestionIndex(Number(person[0].parentNode.dataset.index));
        }
      }
      break;
      case 'ArrowDown':
      // check if the move isn't out of y-axis on bottom of screen
      if (Number(person[0].parentNode.dataset.positionY) + 1 < 16) {
        // check if the move isn't in the the icon index
        if (notIconIndex(Number(person[0].parentNode.dataset.index), whichKey)) {
          pixel[Number(person[0].parentNode.dataset.index) + 31].appendChild(person[0]);
          carrotOrQuestionIndex(Number(person[0].parentNode.dataset.index));
        }
      }
      break;
      default:
      console.log('Not an arrow key');
    }


  });
}

function placeIcons(pixel, person) {
  // password and '?' position
  pixel[15].appendChild(document.getElementsByClassName('fa-lock')[0]);
  pixel[139].textContent = '?';
  // avatar position
  pixel[232].appendChild(person);
  // icon and '^' positions
  pixel[66].appendChild(document.getElementsByClassName('fa-chess-pawn')[0]);
  pixel[128].textContent = '^';
  pixel[88].appendChild(document.getElementsByClassName('fa-slack')[0]);
  pixel[150].textContent = '^';
  pixel[314].appendChild(document.getElementsByClassName('fa-futbol')[0]);
  pixel[376].textContent = '^';
  pixel[336].appendChild(document.getElementsByClassName('fa-bug')[0]);
  pixel[398].textContent = '^';
}

function notIconIndex(index, arrow) {
  // checks if position moved isn't where icon's index is located
  if (arrow === 'ArrowUp') {
    if (index - 31 === 15 ||index - 31 === 66 || index - 31 === 88 || index - 31 === 314 || index - 31 === 336) return false;
  }
  else if (arrow === 'ArrowLeft') {
    if (index - 1 === 15 || index - 1 === 66 || index - 1 === 88 || index - 1 === 314 || index - 1 === 336) return false;
  }
  else if (arrow === 'ArrowRight') {
    if (index + 1 === 15 || index + 1 === 66 || index + 1 === 88 || index + 1 === 314 || index + 1 === 336) return false;
  }
  else if (arrow === 'ArrowDown') {
    if (index + 31 === 15 || index + 31 === 66 || index + 31 === 88 || index + 31 === 314 || index + 31 === 336) return false;
  }
  return true;
}

function makePassword() {
  let password = '';
  let keyCode = {
    0: 'Ha', 1: 'cK', 2: 'In', 3: 'gI', 4: 'Sa', 5: 'pU', 6: 'Zz', 7: 'le', 8: '</>', 9: '@^*'
  };

  let user = JSON.parse(localStorage.getItem('USERS_SAVED'));
  let birth = user.birth.split('-').join('');

  for (let i = 0, j; i < birth.length; i++) {
    password += keyCode[birth[i]];
  }
  user.pass1 = password.slice(0, 4);
  user.pass2 = password.slice(4, 8);
  user.pass3 = password.slice(8, 12);
  user.pass4 = password.slice(12);
  user.password = password;
  localStorage.setItem('USERS_SAVED', JSON.stringify(user));

  setPartialAnswers(user);

  return password;
}

function setPartialAnswers(user) {
  let partial1 = document.getElementById('pass1');
  let partial2 = document.getElementById('pass2');
  let partial3 = document.getElementById('pass3');
  let partial4 = document.getElementById('pass4');

  partial1.value = user.pass1;
  partial2.value = user.pass2;
  partial3.value = user.pass3;
  partial4.value = user.pass4;
}

function carrotOrQuestionIndex(personIndex) {
  let passWindow = document.getElementsByClassName('password')
  // let secretPass = document.getElementById('secret');
  let guess1 = document.getElementById('128');
  let guess2 = document.getElementById('150');
  let guess3 = document.getElementById('376');
  let guess4 = document.getElementById('398');
  let form = document.querySelector('.partial');
  // let button = document.getElementById('128')

  if (personIndex === 139) {
    // un-blur screen when in index
    // un-hide screen when in index
    passWindow[0].hidden = false;
    document.getElementById('screen').style.filter = 'blur(4px)';
    document.getElementById('screen').style.opacity = '0.8';
  } else {
    // blur screen when out of index
    // hide screen when out of index
    passWindow[0].hidden = true;
    document.getElementById('screen').style.filter = 'blur(0)';
    document.getElementById('screen').style.opacity = '1';
  }
  // un-hide input box when in index
  // hide input box when out of index
  if (personIndex === 128) {
    guess1.hidden = false;
    guess1.nextElementSibling.hidden = false;
    console.log(form);
    guess1.nextElementSibling.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(event);
    })
  } else {
    guess1.hidden = true;
    guess1.nextElementSibling.hidden = true;
  }
  if (personIndex === 150) {
    guess2.hidden = false;
    guess2.nextElementSibling.hidden = false;
  } else {
    guess2.hidden = true;
    guess2.nextElementSibling.hidden = true;
  }
  if (personIndex === 376) {
    guess3.hidden = false;
    guess3.nextElementSibling.hidden = false;
  } else {
    guess3.hidden = true;
    guess3.nextElementSibling.hidden = true;
  }
  if (personIndex === 398) {
    guess4.hidden = false;
    guess4.nextElementSibling.hidden = false;
  } else {
    guess4.hidden = true;
    guess4.nextElementSibling.hidden = true;
  }
}
