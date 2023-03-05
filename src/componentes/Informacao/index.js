// import React, { useState } from "react";
// import Botao from "../Botao";

//Recebe os paramentos do produto especificio
const Informacao = ({ id, nome, descricao, foto, preco, categoria }) => {
  return (
    <div className="descricao" key={id}>
      <div className="foto">
        <h1><img src={foto} alt="Produto"/></h1>
      </div>
      <div className="nome"><h1>{nome}</h1></div>
      <div className="descricao"><p>{descricao}</p></div>
      <div className="preco"><p>{preco}</p></div>
     <div className="categoria"><p>{categoria}</p></div> 
    </div>
  );
};
export default Informacao;
