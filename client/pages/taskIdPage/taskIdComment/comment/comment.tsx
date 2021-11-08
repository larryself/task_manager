import React from 'react';
import './comment.scss';

const Comment = ({ comment }: any) => (
  <div className={'comment'}>
    <div className={'comment__img-inner'}>
      <img src={'../../../public/img/avatar.png'} alt={'Аватар'} width={40} height={40} className={'comment__img'} />
    </div>
    <div className={'comment__name-row'}>
      <p className={'comment__name'}>{comment.user?.name}</p>
      <p className={'comment__time'}>{comment.date}</p>
    </div>
    <div className={'comment__item-row'}>
      <p className={'comment__item'}>{comment.message}</p>
    </div>
  </div>
);

export default Comment;
