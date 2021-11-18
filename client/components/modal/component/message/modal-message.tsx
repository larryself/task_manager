import * as React from 'react';
import './modal-message.scss';
import { useContext } from 'react';
import GlobalContext from '../../../../context/context';
import Button from '../../../button/button';
import { changeModal } from '../../../../action/action';

const ModalMessage = ({ value, ...props }: any) => {
  const { delFetch } = props;
  const { GlobalDispatch }: any = useContext(GlobalContext);
  const closeModal = () => {
    GlobalDispatch(changeModal({ active: false }));
  };
  const delContent = () => {
    delFetch();
    closeModal();
  };
  return (
    <div className={'modal-message'}>
      <h2 className={'modal-message__title'}>{value}</h2>
      <Button
        className={'modal-message__btn-close'}
        value={''}
        color={''}
        size={''}
        typeIcon={'reset'}
        type={'reset'}
        btnType={'reset'}
        onClick={closeModal}
      />
      <div className={'modal-message__btn-inner'}>
        <Button
          value={'Да'}
          color={'lt-blue'}
          size={'big'}
          typeIcon={''}
          type={''}
          autoFocus
          onClick={delContent}
          btnType={''}
        />
        <Button
          value={'Нет'}
          color={'lt-blue'}
          size={'big'}
          typeIcon={''}
          type={''}
          onClick={closeModal}
          btnType={''}
        />
      </div>
    </div>
  );
};

export default ModalMessage;
