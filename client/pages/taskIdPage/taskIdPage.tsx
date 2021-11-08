import React, { useContext, useEffect, useState } from 'react';
import './taskIdPage.scss';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Button from '../../components/button/button';
import BtnIcon from '../../components/button/btnIcon';
import TaskIdAside from './taskIdAside/taskIdAside';
import TaskIdInfo from './taskIdInfo/taskIdInfo';
import TaskIdResult from './taskIdResult/taskIdResult';
import TaskIdComment from './taskIdComment/taskIdComment';
import { changeModal } from '../../reducer/reducer';
import GlobalContext from '../../context/context';
import Modal from '../../components/modal/modal';

const TaskIdPage = () => {
  const { GlobalState, GlobalDispatch }: any = useContext(GlobalContext);
  const [loadFiles, setLoadFiles] = useState(false);
  const [comments, setComments] = useState([]);
  const [fetching, setFetching] = useState(true);
  const { user } = GlobalState;
  const router = useHistory();
  const [task, setTask] = useState({});
  const { id }: any = useParams();
  const fetchPost = () => {
    fetch(`/api/tasks/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTask(data.tasks);
        setComments([...data.tasks.comments]);
      })
      .finally(() => {
        setFetching(false);
      });
  };
  const approvedTaskFetch = () => {
    router.push(`/publish/${id}`);
  };
  const delTaskFetch = () =>
    fetch(`/api/tasks/${id}`, { method: 'DELETE' }).then((response) => {
      if (response.status <= 204) {
        router.push('/tasks');
      }
    });
  const deleteUser = () => {
    GlobalDispatch(
      changeModal({
        active: true,
        format: 'message',
        typeContent: 'message',
        content: 'задачу',
      }),
    );
  };
  useEffect(() => {
    if (fetching) {
      fetchPost();
    }
  }, [fetching]);
  return (
    <div>
      <Header />
      <Main>
        <section className={'task'}>
          <div className={'task__btn-inner'}>
            <Button
              value={'К списку задач'}
              type={''}
              typeIcon={'back'}
              color={'transparent'}
              size={'small'}
              onClick={() => router.push('/tasks')}
            />
            <div className={'task__btn-square-inner'}>
              {loadFiles ? (
                <Button
                  value={'Утвердить и опубликовать'}
                  type={'button'}
                  typeIcon={'approved-green'}
                  color={'green'}
                  size={'big'}
                  onClick={() => approvedTaskFetch()}
                />
              ) : null}
              <BtnIcon
                size={'big'}
                className={'user-card__btn-edit'}
                typeIcon={'edit'}
                color={'blue'}
                onClick={() => router.push(`/edit_task/${id}`)}
              />
              <BtnIcon
                size={'big'}
                className={'user-card__btn-del'}
                typeIcon={'del'}
                color={'blue'}
                onClick={deleteUser}
              />
            </div>
          </div>
          <div className={'task__content-inner'}>
            <TaskIdInfo task={task} className={'task__desc'} />
            <TaskIdAside task={task} className={'task__date'} />
            {user.role?.name === 'manager' ? null : (
              <div className={'task__other'}>
                <TaskIdResult className={'task__other-item'} setLoadFiles={setLoadFiles} />
                <TaskIdComment setFetching={setFetching} comments={comments} className={'task__other-item'} />
              </div>
            )}
          </div>
        </section>
        {GlobalState.modal.active && <Modal delFetch={delTaskFetch} />}
      </Main>
    </div>
  );
};

export default TaskIdPage;
