import './modal.scss';

const modalWindow = document.querySelector('.modal');
const pageBody = document.querySelector('body');
const btnBack = document.querySelector('.modal-media__btn');
const btnClose = document.querySelector('.modal-message__btn-close');
const btnNo = document.querySelector('.modal-message__btn-no');

function closeModal() {
  modalWindow.classList.remove('modal--active');
  pageBody.classList.remove('no-scroll');
}

function openModal() {
  modalWindow.classList.add('modal--active');
  pageBody.classList.add('no-scroll');
  modalWindow.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
    if (btnBack && e.target === btnBack) {
      closeModal();
    }
    if (btnNo && e.target === btnNo) {
      closeModal();
    }
    if (btnClose && e.target.closest('.btn-cancel') === btnClose) {
      closeModal();
    }
  });
}

/* eslint-disable-next-line import/prefer-default-export */
export { closeModal, openModal };
