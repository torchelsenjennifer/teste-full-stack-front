// import React, { useState } from "react";
// import Botao from "../Botao";
import "./Informacao.css";
//Recebe os paramentos do produto especificio
const Informacao = ({ id, nome, descricao, foto, preco, categoria }) => {
  return (
    <div className="card_horizontal" key={id}>
      <div className="foto">
        <img src={foto} alt="Produto" />
      </div>
      <div className="card_lateral">
        <div className="nome">
          <h1>{nome}</h1>
        </div>
        <div className="descricao">
          <p>{descricao}</p>
        </div>
        <div className="preco">
          <p>{preco}</p>
        </div>
        <div className="categoria">
          <p>{categoria}</p>
        </div>
      </div>
    </div>
  );
};
export default Informacao;
