import React from "react";
import "./logout.css";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

export default inject("userStore")(
  observer(function Logout(props) {
    const onClickLogout = props.userStore.onClickLogout;

    return (
      <Link to="/" className="logout" onClick={onClickLogout}>
        <span>Выйти</span>
      </Link>
    );
  })
);
