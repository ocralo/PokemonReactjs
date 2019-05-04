import React from "react";
import "./App.css";
import Loadable from "react-loadable";
import { HashRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const loading = () => (
  <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Cargando...</span>
    </div>
  </div>
);

const Home = Loadable({
  loader: () => import("./view/Home/Home"),
  loading
});

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" name="Home - Pokemon" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
