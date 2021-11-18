import React, { useState } from 'react';
import Icon from '../../../components/icon/icon';
import File from './file/file';

const LoadedFiles = () => {
  const [fileList, setFileList] = useState([]);
  const onChange = (event: any) => {
    const { files } = event.target;
    const file = files[0];
    setFileList([...fileList, file]);
  };
  return (
    <div className={'new-task__stick-files-inner'}>
      <ul className={'new-task__loaded-files'}>
        {fileList.map((file: any) => (
          <li className={'new-task__loaded-file'} key={file.name}>
            <File file={file} setFileList={setFileList} fileList={fileList} />
          </li>
        ))}
      </ul>
      <label className={'new-task__file-load-label btn btn--lt-blue'}>
        <input type={'file'} className={'new-task__file-load-input'} onChange={onChange} />
        <span className={'new-task__file-icon-inner'}>
          <Icon typeIcon={'stick-circle'} type={''} />
        </span>
        Прикрепить файл
      </label>
    </div>
  );
};

export default LoadedFiles;
