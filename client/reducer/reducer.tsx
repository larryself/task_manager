import { AUTH_USER, CHANGE_MODAL, NOTIFICATION_COUNT, SET_USER } from '../action/action';

const initialStore = {
  user: {
    isAuth: false,
    name: '',
    email: '',
    avatar: '../../public/img/avatar.png',
    role: {
      id: 0,
      name: '',
    },
  },
  notifications: 0,
  modal: {
    active: false,
    type: '',
    format: '',
  },
};
const reducer = (state = initialStore, action: any) => {
  switch (action.type) {
    case CHANGE_MODAL:
      return { ...state, modal: { ...action.modal } };
    case SET_USER:
      return { ...state, user: { ...action.user } };
    case AUTH_USER:
      return { ...state, user: { ...action.user } };
    case NOTIFICATION_COUNT:
      return { ...state };
    default:
      return {
        ...state,
      };
  }
};

export { reducer, initialStore };
