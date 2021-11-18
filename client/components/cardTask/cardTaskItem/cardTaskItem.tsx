import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './cardTaskItem.scss';
import { intlFormat } from 'date-fns';
import GlobalContext from '../../../context/context';
import { changeModal } from '../../../action/action';
import { CardTaskItemProps, typesOptions } from '../../../types';
import Button from '../../button/button';
import Icon from '../../icon/icon';

const CardTaskItem = (props: CardTaskItemProps) => {
  const { GlobalState, GlobalDispatch }: any = useContext(GlobalContext);
  const { task } = props;
  const { setTaskID } = props;
  const { user } = GlobalState;

  const statusTypes: typesOptions = {
    inWork: 'В работе',
    completed: 'Выполнено',
    waiting: 'Ожидает согласования',
  };
  const types: typesOptions = {
    audio: 'Аудио',
    photo: 'Фото',
    video: 'Видео',
  };
  function formatedDate(date: string) {
    const dateTask = new Date(date);
    const formatedDate = intlFormat(
      dateTask,
      {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      },
      { locale: 'ru' },
    );
    return formatedDate;
  }
  function delTask() {
    setTaskID(task.id);
    GlobalDispatch(
      changeModal({
        active: true,
        format: 'message',
        typeContent: 'message',
        content: 'задачу',
      }),
    );
  }
  return (
    <div className={'card-task'}>
      <span className={`card-task__type card-task__type--${task.type.name}`}>
        <Icon typeIcon={task.type.name} />
        {types[task.type.name]}
      </span>
      <h3 className={'card-task__title'}>
        {task.name}
        <span className={'card-task__title-overlay'} />
      </h3>
      <p className={'card-task__author'}>{task.executor.name}</p>
      <div className={'card-task__date-inner'}>
        <Icon typeIcon={'calendar'} />
        <span className={'card-task__date'}>{formatedDate(task.dateExpired)}</span>
      </div>
      <span className={`card-task__status card-task__status--${task.status.name}`}>
        {statusTypes[task.status.name]}
      </span>
      {user.role?.name !== 'contentMaker' && (
        <div className={'card-task__btn-inner'}>
          {task.status.name !== 'completed' && (
            <Link to={`/tasks/${task.id}`}>
              <Button
                value={''}
                color={'lt-blue'}
                size={'square-mini'}
                typeIcon={'edit'}
                type={''}
                btnType={'square'}
              />
            </Link>
          )}
          <Button
            value={''}
            color={'lt-blue'}
            size={'square-mini'}
            typeIcon={'del'}
            type={''}
            btnType={'square'}
            onClick={() => delTask()}
          />
        </div>
      )}
    </div>
  );
};

export default CardTaskItem;
