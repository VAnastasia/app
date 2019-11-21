import React from "react";
import "./header.css";
import Logout from "../../components/logout/logout";

function Header(props) {
  const { onClickLogout, isAuth, users } = props;
  const userName = users.filter(user => user.id === isAuth)[0].login;

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#">{userName}</a>
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
