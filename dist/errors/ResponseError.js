"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * response code is not 20x
 */
class ResponseError extends Error {
    constructor(url, errorResponse) {
        super();
        this.name = 'ResponseError';
        Object.setPrototypeOf(this, ResponseError.prototype);
        this.message = `${url}\n`;
        this.errorResponse = errorResponse;
    }
}
exports.ResponseError = ResponseError;
