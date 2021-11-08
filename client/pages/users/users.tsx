import * as React from 'react';
import './users.scss';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Button from '../../components/button/button';
import UsersList from '../../components/users/users';
import SearchBox from '../../components/search-box/search-box';
import Fieldset from '../../components/fieldset/fieldset';
import UserRadioBtn from './usersRadioBtn/userRadioBtn';

const Users = () => {
  const { register, watch, setValue } = useForm({
    mode: 'onChange',
  });
  const watchAllFields = watch();
  return (
    <div>
      <Header />
      <Main>
        <section className={'users'}>
          <form className={'users__form'}>
            <SearchBox
              name={'name'}
              setValue={setValue}
              className={'users__form-column users__search-box'}
              placeholder={'Введите имя пользователя'}
              {...register('name')}
            />
            <Fieldset className={'users__form-column users_radio-btn-box'} label={'Роль'}>
              <UserRadioBtn value={'Все'} defaultChecked {...register('role')} />
              <UserRadioBtn value={'Менеджер'} {...register('role')} />
              <UserRadioBtn value={'Контент-мейкер'} {...register('role')} />
              <UserRadioBtn value={'Администратор'} {...register('role')} />
            </Fieldset>
          </form>
          <div className={'users__link-inner'}>
            <Link to={'/new_user'}>
              <Button
                value={'Добавить пользователя'}
                color={'blue'}
                size={'big'}
                type={''}
                typeIcon={'plus-in-circle'}
              />
            </Link>
          </div>
          <UsersList formValues={watchAllFields} />
        </section>
      </Main>
    </div>
  );
};

export default Users;
