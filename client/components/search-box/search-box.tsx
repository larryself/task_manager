import * as React from 'react';
import './search-box.scss';
import Icon from '../icon/icon';
import Button from '../button/button';

const SearchBox = React.forwardRef(({ className, placeholder, setValue, ...props }: any, ref) => {
  const { name } = props;
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
        <Button
          className={'search-box__btn'}
          value={''}
          color={''}
          size={''}
          typeIcon={'reset'}
          type={'reset'}
          btnType={'reset'}
          onClick={() => setValue(name, '')}
        />
      </div>
    </div>
  );
});
export default SearchBox;
