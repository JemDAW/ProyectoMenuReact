import React from "react";

const Item = (props) => {
    return(
    <div className="item">
        <div className="right floated content">
          <div className="ui button">Add</div>
        </div>
        <div className="right floated content">
        <p className="ui label">{props.precio}€</p>
        </div>
        <div className="content">
        <a className="header">{props.nombre}</a>
        <div className="description">{props.descripcion}</div>
        </div>
    </div>
    );
}

export default Item;