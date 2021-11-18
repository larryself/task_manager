import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Button from '../../components/button/button';
import './publish.scss';
import PublishFile from './publishFile/publishFile';
import InputBox from '../../components/input/input-box';

const Publish = () => {
  const router = useHistory();
  return (
    <div>
      <Header />
      <Main>
        <section className={'publish-task'}>
          <div className={'publish-task__title-inner'}>
            <Button
              size={'small'}
              typeIcon={'back'}
              color={'transparent'}
              value={''}
              type={'button'}
              btnType={''}
              onClick={() => router.goBack()}
              aria-label={'Назад'}
            />
            <h2 className={'publish-task__title'}>Выберите файл для публикации</h2>
          </div>
          <div className={'publish-task__content-inner'}>
            <ul className={'publish-task__file-list publish-task__content-item'}>
              <li className={'publish-task__file-item'}>
                <PublishFile />
              </li>
              <li className={'publish-task__file-item'}>
                <PublishFile />
              </li>
              <li className={'publish-task__file-item'}>
                <PublishFile />
              </li>
            </ul>
            <div className={'publish-task__files-inner publish-task__content-item'}>
              <InputBox
                className={'publish-task__input'}
                id={'name'}
                placeholder={'Введите название задачи'}
                label={'Изменить название'}
              />
              <Button
                value={'Утвердить и опубликовать'}
                type={'button'}
                typeIcon={'approved-green'}
                color={'green'}
                size={'big'}
                btnType={''}
              />
            </div>
          </div>
        </section>
      </Main>
    </div>
  );
};

export default Publish;
