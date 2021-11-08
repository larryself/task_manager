import * as React from 'react';
import './modal-message.scss';
import { useContext } from 'react';
import BtnReset from '../../../button/btnReset';
import GlobalContext from '../../../../context/context';
import Button from '../../../button/button';
import { changeModal } from '../../../../reducer/reducer';

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
      <BtnReset className={'modal-message__btn-close'} onClick={closeModal} />
      <div className={'modal-message__btn-inner'}>
        <Button value={'Да'} color={'lt-blue'} size={'big'} typeIcon={''} type={''} autoFocus onClick={delContent} />
        <Button value={'Нет'} color={'lt-blue'} size={'big'} typeIcon={''} type={''} onClick={closeModal} />
      </div>
    </div>
  );
};

export default ModalMessage;
