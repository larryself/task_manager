import './auth.scss';
import '../../components/button/button';
import '../../components/input-box/input-box';

const btnSubmit = document.querySelector('.auth__btn');
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll('.input-box__input');
  inputs.forEach((input) => {
    input.classList.add('input-box__input--submitted');
  });
});
