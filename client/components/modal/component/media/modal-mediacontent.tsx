import * as React from 'react';
import './modal-media.scss';
import { useContext, useState } from 'react';
import { intlFormat } from 'date-fns';
import GlobalContext from '../../../../context/context';
import { changeModal } from '../../../../reducer/reducer';
import Icon from '../../../icon/icon';
import Content from '../content/content';
import { MediaContentProps, typesOptions } from '../../../../types';

const ModalMediaContent = ({ card }: MediaContentProps) => {
  const { GlobalDispatch }: any = useContext(GlobalContext);
  const [contentDuration, setContentDuration] = useState();
  const { type, name, dateCreated } = card;
  const typeName: string = type.name;
  const closeModal = () => {
    GlobalDispatch(changeModal({ modal: false }));
  };
  const formatDate = (date: string) => {
    const currentDate = new Date(date);
    const formatedDate = intlFormat(
      currentDate,
      {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      },
      { locale: 'ru' },
    );
    return formatedDate;
  };
  const types: typesOptions = {
    audio: 'Аудио',
    photo: 'Фото',
    video: 'Видео',
  };
  return (
    <div className={'modal-media'}>
      <button className={'modal-media__btn'} type={'button'} aria-label={'Назад'} onClick={closeModal}>
        <Icon type={''} typeIcon={'back-white'} />
      </button>
      <div className={'modal-media__content'}>
        <Icon type={''} typeIcon={typeName} />
        <p className={'modal-media__format'}>{types[typeName]}</p>
        {contentDuration ? <p className={'modal-media__duration'}>{contentDuration}</p> : null}
        <div className={'modal-media__title-inner'}>
          <p className={'modal-media__title'}>{name}</p>
          <span className={'modal-media__time'}>{formatDate(dateCreated)}</span>
        </div>
      </div>
      <Content card={card} setContentDuration={setContentDuration} />
    </div>
  );
};

export default ModalMediaContent;
