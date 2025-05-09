import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="container mt-5">
      <Navbar />
      <div className="text-center">
        <h1 className="display-4">Welcome to the Home Page!</h1>
        <p className="lead">You are successfully logged in.</p>
      </div>
    </div>
  );
};

export default Home;