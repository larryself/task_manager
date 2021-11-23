import React, { useContext, useEffect, useState } from 'react';
import './card-task.scss';
import { formatISO } from 'date-fns';
import toast from 'react-hot-toast';
import CardTaskItem from './cardTaskItem/cardTaskItem';
import Modal from '../modal/modal';
import GlobalContext from '../../context/context';
import { CardTaskProps, task } from '../../types';
import { filterByType } from '../../utils/filter';
import { API_TASKS } from '../../constants/URL';

const CardTask = (props: CardTaskProps) => {
  const { formValues } = props;
  const [tasks, setTasks] = useState([]);
  const [taskID, setTaskID] = useState();
  function fetchPost() {
    return fetch(API_TASKS)
      .then((response) => response.json())
      .then((data) => setTasks(data.tasks))
      .catch(() => {
        toast.error('Что-то пошло не так, попробуйте перезагрузить страницу');
      });
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
  const filterByDate = (tasks: task[], valueDate: Date | null | undefined) => {
    let result: string;
    if (valueDate) {
      result = formatISO(valueDate, { representation: 'date' });
    }
    if (!valueDate) {
      return tasks;
    }
    return tasks.filter((task) => task.dateExpired.indexOf(result) > -1);
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
  const delTaskFetch = () => fetch(`${API_TASKS}${taskID}`, { method: 'DELETE' }).then(() => fetchPost());
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
