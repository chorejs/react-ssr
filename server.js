const express = require('express');
const app = express();
const React = require('react');
const ReactDom = require('react-dom');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const App = require('./client/App');

app.get('*', (req, res) => {
  const content = renderToString(
    (
      <StaticRouter><App/></StaticRouter>
    )
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
  `)
});

app.use(express.static('./dist'));

app.listen(3000, () => {
  console.log('react-ssr listening on port 3000!');
})
