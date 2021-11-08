import React from 'react';
import './task-info.scss';
import Icon from '../../../components/icon/icon';
import Files from './files/files';
import { typesOptions } from '../../../types';

const TaskIdInfo = ({ className, task }: any) => {
  const types: typesOptions = {
    audio: 'Аудио',
    photo: 'Фото',
    video: 'Видео',
  };
  const statusTypes: typesOptions = {
    inWork: 'В работе',
    completed: 'Выполнено',
    waiting: 'Ожидает согласования',
  };
  return (
    <article className={`task-info ${className}`}>
      <div className={'task-info__top'}>
        <p className={'task-info__format task-info__format--video'}>
          <Icon type={''} typeIcon={task.type?.name} />
          {types[task.type?.name]}
        </p>
        <p className={`task-info__status task-info__status--${task.status?.name}`}>{statusTypes[task.status?.name]}</p>
      </div>
      <h2 className={'task-info__title'}>{task.name}</h2>
      <p className={'task-info__desc'}>{task.description}</p>
      <div className={'task-info__load-file'}>
        <h3 className={'task-info__file-title'}>Файлы</h3>
        <ul className={'task-info__file-list'}>
          {task.files?.map((file: any) => (
            <li className={'task-info__file-item'} key={file.id}>
              <Files file={file} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
export default TaskIdInfo;
