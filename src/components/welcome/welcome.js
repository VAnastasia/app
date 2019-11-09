import React from "react";
import "./welcome.css";

function Welcome() {
  return (
    <div className="welcome">
      <h1>"Заметки"</h1>
      <p>Веб-приложение для хранения заметок</p>
      <div>
        <a href="#">Войти</a>
        <a href="#">Зарегистрироваться</a>
      </div>
    </div>
  );
}

export default Welcome;
