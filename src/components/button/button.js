import React from "react";
import "./button.css";

export default function Button({ type, title, onClick }) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {title}
    </button>
  );
}
