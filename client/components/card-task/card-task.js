import './card-task.scss';
import { openModal } from '../modal/modal';

const delBtns = document.querySelectorAll('.card-task__btn-del');
delBtns.forEach((delBtn) => {
  delBtn.addEventListener('click', () => {
    openModal();
  });
});
