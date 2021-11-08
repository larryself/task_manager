import * as React from 'react';
import './date-box.scss';
import './datePicker.scss';
import ReactDatePicker from 'react-datepicker';

import { useState } from 'react';
import ru from 'date-fns/locale/ru';

const DateBox = ({ className, placeholder, ...props }: any) => {
  const [startDate, setStartDate] = useState('');
  return (
    <div className={`date-box ${className}`}>
      <label htmlFor={'date'} className={'date-box__label'}>
        Поиск
      </label>
      <div className={'date-box__input-inner'}>
        <ReactDatePicker
          locale={ru}
          selected={startDate}
          onChange={(date: any) => {
            setStartDate(date);
          }}
          wrapperClassName={'datePicker'}
          dateFormat={'dd-MM-yyyy'}
          placeholderText={placeholder}
          customInput={<input className={'date-box__input'} name={'date'} id={'date'} />}
          {...props}
        />
        <span className={'date-box__icon'}>
          <svg viewBox={'0 0 15 14'} height={'14'} width={'15'}>
            <use href={'../../../public/img/icon.svg#calendar'} />
          </svg>
        </span>
      </div>
    </div>
  );
};
export default DateBox;
