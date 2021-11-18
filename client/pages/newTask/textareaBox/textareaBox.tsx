import React, { LegacyRef } from 'react';
import './textarea-box.scss';
import { TextareaBoxProps } from '../../../types';

const TextareaBox = React.forwardRef(
  ({ className, ...props }: TextareaBoxProps, ref: LegacyRef<HTMLTextAreaElement>) => (
    <div className={`textarea-box ${className}`}>
      <label className={'textarea-box__label'} htmlFor={'desc'}>
        Описание
      </label>
      <textarea
        className={'textarea-box__input'}
        name={'desc'}
        id={'desc'}
        cols={30}
        rows={5}
        placeholder={'Опишите требования'}
        {...props}
        ref={ref}
      />
    </div>
  ),
);

export default TextareaBox;
