import "./Menu.css";
import { BsCartCheck } from "react-icons/bs";
import { useHistory } from 'react-router-dom';
import { useCarrinhoContext } from "../../context/Carrinho"

const Menu = () => {
  const {quantidadeProdutos} = useCarrinhoContext();
  const history = useHistory();
  return (
    <div className="menu">
      <img
        className="menu_logo"
        src={process.env.PUBLIC_URL + "/assets/estoque.png"}
        alt="Logo da agencia"
      />
      <h1 className="menu_titulo">Estoque de Produtos e Categorias</h1>
      <div className="foto_carrinho">
        <BsCartCheck
          size={50}
          disabled={quantidadeProdutos === 0}
          onClick={() => history.push("/carrinho")}
        ></BsCartCheck>
      </div>
    </div>
  );
};

export default Menu;
