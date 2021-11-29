import { API_USERS } from '../constants/URL';
import { callApi } from './utils/callApi';

export const getUser = (id: any) => callApi({ url: `${API_USERS}${id}` });
export const delUser = (userId: any) => callApi({ url: `${API_USERS}${userId}`, method: 'DELETE' });
export const editUser = (id: any, data: any) => callApi({ url: `${API_USERS}${id}`, method: 'PUT', body: data });
export const createUser = (data: any) => callApi({ url: API_USERS, method: 'POST', body: data });
