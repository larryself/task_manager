import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './auth.scss';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from '../../components/button/button';
import InputBox from '../../components/input/input-box';
import GlobalContext from '../../context/context';
import { setUser } from '../../action/action';
import { postAuth } from '../../api';

const Auth = () => {
  const router = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { GlobalDispatch }: any = useContext(GlobalContext);
  const auth = async (data: any) => {
    try {
      await postAuth(data);
      localStorage.setItem('auth', 'true');
      localStorage.setItem('email', data.email);
      GlobalDispatch(setUser({ isAuth: true, email: data.email }));
      router.push('/index');
    } catch (e) {
      toast.error(`Что-то пошло не так, ${e}`);
    }
  };
  const onSubmit = (data: any) => {
    if (errors) {
      auth(data);
    }
  };
  return (
    <section className={'auth'}>
      <div className={'auth__inner'}>
        <img src={'../../../public/img/logo.svg'} width={'70'} height={'70'} alt={'Логотип'} className={'auth__img'} />
        <h2 className={'auth__title'}>Вход</h2>
        <form className={'auth__form'} onSubmit={handleSubmit(onSubmit)}>
          <InputBox
            className={`${errors.email && `input-box--invalid`}`}
            type={'email'}
            id={'email'}
            placeholder={'Введите e-mail'}
            label={'E-mail'}
            {...register('email', { required: 'email', maxLength: 80 })}
          />
          <InputBox
            className={`${errors.password && `input-box--invalid`}`}
            type={'password'}
            id={'password'}
            placeholder={'Введите пароль'}
            label={'Пароль'}
            {...register('password', { required: 'password', maxLength: 80 })}
          />
          <Button value={'Войти'} typeIcon={'login'} size={'big'} color={'blue'} type={'submit'} btnType={''} />
        </form>
      </div>
    </section>
  );
};

export default Auth;
