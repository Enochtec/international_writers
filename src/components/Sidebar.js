import React from 'react';
import './Sidebar.css';

const Sidebar = ({ openSection, closeNav }) => {
  return (
    <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
      <nav className="nav flex-column">
        <a href="#" className="nav-link" onClick={() => { openSection('dashboard'); closeNav(); }}>
          <i className="bi bi-speedometer2"></i> Dashboard
        </a>
        <a href="#" className="nav-link" onClick={() => { openSection('training'); closeNav(); }}>
          <i className="bi bi-book"></i> Training
        </a>
        <a href="#" className="nav-link" onClick={() => { openSection('tasks'); closeNav(); }}>
          <i className="bi bi-list-task"></i> Available Tasks
        </a>
        <a href="#" className="nav-link" onClick={() => { openSection('submission'); closeNav(); }}>
          <i className="bi bi-upload"></i> Submission Panel
        </a>
        <a href="#" className="nav-link" onClick={() => { openSection('withdrawFunds'); closeNav(); }}>
          <i className="bi bi-currency-dollar"></i> Withdraw Funds
        </a>
        <a href="#" className="nav-link" onClick={() => { openSection('upgradeToPremium'); closeNav(); }}>
          <i className="bi bi-star"></i> Upgrade to Premium
        </a>
        <a href="#" className="nav-link" onClick={() => { openSection('referral'); closeNav(); }}>
          <i className="bi bi-people"></i> Referral Program
        </a>
        <a href="#" className="nav-link" onClick={() => { openSection('specialTraining'); closeNav(); }}>
          <i className="bi bi-award"></i> Special Training
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
