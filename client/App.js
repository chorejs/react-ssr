import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import { Route } from 'react-router-dom';

const App = function () {
  return (
    <div>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" exact component={Login}></Route>
    </div>
  )
}

export default App;