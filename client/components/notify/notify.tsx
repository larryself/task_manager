import * as React from 'react';
import { Link } from 'react-router-dom';
import './notify.scss';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getNotification } from '../../api';

const Notify = () => {
  const [notify, setNotify] = useState('');
  const fetchPost = async () => {
    try {
      const data = await getNotification();
      setNotify(data.notifications.length);
    } catch (e) {
      toast.error(e);
    }
  };
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
