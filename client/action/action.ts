export const CHANGE_MODAL = 'app/change_modal';
export const SET_USER = 'app/set_user';
export const AUTH_USER = 'app/auth_user';
export const NOTIFICATION_COUNT = 'app/notification_count';
export const setUser = (user: any) => ({ type: SET_USER, user });
export const changeModal = (modal: any) => ({ type: CHANGE_MODAL, modal });
export const authUser = (user: any) => ({ type: AUTH_USER, user });
export const notificationCount = (notify: any) => ({ type: NOTIFICATION_COUNT, notify });
