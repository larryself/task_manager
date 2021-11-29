import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Button from '../../../components/button/button';
import './task-comment.scss';
import Comment from './comment/comment';
import GlobalContext from '../../../context/context';
import { addComment } from '../../../api';

const TaskIdComment = ({ className, comments, setFetching }: any) => {
  const { GlobalState }: any = useContext(GlobalContext);
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit, reset } = useForm();
  const addCommentFetch = async (data: any) => {
    try {
      await addComment(data);
      setFetching(true);
      reset({});
    } catch (e) {
      toast.error('Не удалось добавить комментарий');
    }
  };
  const onSubmit = async (message: any) => {
    const data = {
      task: id,
      message,
      user: GlobalState.user.id,
    };
    addCommentFetch(data);
  };
  return (
    <article className={`task-comment ${className}`}>
      <div className={'task-comment-inner'}>
        <form className={'task-comment__form'} onSubmit={handleSubmit(onSubmit)}>
          <textarea
            name={'textarea'}
            placeholder={'Введите сообщение...'}
            cols={103}
            rows={6}
            className={'task-comment__input'}
            {...register('message')}
          />
          <div className={'task-comment__btn'}>
            <Button value={'Отправить'} color={'blue'} size={'small'} typeIcon={''} type={'submit'} btnType={''} />
          </div>
        </form>
        <ul className={'task-comment__list'}>
          {comments.map((comment: any) => (
            <li className={'task-comment__item'} key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default TaskIdComment;
