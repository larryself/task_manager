import * as React from 'react';
import './notifications.scss';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import NotifyItem from '../../components/notify/notifyItem';
import Button from '../../components/button/button';

const Notify = () => {
  const router = useHistory();
  const [notifications, setNotifications] = useState([]);

  function fetchPost() {
    fetch('/api/notification')
      .then((response) => response.json())
      .then((data) => setNotifications(data.notifications))
      .catch(() => {
        toast.error('Что-то пошло не так, попробуйте перезагрузить страницу');
      });
  }

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div>
      <Header />
      <Main>
        <section className={'notify'}>
          <div className={'notify__inner'}>
            <div className={'notify__title-inner'}>
              <Button
                size={'small'}
                typeIcon={'back'}
                color={'transparent'}
                value={''}
                type={''}
                onClick={router.goBack}
                aria-label={'Назад'}
              />
              <h2 className={'notify__title'}>Уведомления</h2>
            </div>
            <div className={'notify__content-inner'}>
              <ul className={'notify__list'}>
                {notifications.map((notification) => (
                  <li key={notification.id} className={'notify__item'}>
                    <NotifyItem notification={notification} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Main>
    </div>
  );
};

export default Notify;
