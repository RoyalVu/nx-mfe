import { ENV } from '../common';
import {
  errorInterceptor,
  requestInterceptor,
  responseInterceptor,
} from '../lib/api.interceptors';

import { api } from './base.api';

export const storeApi = api.create({
  baseURL: ENV.NX_STORE_SERVICE_URL,
});

storeApi.interceptors.request.use(requestInterceptor, (error) =>
  Promise.reject(error)
);

storeApi.interceptors.response.use(responseInterceptor, errorInterceptor);
