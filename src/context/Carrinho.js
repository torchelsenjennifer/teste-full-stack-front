import { createContext, useContext, useEffect, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    // const [carrinho, setCarrinho] = useState([]);
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
    // const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);
    return (
      <CarrinhoContext.Provider
       value={{ 
       quantidadeProdutos, 
       setQuantidadeProdutos,
       }}>
        {children}
      </CarrinhoContext.Provider>
    );
  };
