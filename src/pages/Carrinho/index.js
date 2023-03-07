
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useCarrinhoContext} from '../../context/Carrinho'



function Carrinho() {
  const {quantidadeProdutos} = useCarrinhoContext();
  const history = useHistory();
  return (
    <IconButton
    // disabled={quantidadeProdutos === 0}
    onClick={() => history.push('/carrinho')}
  >
    <Badge
      color="secondary"
      badgeContent={quantidadeProdutos}
    >
      <ShoppingCartOutlinedIcon
      color='secondary'/>
    </Badge>
  </IconButton>
  );
}
export default Carrinho;
