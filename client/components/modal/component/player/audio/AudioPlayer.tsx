import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import PlayerIcon from '../../../../playerIcon/playerIcon';
import './audio-player.scss';
import { PlayerProps } from '../../../../../types';

const AudioPlayer = ({ card, setContentDuration }: PlayerProps) => {
  const refPlayer = useRef();
  const [state, setState] = useState({
    playing: false,
    mute: false,
    volume: 0.4,
    start: 0,
    end: 1,
    playedSeconds: 0,
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
  const handleProgress = (event: any) => {
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

  const handleProgressTrack = (event: any) => {
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
    <div className={'audio-player'}>
      <ReactPlayer
        url={card.url}
        playing={state.playing}
        volume={state.volume}
        muted={state.mute}
        width={0}
        height={0}
        ref={refPlayer}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <button className={'audio-player__btn audio-player__btn-play'} onClick={handlePlay}>
        {state.playing ? <PlayerIcon type={'pause'} /> : <PlayerIcon type={'play'} />}
      </button>
      <div className={'audio-player__progress'}>
        <input
          type={'range'}
          max={state.duration}
          value={state.playedSeconds}
          min={0}
          step={0.01}
          className={'audio-player__progress-tree'}
          onChange={handleProgressTrack}
        />
      </div>
      <div className={'audio-player__volume'}>
        <button className={'audio-player__btn audio-player__btn-volume'} onClick={handleMute}>
          {state.mute ? <PlayerIcon type={'mute'} /> : <PlayerIcon type={'volume'} />}
        </button>
        <input
          type={'range'}
          max={1}
          min={0}
          step={0.01}
          defaultValue={0.4}
          className={'audio-player__volume-input'}
          onChange={handleVolume}
        />
      </div>
      <div className={'audio-player__time-control'}>{`${convertTime(state.playedSeconds)} / ${convertTime(
        state.duration,
      )}`}</div>
    </div>
  );
};

export default AudioPlayer;
