import React, { LegacyRef } from 'react';
import './userRadio.scss';
import { UserRadioBtnProps } from '../../../types';

const UserRadioBtn = React.forwardRef(({ value, ...props }: UserRadioBtnProps, ref: LegacyRef<HTMLInputElement>) => (
  <label className={'radio-btn'}>
    <input className={'radio-btn__input'} type={'radio'} name={'role'} value={value} {...props} ref={ref} />
    <span className={'radio-btn__name'}>{value}</span>
  </label>
));

export default UserRadioBtn;
