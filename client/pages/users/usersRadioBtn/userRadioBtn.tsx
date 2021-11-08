import React from 'react';
import './userRadio.scss';

const UserRadioBtn = React.forwardRef(({ value, ...props }: any, ref) => (
  <label className={'radio-btn'}>
    <input className={'radio-btn__input'} type={'radio'} name={'role'} value={value} {...props} ref={ref} />
    <span className={'radio-btn__name'}>{value}</span>
  </label>
));

export default UserRadioBtn;
