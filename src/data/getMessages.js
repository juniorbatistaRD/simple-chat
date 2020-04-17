import { db } from "../initFirebase";

const getMessages = ({ callback }) => {
  db.collection("chatmessage")
    .orderBy("createdAt")
    .onSnapshot(function (querySnapshot) {
      var messages = [];
      querySnapshot.forEach(function (doc) {
        messages.push(doc.data());
      });
      callback(messages);
      console.log("Current messages in CA: ", messages.join(", "));
    });
  //   const Messages = [];
  //   const response = await db.collection("chatmessage").get();

  //   console.log(response);
  //   response.forEach((doc) => {
  //     Messages.push({ id: doc.id, ...doc.data() });
  //   });

  //   return Messages;
};

export default getMessages;
