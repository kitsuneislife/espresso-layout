
import React from 'react';
import '../styles/Root.css';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-float">
        <i class="fa-solid fa-house sidebar-icon supershadow-text"></i>
        <i class="fa-solid fa-book sidebar-icon supershadow-text"></i>
        <i class="fa-solid fa-gear sidebar-icon supershadow-text"></i>
      </div>
    </div>
  );
}

export default Sidebar;