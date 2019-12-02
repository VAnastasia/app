import React, { Component } from "react";
import "./note-details.css";
import Button from "../button";

export default class NoteDetails extends Component {
  onSaveNote = this.props.onSaveNote;

  onSubmitNote(evt) {
    evt.preventDefault();
    console.log(evt.target.title.value, evt.target.text.value);
    //console.log(this.onSaveNote);

    //this.props.onSaveNote(evt.target.title.value, evt.target.text.value);
  }

  renderItems(arr) {
    const { activeNote } = this.props;

    return arr.map(({ id, title, text }) => {
      const noteDetailsClassName =
        activeNote === id ? "note-details active" : "note-details";

      return (
        <form
          className={noteDetailsClassName}
          method="post"
          key={id}
          onSubmit={this.onSubmitNote}
        >
          <input
            type="text"
            name="title"
            onChange={this.onTitleChange}
            defaultValue={title}
          ></input>
          <textarea
            onChange={this.onTextChange}
            name="text"
            defaultValue={text}
          ></textarea>
          <Button
            type="text"
            title="Сохранить"
            //onClick={() => onSaveNote(id, this.state.title, this.state.text)}
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
