import * as React from 'react';
import './cards.scss';
import { useContext, useEffect, useState } from 'react';
import { formatISO } from 'date-fns';
import toast from 'react-hot-toast';
import CardItem from './cardItem/CardItem';
import Loader from '../loader/loader';
import Modal from '../modal/modal';
import GlobalContext from '../../context/context';
import { Card, CardListProps } from '../../types';
import { filterByType } from '../../utils/filter';
import { getContents } from '../../api/index';

const CardList = (props: CardListProps) => {
  const { GlobalState }: any = useContext(GlobalContext);
  const { formValues } = props;
  const [cards, setCards] = useState({
    contents: [],
    total: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(9);
  const [fetching, setFetching] = useState(true);
  const [cardID, setCardID] = useState();
  const fetchPost = async () => {
    try {
      const data = await getContents(currentPage, count);
      setCards({ contents: [...cards.contents, ...data.contents], total: data.total });
      setCurrentPage((prevState) => prevState + 1);
      setCount((prevState) => prevState + 3);
    } catch (e) {
      toast.error('Что-то пошло не так, попробуйте перезагрузить страницу');
    } finally {
      setFetching(false);
    }
  };
  const findCard = () => cards.contents.find((card) => card.id === cardID);
  const scrollHandler = (event: any) => {
    const { scrollTop } = event.target.documentElement;
    const { scrollHeight } = event.target.documentElement;
    const windowHeight = window.innerHeight;
    if (scrollHeight - (Math.floor(scrollTop) + windowHeight) === 0) {
      setFetching(true);
    }
  };
  const filterByAuthor = (contents: Card[], valueAuthor = '') => {
    if (valueAuthor.trim() === '') {
      return contents;
    }
    return contents.filter((card) => {
      const { name } = card.author;
      return name.toLowerCase().indexOf(valueAuthor.toLowerCase().trim()) > -1;
    });
  };
  const filterByDate = (contents: Card[], valueDate: Date | null | undefined) => {
    if (!valueDate) {
      return contents;
    }
    const date = formatISO(valueDate, { representation: 'date' });
    return contents.filter((card) => card.dateCreated.indexOf(date) > -1);
  };
  const filterCards = (contents: Card[]) => {
    const filteredByAuthor: Card[] = filterByAuthor(contents, formValues.authorName);
    const filteredByDate: Card[] = filterByDate(filteredByAuthor, formValues.date);
    const filteredByType: Card[] = filterByType(filteredByDate, formValues.type);
    return filteredByType;
  };
  const filteredCards = filterCards(cards.contents);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  useEffect(() => {
    if (fetching) {
      fetchPost();
    }
  }, [fetching]);
  return (
    <div>
      <ul className={'cards__list'}>
        {filteredCards.map((card) => (
          <li key={card.id} className={'cards__item'}>
            <CardItem card={card} setCardID={setCardID} />
          </li>
        ))}
      </ul>
      {fetching && <Loader />}
      {GlobalState.modal.active && <Modal card={findCard()} />}
    </div>
  );
};

export default CardList;
