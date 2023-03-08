import "./Menu.css";

import Carrinho from "../Icone_Carrinho";

const Menu = () => {
  return (
    <div className="menu">
      <img
        className="menu_logo"
        src={process.env.PUBLIC_URL + "/assets/estoque.png"}
        alt="Logo da agencia"
      />
      <h1 className="menu_titulo">Estoque de Produtos e Categorias</h1>
      <div className="foto_carrinho">
        <Carrinho />
      </div>
    </div>
  );
};

export default Menu;
