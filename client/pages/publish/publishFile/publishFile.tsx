import React from 'react';
import './publishFile.scss';

const PublishFile = () => (
  <div className={'publish-file'}>
    <div className={'publish-file__img-inner'}>
      <img src={'../public/img/sunset.jpg'} alt={'Загруженный файл'} width={'175px'} height={'109px'} />
    </div>
    <div className={'publish-file__desc'}>
      <p className={'publish-file__name'}>video_594-19.avi</p>
      <p className={'publish-file__date-created'}>15:26 10.02.2020</p>
    </div>
  </div>
);

export default PublishFile;
