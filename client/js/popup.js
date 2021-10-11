const contentCards = document.querySelector('.cards__list');
const btnBack = document.querySelector('.modal-media__btn');
const modalWindow = document.querySelector('.modal');
const popupMediaCont = modalWindow.querySelector('.modal-media__mediacontent-inner');
const videoPlayer = popupMediaCont.querySelector('.video-player');
const audioPlayer = popupMediaCont.querySelector('.audio-player');

function addContent(el) {
  console.log(el);
  const CurrentCard = el.closest('.content-card');
  console.log(CurrentCard);
  const img = CurrentCard.querySelector('.content-card__img');
  const urlPath = CurrentCard.dataset.url;
  const typeCard = CurrentCard.dataset.type;
  const format = CurrentCard.querySelector('.content-card__format').innerHTML;
  const title = CurrentCard.querySelector('.content-card__title').innerHTML;
  const time = CurrentCard.querySelector('.content-card__author-time').innerHTML;
  const popupTitle = modalWindow.querySelector('.popup__title');
  const popupTime = modalWindow.querySelector('.popup__time');
  const popupFormat = modalWindow.querySelector('.popup__format');

  popupFormat.innerHTML = format;
  popupTitle.innerHTML = title;
  popupTime.innerHTML = time;
  if (typeCard === 'video') {
    const video = document.createElement('video');
    video.classList.add('modal-media__mediacontent');
    video.poster = img.src;
    const source = document.createElement('source');
    source.src = urlPath;
    video.append(source);
    videoPlayer.classList.add('video-player__active');
    popupMediaCont.prepend(video);
  }
  if (typeCard === 'photo') {
    const photo = document.createElement('img');
    photo.classList.add('modal-media__mediacontent');
    photo.src = img.src;
    photo.alt = img.alt;
    popupMediaCont.prepend(photo);
  }
  if (typeCard === 'audio') {
    const audio = document.createElement('audio');
    audio.classList.add('modal-media__mediacontent');
    audioPlayer.classList.add('audio-player__active');
    popupMediaCont.prepend(audio);
  }
}

function closePopupWindow() {
  document.body.style.overflow = 'hidden';
  modalWindow.classList.remove('modal__active');
  document.querySelector('.popup__mediacontent').remove();
  if (videoPlayer.classList.contains('video-player__active')) {
    videoPlayer.classList.remove('video-player__active');
  }
  if (audioPlayer.classList.contains('audio-player__active')) {
    audioPlayer.classList.remove('audio-player__active');
  }
}

function openPopupWindow(element) {
  modalWindow.classList.add('popup__active');
  addContent(element);

  modalWindow.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal') || e.target === btnBack) {
      closePopupWindow();
    }
  });
}

contentCards.addEventListener('click', (e) => {
  openPopupWindow(e.target);
});
