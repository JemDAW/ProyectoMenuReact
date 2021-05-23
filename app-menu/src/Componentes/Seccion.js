import React from "react";
import Item from "./Item";
import useApiRestGet from "../hooks/useApiRestGet";

const Seccion = (props) => {
  const { onAdd } = props;
    const results = useApiRestGet("items/"+props.tag);
       
        var array = Object.values(results);
        //Coge el tag y hace que la primera letra sea mayúscula
        var tituloSeccion= props.tag.replace(/^\w/, (c) => c.toUpperCase());
        

    const renderedResults = array.map((result) => {
    return(
      <div className="item" key={result.id}>
            <Item
            onAdd={onAdd}
            id={result.id}
            nombre= {result.nombre}
            descripcion= {result.descripcion}
            precio= {result.precio}
            />     
      </div>
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
