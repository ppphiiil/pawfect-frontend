import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import "./style/App.scss";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
