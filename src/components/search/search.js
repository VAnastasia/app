import React from "react";
import "./search.css";
import icon from "./search-icon.svg";

export default function Search({ onSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск"
        name="search"
        onChange={onSearch}
      />
      <button type="button">
        <img
          src={icon}
          alt="search"
          width="20"
          height="20"
          className="search__icon"
        />
      </button>
    </div>
  );
}
