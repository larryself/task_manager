import * as React from 'react';
import './type.scss';
import Icon from '../../icon/icon';

const FieldsetItem = React.forwardRef(({ value, name, checkboxType, iconType, ...props }: any, ref) => (
  <label className={'filter'}>
    <input className={'filter__input'} name={name} type={'checkbox'} {...props} ref={ref} />
    <span className={`filter__name ${checkboxType && `filter__name--${checkboxType}`}`}>
      {iconType && <Icon type={''} typeIcon={iconType} />}
      {value}
    </span>
  </label>
));

export default FieldsetItem;
