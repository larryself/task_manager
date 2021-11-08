import * as React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Navigation from '../navigation-menu/navigation-menu';
import Notify from '../notify/notify';
import UserArea from '../userArea/userArea';

const Header = () => (
  <header className={'page-header'}>
    <div className={'wrap page-header__inner'}>
      <Link to={'/index'} className={'page-header__logo-link'}>
        <img src={'../../../public/img/logo.svg'} alt={'logo'} className={'page-header__img'} />
        <h1 className={'page-header__title'}>Менеджер задач</h1>
      </Link>
      <Navigation className={'page-header__menu'} />
      <div className={'page-header__user-area'}>
        <Notify />
        <UserArea />
      </div>
    </div>
  </header>
);

export default Header;
