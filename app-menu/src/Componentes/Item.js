import React from "react";

const Item = (props) => {
    return(
    <div class="item">
        <div class="right floated content">
          <div class="ui button">Add</div>
        </div>
        <div class="right floated content">
        <a class="ui label">{props.precio}€</a>
        </div>
        <div class="content">
        <a class="header">{props.nombre}</a>
        <div class="description">{props.descripcion}</div>
        </div>
    </div>
    );
}

export default Item;