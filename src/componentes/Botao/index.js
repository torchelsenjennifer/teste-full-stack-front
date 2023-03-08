import "./Botao.css";

const Botao = ({ texto, cor_botao, cor_letra, contorno, funcao }) => {
  return (
    <button
      className="botao"
      style={{
        backgroundColor: cor_botao,
        color: cor_letra,
        borderRadius: contorno,
      }}
      onClick={funcao}
    >
      {texto}
    </button>
  );
};

export default Botao;
