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
/**
 * APIRequestClient
 */
export declare class APIRequestClient {
    private _axios;
    private url;
    private method?;
    private headers;
    private data?;
    private params?;
    private bodyType;
    constructor(url: string, baseURL?: string);
    setUrl(url: string): this;
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
    private throwError;
    send<T>(): Promise<T>;
}
//# sourceMappingURL=APIRequestClient.d.ts.map