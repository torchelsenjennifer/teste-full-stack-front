import "./Card.css";
import { useHistory } from "react-router-dom";
import Botao from "../Botao";
import { useCarrinhoContext } from "../../context/Carrinho";

const Produto_Carrinho = ({ foto, nome, preco, descricao, categoria, id }) => {
  const history = useHistory();
  const { adicionarProduto } = useCarrinhoContext();

  return (
    <Container>
    <div>
      <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
      <p>
        {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
      </p>
    </div>
    <div>
      <IconButton
        color="secondary"
        onClick={() => removerProduto(id)}
        disabled={!produtoNoCarrinho}
      >
        <RemoveIcon />
      </IconButton>
      {produtoNoCarrinho?.quantidade || 0}
      <IconButton
        color="primary"
        onClick={() => adicionarProduto({ nome, foto, id, valor })}
      >
        <AddIcon />
      </IconButton>
    </div>
  </Container>
  );
};

export default Produto_Carrinho;
