import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import { Route } from 'react-router-dom';

const App = function () {
  return (
    <>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" exact component={Login}></Route>
    </>
  )
}

export default App;