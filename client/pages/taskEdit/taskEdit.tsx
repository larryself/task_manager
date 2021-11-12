import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Button from '../../components/button/button';
import TaskForm from '../../components/taskForm/taskForm';

const TaskEdit = () => {
  const router = useHistory();
  const { id }: any = useParams();
  const [task, setTask] = useState();
  function fetchPost() {
    fetch(`/api/tasks/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTask(data.tasks);
      });
  }
  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <div>
      <Header />
      <Main>
        <section className={'new-task'}>
          <div className={'new-task__btn-inner'}>
            <Button
              value={'К списку задач'}
              type={''}
              typeIcon={'back'}
              color={'transparent'}
              size={'small'}
              onClick={() => router.push('/tasks')}
            />
          </div>
          {task && <TaskForm task={task} />}
        </section>
      </Main>
    </div>
  );
};

export default TaskEdit;
