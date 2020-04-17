import firebase, { db } from "../initFirebase";

const saveMessage = async ({ user, message }) => {
  //quick validate

  console.log(user, message);
  if (!user) {
    alert("Data is invalid, Contact Developer");
  }

  db.collection("chatmessage").add({
    user,
    message,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export default saveMessage;
