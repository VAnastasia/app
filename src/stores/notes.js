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

  onLogout = () => {
    this.notes = [];
  };

  getNotes() {
    database
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
  }

  writeNoteData(userId, title, text) {
    firebase
      .database()
      .ref("notes/")
      .push({
        userId: userId,
        title: title,
        text: text
      })
      .then(this.getNotes())
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  updateNoteData(title, text, id) {
    firebase
      .database()
      .ref("notes/" + id)
      .update({
        title: title,
        text: text
      })
      .then(this.getNotes())
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  deleteNote(id) {
    firebase
      .database()
      .ref("notes/" + id)
      .remove()
      .then(this.getNotes())
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
}

decorate(NotesStore, {
  notes: observable,
  isLoading: observable,
  activeNote: observable,
  activeNoteDetails: observable,
  onLogout: action,
  setActiveNote: action,
  addNote: action,
  getNotes: action,
  onTitleChange: action,
  onTextChange: action
});

const notesStore = new NotesStore();
export { notesStore };
