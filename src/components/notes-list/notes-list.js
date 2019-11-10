import React, { Component } from "react";
import "./notes-list.css";

export default class NotesList extends Component {
  constructor(props) {
    super();
    this.notes = props.notes;
  }

  renderItems(arr) {
    return arr.map(({ id, title }) => {
      return (
        <li className="notes-list" key={id}>
          {title}
        </li>
      );
    });
  }

  render() {
    const items = this.renderItems(this.notes);

    return <ul className="notes-list">{items}</ul>;
  }
}
