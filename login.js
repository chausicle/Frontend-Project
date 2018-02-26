document.addEventListener('DOMContentLoaded', () => {
  login();
})

function login() {
  getInfo();

  document.addEventListener('submit', (event) => {
    event.preventDefault();

    let userObj = {};
    let email = document.getElementById('inputEmail');
    let birth = document.getElementById('inputBirth');
    let isRemembered = event.target[2].checked;
    userObj.email = email.value;
    userObj.birth = birth.value;
    userObj.isRemembered = isRemembered;

    // store user data into localStorage
    localStorage.setItem('USERS_SAVED', JSON.stringify(userObj));

    // redirects the page to puzzle.html
    document.location = 'puzzle.html';
  })

}

function getInfo() {
  let user = JSON.parse(localStorage.getItem('USERS_SAVED')) || false;
  if (user.isRemembered) {
    let emailSaved = document.getElementById('inputEmail');
    let birthSaved = document.getElementById('inputBirth');
    let isRememberedSaved = document.getElementById('remember');
    emailSaved.value = user.email;
    birthSaved.value = user.birth;
    isRememberedSaved.setAttribute('checked', user.isRemembered);
  }
}
