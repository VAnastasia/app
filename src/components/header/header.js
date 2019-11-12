import React from "react";
import "./header.css";
import Logout from "../../components/logout/logout";

function Header(props) {
  const { onClickLogout } = props;

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#">User</a>
          </li>
          <li>
            <Logout onClickLogout={onClickLogout} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
