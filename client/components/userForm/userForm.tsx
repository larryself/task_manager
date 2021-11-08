import React, { useState, useContext } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import InputBox from '../input/input-box';
import Button from '../button/button';
import SelectBox from '../select-box/select-box';
import Icon from '../icon/icon';
import GlobalContext from '../../context/context';
import Modal from '../modal/modal';
import { changeModal } from '../../reducer/reducer';
import Avatar from '../avatar/Avatar';

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
    fetch(`/api/users/${user.id}`, { method: 'PUT', body: JSON.stringify(data) }).then((response) => {
      if (response.status <= 204) {
        router.push('/users');
      }
    });
  }
  const addUserFetch = (data: any) => {
    fetch(`/api/users`, { method: 'POST', body: JSON.stringify(data) }).then((response) => {
      if (response.status <= 204) {
        router.push('/users');
      }
    });
  };
  const delUserFetch = () =>
    fetch(`/api/users/${user.id}`, { method: 'DELETE' }).then((response) => {
      if (response.status <= 204) {
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
            render={({ field }: any) => (
              <Avatar
                uploadFiles={uploadFiles}
                user={user}
                onChange={(file: any) => {
                  field.onChange(file.target.files);
                }}
              />
            )}
          />
        </div>
        <div className={'new-user__input-column'}>
          <InputBox
            className={`new-user__input ${errors.name ? 'input-box--invalid' : null}`}
            id={'name'}
            type={'name'}
            label={'Имя, фамилия'}
            placeholder={'Введите имя и фамилию'}
            {...register('name', { required: 'name' })}
          />
          <InputBox
            className={`new-user__input ${errors.email ? 'input-box--invalid' : null}`}
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
            render={({ field }: any) => (
              <SelectBox
                className={`new-user__input ${errors.role ? 'select-box--invalid' : ''}`}
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
            className={`new-user__input-password ${errors.password ? 'input-box--invalid' : null}`}
            id={'password'}
            type={passwordHide.type}
            label={'Пароль'}
            placeholder={'Введите пароль'}
            {...register('password', { required: 'password', maxLength: 80 })}
          >
            <button type={'button'} className={'new-user__input-password-trigger'} onClick={passwordToggler}>
              <Icon type={''} typeIcon={passwordHide.icon} />
            </button>
          </InputBox>
          {Object.keys(errors).length > 0 && (
            <div className={'new-user__attention-inner'}>
              <Icon type={''} typeIcon={'attention'} />
              <p className={'new-user__attention-message'}>Заполните отмеченные поля</p>
            </div>
          )}
          <div className={'new-user__btn-inner'}>
            <Button value={'Сохранить'} color={'blue'} size={'big'} typeIcon={'approved-blue'} type={'submit'} />
            {user && (
              <Button
                value={'Удалить'}
                color={'red-text'}
                size={'big'}
                typeIcon={'del'}
                type={'button'}
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
      {GlobalState.modal.active ? <Modal delFetch={delUserFetch} /> : null}
    </div>
  );
};

export default UserForm;
