import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/button/button';
import ProfileForm from '../profileForm/profileForm';

const ProfileContainer = (props?: any) => {
  const { user }: any = props;

  const router = useHistory();

  return (
    <section className={'profile'}>
      <div className={'profile__content-inner'}>
        <div className={'profile__title-inner'}>
          <Button
            size={'small'}
            typeIcon={'back'}
            color={'transparent'}
            value={''}
            type={'button'}
            btnType={''}
            onClick={() => router.goBack()}
            aria-label={'Назад'}
          />
          <h2 className={'profile__title'}>Профиль</h2>
        </div>
        <ProfileForm user={user} />
      </div>
    </section>
  );
};

export default ProfileContainer;
