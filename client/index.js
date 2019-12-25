import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const Client = function () {
  return (
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  )
}

ReactDom.hydrate(<Client />, document.getElementById('root'));