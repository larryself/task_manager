import 'air-datepicker/air-datepicker.css';
import './index.scss';
import '../../js/popup';
import '../../js/filter';
import '../../js/player';
import '../../components/date-box/date-box';
import '../../components/header/header';
import '../../components/fileldset/fieldset';
import '../../components/content-card/content-card';
import '../../components/search-box/search-box';
import '../../components/type/type';
import '../../components/profile-box/profile-box';
import '../../components/notify/notify';
import '../../components/modal/modal';

function filterByAuthor(cards, valueAuthor = '') {
  if (valueAuthor.trim() === '') {
    return cards;
  }
  return cards.filter((elem) => {
    const authorCard = elem.author.name;
    return authorCard.toLowerCase().indexOf(valueAuthor) > -1;
  });
}

function filterByDate(cards, dateValue = '') {
  if (dateValue === '') {
    return cards;
  }
  return cards.filter((el) => {
    const date = el.dateCreated.slice(0, 10);
    return date === dateValue;
  });
}

function filterByType(cards, types = []) {
  if (types.length === 0) {
    return cards;
  }
  return cards.filter((el) => {
    const type = el.type.name;
    return types.includes(type);
  });
}
function renderCardItem(cardContent, ulHTMLElement) {
  const textContent = cardContent.name;
  const author = cardContent.author.name;
  const type = cardContent.type.name;
  let typeInRus;
  if (type === 'video') {
    typeInRus = 'Видео';
  }
  if (type === 'audio') {
    typeInRus = 'Аудио';
  }
  if (type === 'photo') {
    typeInRus = 'Фото';
  }
  const urlPath = cardContent.url;
  const previewPath = cardContent.preview;
  const dateAndTime = cardContent.dateCreated;
  const date = dateAndTime.slice(0, 10);
  const time = dateAndTime.slice(11, -8);
  const li = document.createElement('li');
  li.classList.add('cards__item');
  const contentCard = `<article class="content-card" data-url = ${urlPath} data-type = ${type}>
  <div class="content-card__poster">
    <img alt=${textContent} class="content-card__img" height="250" src=${previewPath} width="393" />
  </div>
  <p class="content-card__format content-card__format--${type}">
    <svg class="icon icon-type-${type}">
      <use href="../public/img/icon.svg#${type}"></use>
    </svg>
    ${typeInRus}
  </p>
  <h3 class="content-card__title">${textContent}</h3>
  <p class="content-card__author">
    ${author} <span class="content-card__author-time">${time} ${date.split('-').reverse().join('.')}</span>
  </p>
</article>`;
  li.innerHTML = contentCard;
  ulHTMLElement.append(li);
}

/* убераем возможные лишние пробелы в веденном значении "   вася  пуПКин " = "вася пупкин" */
function formatedValue(currentName) {
  return currentName
    .trim()
    .split(' ')
    .filter((element) => element)
    .map((element) => element.toLowerCase())
    .join(' ');
}
/* приводим дату к формату гггг-мм-дд */
function formatedDate(currentDate) {
  return currentDate.split('.').reverse().join('-');
}
function renderCards(content) {
  const lists = document.querySelector('.cards__list');
  while (lists.firstChild) {
    lists.removeChild(lists.firstChild);
  }
  for (let i = 0; i < content.length; i += 1) {
    renderCardItem(content[i], lists);
  }
}

function getFormValues(formValues) {
  const result = {
    name: '',
    date: '',
    types: [],
  };
  /* eslint-disable-next-line no-restricted-syntax */
  for (const [key, value] of formValues) {
    if (key === 'author') {
      result.name = formatedValue(value);
    }
    if (key === 'date') {
      result.date = formatedDate(value);
    }
    if (['audio', 'photo', 'video'].includes(key)) {
      result.types.push(key);
    }
  }
  return result;
}
function updateDisplay(cards) {
  const form = document.querySelector('.cards__form');
  form.addEventListener('change', (e) => {
    const formValues = Array.from(new FormData(e.currentTarget).entries());
    const values = getFormValues(formValues);
    const filteredByAuthor = filterByAuthor(cards, values.name);
    const filteredByDate = filterByDate(filteredByAuthor, values.date);
    const filteredByType = filterByType(filteredByDate, values.types);
    renderCards(filteredByType);
  });
}

fetch('../../../public/test/content.json')
  .then((result) => result.json())
  .then((elem) => {
    const cont = elem.content;
    // renderCards(cont);
    updateDisplay(cont);
  });
