import React, { Component } from "react";
import "./note-details.css";
import Button from "../button";

export default class NoteDetails extends Component {
  state = {
    title: this.props.activeNoteDetails()
      ? this.props.activeNoteDetails().title
      : "",
    text: this.props.activeNoteDetails()
      ? this.props.activeNoteDetails().text
      : ""
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
    // const {
    //   id,
    //   title,
    //   text
    //   //onTextChange,
    //   //onTitleChange
    // } = this.props.activeNoteDetails();

    //const onTitleChange = this.props.onTitleChange;

    //console.log(this.props.activeNoteDetails());

    const button = this.state.title ? (
      <Button type="submit" title="Сохранить" />
    ) : null;

    return (
      <form className="note-details" method="post">
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.title}
        ></input>
        <textarea
          onChange={this.onTextChange}
          value={this.state.text}
        ></textarea>
        {button}
      </form>
    );
  }
}
