import * as React from 'react';
import './modal.scss';
import { useContext, useEffect } from 'react';
import ModalMediaContent from './component/media/modal-mediacontent';
import ModalMessage from './component/message/modal-message';
import GlobalContext from '../../context/context';
import { changeModal } from '../../action/action';

enum TYPE_CONTENT {
  MEDIA = 'media',
  MESSAGE = 'message',
}
const Modal = (props: any) => {
  const { delFetch }: any = props;
  const { card }: any = props;
  const { GlobalState, GlobalDispatch }: any = useContext(GlobalContext);

  const closeModal = () => {
    document.querySelector('body').classList.remove('no-scroll');
    GlobalDispatch(changeModal({ active: false }));
  };

  const outsideClickHandler = (evt: any) => {
    if (!evt.target.classList.contains('modal')) return;
    closeModal();
  };

  const escHandler = (evt: any) => {
    if (evt.keyCode !== 27) return;
    closeModal();
  };

  useEffect(() => {
    document.querySelector('body').classList.add('no-scroll');
    document.addEventListener('click', outsideClickHandler);
    document.addEventListener('keydown', escHandler);
    return () => {
      document.removeEventListener('click', outsideClickHandler);
      document.removeEventListener('keydown', escHandler);
      document.querySelector('body').classList.remove('no-scroll');
    };
  }, []);
  let modalContent = null;
  switch (GlobalState.modal.typeContent) {
    case TYPE_CONTENT.MEDIA:
      modalContent = (
        <ModalMediaContent format={'audio'} title={'fsfdsdf'} time={'12:23 34534534'} card={card} {...props} />
      );
      break;
    case TYPE_CONTENT.MESSAGE:
      modalContent = (
        <ModalMessage value={`Вы действительно хотите удалить ${GlobalState.modal.content}?`} delFetch={delFetch} />
      );
      break;
    default:
  }
  return <div className={'modal'}>{modalContent}</div>;
};

export default Modal;
