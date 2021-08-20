const btnLoginEnter = document.querySelector('.js-enter-modal');
const page = document.querySelector('.page-body');
const formModal = document.querySelector('.js-modal-form');
const btnExit = document.querySelector('.js-logguot');
const userName = document.querySelector('.js-current-user-name');
const modalWindow = document.querySelector('.js-modal-window');
const formChangeName = document.querySelector('.js-form-change-name');
const userKey = 'autorized';

userName.addEventListener('click', () => {
  const changeNameInput = document.querySelector('.js-change-name-input');
  changeNameInput.value = userName.textContent;
  changeNameInput.classList.add('header-login__input_active');
  changeNameInput.focus();
  userName.classList.remove('header-login__user-name_active');
});

function saveToLocalStorage(user) {
  const userObj = {
    authorized: true,
    user,
  };
  JSON.stringify(userObj);
  localStorage.setItem(userKey, JSON.stringify(userObj));
}

formChangeName.addEventListener('submit', (e) => {
  e.preventDefault();
  const changeNameInput = document.querySelector('.js-change-name-input');
  saveToLocalStorage(changeNameInput.value);
  userName.textContent = changeNameInput.value;
  changeNameInput.classList.remove('header-login__input_active');
  userName.classList.add('header-login__user-name_active');
  formChangeName.reset();
});

document.querySelector('.js-change-name-input').addEventListener('blur', () => {
  formChangeName.requestSubmit();
});

function loginFormOn() {
  if (modalWindow.matches('.modal_active')) {
    return;
  }
  modalWindow.classList.add('modal_active');
  page.classList.add('page-body_not-overflow');
}

function closeModalWindow() {
  modalWindow.classList.remove('modal_active');
  page.classList.remove('page-body_not-overflow');
}

modalWindow.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    closeModalWindow();
  } else {
    loginFormOn();
  }
});

btnLoginEnter.addEventListener('click', () => {
  loginFormOn();
});

function authorize(user) {
  userName.textContent = user;
  userName.classList.add('header-login__user-name_active');
  btnLoginEnter.classList.remove('header-login__btn_active');
  btnExit.classList.add('header-login__btn_active');
}

if (localStorage.getItem(userKey)) {
  const userList = localStorage.getItem(userKey);
  const returnUserList = JSON.parse(userList);
  authorize(returnUserList.user);
}

function authorization() {
  const loginInput = document.querySelector('.js-form-login');
  const loginValue = loginInput.value;
  const checkbox = document.querySelector('.js-form-checkbox');
  if (checkbox.checked) {
    saveToLocalStorage(loginValue);
  }
  authorize(loginValue);
  closeModalWindow();
}

formModal.addEventListener('submit', (e) => {
  e.preventDefault();
  authorization();
  formModal.reset();
});

btnExit.addEventListener('click', () => {
  btnExit.classList.remove('header-login__btn_active');
  btnLoginEnter.classList.add('header-login__btn_active');
  localStorage.clear();
  userName.innerHTML = '';
});
