import React from 'react';
import AudioPlayer from '../player/audio/AudioPlayer';
import VideoPlayer from '../player/video/VideoPlayer';
import { ContentProps } from '../../../../types';

const Content = (props: ContentProps) => {
  const { card } = props;
  const { setContentDuration } = props;
  const type = card.type.name;
  return (
    <div className={'modal-media__mediacontent-inner'}>
      {type === 'photo' && <img className={'modal-media__mediacontent'} src={card.url} alt={card.name} />}
      {type === 'audio' && <AudioPlayer card={card} setContentDuration={setContentDuration} />}
      {type === 'video' && <VideoPlayer card={card} setContentDuration={setContentDuration} />}
    </div>
  );
};

export default Content;
