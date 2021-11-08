import * as React from 'react';
import './tasks.scss';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import SearchBox from '../../components/search-box/search-box';
import CardTask from '../../components/cardTask/cardTask';
import DateBox from '../../components/date-box/date-box';
import Fieldset from '../../components/fieldset/fieldset';
import FieldsetItem from '../../components/fieldset/fildsetItem/fieldsetItem';
import Button from '../../components/button/button';
import SelectBox from '../../components/select-box/select-box';
import { selectStatus } from './selectOptions/selectOptions';

const Tasks = () => {
  const { register, watch, control, setValue } = useForm({
    mode: 'onChange',
  });
  const watchAllFields = watch();
  return (
    <div>
      <Header />
      <Main>
        <section className={'tasks'}>
          <form className={'tasks__form'}>
            <SearchBox
              name={'name'}
              setValue={setValue}
              className={'tasks__form-column tasks__form-column--size-big'}
              placeholder={'Введите название задачи или имя ответственного'}
              {...register('name')}
            />
            <Controller
              control={control}
              name={'status'}
              rules={{ required: true }}
              render={({ field }: any) => (
                <SelectBox
                  className={'tasks__form-column tasks__form-column--size-small'}
                  placeholder={'Выберите статус'}
                  label={'Статус'}
                  options={selectStatus}
                  onChange={(options: any) => {
                    field.onChange(options.value);
                  }}
                  value={selectStatus.find((opt) => opt.value === field.value)}
                />
              )}
            />
            <Controller
              control={control}
              name={'date'}
              render={({ field }: any) => (
                <DateBox
                  className={'tasks__form-column tasks__form-column--size-small'}
                  placeholder={'Укажите дату'}
                  onChange={(date: any) => {
                    field.onChange(date);
                  }}
                  selected={field.value}
                />
              )}
            />
            <Fieldset className={'tasks__form-column tasks__form-column--size-big'} label={'Тип контента'}>
              <FieldsetItem
                value={'Видео'}
                name={'video'}
                checkboxType={'video'}
                iconType={'video'}
                {...register('type.video')}
              />
              <FieldsetItem
                value={'Фото'}
                name={'photo'}
                checkboxType={'photo'}
                iconType={'photo'}
                {...register('type.photo')}
              />
              <FieldsetItem
                value={'Аудио'}
                name={'audio'}
                checkboxType={'audio'}
                iconType={'audio'}
                {...register('type.audio')}
              />
            </Fieldset>
          </form>
          <div className={'tasks__link-inner'}>
            <Link to={'/new_task'}>
              <Button value={'Новая задача'} color={'blue'} size={'big'} type={''} typeIcon={'plus-in-circle'} />
            </Link>
          </div>
          <CardTask formValues={watchAllFields} />
        </section>
      </Main>
    </div>
  );
};

export default Tasks;
