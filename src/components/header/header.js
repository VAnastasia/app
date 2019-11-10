import React from "react";
import "./header.css";
import Logout from "../../components/logout/logout";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#">User</a>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
