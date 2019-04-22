import { AxiosInstance } from 'axios';
/**
 * HTTP METHODS
 */
export declare type HttpMethods = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
/**
 * Body types
 */
export declare type BodyTypes = 'json' | 'form';
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
export declare class APIRequestClient {
    private _axios;
    private method?;
    private headers;
    private data?;
    private params?;
    private bodyType;
    private urlTree;
    constructor(options: ConstructorOptions);
    setUrl(...url: Array<string>): this;
    appendUrl(...url: Array<string>): this;
    setMethod(method: HttpMethods): this;
    getMethod(): string | undefined;
    setBodyType(bodyType: BodyTypes): this;
    setData(data: object | FormData): this;
    getData(): object | undefined;
    setParams(params: object): this;
    appendHeader(key: string, value: string): this;
    appendHeaders(headers: Header): this;
    getHeaders(): Header;
    getAxiosInstance(): AxiosInstance;
    assembleUrl(): string;
    private throwError;
    send<T>(): Promise<T>;
}
