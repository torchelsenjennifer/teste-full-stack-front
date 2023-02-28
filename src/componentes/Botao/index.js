
import './Botao.css'

const Botao = ({funcao, texto, cor_botao}) => {
  return (
    <button 
    style={{backgroundColor: cor_botao}}

    onClick={funcao }>
      {texto}
      </button>
  )
};

export default Botao;
