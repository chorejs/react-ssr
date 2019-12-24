const app = require('express')();
const React = require('react');
const ReactDom = require('react-dom');
const { renderToString } = require('react-dom/server');
const Home = require('./client/components/Home');

app.get('/', (req, res) => {
  const content = renderToString(React.createElement(Home));
  res.send(`
    <html>
      <head>
        <title>react-ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          ${script}
        </script>
      </body>
    </html>
  `)
});

app.listen(3000, () => {
  console.log('react-ssr listening on port 3000!');
})
