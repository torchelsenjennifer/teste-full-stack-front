import Menu from "./componentes/Menu";
import Listagem from "./pages/Listagem";
import Descricao from "./pages/Descricao";
// import Erro from "./pages/Erro";
import {  Route, BrowserRouter, Switch } from "react-router-dom";
// import Carrinho from "./pages/Carrinho";
import { CarrinhoProvider } from "./context/Carrinho";

function App() {
  return (
    <BrowserRouter>
    
      {/* Todas as rotas precisam estar declaradas dentro desse escopo */}
      <Switch>
      <CarrinhoProvider>
        {/* esse componente é utilizado a partir do momento que adicionamos várias rotas */}
        <Route exact path="/" >
          <Menu />
          <Listagem />
        </Route>
        {/* Passando no path na roda com o id mais a renderização do componente descricao  */}
        
        <Route
          exact
          path="/descricao/:id"
          render={(props) => (
            <div>
              <Menu />
              <Descricao id={props.match.params.id} />
            </div>
          )}
        />
        {/* <Route exact path='/carrinho'>
          <Carrinho/>
        </Route> */}
        {/* <Route path="*">
          <Erro />
        </Route> */}
        </CarrinhoProvider>
      </Switch>
     
    </BrowserRouter>
  );
}
export default App;
