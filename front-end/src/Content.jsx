import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Store } from "./pages/Store";
import { Cart } from "./pages/Cart";
import CadastroUsuarios from "./components/Cadastro/CadastroUsuarios";

export const Content = () => {
  return (
    <Switch>
      <Route path="/cadastro-usuarios" component={CadastroUsuarios} />
      <Route exact path="/" component={Store} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};
