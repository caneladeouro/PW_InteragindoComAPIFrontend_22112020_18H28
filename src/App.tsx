import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AboutAutor from "./pages/AboutAutor";
import ShowMusic from "./pages/ShowMusic";
import AppBarComponent from "./pages/components/AppBar";

function App() {
  return (
    <BrowserRouter>
      <AppBarComponent />
      <Switch>
        <Route path="/showMusic">
          <ShowMusic />
        </Route>
        <Route path="/aboutAutor">
          <AboutAutor />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
