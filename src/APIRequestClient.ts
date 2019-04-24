import axios, { AxiosInstance, AxiosError } from 'axios';

import { RequestError } from './errors/NetworkError';
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

export interface ConstructorOptions {
  url?: string;
  baseURL?: string;
}

/**
 * APIRequestClient
 */
export class APIRequestClient {
  private _axios: AxiosInstance;
  private method?: string;
  private headers: Header;
  private data?: object;
  private params?: object;
  private bodyType: BodyTypes;

  private urlTree: Array<string> = [];

  constructor(options: ConstructorOptions) {
    this.headers = {};
    this.bodyType = 'json';

    if (options.url) {
      this.urlTree.push(options.url);
    }

    this._axios = axios.create({
      baseURL: options.baseURL,
    });
  }

  setUrl(...url: Array<string>) {
    this.urlTree = url;
    return this;
  }

  appendUrl(...url: Array<string>) {
    this.urlTree = this.urlTree.concat(url);
    return this;
  }

  prependUrl(...url: Array<string>) {
    this.urlTree.unshift(...url);
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
    this.headers = { ...this.headers, ...headers };
    return this;
  }

  getHeaders() {
    return this.headers;
  }

  getAxiosInstance() {
    return this._axios;
  }

  assembleUrl() {
    if (this.urlTree.length === 0) {
      return '/';
    }

    return this.urlTree.join('/');
  }

  private throwError(error: AxiosError) {
    if (error.response) {
      return new ResponseError(this.assembleUrl(), error.response);
    }
    return new RequestError(this.assembleUrl());
  }

  async send<T>(): Promise<T> {
    try {
      if (this.bodyType === 'form') {
        this.headers['Content-Type'] = 'multipart/form-data';
      }

      const response = await this._axios.request<T>({
        method: this.method,
        url: this.urlTree.join('/'),
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
