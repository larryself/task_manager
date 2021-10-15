import './player.scss';

function videoPlayerPlayToggler(btnClassList) {
  const video = document.querySelector('video');
  if (!btnClassList.includes('video-player__btn-play--active')) {
    video.play();
  }
  if (btnClassList.includes('video-player__btn-play--active')) {
    video.pause();
  }
}
function videoPlayerVolumeToggler(btnClassList) {
  const video = document.querySelector('video');

  if (!btnClassList.includes('video-player__btn-volume--active')) {
    video.muted = !video.muted;
  }
  if (btnClassList.includes('video-player__btn-volume--active')) {
    video.muted = !video.muted;
  }
}

function videoPlayerFullscreenToggler(btnClassList) {
  const video = document.querySelector('.modal-media__mediacontent-inner');
  if (!btnClassList.includes('video-player__btn-fullscreen--active')) {
    if (video.requestFullScreen) video.requestFullScreen();
    else if (video.webkitRequestFullScreen) video.webkitRequestFullScreen();
    else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
  }
  if (btnClassList.includes('video-player__btn-fullscreen--active')) {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  }
}

function currentTimeVideo(player) {
  const current = document.querySelector('.video-player__time-current');
  const duration = document.querySelector('.video-player__time-duration');
  let currentMin = Math.floor(player.currentTime / 60);
  let currentSec = Math.floor(player.currentTime - currentMin * 60);
  let durationMin = Math.floor(player.duration / 60);
  let durationSec = Math.floor(player.duration - durationMin * 60);

  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  if (durationSec < 10) {
    durationSec = `0${durationSec}`;
  }
  if (currentMin < 10) {
    currentMin = `0${currentMin}`;
  }
  if (durationMin < 10) {
    durationMin = `0${durationMin}`;
  }
  current.innerHTML = `${currentMin}:${currentSec}`;
  duration.innerHTML = `${durationMin}:${durationSec}`;
}

function rangeUpdateVolumeVideo(player, value) {
  /* eslint-disable-next-line no-param-reassign */
  player.volume = value / 100;
}

function videoPlayerInit() {
  const video = document.querySelector('video');
  const progressTree = document.querySelector('.video-player__progress-tree');
  const videoPlayer = document.querySelector('.video-player');
  const btnPlay = videoPlayer.querySelector('.video-player__btn-play');
  const btnVolume = videoPlayer.querySelector('.video-player__btn-volume');
  const btnRange = videoPlayer.querySelector('.video-player__volume-input');
  const btnFullscreen = videoPlayer.querySelector('.video-player__btn-fullscreen');
  videoPlayer.addEventListener('click', (e) => {
    if (e.target === btnPlay) {
      videoPlayerPlayToggler(Array.from(btnPlay.classList));
      btnPlay.classList.toggle('video-player__btn-play--active');
    }
    if (e.target === btnVolume) {
      videoPlayerVolumeToggler(Array.from(btnVolume.classList));
      btnVolume.classList.toggle('video-player__btn-volume--active');
    }
    if (e.target === btnFullscreen) {
      videoPlayerFullscreenToggler(Array.from(btnFullscreen.classList));
      btnFullscreen.classList.toggle('video-player__btn-fullscreen--active');
    }
    if (e.target === btnRange) {
      rangeUpdateVolumeVideo(video, btnRange.value);
    }
  });
  video.addEventListener('timeupdate', () => {
    currentTimeVideo(video);
    progressTree.style.width = `${Math.floor((video.currentTime / video.duration) * 100)}%`;
  });
}

function audioPlayerPlayToggle(btnPlayClassList) {
  const audio = document.querySelector('audio');
  if (!btnPlayClassList.includes('audio-player__btn-play--active')) {
    audio.play();
  }
  if (btnPlayClassList.includes('audio-player__btn-play--active')) {
    audio.pause();
  }
}

function currentTimeAudio(player) {
  const current = document.querySelector('.audio-player__time-current');
  const duration = document.querySelector('.audio-player__time-duration');
  let currentMin = Math.floor(player.currentTime / 60);
  let currentSec = Math.floor(player.currentTime - currentMin * 60);
  let durationMin = Math.floor(player.duration / 60);
  let durationSec = Math.floor(player.duration - durationMin * 60);

  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  if (durationSec < 10) {
    durationSec = `0${durationSec}`;
  }
  if (currentMin < 10) {
    currentMin = `0${currentMin}`;
  }
  if (durationMin < 10) {
    durationMin = `0${durationMin}`;
  }
  current.innerHTML = `${currentMin}:${currentSec}`;
  duration.innerHTML = `${durationMin}:${durationSec}`;
}

function audioPlayerVolumeToggle(btnVolumeClassList) {
  return btnVolumeClassList;
}

function audioPlayerInit() {
  const progressTree = document.querySelector('.audio-player__progress-tree');
  const audio = document.querySelector('audio');
  const audioPlayer = document.querySelector('.audio-player');
  const btnPlay = audioPlayer.querySelector('.audio-player__btn-play');
  const btnVolume = audioPlayer.querySelector('.audio-player__btn-volume');
  audioPlayer.addEventListener('click', (e) => {
    if (e.target === btnPlay) {
      audioPlayerPlayToggle(Array.from(btnVolume.classList));
      btnPlay.classList.toggle('audio-player__btn-play--active');
    }
    if (e.target === btnVolume) {
      audioPlayerVolumeToggle(Array.from(btnVolume.classList));
      btnVolume.classList.toggle('audio-player__btn-volume--active');
    }
  });
  audio.addEventListener('timeupdate', () => {
    currentTimeAudio(audio);
    progressTree.style.width = `${Math.floor((audio.currentTime / audio.duration) * 100)}%`;
  });
}

export { videoPlayerInit, audioPlayerInit };
