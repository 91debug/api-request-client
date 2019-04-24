import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { APIRequestClient } from '../dist/index';

const App = () => {
  const [body, setBody] = useState(undefined);
  useEffect(() => {
    const client = new APIRequestClient({ url: 'https://jsonplaceholder.typicode.com/todos/1' });
    client
      .setMethod('GET')
      .send()
      .then(res => setBody(res));
  }, []);

  return <div>body: {body && JSON.stringify(body)}</div>;
};

ReactDOM.render(<App />, document.getElementById('demo'));
