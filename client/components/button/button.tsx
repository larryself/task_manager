import * as React from 'react';
import './button.scss';
import '../icon/icon.scss';
import Icon from '../icon/icon';
import { buttonProps } from '../../types';

function Button({ value, color, size, typeIcon, type, btnType, className, ...props }: buttonProps) {
  let content;
  switch (btnType) {
    case 'reset':
      content = <Icon typeIcon={typeIcon} />;
      break;
    case 'square':
      content = <Icon typeIcon={typeIcon} />;
      break;
    default:
      content = (
        <span className={'btn__icon-inner'}>
          <Icon typeIcon={typeIcon} />
        </span>
      );
      break;
  }
  return (
    <button
      className={`btn btn--${color} btn-size-${size} ${className && className}`}
      type={type ? type : 'button'}
      {...props}
    >
      {typeIcon && content}
      {value || ''}
    </button>
  );
}
export default Button;
