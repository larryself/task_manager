import renderCard from '../components/content-card/content-card';

function renderCardList(content) {
  const ulHTMLElement = document.querySelector('.cards__list');
  while (ulHTMLElement.firstChild) {
    ulHTMLElement.removeChild(ulHTMLElement.firstChild);
  }
  for (let i = 0; i < content.length; i += 1) {
    renderCard(content[i], ulHTMLElement);
  }
}
fetch('../../../public/test/content.json')
  .then((result) => result.json())
  .then((cards) => {
    renderCardList(cards.content);
  });
