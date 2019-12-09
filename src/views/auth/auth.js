import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import FieldForm from "../../components/field-form";

export default function Auth({ onSubmitAuth }) {
  return (
    <form className="auth" method="post" onSubmit={onSubmitAuth}>
      <h1>Вход</h1>
      <FieldForm type="text" id="auth-login" name="login" label="E-mail" />
      <FieldForm
        type="password"
        id="auth-password"
        name="password"
        label="Пароль"
      />
      <Button type="submit" title="Войти" />
      <p className="bottom">
        Еще нет аккаунта?
        <Link to="/register">Зарегистрироваться</Link>
      </p>
    </form>
  );
}
