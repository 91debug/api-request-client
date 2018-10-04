import MockAdapter from 'axios-mock-adapter';
import { APIRequestClient } from '../APIRequestClient';
import axios, { AxiosRequestConfig } from 'axios';
import { ResponseError } from '../errors/ResponseError';

const MOCK_API_HOST = 'http://mock_api_host.ironroot.io';

describe('RequestClient', () => {
  let request: APIRequestClient;
  let mockAxiosAdapter: MockAdapter;

  beforeEach(() => {
    mockAxiosAdapter = new MockAdapter(axios);
    request = new APIRequestClient('test', MOCK_API_HOST);
  });

  it('constructor()', async () => {
    const requestObject = new APIRequestClient('/test');
    expect(requestObject).toMatchObject(requestObject);
  });

  it('can append header', () => {
    const response = request
      .appendHeader('x-test-header', 'hihi');

    expect(response.getHeaders()['x-test-header']).toBe('hihi');
  });

  it('can append headers', () => {
    const response = request
    .appendHeader('origin-header', 'aaa')
    .appendHeaders({
      'x-test-header': 'hihi',
      'x-test-header2': 'hihi2',
    });

    expect(response.getHeaders()['origin-header']).toBe('aaa');
    expect(response.getHeaders()['x-test-header']).toBe('hihi');
    expect(response.getHeaders()['x-test-header2']).toBe('hihi2');
  });

  it('can set params', async () => {
    const mockParams = {
      params: { test: 1 },
    };

    mockAxiosAdapter
      .onGet(`${MOCK_API_HOST}/test`, mockParams)
      .reply(function(config: AxiosRequestConfig) {
        return [200, 'success'];
      });

    const response = await request
      .setMethod('GET')
      .setParams(mockParams.params)
      .send();

    expect(response).toBe('success');
  });

  it('can set body', async () => {
    interface Params {
      test: number;
    }
    const mockParams = {
      test: 1,
    };

    mockAxiosAdapter
      .onPost(`${MOCK_API_HOST}/test`, mockParams)
      .reply(function(config: AxiosRequestConfig) {
        return [200, {
          test: 1,
        }];
      });

    const response = await request
      .setMethod('POST')
      .setData(mockParams)
      .send<Params>();

    expect(response.test).toBe(1);
  });

  it('can set body and params', async () => {
    const mockParams = {
      test: 1,
    };

    mockAxiosAdapter
      .onPatch(`${MOCK_API_HOST}/test`, mockParams)
      .reply(function(config: AxiosRequestConfig) {
        if (config.params && config.params.testParam === 1) {
          return [200, 'success'];
        }
        return [200, 'params error'];
      });

    const response = await request
      .setMethod('PATCH')
      .setData({
        test: 1,
      })
      .setParams({
        testParam: 1,
      })
      .send();

    expect(response).toBe('success');
  });

  it('should throw error, when status code is not 20x', async () => {
    const mockParams = {
      test: 1,
    };

    let error;
    mockAxiosAdapter
      .onPatch(`${MOCK_API_HOST}/test`, mockParams)
      .reply(function(config: AxiosRequestConfig) {
        return [400, 'params error'];
      });

    try {
    const response = await request
      .setMethod('PATCH')
      .setData({
        test: 1,
      })
      .setParams({
        testParam: 1,
      })
      .send();
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(ResponseError);
  });

});
