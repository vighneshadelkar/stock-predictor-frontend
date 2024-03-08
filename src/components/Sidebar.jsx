import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${(isOpen && 'open') || (!isOpen && 'closed')}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">Dashboard</div>
        <button onClick={toggleSidebar} className="sidebar-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className="sidebar-content">
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <Link to="/" relative="path" className="sidebar-menu-link">
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>

            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/" className="sidebar-menu-link">
              <i className="fas fa-pager"></i>
              <span>Portfolio</span>
            </Link>
          </li>
          <li className="sidebar-menu-dropdown">
            <Link to="/" className="sidebar-menu-link">
              <i className="fas fa-lock"></i>
              <span>Stocks</span>
            </Link>
            <ul className="sidebar-menu-dropdown-content">
              <li className="sidebar-menu-dropdown-item">
                <Link to="/" className="sidebar-menu-dropdown-link">
                  Sample Page
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/"className="sidebar-menu-link">
              <i className="fas fa-toolbox"></i>
              <span>Trending</span>
            </Link>
          </li>
          <li className="sidebar-menu-dropdown">
            <Link to="/" className="sidebar-menu-link">
              <i className="fas fa-text-width"></i>
              <span>Typography</span>
            </Link>
            <ul className="sidebar-menu-dropdown-content">
              <li className="sidebar-menu-dropdown-item">
                <Link to="/" className="sidebar-menu-dropdown-link">
                  Color
                </Link>
              </li>
              <li className="sidebar-menu-dropdown-item">
                <Link to="/" className="sidebar-menu-dropdown-link">
                  Shadow
                </Link>
              </li>
              <li className="sidebar-menu-dropdown-item">
                <Link to="/" className="sidebar-menu-dropdown-link">
                  Icons
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/" className="sidebar-menu-link">
              <i className="fas fa-book"></i>
              <span>Documentation</span>
            </Link>
          </li>
        </ul>
        {/* <div className="sidebar-progress">
          <div className="sidebar-progress-bar" style={{ width: '80%' }}>
            <span>80%</span>
          </div>
          <div className="sidebar-progress-text">
            <span>Get Extra Space</span>
            <span>28/23 GB</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;