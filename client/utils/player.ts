import screenfull from 'screenfull';

interface State {
  playing?: boolean;
  mute?: boolean;
  volume?: number;
  start?: number;
  end?: number;
  playedSeconds?: number;
  fullscreen?: boolean;
  duration?: number;
}

export const handlePlay = (state: State, setState: any) => {
  setState({ ...state, playing: !state.playing });
};

export const handleVolume = (event: any, state: State, setState: any) => {
  const input: HTMLInputElement = event.target;
  setState({ ...state, volume: input.valueAsNumber });
};
export const handleMute = (state: State, setState: any) => {
  setState({ ...state, mute: !state.mute });
};
export const handleProgress = (event: any, state: State, setState: any) => {
  const { loadedSeconds, playedSeconds } = event;
  if (loadedSeconds <= playedSeconds) {
    setState({ ...state, playedSeconds, playing: false });
  } else {
    setState({ ...state, playedSeconds });
  }
};
export const handleProgressTrack = (event: any, state: State, setState: any, refPlayer: any) => {
  const input: HTMLInputElement = event.target;
  refPlayer.current?.seekTo(input.valueAsNumber);
  setState({ ...state, playedSeconds: input.valueAsNumber });
};
export const convertTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const second = Math.floor(time % 60);
  return [minutes.toString().padStart(2, '0'), second.toString().padStart(2, '0')].join(':');
};
export const handleDuration = (duration: number, state: State, setState: any, setContentDuration: any) => {
  setState({ ...state, duration });
  setContentDuration(convertTime(duration));
};
export const handleFullscreen = (state: State, setState: any, refContainer: any) => {
  screenfull.toggle(refContainer.current);
  setState({ ...state, fullscreen: !state.fullscreen });
};
