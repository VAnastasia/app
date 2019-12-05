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
          <Button type="text" title="Сохранить" />
          <button
            className="note-details__delete"
            title="Удалить"
            onClick={() => onDeleteNote(id)}
          />
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
