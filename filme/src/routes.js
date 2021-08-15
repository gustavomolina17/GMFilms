//Switch --> Para ter apenas 1 rota (1 componente) por página

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home/index.js";

import Header from "./components/Header/index.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
