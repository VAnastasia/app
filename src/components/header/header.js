import React from "react";
import "./header.css";
import Logout from "../../components/logout/logout";
import { observer, inject } from "mobx-react";

export default inject(
  "notesStore",
  "userStore"
)(
  observer(function Header(props) {
    const { onClickLogout, isAuth, users } = props.userStore;
    const userName = isAuth
      ? users.filter(user => user.id === isAuth)[0].login
      : null;

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
  })
);
