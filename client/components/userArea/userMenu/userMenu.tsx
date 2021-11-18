import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../../context/context';
import { authUser } from '../../../action/action';

const UserMenu = ({ visible }: any) => {
  const { GlobalDispatch }: any = useContext(GlobalContext);
  let rootClasses: string = 'user-area__menu-list';
  if (visible) {
    rootClasses += ' user-area__menu-list--active';
  }
  const logout = () => {
    GlobalDispatch(authUser({ isAuth: false }));
    localStorage.removeItem('auth');
  };
  return (
    <ul className={rootClasses}>
      <li className={'user-area__menu-item'}>
        <Link to={'/profile'} className={'user-area__menu-link'}>
          Профиль
        </Link>
      </li>
      <li className={'user-area__menu-item'}>
        <Link className={'user-area__menu-link'} onClick={logout} to={'/auth'}>
          Выход
        </Link>
      </li>
    </ul>
  );
};
export default UserMenu;
