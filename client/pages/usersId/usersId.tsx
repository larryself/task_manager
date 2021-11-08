import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Button from '../../components/button/button';
import UserForm from '../../components/userForm/userForm';

const UsersId = () => {
  const router = useHistory();
  const { id }: any = useParams();
  const [user, setUser] = useState();
  function fetchPost() {
    fetch(`/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data.users));
  }
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
                onClick={() => router.push('/users')}
                aria-label={'Назад'}
              />
              <h2 className={'new-user__title'}>Пользователь</h2>
            </div>
            {user ? <UserForm user={user} /> : null}
          </div>
        </section>
      </Main>
    </div>
  );
};

export default UsersId;
