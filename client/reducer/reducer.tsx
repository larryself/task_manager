const CHANGE_MODAL = 'app/change_modal';
const SET_USER = 'app/set_user';
const AUTH_USER = 'app/auth_user';
const NOTIFICATION_COUNT = 'app/notification_count';
export const setUser = (user: any) => ({ type: SET_USER, user });
export const changeModal = (modal: any) => ({ type: CHANGE_MODAL, modal });
export const authUser = (user: any) => ({ type: AUTH_USER, user });
export const notificationCount = (notify: any) => ({ type: NOTIFICATION_COUNT, notify });

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
