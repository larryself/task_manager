const elementMenu = document.querySelector('.profile');
const menu = document.querySelector('.profile__menu-list');
elementMenu.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('profile__menu-list--active');
});
