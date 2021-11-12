import * as React from 'react';
import './cards.scss';
import { useContext, useEffect, useState } from 'react';
import { formatISO } from 'date-fns';
import CardItem from './cardItem/CardItem';
import Loader from '../loader/loader';
import Modal from '../modal/modal';
import GlobalContext from '../../context/context';
import { Card, CardListProps } from '../../types';

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
  function fetchPost() {
    fetch(`/api/contents?page=${currentPage}&count=${count}`)
      .then((response) => response.json())
      .then((data: { contents: []; total: number }) => {
        setCards({ contents: [...cards.contents, ...data.contents], total: data.total });
        setCurrentPage((prevState) => prevState + 1);
        setCount((prevState) => prevState + 3);
      })
      .finally(() => {
        setFetching(false);
      });
  }
  function findCard() {
    return cards.contents.find((card) => card.id === cardID);
  }
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
  const filterByDate = (contents: Card[], valueDate: Date) => {
    let result: string;
    if (valueDate) {
      result = formatISO(valueDate, { representation: 'date' });
    }
    if (valueDate === null || valueDate === undefined) {
      return contents;
    }
    return contents.filter((card) => card.dateCreated.indexOf(result) > -1);
  };
  const filterByType = (contents: Card[], valueTypes: any) => {
    const filteredTypes: string[] = [];
    for (const type in valueTypes) {
      if (valueTypes[type] === true) {
        filteredTypes.push(type);
      }
    }
    if (filteredTypes.length === 0) {
      return contents;
    }
    return contents.filter((card) => {
      const type = card.type.name;
      return filteredTypes.includes(type);
    });
  };
  const filterCards = (contents: Card[]) => {
    const filteredByAuthor: Card[] = filterByAuthor(contents, formValues.authorName);
    const filteredByType: Card[] = filterByType(filteredByAuthor, formValues.type);
    const filteredByDate: Card[] = filterByDate(filteredByType, formValues.date);
    return filteredByDate;
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
