import * as React from 'react';
import { Link } from 'react-router-dom';
import './notify.scss';
import { useEffect, useState } from 'react';

const Notify = () => {
  const [notify, setNotify] = useState('');
  function fetchPost() {
    fetch('/api/notification')
      .then((response) => response.json())
      .then((data) => setNotify(data.notifications.length));
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
