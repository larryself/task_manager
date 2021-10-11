const btnOpenMenu = document.querySelector('.profile__btn');
const menu = document.querySelector('.profile__menu-list');
const PROFILE_MENU_LIST_ACTIVE = 'profile__menu-list--active';

function closeMenu() {
  menu.classList.remove(PROFILE_MENU_LIST_ACTIVE);
}
function closeMenuClickToOverlay() {
  window.addEventListener('click', (e) => {
    if (!btnOpenMenu.contains(e.target)) {
      closeMenu();
    }
  });
}
function openMenu() {
  menu.classList.add(PROFILE_MENU_LIST_ACTIVE);
  closeMenuClickToOverlay();
}
btnOpenMenu.addEventListener('click', () => {
  openMenu();
});
