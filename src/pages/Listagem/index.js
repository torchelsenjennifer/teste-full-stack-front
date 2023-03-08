import React from "react";
import { useState, useEffect } from "react";
import { inAxios } from "../../config_axios";
import "./Listagem.css";
import Card from "../../componentes/Card";

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
    <div className="container py-5">
      {produtos.map((produto) => (
        <Card {...produto} key={produto.id} />
      ))}
    </div>
  );
};

export default Listagem;
