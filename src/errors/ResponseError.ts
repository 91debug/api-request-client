import { AxiosResponse } from 'axios';

/**
 * response code is not 20x
 */
export class ResponseError extends Error {
  public errorResponse: AxiosResponse;
  name = 'ResponseError';

  constructor(url: string, errorResponse: AxiosResponse) {
    super();
    Object.setPrototypeOf(this, ResponseError.prototype);
    this.message = `${url}\n`;
    this.errorResponse = errorResponse;
  }

}