import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './client/App';
import { Provider } from 'react-redux';
import store from './client/store/index';

const app = express();

// webpack在编译模块时如果入口文件为commonjs，依赖模块为es6模块时，则导入的es6模块针对export default 则转换为 {defualt: 模块内容}

app.use(express.static('./dist'));

app.get('*', (req, res) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter>
        <App />
      </StaticRouter>
    </Provider>
  );
  res.send(`
    <html>
      <head>
        <title>react-ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="./client.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('react-ssr listening on port 3000!');
});
