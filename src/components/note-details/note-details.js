import React, { Component } from "react";
import "./note-details.css";

export default class NoteDetails extends Component {
  state = {
    title: this.props.activeNoteDetails().title,
    text: this.props.activeNoteDetails().text
  };

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
    const {
      id,
      title,
      text
      //onTextChange,
      //onTitleChange
    } = this.props.activeNoteDetails;

    const onTitleChange = this.props.onTitleChange;

    console.log(this.state);

    return (
      <div className="note-details">
        <input
          type="text"
          onChange={onTitleChange}
          value={this.state.title}
        ></input>
        <textarea
          onChange={this.onTextChange}
          value={this.state.text}
        ></textarea>
      </div>
    );
  }
}
