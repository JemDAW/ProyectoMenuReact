import React from "react";
import Item from "./Item";

const Seccion = (props) => {

    return(
        <div class="ui segment">
        <h2 class="ui left floated header">{props.tag}</h2>
        <div class="ui middle aligned divided list">
        <div class="ui clearing divider"></div>
            <Item
            nombre= "Patatas Gajo"
            descripcion= "Sabrosas patatas manualmente cortadas y fritas en aceite de girasol"
            precio= "3,5"
            />
            <Item
            nombre= "Hamburguesa"
            descripcion= "Carne de ternera, tomate y lechuga con salsa roja"
            precio= "4"
            />
        </div>
        </div>
    );
}

export default Seccion;