import AirDatepicker from 'air-datepicker';
import './date-box.scss';
import 'air-datepicker/air-datepicker.css';

const calendarElement = document.querySelector('.date-box__input');

const cals = new AirDatepicker('.date-box__input', {
  position: 'bottom right',
  autoClose: true,
  classes: 'my custom classes',
  onSelect: () => {
    const event = new Event('change', { bubbles: true });
    calendarElement.dispatchEvent(event);
  },
});
