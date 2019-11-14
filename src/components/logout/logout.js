import React from "react";
import "./logout.css";
import { Link } from "react-router-dom";

function Logout(props) {
  const { onClickLogout } = props;

  return (
    <Link to="/" className="logout" onClick={onClickLogout}>
      <span>Выйти</span>
    </Link>
  );
}

export default Logout;
