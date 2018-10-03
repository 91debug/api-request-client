/**
 * request error
 */
export class RequestError extends Error {
  name = 'RequestError';

  constructor(url: string) {
      super();
      Object.setPrototypeOf(this, RequestError.prototype);
      this.message = `${url}`;
  }

}