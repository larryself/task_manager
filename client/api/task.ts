import { API_COMMENTS, API_FILES, API_TASKS } from '../constants/URL';
import { callApi } from './utils/callApi';

export const getTask = (id: string) => callApi({ url: `${API_TASKS}${id}` });
export const editTask = (id: string, data: any) => callApi({ url: `${API_TASKS}${id}`, method: 'PUT', body: data });
export const createTask = (data: any) => callApi({ url: API_TASKS, method: 'POST', body: data });
export const delTask = (taskID: string) => callApi({ url: `${API_TASKS}${taskID}`, method: 'DELETE' });
export const addComment = (data: any) => callApi({ url: API_COMMENTS, method: 'POST', body: data });
export const uploadFile = (data: any) => callApi({ url: API_FILES, method: 'POST', body: data });
