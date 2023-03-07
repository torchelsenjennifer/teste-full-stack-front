import { createContext, useContext, useEffect, useState } from "react";


export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
  // const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);
  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidadeProdutos,
        setQuantidadeProdutos,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );}

  export const useCarrinhoContext = () => {
    const {
      carrinho,
      setQuantidadeProdutos
    } = useContext(CarrinhoContext);

    function mudarQuantidade(id, quantidade) {
      return carrinho.map((itemDoCarrinho) => {
        if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
        return itemDoCarrinho;
      });
    }

    useEffect(() => {
      const { novaQuantidade } = carrinho.reduce(
        (contador, produto) => ({
          novaQuantidade: contador.novaQuantidade + produto.quantidade,
        }),
        {
          novaQuantidade: 0,
        }
      );
      setQuantidadeProdutos(novaQuantidade);
    }, [carrinho, setQuantidadeProdutos]);

    return {
      carrinho,
      setQuantidadeProdutos,
      mudarQuantidade,
    };
  };
