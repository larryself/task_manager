import './content-card.scss';

export default function renderCard(cardContent) {
  const ulHTMLElement = document.querySelector('.cards__list');
  const textContent = cardContent.name;
  const urlPath = cardContent.url;
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
    <svg class="icon" height="9" width="11">
      <use href="../assets/img/icon.svg#${type}"></use>
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
