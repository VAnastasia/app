import { observable, computed, action, decorate } from "mobx";
import { userStore } from "./users";
import firebase from "firebase/app";
//const database = firebase.database();

class NotesStore {
  notes = [
    {
      id: 1,
      idUser: 1,
      title: "Заметка 1",
      text: "Текст заметки 1"
    },
    {
      id: 2,
      idUser: 2,
      title: "Заметка 2",
      text: "Текст заметки 2"
    }
  ];

  // activeNote = this.notesUser[0];

  // get notesUser() {
  //   return userStore.isAuth
  //     ? this.notes.filter(note => note.idUser === userStore.isAuth)
  //     : [];
  // }

  // onClickNote = id => {
  //   return (this.notes.filter(note => note.id === id)[0]);
  // };

  // onClickNote = id => {
  //   this.setActiveNote(id);
  // };

  // get length() {
  //   return this.notes.length;
  // }

  // onClickAdd = () => {
  //   this.addNote({
  //     id: this.notes.length + 1,
  //     idUser: userStore.isAuth,
  //     title: "Новая заметка",
  //     text: "Текст новой заметки"
  //   });
  // };

  // async getNotes() {
  //   const res = await firebase
  //     .database()
  //     .ref("notes/")
  //     .once("value")
  //     .then(snapshot => {
  //       console.log(snapshot);
  //     });
  //   return res;
  // }

  //notes = firebase.database().ref("notes/");

  writeNoteData(userId, title, text) {
    firebase
      .database()
      .ref("notes/")
      .push({
        userId: userId,
        title: title,
        text: text
      });
  }

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
  onTitleChange: action,
  onTextChange: action
});

const notesStore = new NotesStore();
export { notesStore };
