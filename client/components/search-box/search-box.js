import './search-box.scss';
import '../button/button';

const btnReset = document.querySelector('.search-box__btn');
const searchBox = document.querySelector('.search-box');
const searchInput = searchBox.querySelector('.search-box__input');

function addClassInput() {
  searchInput.classList.add('search-box__input--active');
}
function removeClassInput() {
  searchInput.classList.remove('search-box__input--active');
}
function resetInputValue() {
  searchInput.value = '';
  const event = new Event('change', { bubbles: true });
  searchInput.dispatchEvent(event);
}

if (searchInput) {
  searchInput.addEventListener('focus', () => {
    addClassInput();
  });
  btnReset.addEventListener('click', () => {
    resetInputValue();
    removeClassInput();
  });
}
