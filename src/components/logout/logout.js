import React from "react";
import "./logout.css";
import { Link } from "react-router-dom";

export default function Logout(props) {
    const onClickLogout = props.onClickLogout;

    return (
      <Link to="/" className="logout" onClick={onClickLogout}>
        <span>Выйти</span>
      </Link>
    );
  }
;
