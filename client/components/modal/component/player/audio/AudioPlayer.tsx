import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import PlayerIcon from '../../../../playerIcon/playerIcon';
import './audio-player.scss';
import { PlayerProps } from '../../../../../types';
import {
  handleProgressTrack,
  handleMute,
  handlePlay,
  handleProgress,
  handleVolume,
  handleDuration,
  convertTime,
} from '../../../../../utils/player';

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
        onProgress={(event) => handleProgress(event, state, setState)}
        onDuration={(event) => handleDuration(event, state, setState, setContentDuration)}
      />
      <button className={'audio-player__btn audio-player__btn-play'} onClick={() => handlePlay(state, setState)}>
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
          onChange={(event) => handleProgressTrack(event, state, setState, refPlayer)}
        />
      </div>
      <div className={'audio-player__volume'}>
        <button className={'audio-player__btn audio-player__btn-volume'} onClick={() => handleMute(state, setState)}>
          {state.mute ? <PlayerIcon type={'mute'} /> : <PlayerIcon type={'volume'} />}
        </button>
        <input
          type={'range'}
          max={1}
          min={0}
          step={0.01}
          defaultValue={0.4}
          className={'audio-player__volume-input'}
          onChange={(event) => handleVolume(event, state, setState)}
        />
      </div>
      <div className={'audio-player__time-control'}>{`${convertTime(state.playedSeconds)} / ${convertTime(
        state.duration,
      )}`}</div>
    </div>
  );
};

export default AudioPlayer;
