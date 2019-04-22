import { AxiosResponse } from 'axios';
/**
 * response code is not 20x
 */
export declare class ResponseError extends Error {
    errorResponse: AxiosResponse;
    name: string;
    constructor(url: string, errorResponse: AxiosResponse);
}
