import * as React from 'react';
import './button.scss';
import Icon from '../icon/icon';
import { btnIconProps } from '../../types';

const BtnIcon = ({ size, className, typeIcon, color, ...props }: btnIconProps) => (
  <button className={`btn btn-square-size-${size} btn--${color} ${className}`} type={'button'} {...props}>
    <Icon type={''} typeIcon={typeIcon} />
  </button>
);

export default BtnIcon;
