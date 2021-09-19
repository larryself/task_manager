const dateInput = document.querySelector('.date');
const nameInput = document.querySelector('.search');
const checkbox = document.querySelector('fieldset');
const contentList = document.querySelector('.cards__list');
const loader = document.querySelector('.loader');
function load() {
  contentList.classList.add('cards__list--load');
  loader.classList.add('loader--active-to-form');
  setTimeout(() => {
    contentList.classList.remove('cards__list--load');
    loader.classList.remove('loader--active-to-form');
  }, 1000);
}

dateInput.addEventListener('change', () => {
  load();
});
nameInput.addEventListener('change', () => {
  load();
});
checkbox.addEventListener('change', () => {
  load();
});
