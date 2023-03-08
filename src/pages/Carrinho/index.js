import { useCarrinhoContext } from "../../context/Carrinho";
import { Container } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Carrinho() {
  const { carrinho } = useCarrinhoContext();
//   const history = useHistory();
  return (
    <Container className="titulo">
      {/* <ArrowBackIcon onClick={() => history.goBack()}/> */}
      <h2 className="">Seu carrinho com os produtos adicionados estaram visíveis aqui!</h2>

      {carrinho.map(produto => (
        <Carrinho
        {...produto}
        key={produto.id}
        />
      ))}
    </Container>
  );
}

export default Carrinho;
