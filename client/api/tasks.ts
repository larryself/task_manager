import { API_TASKS } from '../constants/URL';
import { callApi } from './utils/callApi';

export const getTasks = () => callApi({ url: API_TASKS });
