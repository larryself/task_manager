import './task.scss';
import '../../components/header/header';

const modalWindow = document.querySelector('.modal');

/* close modal click to close */
document.querySelector('.modal-del__btn-close').addEventListener('click', () => {
  modalWindow.style.display = 'none';
});

/* close modal click to no */
document.querySelector('.modal-del__btn-no').addEventListener('click', () => {
  modalWindow.style.display = 'none';
});

/* close modal click to tray */
document.querySelector('.modal').addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    modalWindow.style.display = 'none';
  }
});

/* open modal click to delete */
document.querySelector('.task-edit__btn-delete').addEventListener('click', () => {
  modalWindow.style.display = 'block';
});
