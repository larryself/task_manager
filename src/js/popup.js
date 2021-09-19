const contentCards = document.querySelectorAll('.content-card');
const btnBack = document.querySelector('.popup__btn');
const modal = document.querySelector('.popup');
const popupMediaCont = modal.querySelector('.popup__mediacontent-inner');
const videoPlayer = popupMediaCont.querySelector('.video-player');
const audioPlayer = popupMediaCont.querySelector('.audio-player');

function addContent(el) {
  const CurrentCard = el.closest('.content-card');
  const img = CurrentCard.querySelector('.content-card__img');
  const title = CurrentCard.querySelector('.content-card__title').innerHTML;
  const desc = CurrentCard.querySelector('.content-card__desc').innerHTML;
  const time = CurrentCard.querySelector('.content-card__author-time').innerHTML;
  const popupDesc = modal.querySelector('.popup__desc');
  const popupTime = modal.querySelector('.popup__time');
  const popupTitle = modal.querySelector('.popup__title');

  popupTitle.innerHTML = title;
  popupDesc.innerHTML = desc;
  popupTime.innerHTML = time;
  const type = title.replace(/[^а-я]/gi, '');
  if (type === 'Видео') {
    const video = document.createElement('video');
    video.classList.add('popup__mediacontent');
    video.poster = img.src;
    videoPlayer.classList.add('video-player__active');
    popupMediaCont.prepend(video);
  }
  if (type === 'Фото') {
    const photo = document.createElement('img');
    photo.classList.add('popup__mediacontent');
    photo.src = img.src;
    photo.alt = img.alt;
    popupMediaCont.prepend(photo);
  }
  if (type === 'Аудио') {
    const audio = document.createElement('audio');
    audio.classList.add('popup__mediacontent');
    audioPlayer.classList.add('audio-player__active');
    popupMediaCont.prepend(audio);
  }
}

contentCards.forEach((el) => {
  el.addEventListener('click', () => {
    modal.classList.add('popup__active');
    document.body.style.overflow = 'hidden';
    addContent(el);
  });
});
btnBack.addEventListener('click', () => {
  modal.classList.remove('popup__active');
  document.body.style.overflow = 'auto';
  document.querySelector('.popup__mediacontent').remove();
  if (videoPlayer.classList.contains('video-player__active')) {
    videoPlayer.classList.remove('video-player__active');
  }
  if (audioPlayer.classList.contains('audio-player__active')) {
    audioPlayer.classList.remove('audio-player__active');
  }
});
