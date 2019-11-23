import React, { Component } from "react";
import { observer } from "mobx-react";
import "./notes-list.css";

export default observer(
  class NotesList extends Component {
    renderItems(arr) {
      const { activeNote, onClickNote } = this.props;
      return arr.map(({ id, title }) => {
        const noteClassName =
          activeNote === id ? "notes-item active" : "notes-item";
        return (
          <li
            className={noteClassName}
            key={id}
            onClick={() => onClickNote(id)}
          >
            {title}
          </li>
        );
      });
    }

    render() {
      const { notes, onClickAdd } = this.props;
      const items = this.renderItems(notes);

      return (
        <div>
          <ul className="notes-list">{items}</ul>
          <button className="notes-list__button" onClick={onClickAdd}>
            Создать заметку
          </button>
        </div>
      );
    }
  }
);
