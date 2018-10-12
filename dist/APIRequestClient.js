"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const NetworkError_1 = require("./errors/NetworkError");
const ResponseError_1 = require("./errors/ResponseError");
/**
 * APIRequestClient
 */
class APIRequestClient {
    constructor(url, baseURL) {
        this.headers = {};
        this.url = url;
        this.bodyType = 'json';
        this._axios = axios_1.default.create({
            baseURL,
        });
    }
    setUrl(url) {
        this.url = url;
        return this;
    }
    setMethod(method) {
        this.method = method;
        return this;
    }
    setBodyType(bodyType) {
        this.bodyType = bodyType;
        return this;
    }
    setData(data) {
        this.data = data;
        return this;
    }
    setParams(params) {
        this.params = params;
        return this;
    }
    appendHeader(key, value) {
        this.headers[key] = value;
        return this;
    }
    appendHeaders(headers) {
        this.headers = Object.assign({}, this.headers, headers);
        return this;
    }
    getHeaders() {
        return this.headers;
    }
    throwError(error) {
        if (error.response) {
            return new ResponseError_1.ResponseError(this.url, error.response);
        }
        return new NetworkError_1.RequestError(this.url);
    }
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.bodyType === 'form') {
                    this.headers['Content-Type'] = 'multipart/form-data';
                }
                const response = yield this._axios.request({
                    method: this.method,
                    url: this.url,
                    headers: this.headers,
                    data: this.data,
                    params: this.params,
                });
                return response.data;
            }
            catch (err) {
                throw this.throwError(err);
            }
        });
    }
}
exports.APIRequestClient = APIRequestClient;
