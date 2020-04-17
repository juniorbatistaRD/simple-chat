import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Router } from "@reach/router";
import LaunchPage from "./pages/LaunchPage";
import UserContextProvider from "./contexts/UserContext";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Router>
          <LaunchPage path="/" />
          <ChatPage path="chat" />
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
