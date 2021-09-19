const btnPlay = document.querySelector('.video-player__btn-play');
const btnMute = document.querySelector('.video-player__btn-volume');
const btnFullscreen = document.querySelector('.video-player__btn-fullscreen');

btnPlay.addEventListener('click', (e) => {
  e.target.classList.toggle('video-player__btn-play--active');
});
btnMute.addEventListener('click', (e) => {
  e.target.classList.toggle('video-player__btn-volume--active');
});
btnFullscreen.addEventListener('click', (e) => {
  e.target.classList.toggle('video-player__btn-fullscreen--active');
});
