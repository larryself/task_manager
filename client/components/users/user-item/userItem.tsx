import * as React from 'react';
import './user-card.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BtnIcon from '../../button/btnIcon';
import GlobalContext from '../../../context/context';
import { changeModal } from '../../../reducer/reducer';
import { typesOptions } from '../../../types';

const UserItem = (props: any) => {
  const { GlobalDispatch }: any = useContext(GlobalContext);
  const { setUserID } = props;
  const { user } = props;
  const deleteUser = () => {
    GlobalDispatch(
      changeModal({
        active: true,
        format: 'message',
        typeContent: 'message',
        content: 'пользователя',
      }),
    );
    setUserID(user.id);
  };

  const roles: typesOptions = {
    manager: 'Менеджер',
    admin: 'Админитратор',
    contentMaker: 'Контент-мейкер',
  };
  return (
    <div className={'user-card'}>
      <div className={'user-card__img-inner'}>
        <img src={user.avatar} alt={'Аватар'} className={'user-card__img'} />
      </div>
      <h3 className={'user-card__name'}>{user.name}</h3>
      <span className={'user-card__mail'}>{user.email}</span>
      <span className={'user-card__role'}>{roles[user.role.name]}</span>
      <div className={'user-card__btn-inner'}>
        <Link to={`/users/${user.id}`}>
          <BtnIcon size={'mini'} className={'user-card__btn-edit'} typeIcon={'edit'} color={'lt-blue'} />
        </Link>
        <BtnIcon
          size={'mini'}
          className={'user-card__btn-del'}
          typeIcon={'del'}
          color={'lt-blue'}
          onClick={deleteUser}
        />
      </div>
    </div>
  );
};

export default UserItem;
