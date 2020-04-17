import React from "react";
import styles from "./index.module.css";

const Message = ({ user, message }) => {
  console.log(user);
  return (
    <div className={styles.container}>
      <p className={styles.user}>{user}:</p>
      <div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default Message;
