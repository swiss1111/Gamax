import React from "react";
import "./SideBar.scss"

function SideBar() {
  return (
    <div className="menuWrapper">
      <div className="logoWrapper">
        <h1 className="logo">G</h1>
      </div>
      <nav className="sidebar">
        <ul className="menuList">
          <li>
            <a href="/">Search</a>
          </li>
          <li>
            <a href="/user/12932509">User</a>
          </li>
        </ul>
      </nav>
      <div className="infoWrapper">
        <p>Kiss Martin</p>
        <p>v1.0.0</p>
      </div>
    </div>
  );
}

export default SideBar;
