import React, { useState } from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaPlug, FaArrowLeft, FaArrowRight, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button className="menu-button" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {isCollapsed ? <FaArrowRight /> : <FaArrowLeft />}
        </div>
      </div>
      <ul>
        <li>
          <FaTachometerAlt />
          <span className="sidebar-text">Dashboard</span>
        </li>
        <li>
          <FaShoppingCart />
          <span className="sidebar-text">Orders</span>
        </li>
        <li>
          <FaUsers />
          <span className="sidebar-text">Customers</span>
        </li>
        <li>
          <FaPlug />
          <span className="sidebar-text">Integrations</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
