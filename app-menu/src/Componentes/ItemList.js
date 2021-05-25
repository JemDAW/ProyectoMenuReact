import React, { useState } from "react";
import useApiRestGet from "../hooks/useApiRestGet";
import axios from "axios";

const ItemList = () => {

    const results = useApiRestGet("items");
    var array = Object.values(results);
    const [item, setItem] = useState(0);

    function borrar(item) {
        axios.delete("http://127.0.0.1:8000/api/delete/item/" + item.id)
            .then(response => window.location.reload()).catch(error => console.log(error));

    }

    const renderedItems = array.map((result) => {
        return (
            <div className="item" key={result.id}>
                <div className="right floated content">
                    <div className="ui button" onClick={(e) => setItem(result)}>Modificar</div>
                    <div className="ui button" onClick={(e) => borrar(result)}>Borrar</div>
                </div>
                <div className="right floated content">
                    <p className="ui label">{result.precio}€</p>
                </div>
                <div className="content">
                    <p className="header">{result.nombre}</p>
                    <div className="description">{result.descripcion}</div>
                </div>
            </div>
        );
    });

    const listaItems = () => {
        return (
            <div className="column">
                <div className="ui fluid card">
                    <div className="content">
                        <h4 className="ui dividing header">Lista Items</h4>
                        <div className="ui middle aligned divided list">
                            {renderedItems}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return [listaItems, item];
};

export default ItemList;