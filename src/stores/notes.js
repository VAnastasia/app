import { observable, action, decorate, computed } from "mobx";
// import firebase from "firebase/app";
// import "../firebase/config";
import Firebase from "../firebase";

// const database = firebase.database();

class NotesStore {
  Firebase = new Firebase();

  notes = [];

  async notesUpdate() {
    const notes = await this.Firebase.getNotes();
    return notes;
  }

  // notes = [
  //   {
  //     id: 1,
  //     title: "Заметка 1",
  //     text: "Текст",
  //     userId: "IhedHVK4YNPaKrECfIoYE1435d93"
  //   }
  // ];

  // getNotes() {
  //   let notesArray = [];

  //   database
  //     .ref("notes/")
  //     .once("value")
  //     .then(snapshot => {
  //       snapshot.forEach(obj => {
  //         this.notes.push(obj.val());
  //       });
  //       console.log(this.notes);
  //       //return notesArray;
  //     });
  // }

  // writeNoteData(userId, title, text) {
  //   firebase
  //     .database()
  //     .ref("notes/")
  //     .push({
  //       id: firebase
  //         .database()
  //         .ref()
  //         .child("notes")
  //         .push().key,
  //       userId: userId,
  //       title: title,
  //       text: text
  //     });
  // }

  addNote = ({ id, idUser, title, text }) => {
    this.notes.unshift({
      id,
      idUser,
      title,
      text
    });
  };

  onTitleChange = evt => {
    //this.activeNote.title = evt.target.value;
    //console.log(evt.target.value);
    this.notes[0].title = evt.target.value;
    console.log(this.notes[0].title);
  };

  onTextChange = evt => {
    this.activeNote.text = evt.target.value;
  };
}

decorate(NotesStore, {
  notes: observable,
  //activeNote: observable,
  //length: computed,
  //notesUser: computed,
  //setActiveNote: action,
  addNote: action,
  getNotes: action,
  onTitleChange: action,
  onTextChange: action
});

const notesStore = new NotesStore();
export { notesStore };
