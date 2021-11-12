import * as React from 'react';
import './navigation-menu.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import GlobalContext from '../../context/context';

const Navigation = ({ className }: any) => {
  const { GlobalState }: any = useContext(GlobalContext);
  const { user } = GlobalState;
  return (
    <nav className={`menu ${className}`}>
      <ul className={'menu__list'}>
        <li className={'menu__item'}>
          <NavLink className={'menu__link'} activeClassName={'menu__link--active'} to={'/index'}>
            Главная
          </NavLink>
        </li>
        <li className={'menu__item'}>
          <NavLink className={'menu__link'} activeClassName={'menu__link--active'} to={'/tasks'}>
            Задачи
          </NavLink>
        </li>
        {user.role?.name === 'admin' && (
          <li className={'menu__item'}>
            <NavLink className={'menu__link'} activeClassName={'menu__link--active'} to={'/users'}>
              Пользователи
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
