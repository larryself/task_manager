import React from 'react';
import Icon from '../../../../components/icon/icon';

const Files = (props: any) => {
  const { file } = props;
  return (
    <div className={'task-info__file'}>
      <div className={'task-info__file-item-inner'}>
        <span className={'task-info__file-format'}>
          <Icon type={'docType'} typeIcon={file.format} />
        </span>
        <span className={'task-info__file-name'}>{file.name}</span>
        <span className={'task-info__file-size'}>{file.size}</span>
      </div>
      <a download className={'task-info__btn btn-lt-blue btn-size-small'} href={file.url}>
        <Icon type={''} typeIcon={'upload'} />
        Скачать
      </a>
    </div>
  );
};

export default Files;
