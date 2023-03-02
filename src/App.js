import Menu from "./componentes/Menu";
import Listagem from "./pages/Listagem";
import Descricao from "./pages/Descricao";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Menu />
          <Listagem />
        </Route>
        <Route exact path="/descricao">
          <Descricao />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
