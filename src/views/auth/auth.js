import React, { Component } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import FieldForm from "../../components/field-form";

export default class Auth extends Component {
  render() {
    return (
      <form
        className="auth"
        method="post"
        onSubmit={this.props.onSubmitAuth}
      >
        <h1>Вход</h1>
        <FieldForm type="text" id="auth-login" name="login" label="Логин" />       
        <FieldForm type="password" id="auth-password" name="password" label="Пароль" />
        <Button type="submit" title="Войти" />
        <Link to="/register">
          <Button type="button" title="Зарегистрироваться" />
        </Link>
      </form>
    );
  }
};
