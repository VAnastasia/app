import React, { Component } from "react";
import "./auth.css";

export default class Auth extends Component {
  render() {
    return (
      <form className="auth" method="post">
        <h1>Вход</h1>
        <p className="auth__field">
          <label htmlFor="auth-login">Логин</label>
          <input type="text" id="auth-login"></input>
        </p>
        <p className="auth__field">
          <label htmlFor="auth-password">Пароль</label>
          <input type="password" id="auth-password"></input>
        </p>
        <button type="submit">Войти</button>
      </form>
    );
  }
}
