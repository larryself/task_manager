import React from 'react';
import './loadFile.scss';
import Icon from '../../../../components/icon/icon';

const LoadFile = (props?: any) => {
  const { file, setFileList, fileList, setLoadFiles } = props;
  const deleteFile = () => {
    const filteredFiles = fileList.filter((el: any) => el.name !== file.name);
    if (filteredFiles.length === 0) {
      setLoadFiles(false);
    }
    setFileList([...filteredFiles]);
  };
  return (
    <div className={'load-file'}>
      <button type={'button'} className={'load-file__btn'} onClick={deleteFile}>
        <Icon typeIcon={'delete'} />
      </button>
      <div className={'load-file__img-inner'}>
        <img src={'../public/img/sunset.jpg'} alt={'Загруженный файл'} className={'load-file__img'} />
      </div>
      <div className={'load-file__desc'}>
        <p className={'load-file__date'}>10.02.2020, 09:41</p>
        <p className={'load-file__name'}>{file.name}</p>
      </div>
    </div>
  );
};

export default LoadFile;
