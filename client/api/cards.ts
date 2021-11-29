import { API_CONTENTS } from '../constants/URL';
import { callApi } from './utils/callApi';

export const getContents = (currentPage: number, count: number) =>
  callApi({ url: `${API_CONTENTS}?page=${currentPage}&count=${count}` });
