import * as React from 'react';
import './button.scss';
import Icon from '../icon/icon';
import { btnResetProps } from '../../types';

const BtnReset = ({ className, type, ...props }: btnResetProps) => (
  <button className={`btn btn-cancel ${className}`} type={type ? type : 'button'} {...props}>
    <Icon type={''} typeIcon={'cancel'} />
  </button>
);

export default BtnReset;
