import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Button from '../../components/button/button';
import UserForm from '../../components/userForm/userForm';
import { getUser } from '../../api';

const UsersId = () => {
  const router = useHistory();
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState();
  const fetchPost = async () => {
    try {
      const data = await getUser(id);
      setUser(data.users);
    } catch (e) {
      toast.error('Чтото пошло не так ');
    }
  };
  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <div>
      <Header />
      <Main>
        <section className={'new-user'}>
          <div className={'new-user__content-inner'}>
            <div className={'new-user__title-inner'}>
              <Button
                value={''}
                color={'transparent'}
                size={'small'}
                typeIcon={'back'}
                type={'button'}
                btnType={''}
                onClick={() => router.push('/users')}
                aria-label={'Назад'}
              />
              <h2 className={'new-user__title'}>Пользователь</h2>
            </div>
            {user && <UserForm user={user} />}
          </div>
        </section>
      </Main>
    </div>
  );
};

export default UsersId;
