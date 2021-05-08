import React, { useState } from "react";

const NewItem = () => {

    //TODO: Comprobaciones y llamada Axios

    const [nombre, setNombre] = useState();
    const [precio, setPrecio] = useState();
    const [descripcion, setDescripcion] = useState();
    const [tag, setTag] = useState();

    const item = {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        tag: tag
    }

    function añadirItem() {
        console.log(item)
    }

    return (
        <div className="twelve wide column">
            <div className="ui card">
                <div className="content">
                    <div className="ui form" id="form">
                        <h4 className="ui dividing header">Nuevo Item</h4>
                        <div className="field">
                            <label>Nombre:</label>
                            <input type="text" onChange={(e) => setNombre(e.target.value)} name="nombre" placeholder="Nombre del Item" required></input>
                        </div>
                        <div className="field">
                            <label>Precio:</label>
                            <input type="number" onChange={(e) => setPrecio(e.target.value)} name="precio" placeholder="Precio" required></input>
                        </div>
                        <div className="field">
                            <label>Descripción:</label>
                            <textarea rows="2" placeholder="Máximo 100 carácteres" onChange={(e) => setDescripcion(e.target.value)}></textarea>
                        </div>
                        <div className="field">
                            <label>Sección:</label>
                            <select className="ui search dropdown">
                                <option onClick={(e) => setTag(e.target.value)} value="">Elija una opción</option>
                                <option onClick={(e) => setTag(e.target.value)} value="entrante">Entrante</option>
                                <option onClick={(e) => setTag(e.target.value)} value="ensalada">Ensalada</option>
                                <option onClick={(e) => setTag(e.target.value)} value="principal">Principal</option>
                                <option onClick={(e) => setTag(e.target.value)} value="postre">Postre</option>
                                <option onClick={(e) => setTag(e.target.value)} value="bebida">Bebida</option>
                            </select>
                        </div>
                        <button className="ui button" onClick={() => añadirItem()}>Añadir Item</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewItem;