//Switch --> Para ter apenas 1 rota (1 componente) por página

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";

import Header from "./components/Header";

import Filme from "./Pages/Filme";

import Favoritos from "./Pages/Favoritos";

import Erro from "./Pages/Erro";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route exact path="/favoritos" component={Favoritos} />
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
