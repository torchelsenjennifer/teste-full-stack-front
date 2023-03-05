import "./Card.css";
import { useHistory } from "react-router-dom";
import Botao from "../Botao";

const Card = ({ foto, nome, preco, descricao, categoria, id }) => {
  const history = useHistory();

  return (
    <div className="card_container">
      <div className="imagem_container">
        <img src={foto} alt="Produto" />
      </div>
      <div card-content>
        <div className="card-title">
          <h3>{nome}</h3>
        </div>
        <div className="card-body">
          <p>{descricao}</p>
        </div>
        <div className="">{` R$${preco}`}</div>
        <div className="card_categoria">
          <p> {categoria}</p>
        </div>
      </div>
      <div className="btn">
        <Botao
          texto={"INFORMAÇÕES"}
          cor_botao={"black"}
          cor_letra={"white"}
          contorno={"10px"}
          funcao={() => history.push(`/descricao/${id}`)}
        />
        <Botao
          texto={"ADICIONAR"}
          cor_botao={"black"}
          cor_letra={"white"}
          contorno={"10px"}
        />
      </div>
    </div>
  );
};

export default Card;
