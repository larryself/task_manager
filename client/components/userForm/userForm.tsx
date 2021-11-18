import React, { useState, useContext } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import InputBox from '../input/input-box';
import Button from '../button/button';
import SelectBox from '../select-box/select-box';
import Icon from '../icon/icon';
import GlobalContext from '../../context/context';
import Modal from '../modal/modal';
import { changeModal } from '../../action/action';
import Avatar from '../avatar/Avatar';
import { API_USERS } from '../../constants/URL';

const UserForm = (props?: any) => {
  const { user } = props;
  const router = useHistory();
  const { GlobalState, GlobalDispatch }: any = useContext(GlobalContext);
  const [passwordHide, setPasswordHide] = useState({ type: 'password', icon: 'invisible' });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: user,
  });

  const uploadFiles = useWatch({
    name: 'avatar',
    control,
  });
  function setUserFetch(data: any) {
    fetch(`${API_USERS}${user.id}`, { method: 'PUT', body: JSON.stringify(data) }).then((response) => {
      if (response.ok) {
        router.push('/users');
      }
    });
  }
  const addUserFetch = (data: any) => {
    fetch(API_USERS, { method: 'POST', body: JSON.stringify(data) }).then((response) => {
      if (response.ok) {
        router.push('/users');
      }
    });
  };
  const delUserFetch = () =>
    fetch(`${API_USERS}${user.id}`, { method: 'DELETE' }).then((response) => {
      if (response.ok) {
        router.push('/users');
      }
    });
  const onSubmit = (data: any) => {
    if (user) {
      setUserFetch(data);
    } else {
      addUserFetch(data);
    }
  };

  const passwordToggler = () => {
    const currentState = passwordHide.type;
    const newState = currentState === 'password' ? 'text' : 'password';
    const newIcon = currentState === 'password' ? 'visible' : 'invisible';

    setPasswordHide({ type: newState, icon: newIcon });
  };
  const selectRole = [
    { value: 'manager', label: 'Менеджер' },
    { value: 'admin', label: 'Админитратор' },
    { value: 'contentMaker', label: 'Контент-мейкер' },
  ];

  return (
    <div className={'new-user__box'}>
      <form className={'new-user__form'} onSubmit={handleSubmit(onSubmit)}>
        <div className={'new-user__img-column'}>
          <Controller
            control={control}
            name={'avatar'}
            render={({ field }) => (
              <Avatar
                uploadFiles={uploadFiles}
                user={user}
                onChange={(file: React.ChangeEvent<HTMLInputElement>) => {
                  field.onChange(file.target.files);
                }}
              />
            )}
          />
        </div>
        <div className={'new-user__input-column'}>
          <InputBox
            className={`new-user__input ${errors.name && 'input-box--invalid'}`}
            id={'name'}
            type={'name'}
            label={'Имя, фамилия'}
            placeholder={'Введите имя и фамилию'}
            {...register('name', { required: 'name' })}
          />
          <InputBox
            className={`new-user__input ${errors.email && 'input-box--invalid'}`}
            id={'email'}
            type={'email'}
            label={'E-mail'}
            placeholder={'Введите e-mail'}
            {...register('email', { required: 'email' })}
          />
          <Controller
            control={control}
            name={user ? 'role.name' : 'role'}
            rules={{ required: true }}
            render={({ field }) => (
              <SelectBox
                className={`new-user__input ${errors.role && 'select-box--invalid'}`}
                label={'Роль'}
                placeholder={'Выберите роль'}
                options={selectRole}
                onChange={(options: any) => {
                  field.onChange(options.value);
                }}
                value={selectRole.find((opt) => opt.value === field.value)}
              />
            )}
          />
          <InputBox
            className={`new-user__input-password ${errors.password && 'input-box--invalid'}`}
            id={'password'}
            type={passwordHide.type}
            label={'Пароль'}
            placeholder={'Введите пароль'}
            {...register('password', { required: 'password', maxLength: 80 })}
          >
            <button type={'button'} className={'new-user__input-password-trigger'} onClick={passwordToggler}>
              <Icon typeIcon={passwordHide.icon} />
            </button>
          </InputBox>
          {Object.keys(errors).length > 0 && (
            <div className={'new-user__attention-inner'}>
              <Icon typeIcon={'attention'} />
              <p className={'new-user__attention-message'}>Заполните отмеченные поля</p>
            </div>
          )}
          <div className={'new-user__btn-inner'}>
            <Button
              value={'Сохранить'}
              color={'blue'}
              size={'big'}
              typeIcon={'approved-blue'}
              type={'submit'}
              btnType={''}
            />
            {user && (
              <Button
                value={'Удалить'}
                color={'red-text'}
                size={'big'}
                typeIcon={'del'}
                type={'button'}
                btnType={''}
                onClick={() =>
                  GlobalDispatch(
                    changeModal({
                      active: true,
                      format: 'message',
                      typeContent: 'message',
                      content: 'пользователя',
                    }),
                  )
                }
              />
            )}
          </div>
        </div>
      </form>
      {GlobalState.modal.active && <Modal delFetch={delUserFetch} />}
    </div>
  );
};

export default UserForm;
