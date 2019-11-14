import React, { Component } from "react";
import "./register.css";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <form className="register" method="post">
        <h1>Регистрация</h1>
        <p className="register__field">
          <label htmlFor="register-login">Логин</label>
          <input type="text" id="register-login"></input>
        </p>
        <p className="register__field">
          <label htmlFor="register-password">Пароль</label>
          <input type="password" id="register-password"></input>
        </p>
        <p className="register__field">
          <label htmlFor="register-password-repeat">Повторите пароль</label>
          <input type="password" id="register-password-repeat"></input>
        </p>
        <button type="submit">Отправить</button>
        <Link to="/auth" className="register__auth">
          Войти
        </Link>
      </form>
    );
  }
}
