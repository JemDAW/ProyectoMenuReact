import React from "react";
import Item from "./Item";
import useApiRestGet from "../hooks/useApiRestGet";

const Seccion = (tags) => {
    console.log(tags);
    const results = useApiRestGet("items/"+tags.tag);
       
        var array = Object.values(results);
        //Coge el tag y hace que la primera letra sea mayúscula
        var tituloSeccion= tags.tag.replace(/^\w/, (c) => c.toUpperCase());
        

    const renderedResults = array.map((result) => {
    return(
        
            <Item
            nombre= {result.nombre}
            descripcion= {result.descripcion}
            precio= {result.precio}
            />     
        
    );
    });
  return(
    <div className="ui segment">
    <h2 className="ui left floated header">{tituloSeccion}</h2>
    <div className="ui middle aligned divided list">
    <div className="ui clearing divider"></div>
      {renderedResults}
    </div>
    </div>
  )
};

export default Seccion;
