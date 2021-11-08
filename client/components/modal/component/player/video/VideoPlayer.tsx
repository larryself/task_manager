import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import PlayerIcon from '../../../../playerIcon/playerIcon';
import { PlayerProps } from '../../../../../types';
import './video-player.scss';

const VideoPlayer = ({ card, setContentDuration }: PlayerProps) => {
  const refPlayer = useRef();
  const refContainer = useRef();
  const [state, setState] = useState({
    playing: false,
    mute: false,
    volume: 0.4,
    start: 0,
    end: 1,
    playedSeconds: 0,
    fullscreen: false,
    duration: 0,
  });
  const handlePlay = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleVolume = (event: any) => {
    const input: HTMLInputElement = event.target;
    setState({ ...state, volume: input.valueAsNumber });
  };
  const handleMute = () => {
    setState({ ...state, mute: !state.mute });
  };
  const handeProgress = (event: any) => {
    const { loadedSeconds, playedSeconds } = event;
    if (loadedSeconds === playedSeconds) {
      state.playing = false;
    }
    setState({ ...state, playedSeconds });
  };
  const convertTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const second = Math.floor(time % 60);
    const formatedTime = [minutes.toString().padStart(2, '0'), second.toString().padStart(2, '0')].join(':');
    return formatedTime;
  };
  const handeFullscreen = () => {
    screenfull.toggle(refContainer.current);
    setState({ ...state, fullscreen: !state.fullscreen });
  };
  const handeProgressTrack = (event: any) => {
    const input: HTMLInputElement = event.target;

    // @ts-ignore
    refPlayer.current?.seekTo(input.valueAsNumber);
    setState({ ...state, playedSeconds: input.valueAsNumber });
  };
  const handleDuration = (duration: any) => {
    setState({ ...state, duration });
    setContentDuration(convertTime(duration));
  };
  return (
    <div ref={refContainer} className={'video-player'}>
      <ReactPlayer
        width={'100%'}
        height={'100%'}
        url={card.url}
        playing={state.playing}
        volume={state.volume}
        muted={state.mute}
        ref={refPlayer}
        onProgress={handeProgress}
        onDuration={handleDuration}
      />
      <div className={'video-player__container'}>
        <div className={'video-player__progress'}>
          <input
            type={'range'}
            max={state.duration}
            value={state.playedSeconds}
            min={0}
            step={0.01}
            className={'audio-player__progress-tree'}
            onChange={handeProgressTrack}
          />
        </div>
        <button className={'video-player__btn video-player__btn-play'} onClick={handlePlay}>
          {state.playing ? <PlayerIcon type={'pause'} /> : <PlayerIcon type={'play'} />}
        </button>
        <div className={'video-player__volume'}>
          <button className={'video-player__btn video-player__btn-volume'} onClick={handleMute}>
            {state.mute ? <PlayerIcon type={'mute'} /> : <PlayerIcon type={'volume'} />}
          </button>
          <input
            type={'range'}
            max={1}
            min={0}
            step={0.01}
            defaultValue={0.4}
            className={'video-player__volume-input'}
            onChange={handleVolume}
          />
        </div>
        <div className={'video-player__time-control'}>{`${convertTime(state.playedSeconds)} / ${convertTime(
          state.duration,
        )}`}</div>
        <button className={'video-player__btn video-player__btn-fullscreen'} onClick={handeFullscreen}>
          {state.fullscreen ? <PlayerIcon type={'fullscreen'} /> : <PlayerIcon type={'unfullscreen'} />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
