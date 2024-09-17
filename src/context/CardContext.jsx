import { createContext, useState } from "react";

// Crear el contexto para la pizzas
export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [listaPizzas, setListaPizzas] = useState([]);
  const [pizza, setPizza] = useState([]);

    return (
      <CardContext.Provider
        value={{
          pizzas,
          setPizzas,
          total,
          setTotal,
          listaPizzas,
          setListaPizzas,
          pizza,
          setPizza,
        }}
      >
        {children}
      </CardContext.Provider>
    );
};

export default CardProvider;
