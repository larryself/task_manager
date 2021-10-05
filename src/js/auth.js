const btnLoginEnter = document.querySelector('.js-enter-modal');
const page = document.querySelector('.page-body');
const formModal = document.querySelector('.js-modal-form');
const btnExit = document.querySelector('.js-logguot');
const userName = document.querySelector('.js-current-user-name');
const modalWindow = document.querySelector('.js-modal-window');
const formChangeName = document.querySelector('.js-form-change-name');
const changeNameInput = document.querySelector('.js-change-name-input');
const loginInput = document.querySelector('.js-form-login');
const checkbox = document.querySelector('.js-form-checkbox');
const HEADER_LOGIN_BTN_ACTIVE = 'header-login__btn_active';
const HEADER_LOGIN_INPUT_ACTIVE = 'header-login__input_active';
const HEADER_LOGIN_USER_NAME_ACTIVE = 'header-login__user-name_active';
const MODAL_ACTIVE = 'modal--active';
const PAGE_BODY_NOT_OVERFLOW = 'page-body_not-overflow';
const userKey = 'autorized';

userName.addEventListener('click', () => {
  changeNameInput.value = userName.textContent;
  changeNameInput.classList.add(`${HEADER_LOGIN_INPUT_ACTIVE}`);
  changeNameInput.focus();
  userName.classList.remove(`${HEADER_LOGIN_USER_NAME_ACTIVE}`);
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
  saveToLocalStorage(changeNameInput.value);
  userName.textContent = changeNameInput.value;
  changeNameInput.classList.remove(`${HEADER_LOGIN_INPUT_ACTIVE}`);
  userName.classList.add(`${HEADER_LOGIN_USER_NAME_ACTIVE}`);
  formChangeName.reset();
});

changeNameInput.addEventListener('blur', () => {
  formChangeName.requestSubmit();
});

function loginFormOn() {
  if (modalWindow.matches(`${MODAL_ACTIVE}`)) {
    return;
  }
  modalWindow.classList.add(`${MODAL_ACTIVE}`);
  page.classList.add(`${PAGE_BODY_NOT_OVERFLOW}`);
}

function closeModalWindow() {
  modalWindow.classList.remove(`${MODAL_ACTIVE}`);
  page.classList.remove(`${PAGE_BODY_NOT_OVERFLOW}`);
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
  userName.classList.add(`${HEADER_LOGIN_USER_NAME_ACTIVE}`);
  btnLoginEnter.classList.remove(`${HEADER_LOGIN_BTN_ACTIVE}`);
  btnExit.classList.add(`${HEADER_LOGIN_BTN_ACTIVE}`);
}

if (localStorage.getItem(userKey)) {
  const userList = localStorage.getItem(userKey);
  const returnUserList = JSON.parse(userList);
  authorize(returnUserList.user);
}

function authorization() {
  const loginValue = loginInput.value;
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
  btnExit.classList.remove(`${HEADER_LOGIN_BTN_ACTIVE}`);
  btnLoginEnter.classList.add(`${HEADER_LOGIN_BTN_ACTIVE}`);
  localStorage.clear();
  userName.innerHTML = '';
});
