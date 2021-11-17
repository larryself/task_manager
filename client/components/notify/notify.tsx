import * as React from 'react';
import { Link } from 'react-router-dom';
import './notify.scss';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Notify = () => {
  const [notify, setNotify] = useState('');
  function fetchPost() {
    fetch('/api/notification')
      .then((response) => response.json())
      .then((data) => setNotify(data.notifications.length))
      .catch(() => {
        toast.error('Что-то пошло не так, попробуйте перезагрузить страницу');
      });
  }
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <Link className={'notify-bell'} to={'/notifications'}>
      <span className={'notify-bell__count'}>{notify}</span>
    </Link>
  );
};
export default Notify;
