import * as React from 'react';
import './content-card.scss';
import '../../icon/icon.scss';
import { useContext } from 'react';
import { intlFormat } from 'date-fns';
import GlobalContext from '../../../context/context';
import Icon from '../../icon/icon';
import { changeModal } from '../../../action/action';
import { cardItemProps, typesOptions } from '../../../types';

const CardItem = (props: cardItemProps) => {
  const { card } = props;
  const { setCardID } = props;
  const { GlobalDispatch }: any = useContext(GlobalContext);
  const types: typesOptions = {
    audio: 'Аудио',
    photo: 'Фото',
    video: 'Видео',
  };
  function formatedDate(date: string) {
    const dateCard = new Date(date);
    const formatedDate = intlFormat(
      dateCard,
      {
        hour: '2-digit',
        minute: '2-digit',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      },
      { locale: 'ru' },
    );
    return formatedDate;
  }
  function openCard() {
    GlobalDispatch(changeModal({ active: true, format: card.type.name, typeContent: 'media' }));
    setCardID(card.id);
  }

  return (
    <article className={'content-card'} data-url={card.url} data-type={card.url}>
      <div className={'content-card__poster'} onClick={openCard} aria-hidden={'true'}>
        <img src={card.preview} alt={''} className={'content-card__img'} width={'393'} height={'250'} />
      </div>
      <p className={`content-card__format content-card__format--${card.type.name}`}>
        <Icon typeIcon={card.type.name} type={''} />
        {types[card.type.name]}
      </p>
      <h3 className={'content-card__title'}>{card.name}</h3>
      <p className={'content-card__author'}>
        {card.author.name}
        <span className={'content-card__author-time'}>{formatedDate(card.dateCreated)}</span>
      </p>
    </article>
  );
};

export default CardItem;
