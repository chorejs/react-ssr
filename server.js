const express = require('express');
const app = express();
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const App = require('./client/App');

// webpack在编译模块时如果入口文件为commonjs，依赖模块为es6模块时，则导入的es6模块针对export default 则转换为 {defualt: 模块内容}

app.get('*', (req, res) => {
  const content = renderToString(
    <StaticRouter>
      <App.default />
    </StaticRouter>
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

app.use(express.static('./dist'));

app.listen(3000, () => {
  console.log('react-ssr listening on port 3000!');
});
