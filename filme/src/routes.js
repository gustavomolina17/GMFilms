//Switch --> Para ter apenas 1 rota (1 componente) por página

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home/index.js";

import Header from "./components/Header/index.js";

import Filme from "./Pages/Filme";

import Favoritos from "./Pages/Favoritos";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route exact path="favoritos" component={Favoritos} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
