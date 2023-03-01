import "./Card.css";
import Botao from "../../Botao";

const Card = ({ foto, nome, preco, descricao, categoria }) => {
  return (
    <div className="card">
      <img className="card_img" src={foto} alt="Produto" />
      <h4>{nome}</h4>
      <h5 className="card_valor">{`Valor: R$${preco}`}</h5>
      <h4>{descricao}</h4>
      <h4 className="card_categoria">{categoria}</h4>
      <div className="botao">
        <Botao
          // funcao={() => history.push("/detalhes")}
          texto={"INFORMAÇÕES"}
          cor_botao={"black"}
          cor_letra={"white"}
          contorno={'10px'}

        />
        <Botao
          texto={"ADICIONAR"}
          cor_botao={"black"}
          cor_letra={"white"}
          contorno={'10px'}
        />
      </div>
    </div>
  );
};

export default Card;
