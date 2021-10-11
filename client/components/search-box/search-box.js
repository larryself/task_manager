import './search-box.scss';
import '../button/button';

const btnCancel = document.querySelector('.search-box__btn');
const searchBox = document.querySelector('.search-box');
const searchInput = searchBox.querySelector('.search-box__input');
searchBox.addEventListener('click', () => {
  btnCancel.addEventListener('click', (e) => {
    searchInput.value = '';
    const event = new Event('change', { bubbles: true });
    searchInput.dispatchEvent(event);
    searchInput.blur();
  });
});
