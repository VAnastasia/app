import { observable, action, decorate } from "mobx";
import firebase from "firebase/app";
import "../firebase/config";

const database = firebase.database();

class NotesStore {
  notes = [];
  activeNote = null;
  isLoading = true;
  deleteNotes = () => (this.notes = []);

  setActiveNote = id => (this.activeNote = id);

  async getNotes() {
    const res = await database
      .ref("notes/")
      .once("value")
      .then(snapshot => {
        this.notes = [];
        snapshot.forEach(obj => {
          const note = obj.val();
          note.id = obj.key;
          this.notes.push(note);
        });

        this.isLoading = false;
      })
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      });

    if (res) {
      console.log(res);
      //this.isLoading = false;
      console.log(this.isLoading, this.notes);
    }
  }

  writeNoteData(userId, title, text) {
    firebase
      .database()
      .ref("notes/")
      .push({
        userId: userId,
        title: title,
        text: text
      });

    this.getNotes();
  }

  updateNoteData(title, text, id, userId) {
    firebase
      .database()
      .ref("notes/" + id)
      .update({
        title: title,
        text: text
        //userId: userId
      })
      .then(this.getNotes());
  }

  deleteNoteData(id) {
    firebase
      .database()
      .ref("notes/" + id)
      .remove();

    this.getNotes();
  }

  // addNote = ({ id, idUser, title, text }) => {
  //   this.notes.unshift({
  //     id,
  //     idUser,
  //     title,
  //     text
  //   });
  // };

  // onTitleChange = evt => {
  //   //this.activeNote.title = evt.target.value;
  //   //console.log(evt.target.value);
  //   this.notes[0].title = evt.target.value;
  //   console.log(this.notes[0].title);
  // };

  // onTextChange = evt => {
  //   this.activeNote.text = evt.target.value;
  // };
}

decorate(NotesStore, {
  notes: observable,
  isLoading: observable,
  activeNote: observable,
  activeNoteDetails: observable,
  setActiveNote: action,
  addNote: action,
  getNotes: action,
  onTitleChange: action,
  onTextChange: action
});

const notesStore = new NotesStore();
export { notesStore };
