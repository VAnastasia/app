import React, { Component } from "react";
import "./notes-list.css";
import Button from "../../components/button";
import { formatDate, formatTime } from "../../utils/utils";

export default class NotesList extends Component {
  renderItems(arr) {
    const { activeNote, onClickNote } = this.props;

    return arr.map(({ id, title, date }) => {
      const noteClassName =
        activeNote === id ? "notes-item active" : "notes-item";
      return (
        <li className={noteClassName} key={id} onClick={() => onClickNote(id)}>
          {title}
          <p>
            {formatDate(date)} {formatTime(date)}
          </p>
        </li>
      );
    });
  }

  render() {
    const { notesUser, onClickAdd } = this.props;
    const items = this.renderItems(notesUser);

    return (
      <div>
        <ul className="notes-list">{items}</ul>
        <Button
          type={"button"}
          title={"Создать заметку"}
          onClick={onClickAdd}
        />
      </div>
    );
  }
}
