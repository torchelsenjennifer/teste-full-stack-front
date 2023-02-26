import React from "react";
import { useState, useEffect } from "react";
import { inAxios } from "../../config_axios";
import "./Listagem.css";

const Listagem = () => {
  const [produtos, setProdutos] = useState([]);

  const getProduto = async () => {
    try {
      const lista = await inAxios.get("produto");
      setProdutos(lista.data);
    } catch (erro) {
      console.log(`Erro no acesso ao Servidor ${erro}`);
    }
  };

  useEffect(() => {
    getProduto();
  }, []);

  return (
    <div className="container py-3">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {produtos.map((produto) => (
          <div className="col">
            <img src={produto.foto} alt="Produto" className="w-100 img-fluid" />
            <h4 className="mt-1">
              {produto.nome}
              {produto.preco}
              {produto.descricao}
              <button>Comprar</button>
            </h4>
            <h5 className="mb-5">{produto.preco}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listagem;
