import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="Header">
      <nav>
        <ul>
          <li>
            <a href="#">Войти</a>
          </li>
          <li>
            <a href="#">Зарегистрироваться</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
