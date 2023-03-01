import Menu from "./componentes/Menu";
import Listagem from "./componentes/pages/Listagem";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Botao from "./componentes/Botao";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Menu />
        <Listagem />
        <Route exact path="/descricao">
            <Botao />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
