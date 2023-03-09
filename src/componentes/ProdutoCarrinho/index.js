import Container from '@mui/material/Container';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import IconButton from "@mui/material/IconButton";
import { useCarrinhoContext } from "../../context/Carrinho";

const ProdutoCarrinho = ({ foto, nome, preco, id }) => {
  const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext();
  const produtoNoCarrinho = carrinho.find(
    (itemDoCarrinho) => itemDoCarrinho.id === id
  );

  return (
    <Container>
    <div>
      <img src={foto} alt="Produto" />
      <p>
        {nome} - R$ {preco?.toFixed(2)} <span>Kg</span>
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
        onClick={() => adicionarProduto({ nome, foto, id, preco })}
      >
        <AddIcon />
      </IconButton>
    </div>
  </Container>
  );
};

export default ProdutoCarrinho;
