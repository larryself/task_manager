import './profile.scss';
import '../../components/header/header';
import '../../components/button/button';
import '../../components/input-box/input-box';
import '../../components/select/select';

const btnBack = document.querySelector('.profile-box__btn-back');
btnBack.addEventListener('click', () => {
  window.history.back();
});
