import React, { Component } from "react";
import "./notes-list.css";

export default class NotesList extends Component {
  renderItems(arr) {
    const { activeNote, onClickNote } = this.props;
    return arr.map(({ id, title }) => {
      const noteClassName =
        activeNote === id ? "notes-item active" : "notes-item";
      return (
        <li className={noteClassName} key={id} onClick={() => onClickNote(id)}>
          {title}
        </li>
      );
    });
  }

  render() {
    const { notes } = this.props;
    const items = this.renderItems(notes);

    return <ul className="notes-list">{items}</ul>;
  }
}
