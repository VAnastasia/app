import React, { Component } from "react";
import "./search.css";
import icon from "./search-icon.svg";

export default class Search extends Component {
  render() {
    return (
      <form className="search" method="get">
        <input type="text" placeholder="Поиск"></input>
        <button type="submit">
          <img src={icon} alt="search" width="20" height="20" className="search__icon"></img>
        </button>
      </form>
    );
  }
}
