import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Button from '../../components/button/button';
import './new-task.scss';
import TaskForm from '../../components/taskForm/taskForm';

const NewTask = () => {
  const router = useHistory();
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
              btnType={''}
              onClick={() => router.push('/tasks')}
            />
          </div>
          <TaskForm />
        </section>
      </Main>
    </div>
  );
};

export default NewTask;
