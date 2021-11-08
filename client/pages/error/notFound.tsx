import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Button from '../../components/button/button';
import './notFound.scss';

const NotFound = () => (
  <div>
    <Header />
    <Main>
      <section className={'not-found'}>
        <div className={'not-found__inner'}>
          <img src={'../../../public/img/404.svg'} alt={'Error 404'} />
          <h2 className={'not-found__title'}>Потерялись?</h2>
          <p className={'not-found__desc'}>Страница, которую вы ищите не существует, либо была удалена</p>
          <Link to={'/index'}>
            <Button color={'blue'} size={'big'} type={'button'} typeIcon={'home'} value={'На главную'} />
          </Link>
        </div>
      </section>
    </Main>
  </div>
);

export default NotFound;
