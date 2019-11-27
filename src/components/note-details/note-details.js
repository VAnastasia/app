import React, { Component } from "react";
import "./note-details.css";
import { inject, observer } from "mobx-react";

export default class NoteDetails extends Component {
  render() {
    const {
      title,
      text,
      onTextChange,
      onTitleChange
    } = this.props.activeNote;

    return (
      <div className="note-details">
        <input type="text" onChange={onTitleChange} value={title}></input>
        <textarea onChange={onTextChange} value={text}></textarea>
      </div>
    );
  }
};
