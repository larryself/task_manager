import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import UserItem from './user-item/userItem';
import Modal from '../modal/modal';
import GlobalContext from '../../context/context';
import { User } from '../../types';

const UsersList = (props: any) => {
  const { GlobalState }: any = useContext(GlobalContext);
  const { formValues } = props;
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState();
  const fetchPost = () =>
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  const delUserFetch = () => fetch(`/api/users/${userID}`, { method: 'DELETE' }).then(() => fetchPost());
  const filtedByAuthor = (users: User[], valueAuthor = '') => {
    if (valueAuthor.trim() === '') {
      return users;
    }
    return users.filter((user) => {
      const { name } = user;
      return name.toLowerCase().indexOf(valueAuthor.toLowerCase().trim()) > -1;
    });
  };
  const filterByRole = (users: User[], valueRole = '') => {
    if (valueRole === 'Все') {
      return users;
    }
    if (valueRole === 'Менеджер') {
      return users.filter((user) => {
        const { name } = user.role;
        return name === 'manager';
      });
    }
    if (valueRole === 'Администратор') {
      return users.filter((user) => {
        const { name } = user.role;
        return name === 'admin';
      });
    }
    if (valueRole === 'Контент-мейкер') {
      return users.filter((user) => {
        const { name } = user.role;
        return name === 'contentMaker';
      });
    }
    return [];
  };
  const filterUsers = () => {
    const filteredByAuthor: User[] = filtedByAuthor(users, formValues.name);
    const filteredByRole: User[] = filterByRole(filteredByAuthor, formValues.role);
    return filteredByRole;
  };
  const filteredUsers = filterUsers();
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <ul className={'users__list'}>
      {filteredUsers.map((user) => (
        <li key={user.id} className={'user__item'}>
          <UserItem user={user} setUserID={setUserID} />
        </li>
      ))}
      {GlobalState.modal.active && <Modal delFetch={delUserFetch} />}
    </ul>
  );
};

export default UsersList;
