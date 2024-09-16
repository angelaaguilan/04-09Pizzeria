import { createContext, useState } from "react";

// Crear contexto para el token
export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true);

    return (
      <UserContext.Provider
        value={{
          token,
          setToken
        }}
      >
        {children}
      </UserContext.Provider>
    );
};

export default UserProvider;
