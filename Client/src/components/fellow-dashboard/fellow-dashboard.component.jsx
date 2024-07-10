import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Using react-icons for the profile icon
import Home from './Home';

const FellowDashboard = () => {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <Link to="/profile">
          <FaUserCircle size={30} />
          
        </Link>
      </header>
      <div style={{ fontSize: '20px' }}>Welcome to the Fellow Dashboard!</div>     
      <Home/>
    </div>
  );
};

export default FellowDashboard;   // 647 and hence its always good and hence its always good to make it count 
