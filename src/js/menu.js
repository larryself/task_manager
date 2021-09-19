const btnOpenMenu = document.querySelector('.profile__btn');
const menu = document.querySelector('.profile__menu-list');
function openMenu() {
  menu.classList.add('profile__menu-list--active');
}
function cloceMenu() {
  menu.classList.remove('profile__menu-list--active');
}
btnOpenMenu.addEventListener('click', () => {
  openMenu();
});
window.addEventListener('click', (e) => {
  if (e.target !== btnOpenMenu || !btnOpenMenu.contains(e.target)) {
    cloceMenu();
  }
});
