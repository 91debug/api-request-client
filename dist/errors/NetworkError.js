"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * request error
 */
class RequestError extends Error {
    constructor(url) {
        super();
        this.name = 'RequestError';
        Object.setPrototypeOf(this, RequestError.prototype);
        this.message = `${url}`;
    }
}
exports.RequestError = RequestError;
