import React from "react";
import "./welcome.css";
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
      <section className="welcome">
        <h1>Заметки</h1>
        <p>Веб-приложение для хранения заметок</p>
        <div>
          <Link to="/auth">Войти</Link>
          <Link to="/register">Зарегистрироваться</Link>
        </div>
      </section>
    );
  }
;
