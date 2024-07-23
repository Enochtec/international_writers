import React from 'react';
import './Header.css';

const Header = ({ username, openNav }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>
            &#9776;
          </span>
        </div>
        <div className="welcome-message">
          <i className="material-icons">home</i>
          <p id="usernameDisplay">{username}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
