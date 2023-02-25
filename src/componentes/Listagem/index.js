import React from 'react'
import { useState, useEffect  } from 'React';
import { inAxios, webServiceURL } from './config_axios';
import "./Listagem.css";

const Listagem = () => {
  const [produtos, setProdutos] = useState([])
  const [id, setId] = useState(0);
  const [categoria_id, setCategoriaId] = useState(0);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);
  const [foto, setFoto] = useState("");

  const handleShow = (id, categoria_id, nome, foto, descricao, preco ) => {
    setId(id)
    setCategoriaId(categoria_id)
    setNome(nome)
    setDescricao(descricao)
    setFoto(webServiceURL + foto)
    setPreco(preco)
  }

  const getProduto = async () => {
    try {
      const lista = await inAxios.get("produto")
      setProdutos(lista.data)
    } catch (erro) {
      console.log(`Erro no acesso ao Servidor ${erro}`)
    }
  }

  useEffect(() => {
    getProduto()
  }, [])

return (
  <div className="container py-3">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {produtos.map((produto) => (
        <div className="col">
          <img
            src={`${webServiceURL}${produto.foto}`}
            alt="Produto"
            className="w-100 img-fluid"
          />
          <h4 className="mt-1">
            {produto.preco}
            {produto.descricao}
            <button>
              Comprar
            </button>
          </h4>
          <h5 className="mb-5">{produto.preco}</h5>
        </div>
      ))}
    </div>
  </div>
)
};

export default Listagem;
