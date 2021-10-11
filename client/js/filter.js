const contentList = document.querySelector('.cards__list');
const loader = document.querySelector('.loader');
const form = document.querySelector('.cards__form');
function load() {
  contentList.classList.add('cards__list--load');
  loader.classList.add('loader--active-to-form');
  setTimeout(() => {
    contentList.classList.remove('cards__list--load');
    loader.classList.remove('loader--active-to-form');
  }, 1000);
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  load();
});
form.addEventListener('change', (e) => {
  e.preventDefault();
  load();
});
