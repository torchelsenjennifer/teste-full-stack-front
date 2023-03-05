// import React, { useState } from "react";
// import Botao from "../Botao";


//Recebe os paramentos do produto especificio
const Informacao = ({ id, nome, descricao, foto, preco, categoria_id }) => {
  return (
    <div className="descricao">
      <>
        <div className="register" key={id}>
          <h1>{id}</h1>
          <h1>{foto}</h1>
          <h1>{nome}</h1>
          <h2>{descricao}</h2>
          <h1>{preco}</h1>
          <h1>{categoria_id}</h1>
          {/* <Botao /> */}
        </div>
      </>
    </div>
  );
};
export default Informacao;
