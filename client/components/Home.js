import React from 'react';
import { Link } from 'react-router-dom';

const Home = function () {
  return (
    <div>
      <h1>This is a home.</h1>
      <Link to="/login">go to login</Link>
    </div>
  )
};

export default Home;