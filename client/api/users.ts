import { API_USERS } from '../constants/URL';
import { callApi } from './utils/callApi';

export const getUsers = async () => callApi({ url: API_USERS });
