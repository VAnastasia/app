import React, { Component } from "react";
import "./note-details.css";
//import { observer } from "mobx-react";

export default class NoteDetails extends Component {
  // state = {
  //   title: this.props.notes.filter(note => note.id === this.props.activeNote)[0]
  //     .title,
  //   text: this.props.notes.filter(note => note.id === this.props.activeNote)[0]
  //     .text
  // };

  onTitleChange = evt => {
    this.setState({
      title: evt.target.value
    });
  };

  onTextChange = evt => {
    this.setState({
      text: evt.target.value
    });
  };

  render() {
    const { title, text } = this.props.notes.filter(
      note => note.id === this.props.activeNote
    )[0];

    return (
      <div className="note-details">
        <input type="text" value={title} onChange={this.onTitleChange}></input>
        <textarea onChange={this.onTextChange} value={text}></textarea>
      </div>
    );
  }
}
