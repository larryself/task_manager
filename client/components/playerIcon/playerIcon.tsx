import React from 'react';

interface iconProps {
  type: string;
}
const PlayerIcon = ({ type }: iconProps) => {
  let icon: any = null;
  switch (type) {
    case 'play':
      icon = (
        <svg width={'9'} height={'12'}>
          <use href={`../public/player-icon/playerIcon.svg#play`} />
        </svg>
      );
      break;
    case 'pause':
      icon = (
        <svg width={'7'} height={'12'}>
          <use href={`../public/player-icon/playerIcon.svg#pause`} />
        </svg>
      );
      break;
    case 'volume':
      icon = (
        <svg width={'18'} height={'18'}>
          <use href={`../public/player-icon/playerIcon.svg#volume`} />
        </svg>
      );
      break;
    case 'mute':
      icon = (
        <svg width={'19'} height={'15'}>
          <use href={`../public/player-icon/playerIcon.svg#mute`} />
        </svg>
      );
      break;
    case 'fullscreen':
      icon = (
        <svg width={'16'} height={'16'}>
          <use href={`../public/player-icon/playerIcon.svg#fullscreen`} />
        </svg>
      );
      break;
    case 'unfullscreen':
      icon = (
        <svg width={'16'} height={'16'}>
          <use href={`../public/player-icon/playerIcon.svg#unfullscreen`} />
        </svg>
      );
      break;
    default:
      break;
  }
  return icon;
};

export default PlayerIcon;
