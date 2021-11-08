import * as React from 'react';
import './input-box.scss';

const InputBox = React.forwardRef(({ className, type, label, placeholder, value, children, ...props }: any, ref) => (
  <div className={`input-box ${className}`}>
    <label htmlFor={'name'} className={'input-box__label'}>
      {label}
    </label>
    <div className={'input-box__input-inner'}>
      <input
        type={type}
        className={'input-box__input'}
        placeholder={placeholder}
        ref={ref}
        defaultValue={value}
        {...props}
      />
      {children}
    </div>
  </div>
));

export default InputBox;
