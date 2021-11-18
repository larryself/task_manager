import React, { useEffect, useState } from 'react';
import Icon from '../icon/icon';
import './Avatar.scss';
import { AvatarProps } from '../../types';

const Avatar = (props: AvatarProps) => {
  const { uploadFiles } = props;
  const [avatar, setAvatar] = useState('../public/img/avatar.svg');
  const onChangePicture = (fileList: any) => {
    if (typeof fileList === 'string') {
      setAvatar(fileList);
    } else {
      const file = fileList[0];
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        // @ts-ignore
        setAvatar(reader.result),
      );
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    if (uploadFiles) {
      onChangePicture(uploadFiles);
    }
  }, [uploadFiles]);
  return (
    <div className={'avatar'}>
      <div className={'avatar__inner'}>
        <img src={avatar} alt={'Аватар'} height={'120'} width={'120'} className={'avatar__img'} />
      </div>
      <label className={'avatar__load-label'}>
        <input type={'file'} name={'file'} className={'avatar__load-input'} {...props} />
        <div className={'avatar__load-title'}>
          <Icon typeIcon={'download'} />
          <span>Загрузить аватар</span>
        </div>
      </label>
    </div>
  );
};

export default Avatar;
