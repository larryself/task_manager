import React from 'react';
import Icon from '../../../../components/icon/icon';
import Button from '../../../../components/button/button';

const File = (props: any) => {
  const { file } = props;
  const { setFileList } = props;
  const { fileList } = props;
  const deleteFile = () => {
    const filteredFiles = fileList.filter((el: any) => el.name !== file.name);
    setFileList([...filteredFiles]);
  };
  return (
    <div className={'new-task__loaded-file'}>
      <span className={'new-task__loaded-file-format'}>
        <Icon type={'docType'} typeIcon={'zip'} />
      </span>
      <span className={'new-task__loaded-file-name'}>Материалы.zip</span>
      <span className={'new-task__loaded-file-size'}>61 Мб</span>
      <Button
        value={'Удалить'}
        color={'red-text'}
        size={'small'}
        typeIcon={'del'}
        type={'button'}
        btnType={''}
        onClick={deleteFile}
      />
    </div>
  );
};

export default File;
