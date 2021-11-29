import { API_AUTH } from '../constants/URL';
import { callApi } from './utils/callApi';

export const postAuth = (data: any) => callApi({ url: API_AUTH, method: 'POST', body: data });
