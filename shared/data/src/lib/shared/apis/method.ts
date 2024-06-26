import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { storeApi } from './store.api';

/**
 * @description Sends a GET request to the specified URL of postApi.
 * @param {string} url The URL to send the request to.
 * @param {AxiosRequestConfig} config The config specific for this request (merged with this.defaults).
 * @returns {Promise<AxiosResponse<TResponse>>} A Promise that resolves to a AxiosResponse<TResponse>.
 */
async function get<TResponse>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<TResponse>> {
  const response = await storeApi.get<TResponse>(url, config);

  return response;
}

/**
 * @description Sends a POST request to the specified URL of postApi.
 * @param {string} url The URL to send the request to.
 * @param {TRequest} data The data to be sent as the request body.
 * @param {AxiosRequestConfig} config The config specific for this request (merged with this.defaults).
 * @returns {Promise<AxiosResponse<TResponse>>} A Promise that resolves to a AxiosResponse<TResponse>.
 */
export const post = async <TRequest, TResponse>(
  url: string,
  data: TRequest,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<TResponse>> => {
  const response = await storeApi.post<TResponse>(url, data, config);

  return response;
};
/**
 * @description Sends a PUT request to the specified URL of postApi.
 * @param {string} url The URL to send the request to.
 * @param {TRequest} data The data to be sent as the request body.
 * @param {AxiosRequestConfig} config The config specific for this request (merged with this.defaults).
 * @returns {Promise<AxiosResponse<TResponse>>} A Promise that resolves to a AxiosResponse<TResponse>.
 */
export const put = async <TRequest, TResponse>(
  url: string,
  data: TRequest,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<TResponse>> => {
  const response = await storeApi.put<TResponse>(url, data, config);

  return response;
};
/**
 * @description Sends a PATCH request to the specified URL of postApi.
 * @param {string} url The URL to send the request to.
 * @param {TRequest} data The data to be sent as the request body.
 * @param {AxiosRequestConfig} config The config specific for this request (merged with this.defaults).
 * @returns {Promise<AxiosResponse<TResponse>>} A Promise that resolves to a AxiosResponse<TResponse>.
 */
export const patch = async <TRequest, TResponse>(
  url: string,
  data: TRequest,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<TResponse>> => {
  const response = await storeApi.patch<TResponse>(url, data, config);

  return response;
};
/**
 * @description Sends a DELETE request to the specified URL of postApi.
 * @param {string} url The URL to send the request to.
 * @param {AxiosRequestConfig} config The config specific for this request (merged with this.defaults).
 * @returns {Promise<AxiosResponse<TResponse>>} A Promise that resolves to a AxiosResponse<TResponse>.
 */
export const remove = async <TResponse>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<TResponse>> => {
  const response = await storeApi.delete<TResponse>(url, config);

  return response;
};

const storeApiMethods = {
  get,
  post,
  put,
  patch,
  remove,
};

export { storeApiMethods };
