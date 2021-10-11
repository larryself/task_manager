import './user-card.scss';
import { openModal } from '../modal/modal';

const delBtns = document.querySelectorAll('.user-card__btn-del');
delBtns.forEach((delBtn) => {
  delBtn.addEventListener('click', () => {
    openModal();
  });
});
