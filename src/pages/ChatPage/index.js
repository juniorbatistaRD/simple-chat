import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { navigate } from "@reach/router";
import styles from "./index.module.css";
import { Formik, Form } from "formik";
import TextField from "../../components/formikFields/TextField";
import Button from "../../components/Button";
import saveMessage from "../../data/saveMessage";
import getMessages from "../../data/getMessages";
import Message from "../../components/Message";
import { Icon } from "semantic-ui-react";

const ChatPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    const getData = async () => {
      const messages = await getMessages({ callback: setMessages });
      // setMessages(messages);
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        <div className={styles.chatHeader}>
          <p className={styles.title}>Simple-Chat by Junior</p>
          <Button onClick={() => setUser(null)}>Log Out</Button>
        </div>
        <div className={styles.chatContent}>
          {messages.map((message) => (
            <Message user={message.user} message={message.message} />
          ))}
        </div>
        <div className={styles.addMessage}>
          <Formik
            initialValues={{
              message: "",
            }}
            onSubmit={(values) =>
              saveMessage({ message: values.message, user: user })
            }
          >
            <Form className={styles.form}>
              <TextField
                name="message"
                placeholder="Type your message here"
                className={styles.text}
              />
              <Button className={styles.button}>
                <Icon name="paper plane" />
              </Button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
