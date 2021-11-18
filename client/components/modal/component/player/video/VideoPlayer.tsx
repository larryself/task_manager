import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import PlayerIcon from '../../../../playerIcon/playerIcon';
import { PlayerProps } from '../../../../../types';
import './video-player.scss';
import {
  handleProgressTrack,
  handleMute,
  handlePlay,
  handleProgress,
  handleVolume,
  handleDuration,
  convertTime,
  handleFullscreen,
} from '../../../../../utils/player';

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
        onProgress={(event) => handleProgress(event, state, setState)}
        onDuration={(event) => handleDuration(event, state, setState, setContentDuration)}
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
            onChange={(event) => handleProgressTrack(event, state, setState, refPlayer)}
          />
        </div>
        <button className={'video-player__btn video-player__btn-play'} onClick={() => handlePlay(state, setState)}>
          {state.playing ? <PlayerIcon type={'pause'} /> : <PlayerIcon type={'play'} />}
        </button>
        <div className={'video-player__volume'}>
          <button className={'video-player__btn video-player__btn-volume'} onClick={() => handleMute(state, setState)}>
            {state.mute ? <PlayerIcon type={'mute'} /> : <PlayerIcon type={'volume'} />}
          </button>
          <input
            type={'range'}
            max={1}
            min={0}
            step={0.01}
            defaultValue={0.4}
            className={'video-player__volume-input'}
            onChange={(event) => handleVolume(event, state, setState)}
          />
        </div>
        <div className={'video-player__time-control'}>{`${convertTime(state.playedSeconds)} / ${convertTime(
          state.duration,
        )}`}</div>
        <button
          className={'video-player__btn video-player__btn-fullscreen'}
          onClick={() => handleFullscreen(state, setState, refContainer)}
        >
          {state.fullscreen ? <PlayerIcon type={'fullscreen'} /> : <PlayerIcon type={'unfullscreen'} />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
