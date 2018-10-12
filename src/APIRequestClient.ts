import axios, { AxiosInstance, AxiosError } from 'axios';

import { RequestError  } from './errors/NetworkError';
import { ResponseError } from './errors/ResponseError';

/**
 * HTTP METHODS
 */
export type HttpMethods = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';

/**
 * Body types
 */
export type BodyTypes = 'json' | 'form';

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
  private bodyType: BodyTypes;

  constructor(url: string, baseURL?: string) {
    this.headers = {};
    this.url = url;
    this.bodyType = 'json';
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

  getMethod() {
    return this.method;
  }

  setBodyType(bodyType: BodyTypes) {
    this.bodyType = bodyType;
    return this;
  }

  setData(data: object | FormData) {
    this.data = data;
    return this;
  }

  getData() {
    return this.data;
  }

  setParams(params: object) {
    this.params = params;
    return this;
  }

  appendHeader(key: string, value: string) {
    this.headers[key] = value;
    return this;
  }

  appendHeaders(headers: Header) {
    this.headers = {...this.headers, ...headers};
    return this;
  }

  getHeaders() {
    return this.headers;
  }

  private throwError(error: AxiosError) {
    if (error.response) {
      return new ResponseError(this.url, error.response);
    }
    return new RequestError(this.url);
  }

  async send<T>(): Promise<T> {
    try {
      if (this.bodyType === 'form') {
        this.headers['Content-Type'] = 'multipart/form-data';
      }

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
