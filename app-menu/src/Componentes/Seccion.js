import React from "react";
import Item from "./Item";
import useApiRestGet from "../hooks/useApiRestGet";

const Seccion = (tags) => {
    console.log(tags);
    const results = useApiRestGet("items/"+tags.tag);
       
        var array = Object.values(results);
        

    const renderedResults = array.map((result) => {
    return(
        <div className="ui segment">
        <h2 className="ui left floated header">{result.tag}</h2>
        <div className="ui middle aligned divided list">
        <div className="ui clearing divider"></div>
            <Item
            nombre= {result.nombre}
            descripcion= {result.descripcion}
            precio= {result.precio}
            />     
        </div>
        </div>
    );
    });
  return(
      renderedResults
  )
};

export default Seccion;
