import React from "react";

const Item = (props) => {
    return(
    <div class="item">
        <div className="right floated content">
          <div className="ui button">Add</div>
        </div>
        <div className="right floated content">
        <a className="ui label">{props.precio}€</a>
        </div>
        <div className="content">
        <a className="header">{props.nombre}</a>
        <div className="description">{props.descripcion}</div>
        </div>
    </div>
    );
}

export default Item;