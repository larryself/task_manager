import * as React from 'react';
import './button.scss';
import '../icon/icon.scss';
import Icon from '../icon/icon';
import { buttonProps } from '../../types';

function Button({ value, color, size, typeIcon, type, ...props }: buttonProps) {
  return (
    <button className={`btn btn--${color} btn-size-${size}`} type={type ? type : 'button'} {...props}>
      {typeIcon && (
        <span className={'btn__icon-inner'}>
          <Icon type={''} typeIcon={typeIcon} />
        </span>
      )}
      {value || ''}
    </button>
  );
}
export default Button;
