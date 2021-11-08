import * as React from 'react';
import './search-box.scss';
import BtnReset from '../button/btnReset';
import Icon from '../icon/icon';

const SearchBox = React.forwardRef(({ className, placeholder, ...props }: any, ref) => {
  const { setValue, name } = props;
  return (
    <div className={`search-box ${className}`}>
      <label htmlFor={'search'} className={'search-box__label'}>
        Поиск
      </label>
      <div className={'search-box__input-inner'}>
        <input
          className={'search-box__input'}
          type={'text'}
          id={'search'}
          placeholder={placeholder}
          required={'required'}
          {...props}
          ref={ref}
        />
        <span className={'search-box__icon'}>
          <Icon typeIcon={'search'} type={''} />
        </span>
        <BtnReset className={'search-box__btn'} type={'button'} onClick={() => setValue(name, '')} />
      </div>
    </div>
  );
});
export default SearchBox;
