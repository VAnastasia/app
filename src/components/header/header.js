import React from "react";
import "./header.css";
import Logout from "../../components/logout/logout";

export default function Header(props) {
  const { onClickLogout, isAuth, users, userName } = props;
  // const userName = isAuth
  //   ? users.filter(user => user.id === isAuth)[0]
  //     ? users.filter(user => user.id === isAuth)[0].login
  //     : null
  //   : null;

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
