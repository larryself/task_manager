import React from 'react';
import './task-aside.scss';

const TaskIdAside = ({ className, task }: any) => {
  const reverseDate = (date: string) => {
    const reversedDate = date && date.slice(0, 10).split('-').reverse().join('.');
    return reversedDate;
  };
  return (
    <article className={`task-aside ${className}`}>
      <ul className={'task-aside__list'}>
        <li className={'task-aside__item'}>
          Задача создана
          <span className={'task-aside__item-line'} />
          <span className={'task-aside__item-value'}>{reverseDate(task.dateExpired)}</span>
        </li>
        <li className={'task-aside__item'}>
          Срок выполнения
          <span className={'task-aside__item-line'} />
          <span className={'task-aside__item-value'}>{reverseDate(task.dateExpired)}</span>
        </li>
        <li className={'task-aside__item'}>
          Опубликовал
          <span className={'task-aside__item-line'} />
          <span className={'task-aside__item-value'}>{task.author?.name}</span>
        </li>
        <li className={'task-aside__item'}>
          Ответственный
          <span className={'task-aside__item-line'} />
          <span className={'task-aside__item-value'}>{task.executor?.name}</span>
        </li>
      </ul>
    </article>
  );
};
export default TaskIdAside;
