import { BsCartCheck } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { useHistory } from "react-router-dom";
// import { useCarrinhoContext } from "../../context/Carrinho"

function Carrinho() {
  // const {quantidadeProdutos} = useCarrinhoContext();
  const history = useHistory();
  return (
    <BsCartCheck size={50} onClick={() => history.push("/carrinho")}>
      <Badge></Badge>
    </BsCartCheck>
  );
}
export default Carrinho;
