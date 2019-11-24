import React from "react";
import "./welcome.css";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

export default inject("userStore")(
  observer(function Welcome() {
    return (
      <div className="welcome">
        <h1>Заметки</h1>
        <p>Веб-приложение для хранения заметок</p>
        <div>
          <Link to="/auth">Войти</Link>
          <Link to="/register">Зарегистрироваться</Link>
        </div>
      </div>
    );
  })
);
