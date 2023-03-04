// import { useHistory } from "react-router-dom";
import Informacao from "../../componentes/Informacao";
import React from "react";
import { useState, useEffect } from "react";
import { inAxios } from "../../config_axios";

const Descricao = ({ id }) => {
  const [produto, setProduto] = useState();

  const getProduto = async (id) => {
    try {
      const produto = await inAxios.get(`produto/${id}`);
      setProduto(produto.data);
    } catch (erro) {
      console.log(`Erro no acesso ao Servidor ${erro}`);
    }
  };

  useEffect(() => {
    getProduto(id);
  }, [id]);

  return <Informacao {...produto} />;
};

export default Descricao;
