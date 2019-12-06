import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import FieldForm from "../../components/field-form";

export default function Register({ onSubmitRegister }) {
  return (
    <form className="register" method="post" onSubmit={onSubmitRegister}>
      <h1>Регистрация</h1>
      <FieldForm type="text" id="registerlogin" label="Логин" />
      <FieldForm type="password" id="registerpassword" label="Пароль" />

      <Button type="submit" title="Зарегистрироваться" />

      <p className="bottom">
        Уже есть аккаунт?
        <Link to="/auth">Войти</Link>
      </p>
    </form>
  );
}
