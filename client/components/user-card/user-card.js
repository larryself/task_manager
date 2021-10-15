import './user-card.scss';
import { openModal } from '../modal/modal';

const delButtons = document.querySelectorAll('.user-card__btn-del');
delButtons.forEach((delBtn) => {
  delBtn.addEventListener('click', () => {
    openModal();
  });
});
