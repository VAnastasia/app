import React from "react";
import "./field-form.css";

export default function FieldForm({ type, id, name, label }) {
  return (
    <p className="field-form">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} required></input>
    </p>
  );
}
