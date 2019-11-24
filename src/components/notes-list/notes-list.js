import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./notes-list.css";

export default inject("notesStore")(
  observer(
    class NotesList extends Component {
      renderItems(arr) {
        const { activeNote, onClickNote } = this.props.notesStore;

        return arr.map(({ id, title }) => {
          const noteClassName =
            activeNote.id === id ? "notes-item active" : "notes-item";
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
        const { notesUser, onClickAdd } = this.props.notesStore;
        const items = this.renderItems(notesUser);

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
  )
);
