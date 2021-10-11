const btnPlay = document.querySelector('.video-player__btn-play');
const btnMute = document.querySelector('.video-player__btn-volume');
const btnFullscreen = document.querySelector('.video-player__btn-fullscreen');
const inputRangeVolume = document.querySelector('.video-player__volume-input');

function progressUpdate(player) {
  const progressLine = document.querySelector('.video-player__progress-tree');
}
function timeFormat(sec) {
  const minuntes = Math.floor(Math.round(sec) / 60);
  const secundes = Math.round(sec) - minuntes * 60;
  return `0${minuntes}:0${secundes}`;
}
function progress(player) {
  const videoTimeElement = document.querySelector('.video-player__time-control');
  const videoTime = timeFormat(player.duration);
  console.log(videoTime, player.duration);
  videoTimeElement.innerHTML = `00.00 / ${videoTime}`;
}

/* video pleaer */
/* eslint-disable no-shadow */
function videoRewing(progress) {
  /* eslint-disable no-shadow */
  /* eslint-disable no-unused-expressions */
  progress.offsetX;
}
function playVideo(player) {
  console.log(player);
  player.play();
}
function pauseVideo(player) {
  player.pause();
}
// function stopVideo(player) {
//   player.pause();
//   player.currentTime = 0;
// }
function volumeChange(player) {
  const currentVolume = player.value; /* eslint-disable no-unused-expressions */
  /* eslint-disable no-param-reassign */
  player.volume = currentVolume / 100;
}
function mute(play) {
  play.volume = 0; /* eslint-disable no-param-reassign */
}
function playerEvent() {
  const videoDefaultPlayer = document.querySelector('video');
  progress(videoDefaultPlayer);
  btnPlay.addEventListener('click', (e) => {
    if (!e.target.classList.contains('video-player__btn-play--active')) {
      e.target.classList.add('video-player__btn-play--active');

      playVideo(videoDefaultPlayer);
    } else {
      e.target.classList.remove('video-player__btn-play--active');
      pauseVideo(videoDefaultPlayer);
    }
  });
  btnMute.addEventListener('click', (e) => {
    if (e.target.classList.contains('video-player__btn-volume--active')) {
      mute(videoDefaultPlayer);
    }
    e.target.classList.toggle('video-player__btn-volume--active');
  });
  btnFullscreen.addEventListener('click', (e) => {
    e.target.classList.toggle('video-player__btn-fullscreen--active');
  });
  inputRangeVolume.addEventListener('input', (e) => {
    volumeChange(e.target);
  });
}
