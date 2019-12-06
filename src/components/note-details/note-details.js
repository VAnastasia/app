import React, { Component } from "react";
import "./note-details.css";
import Button from "../button";

export default class NoteDetails extends Component {
  renderItems(arr) {
    const { activeNote, onSubmitNote, onDeleteNote } = this.props;

    return arr.map(({ id, title, text }) => {
      const noteDetailsClassName =
        activeNote === id ? "note-details active" : "note-details";

      return (
        <form
          className={noteDetailsClassName}
          method="post"
          key={id}
          onSubmit={onSubmitNote}
        >
          <input type="text" name="title" defaultValue={title} />
          <textarea name="text" defaultValue={text}></textarea>
          <input type="hidden" value={id} name="id" />
          <div className="note-details__buttons">
            <Button type="submit" title="Сохранить" />
            <Button
              type="button"
              title="Удалить"
              onClick={() => onDeleteNote(id)}
            />
          </div>
        </form>
      );
    });
  }

  render() {
    const notesUser = this.props.notesUser;

    return (
      <div className="note-details__container">
        {this.renderItems(notesUser)}
      </div>
    );
  }
}
