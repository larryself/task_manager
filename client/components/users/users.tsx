import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import UserItem from './user-item/userItem';
import Modal from '../modal/modal';
import GlobalContext from '../../context/context';
import { User } from '../../types';
import { getUsers, delUser } from '../../api/index';

const UsersList = (props: any) => {
  const { GlobalState }: any = useContext(GlobalContext);
  const { formValues } = props;
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState();
  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data.users);
    } catch (e) {
      toast.error('Чтото пошло не так');
    }
  };
  const deleteUser = async () => {
    try {
      await delUser(userID);
      await loadUsers();
    } catch (e) {
      toast.error(`Повторите попытку позднее,${e}`);
    }
  };
  const filterByAuthor = (users: User[], valueAuthor = '') => {
    if (valueAuthor.trim() === '') {
      return users;
    }
    return users.filter((user) => {
      const { name } = user;
      return name.toLowerCase().indexOf(valueAuthor.toLowerCase().trim()) > -1;
    });
  };
  const filterByRole = (users: User[], valueRole = '') => {
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
    return users;
  };
  const filterUsers = (users: any) => {
    const filteredByAuthor: User[] = filterByAuthor(users, formValues.name);
    const filteredByRole: User[] = filterByRole(filteredByAuthor, formValues.role);
    return filteredByRole;
  };
  const filteredUsers = filterUsers(users);
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <ul className={'users__list'}>
      {users &&
        filteredUsers.map((user) => (
          <li key={user.id} className={'user__item'}>
            <UserItem user={user} setUserID={setUserID} />
          </li>
        ))}
      {GlobalState.modal.active && <Modal delFetch={deleteUser} />}
    </ul>
  );
};

export default UsersList;
