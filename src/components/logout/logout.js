import React from "react";
import "./logout.css";
import { Link } from "react-router-dom";

function Logout(props) {
  const { onClickLogout } = props;

  return (
    <Link to="/" className="logout" onClick={onClickLogout}>
      Выйти
    </Link>
  );
}

export default Logout;
