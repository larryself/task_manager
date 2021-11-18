import * as React from 'react';
import { useHistory } from 'react-router-dom';
import './newUser.scss';
import Button from '../../components/button/button';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import UserForm from '../../components/userForm/userForm';

const NewUser = () => {
  const router = useHistory();
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
            <UserForm user={''} />
          </div>
        </section>
      </Main>
    </div>
  );
};
export default NewUser;
