import React, { useState, useEffect } from "react";
import Seccion from "./Componentes/Seccion";

const App = () => {
  return (
    <div>     
    <Seccion
    tag="Entrantes"
    />
    <Seccion
    tag="Principales"
    />
    </div>
    );
};

export default App;