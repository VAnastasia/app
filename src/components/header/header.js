import React from "react";
import "./header.css";
import Logout from "../../components/logout/logout";

export default function Header(props) {
  const { onClickLogout, userName } = props;

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
