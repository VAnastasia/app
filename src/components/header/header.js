import React from "react";
import "./header.css";
import Logout from "../../components/logout";

export default function Header({ onClickLogout, userName }) {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>{userName}</li>
          <li>
            <Logout onClickLogout={onClickLogout} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
