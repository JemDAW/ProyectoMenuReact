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
      
      <Route path="/">
        <Menu />
      </Route>

      <Route path="/admin">
        <Admin />
      </Route>
    </div>
  );
};

export default App;