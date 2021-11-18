import * as React from 'react';
import './type.scss';
import { LegacyRef } from 'react';
import Icon from '../../icon/icon';
import { FieldsetItemProps } from '../../../types';

const FieldsetItem = React.forwardRef(
  ({ value, name, checkboxType, iconType, ...props }: FieldsetItemProps, ref: LegacyRef<HTMLInputElement>) => (
    <label className={'filter'}>
      <input className={'filter__input'} name={name} type={'checkbox'} {...props} ref={ref} />
      <span className={`filter__name ${checkboxType && `filter__name--${checkboxType}`}`}>
        {iconType && <Icon typeIcon={iconType} />}
        {value}
      </span>
    </label>
  ),
);

export default FieldsetItem;
