// import { useHistory } from "react-router-dom";
import Informacao from "../../componentes/Informacao";
import React from "react";
import { useState, useEffect } from "react";
import { inAxios } from "../../config_axios";

const Descricao = ({ id }) => {
//Recebe o parametro ID por prop
//Prop: Atributo que pode passar para outro componente receber e mostrar para o usuario
  const [produto, setProduto] = useState();
//setProduto =  serve para atuaalizar a variavel produto
//Necessário realizar uma requesição no Back para puxar as descrições do produto especifico
  const getProduto = async (id) => {
    try {
 //Requisição com a roda do banco
      const produto = await inAxios.get(`produto/${id}`);
      setProduto(produto.data);
    } catch (erro) {
      console.log(`Erro no acesso ao Servidor ${erro}`);
    }
  };

  useEffect(() => {
    //passar o parametro Id
    getProduto(id);
  }, [id]);

  return <Informacao {...produto} />;
};

export default Descricao;
