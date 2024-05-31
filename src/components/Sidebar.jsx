import React from "react";

import "../styles/Root.css";
import "../styles/Sidebar.css";

import { GlobalContext } from "../toolbox/GlobalContext";

function Sidebar() {
  const { page, setPage } = React.useContext(GlobalContext);

  return (
    <div className="sidebar">
      <div className="sidebar-float">
        <i
          className={`fa-solid fa-house sidebar-icon supershadow-text 
          ${page === "home" ? "selected" : ""}`}
          onClick={() => setPage("home")}
        ></i>
        <i
          className={`fa-solid fa-gamepad sidebar-icon supershadow-text 
          ${page === "games" ? "selected" : ""}`}
          onClick={() => setPage("games")}
        ></i>
        <i
          className={`fa-solid fa-book sidebar-icon supershadow-text 
          ${page === "collection" ? "selected" : ""}`}
          onClick={() => setPage("collection")}
        ></i>
        <i
          className={`fa-solid fa-box-archive sidebar-icon supershadow-text 
          ${page === "inventory" ? "selected" : ""}`}
          onClick={() => setPage("inventory")}
        ></i>
        <i
          className={`fa-solid fa-basket-shopping sidebar-icon supershadow-text 
          ${page === "shop" ? "selected" : ""}`}
          onClick={() => setPage("shop")}
        ></i>
        <i
          className={`fa-solid fa-user sidebar-icon supershadow-text 
          ${page === "profile" ? "selected" : ""}`}
          onClick={() => setPage("profile")}
        ></i>
        <i
          className={`fa-solid fa-gear sidebar-icon supershadow-text 
          ${page === "config" ? "selected" : ""}`}
          onClick={() => setPage("config")}
        ></i>
      </div>
    </div>
  );
}

export default Sidebar;
