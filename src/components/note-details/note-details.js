import React from "react";
import "./note-details.css";

const NoteDetails = props => {
  const { title, text } = props.activeNote;
  console.log(props, title, text);
  return (
    <div className="note-details">
      <input type="text" value={title}></input>
      <textarea>{text}</textarea>
    </div>
  );
};

export default NoteDetails;
