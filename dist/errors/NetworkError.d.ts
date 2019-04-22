/**
 * request error
 */
export declare class RequestError extends Error {
    name: string;
    constructor(url: string);
}
