import React, { useState } from "react";
import "../Css/List.css";

const Item = (props) => {
  const {onAdd} = props;
  console.log(props);
  return(
    <div className="item">
        <div className="right floated content">
          <div className="ui button" onClick={()=>onAdd(props)}>Add</div>
        </div>
        <div className="right floated content">
        <p className="ui label">{props.precio}€</p>
        </div>
        <div className="content">
        <p className="header">{props.nombre}</p>
        <div className="description">{props.descripcion}</div>
        </div>
    </div>
    );
}

export default Item;