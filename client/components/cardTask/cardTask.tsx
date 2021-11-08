import React, { useContext, useEffect, useState } from 'react';
import './card-task.scss';
import { formatISO } from 'date-fns';
import CardTaskItem from './cardTaskItem/cardTaskItem';
import Modal from '../modal/modal';
import GlobalContext from '../../context/context';
import { task } from '../../types';

const CardTask = (props: any) => {
  const { formValues } = props;
  const [tasks, setTasks] = useState([]);
  const [taskID, setTaskID] = useState();
  function fetchPost() {
    return fetch('/api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data.tasks));
  }

  const filterByName = (tasks: task[], valueName = '') => {
    if (valueName.trim() === '') {
      return tasks;
    }
    return tasks.filter((task) => {
      const AuthorName = task.executor.name;
      const TaskName = task.name;
      return (
        AuthorName.toLowerCase().indexOf(valueName.toLowerCase().trim()) > -1 ||
        TaskName.toLowerCase().indexOf(valueName.toLowerCase().trim()) > -1
      );
    });
  };
  const filterByStatus = (tasks: task[], valueStatus = '') => {
    if (!valueStatus || valueStatus === 'all') {
      return tasks;
    }
    return tasks.filter((task) => {
      const { name } = task.status;
      return valueStatus === name;
    });
  };
  const filterByDate = (tasks: task[], valueDate: Date) => {
    let result: string;
    if (valueDate) {
      result = formatISO(valueDate, { representation: 'date' });
    }
    if (valueDate === null || valueDate === undefined) {
      return tasks;
    }
    return tasks.filter((task) => task.dateExpired.indexOf(result) > -1);
  };
  const filterByType = (tasks: task[], valueTypes: any) => {
    const filteredTypes: string[] = [];
    for (const type in valueTypes) {
      if (valueTypes[type] === true) {
        filteredTypes.push(type);
      }
    }
    if (filteredTypes.length === 0) {
      return tasks;
    }
    return tasks.filter((task) => {
      const type = task.type.name;
      return filteredTypes.includes(type);
    });
  };
  const filterTasks = () => {
    const filteredByName: task[] = filterByName(tasks, formValues.name);
    const filteredByStatus: task[] = filterByStatus(filteredByName, formValues.status);
    const filteredByDate: task[] = filterByDate(filteredByStatus, formValues.date);
    const filteredByType: task[] = filterByType(filteredByDate, formValues.type);
    return filteredByType;
  };
  const filteredTasks = filterTasks();
  const { GlobalState }: any = useContext(GlobalContext);
  const delTaskFetch = () => fetch(`/api/tasks/${taskID}`, { method: 'DELETE' }).then(() => fetchPost());
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <ul className={'task__list'}>
      {filteredTasks.map((task) => (
        <li key={task.id} className={'task__item'}>
          <CardTaskItem task={task} setTaskID={setTaskID} />
        </li>
      ))}
      {GlobalState.modal.active && <Modal delFetch={delTaskFetch} />}
    </ul>
  );
};

export default CardTask;
