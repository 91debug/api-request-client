/**
 * HTTP METHODS
 */
export declare type HttpMethods = 'GET' | 'POST' | 'DELETE' | 'PATCH';
export interface Header {
    [key: string]: string;
}
/**
 * Axios 래핑한 클래스입니다.
 */
export declare class RequestClient {
    /**
     * axios instance
     */
    private _axios;
    /**
     * request url
     */
    private url;
    /**
     * request method
     */
    private method;
    /**
     * request header
     */
    private headers;
    /**
     * request data
     */
    private data?;
    /**
     * request params
     */
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
//# sourceMappingURL=APIRequestBuilder.d.ts.map