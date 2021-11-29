import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import './userArea.scss';
import { toast } from 'react-hot-toast';
import UserMenu from './userMenu/userMenu';
import GlobalContext from '../../context/context';
import { setUser } from '../../action/action';
import { getUsers } from '../../api';

const UserArea = () => {
  const { GlobalState, GlobalDispatch }: any = useContext(GlobalContext);
  const { user } = GlobalState;
  const [visible, setVisible] = useState(false);
  const findUser = async (currentUser: string) => {
    try {
      const data = await getUsers();
      data.users.forEach((user: any) => {
        if (user.email === currentUser) {
          GlobalDispatch(setUser({ isAuth: true, ...user }));
        }
      });
    } catch (e) {
      toast.error('Что-то пошло не так');
    }
  };
  useEffect(() => {
    const currentUserName = localStorage.getItem('email');
    findUser(currentUserName);
  }, []);

  return (
    <div className={'user-area'}>
      <p className={'user-area__name'}>{user.name}</p>
      <button
        className={'user-area__btn'}
        type={'button'}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        <div className={'user-area__img-inner'}>
          <img src={user.avatar} alt={'Аватар'} width={'40px'} height={'40px'} />
        </div>
      </button>
      <UserMenu visible={visible} />
    </div>
  );
};
export default UserArea;
