import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { navigate } from "@reach/router";
import { Icon, Header } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import styles from "./index.module.css";
import Button from "../../components/Button";

const LaunchPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [userName, setUserName] = useState();

  const handleClick = () => {
    if (userName.length > 20 || userName.length < 4) {
      return alert("Nombre debe ser menor de 20 caracteres y mayor que 4");
    }
    setUser(userName);
  };

  useEffect(() => {
    if (user) {
      navigate("/chat");
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <div className={styles.userBox}>
        <div className={styles.headerBox}>
          <Icon name="comments outline" size="huge" color="blue" />

          <Header>Simple-Chat by Junior Batista</Header>
        </div>
        <Input
          placeholder={`What's your name?`}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button margin="10px" onClick={handleClick}>
          Let's Chat
        </Button>
      </div>
    </div>
  );
};

export default LaunchPage;
