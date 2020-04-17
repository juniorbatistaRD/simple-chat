import React, { createContext, useState } from "react";

export const UserContext = createContext("UserContext");

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  console.log(user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
