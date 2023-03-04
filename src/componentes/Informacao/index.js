import React, { useState } from "react";
import Botao from "../Botao";

const Informacao = () => {
  
const [produto] = useState([])
  return (
    <div className="descricao">
                {produto.length ? (
                    <>
                        {produto.map((des) => (
                            <div className='register' key={des.id}>
                                <h1>{des.name}</h1>
                                <h2>{des.descricao}</h2>
                                <Botao  />
                            </div>
                        ))}
                    </>
 ) : (
  <div className='default-text'>
      <h2>Descricao do produto</h2>
  </div>
)}
</div>
)}
export default Informacao