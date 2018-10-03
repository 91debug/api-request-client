# api-request-client
[![Build Status](https://travis-ci.org/91debug/api-request-client.svg?branch=master)](https://travis-ci.org/91debug/api-request-client)

axios request wrapper

## Installation
- `yarn add api-request-client` or `npm install api-request-client`

## How to use

### Post

```ts
import {
  APIRequestClient,
  ResponseError,
} from 'api-request-client';

interface User {
  name: string;
}

const createUser = async () => {
  const requestClient = new RequestClient('users', 'http://localhost:8080');
  try {
    const response
      = await requestClient
          .setMethod('POST')
          .setData({
            name: 'jiseung',
          })
          .send<User>();

    console.log(response.name);
  } catch (err) {
    if (err instanceof ResponseError) {
      if (err.errorResponse.status === 400) {
        alert('bad request');
      }
    }
  }
}


```