import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Avatar from '../../../components/avatar/Avatar';
import InputBox from '../../../components/input/input-box';
import Button from '../../../components/button/button';
import { changeModal, setUser } from '../../../reducer/reducer';
import Modal from '../../../components/modal/modal';
import GlobalContext from '../../../context/context';

const ProfileForm = (props?: any) => {
  const { user } = props;
  const router = useHistory();
  const { GlobalState, GlobalDispatch }: any = useContext(GlobalContext);
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: user,
  });
  const uploadFiles = watch('avatar');
  const logout = () => {
    GlobalDispatch(setUser({ isAuth: false }));
    localStorage.removeItem('auth');
    localStorage.removeItem('email');
    router.push('/auth');
  };
  const delUserFetch = () =>
    fetch(`/api/users/${user.id}`, { method: 'DELETE' }).then((response) => {
      if (response.status <= 204) {
        logout();
      }
    });
  const editUserFetch = (data: any) => {
    fetch(`/api/users/${user.id}`, { method: 'PUT', body: JSON.stringify(data) }).then((response) => {
      if (response.status <= 204) {
        router.go(-1);
      }
    });
  };
  const onSubmit = (data: any) => {
    editUserFetch(data);
  };
  return (
    <div className={'profile__form-inner'}>
      <form className={'profile__form'} onSubmit={handleSubmit(onSubmit)}>
        <div className={'profile__img-column'}>
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
        <div className={'profile__input-column'}>
          <InputBox
            className={`profile__input-name ${errors.name ? 'input-box--invalid' : ''}`}
            type={'text'}
            id={'text'}
            label={'Имя, фамилия'}
            placeholder={'Введите имя и фамилию'}
            {...register('name', { required: true })}
          />
          <InputBox
            className={`profile__input-email  ${errors.email ? 'input-box--invalid' : ''}`}
            id={'email'}
            type={'email'}
            label={'E-mail'}
            placeholder={'Введите e-mail'}
            {...register('email', { required: true })}
          />
          <div className={'profile__btn-inner'}>
            <Button size={'big'} type={'submit'} typeIcon={'approved-blue'} value={'Сохранить'} color={'blue'} />
            <Button
              size={'big'}
              type={'button'}
              typeIcon={'del'}
              value={'Удалить профиль'}
              color={'red-text'}
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
          </div>
        </div>
      </form>
      {GlobalState.modal.active && <Modal delFetch={delUserFetch} />}
    </div>
  );
};

export default ProfileForm;
