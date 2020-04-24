import React from "react";
import "./NavBar.scss";
import { MenuOutlined } from "@ant-design/icons";

const NavBar: React.FC = () => {
  return (
    <div className="nav-container">
      <nav>
        <input type="checkbox" id="nav-toggle" />
        <label htmlFor="nav-toggle" className="burger">
          <MenuOutlined style={{ color: "white" }} />
        </label>
        <div className="left-menu">
          <button>add task</button>
          <button>list tasks</button>
        </div>
        <button className="logo">Task Builder</button>
      </nav>
    </div>
  );
};

export default NavBar;
