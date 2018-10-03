/**
 * HTTP METHODS
 */
export declare type HttpMethods = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
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
    constructor(url: string, baseURL?: string);
    setUrl(url: string): this;
    setMethod(method: HttpMethods): this;
    setData(data: object): this;
    setParams(params: object): this;
    appendHeader(key: string, value: string): this;
    private throwError;
    send<T>(): Promise<T>;
}
//# sourceMappingURL=APIRequestClient.d.ts.map