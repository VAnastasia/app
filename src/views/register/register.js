import React, { Component } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import FieldForm from "../../components/field-form";

export default class Register extends Component {
  render() {
    return (
      <form className="register" method="post">
        <h1>Регистрация</h1>
        <FieldForm type="text" id="register-login" label="Логин" />
        <FieldForm type="password" id="register-password" label="Пароль" />
        <FieldForm type="password" id="register-password-repeat" label="Повторите пароль" />
        <Button type="submit" title="Отправить" />
        <Link to="/auth">
          <Button type="button" title="Войти" />
        </Link>
      </form>
    );
  }
}
