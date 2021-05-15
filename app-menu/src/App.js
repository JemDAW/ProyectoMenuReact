import React, { useState, useEffect } from "react";
import Menu from "./Componentes/Menu";
import Admin from "./Componentes/Admin";
import LogIn from "./Componentes/LogIn";
import LoginCard from "./Componentes/LoginCard";
import Route from "./Componentes/Route";

const App = () => {
  return (
    <div>
      <LoginCard />
      <Route path="/login">
        <LogIn />
      </Route>
      <div className="ui grid">
        <div className="one wide column"></div>
        <div className="ten wide column">
        <h3 className="ui dividing header">Menú</h3>
      <Menu />
      </div>
      <Route path="/admin">
        <Admin />
      </Route>
      </div>
    </div>
  );
};

export default App;