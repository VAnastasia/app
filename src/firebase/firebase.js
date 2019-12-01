import firebase from "firebase/app";
import "../firebase/config";

const database = firebase.database();

export default class Firebase {
  async getNotes() {
    let notesArray = [];

    const res = await database
      .ref("notes/")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(obj => {
          notesArray.push(obj.val());
        });
        return notesArray;
      })
      .catch(error => {
        // Handle Errors here.
        //var errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ...
      });

    if (res) {
      console.log(res);
    }
  }

  writeNoteData(userId, title, text) {
    firebase
      .database()
      .ref("notes/")
      .push({
        id: firebase
          .database()
          .ref()
          .child("notes")
          .push().key,
        userId: userId,
        title: title,
        text: text
      });
  }

  //   async registerUser({ email, password }) {
  //     const user = await firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .catch(error => {
  //         // Handle Errors here.
  //         //var errorCode = error.code;
  //         const errorMessage = error.message;
  //         alert(errorMessage);
  //         // ...
  //       });
  //     console.log(user);

  //     if (user) {
  //       this.isReg = true;
  //     }
  //   }

  //   async signIn({ email, password }) {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(email, password)
  //       .catch(error => {
  //         // Handle Errors here.
  //         //var errorCode = error.code;
  //         const errorMessage = error.message;
  //         alert(errorMessage);
  //         // ...
  //       });
  //   }
}
