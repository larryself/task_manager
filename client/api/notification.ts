import { API_NOTIFICATION } from '../constants/URL';
import { callApi } from './utils/callApi';

export const getNotification = () => callApi({ url: API_NOTIFICATION });
