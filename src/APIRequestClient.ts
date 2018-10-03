import axios, { AxiosInstance, AxiosError } from 'axios';

import { RequestError  } from './errors/NetworkError';
import { ResponseError } from './errors/ResponseError';

/**
 * HTTP METHODS
 */
export type HttpMethods = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';

export interface Header {
  [key: string]: string;
}

/**
 * APIRequestClient
 */
export class APIRequestClient {
  private _axios: AxiosInstance;
  private url: string;
  private method?: string;
  private headers: Header;
  private data?: object;
  private params?: object;

  constructor(url: string, baseURL?: string) {
    this.headers = {};
    this.url = url;
    this._axios = axios.create({
      baseURL,
    });
  }

  setUrl(url: string) {
    this.url = url;
    return this;
  }

  setMethod(method: HttpMethods) {
    this.method = method;
    return this;
  }

  setData(data: object) {
    this.data = data;
    return this;
  }

  setParams(params: object) {
    this.params = params;
    return this;
  }

  appendHeader(key: string, value: string) {
    this.headers[key] = value;
    return this;
  }

  private throwError(error: AxiosError) {
    if (error.response) {
      return new ResponseError(this.url, error.response);
    }
    return new RequestError(this.url);
  }

  async send<T>(): Promise<T> {
    try {
      const response = await this._axios.request<T>({
        method: this.method,
        url: this.url,
        headers: this.headers,
        data: this.data,
        params: this.params,
      });

      return response.data;
    } catch (err) {
      throw this.throwError(err);
    }
  }
}
