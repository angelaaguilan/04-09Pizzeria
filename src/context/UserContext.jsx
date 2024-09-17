import { createContext, useState } from "react";

// Crear contexto para el token
export const UserContext = createContext("");

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);
  const [user, setUser] = useState({
    email: "angela.aguila@gmail.com",
    password: "angela",
  });

    return (
      <UserContext.Provider
        value={{
          token,
          setToken,
          user,
          setUser
        }}
      >
        {children}
      </UserContext.Provider>
    );
};

export default UserProvider;
