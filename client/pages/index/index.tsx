import * as React from 'react';
import './index.scss';
import { Controller, useForm } from 'react-hook-form';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import SearchBox from '../../components/search-box/search-box';
import DateBox from '../../components/date-box/date-box';
import CardList from '../../components/cardContent/CardList';
import Fieldset from '../../components/fieldset/fieldset';
import FieldsetItem from '../../components/fieldset/fildsetItem/fieldsetItem';
import { formValues } from '../../types';

const Index = () => {
  const { register, watch, control, setValue } = useForm({
    mode: 'onChange',
  });
  const watchAllFields: formValues = watch();
  return (
    <div>
      <Header />
      <Main>
        <section className={'cards'}>
          <h2 className={'cards__title visible-hidden'}>Задачи</h2>
          <form className={'cards__form'}>
            <SearchBox
              className={'cards__form-column'}
              setValue={setValue}
              name={'authorName'}
              placeholder={'Введите название имя исполнителя'}
              {...register('authorName')}
            />
            <Controller
              control={control}
              name={'date'}
              render={({ field }) => (
                <DateBox
                  className={'cards__form-column'}
                  placeholder={'Укажите дату публикации'}
                  onChange={(date: any) => {
                    field.onChange(date);
                  }}
                  selected={field.value}
                />
              )}
            />
            <Fieldset className={'cards__form-column'} label={'Тип контента'}>
              <FieldsetItem
                value={'Аудио'}
                name={'audio'}
                iconType={'audio'}
                checkboxType={'audio'}
                {...register('type.audio')}
              />
              <FieldsetItem
                value={'Видео'}
                name={'video'}
                iconType={'video'}
                checkboxType={'video'}
                {...register('type.video')}
              />
              <FieldsetItem
                value={'Фото'}
                name={'photo'}
                iconType={'photo'}
                checkboxType={'photo'}
                {...register('type.photo')}
              />
            </Fieldset>
          </form>
          <CardList formValues={watchAllFields} />
        </section>
      </Main>
    </div>
  );
};

export default Index;
