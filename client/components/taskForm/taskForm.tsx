import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SelectBox from '../select-box/select-box';
import { selectExecutor, selectType } from '../../pages/newTask/selectOption/selectOption';
import InputBox from '../input/input-box';
import TextareaBox from '../../pages/newTask/textareaBox/textareaBox';
import LoadedFiles from '../../pages/newTask/loadedFiles/loadedFiles';
import DateBox from '../date-box/date-box';
import Icon from '../icon/icon';
import Button from '../button/button';
import GlobalContext from '../../context/context';
import { formValues, TaskFormProps } from '../../types';
import { createTask, editTask } from '../../api';

const TaskForm = (props?: TaskFormProps) => {
  const { task } = props;
  const { id } = useParams<{ id: string }>();
  const router = useHistory();
  const { GlobalState }: any = useContext(GlobalContext);
  const { user } = GlobalState;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: task ? task.type.name : '',
      name: task ? task.name : '',
      description: task ? task.description : '',
      dateExpired: task ? task.dateExpired : new Date(),
      executor: task ? task.executor.name : '',
      author: task ? task.author.name : '',
    },
  });

  const editTaskFetch = async (data: formValues) => {
    try {
      await editTask(id, data);
      router.push('/tasks');
    } catch (e) {
      toast.error('Чтото пошло не так');
    }
  };
  const addTaskFetch = async (data: formValues) => {
    try {
      await createTask(data);
      router.push('/tasks');
    } catch (e) {
      toast.error('Чтото пошло не так');
    }
  };
  const onSubmit = (data: formValues) => {
    if (task) {
      editTaskFetch(data);
    } else {
      addTaskFetch(data);
    }
  };
  return (
    <form className={'new-task__form new-task__content-inner'} onSubmit={handleSubmit(onSubmit)}>
      <div className={'new-task__desc'}>
        <Controller
          control={control}
          name={'type'}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectBox
              className={`new-task__desc-select  ${errors.type && 'select-box--invalid'}`}
              placeholder={'Выберите тип контента'}
              label={'Тип контента'}
              options={selectType}
              onChange={(options: any) => {
                field.onChange(options.value);
              }}
              value={selectType.find((opt) => opt.value === field.value)}
            />
          )}
        />
        <InputBox
          className={`new-task__desc-input ${errors.name && 'input-box--invalid'}`}
          id={'name'}
          placeholder={'Введите заголовок задачи'}
          label={'Заголовок'}
          {...register('name', { required: true })}
        />
        <TextareaBox
          className={`new-task__desc-textarea ${errors.description && 'textarea-box--invalid'}`}
          {...register('description', { required: true })}
        />
        <LoadedFiles />
      </div>
      <div className={'new-task__aside'}>
        <Controller
          control={control}
          name={'dateExpired'}
          render={({ field }) => (
            <DateBox
              className={`new-task__aside-date ${errors.dateExpired && 'date-box--invalid'}`}
              placeholder={'Укажите дату'}
              onChange={(date) => {
                field.onChange(date);
              }}
              selected={new Date(field.value)}
            />
          )}
        />
        {user.role?.name === 'admin' && (
          <Controller
            control={control}
            name={'author'}
            rules={{ required: true }}
            render={({ field }) => (
              <SelectBox
                className={`new-task__aside-requester ${errors.author && 'select-box--invalid'}`}
                placeholder={'Выберите инициатора'}
                options={selectExecutor}
                label={'Инициатор'}
                onChange={(options: any) => {
                  field.onChange(options.value);
                }}
                value={selectExecutor.find((opt) => opt.value === field.value)}
              />
            )}
          />
        )}
        <Controller
          control={control}
          name={'executor'}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectBox
              className={`new-task__aside-responsible  ${errors.executor && 'select-box--invalid'}`}
              placeholder={'Выберите ответственного'}
              label={'Ответственный'}
              options={selectExecutor}
              {...field}
              onChange={(options: any) => {
                field.onChange(options.value);
              }}
              value={selectExecutor.find((opt) => opt.value === field.value)}
            />
          )}
        />
      </div>
      <div className={'new-task__btn-create-inner'}>
        {Object.keys(errors).length > 0 && (
          <div className={'new-task__attention-inner'}>
            <Icon typeIcon={'attention'} />
            <p className={'new-task__attention-message'}>Заполните отмеченные поля</p>
          </div>
        )}
        <Button
          value={'Создать задачу'}
          type={'submit'}
          typeIcon={'approved-blue'}
          color={'blue'}
          size={'big'}
          btnType={''}
        />
      </div>
    </form>
  );
};

export default TaskForm;
