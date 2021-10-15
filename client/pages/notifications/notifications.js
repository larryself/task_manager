import './notifications.scss';
import '../../components/header/header';
import '../../components/svg-icon/svg-icon';
import '../../components/button/button';

const btnBack = document.querySelector('.notify__btn-back');
btnBack.addEventListener('click', () => {
  window.history.back();
});
