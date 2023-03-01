
import './Botao.css'

const Botao = ({funcao, texto, cor_botao, cor_letra, contorno}) => {
  return (
    <button 
    className='botao'
    style={{backgroundColor: cor_botao, color: cor_letra, borderRadius:contorno}}
    onClick={funcao }>
      {texto}
      </button>
  )
};

export default Botao;
