import React, { useState } from "react";
import axios from "axios";
import Error from "./Error";

const NewItem = () => {

//Le doy a descripción y tag un valor inicial, por si el valor no se incluye al añadir el item

    const [nombre, setNombre] = useState();
    const [precio, setPrecio] = useState();
    const [descripcion, setDescripcion] = useState(" ");
    const [tag, setTag] = useState(null);
    const [errorMsg, setError] = useState([]);

    function añadirItem() {
        if (nombre !== undefined && precio !== undefined) {
            axios.post("http://127.0.0.1:8000/api/item", {
                nombre: nombre,
                precio: precio,
                descripcion: descripcion,
                tag: tag
            })
                .then(response => window.location.reload()).catch(error => console.log(error));
        }else{
            setError("Error: Nombre o precio no introducidos");
        }
    }

    return (
            <div className="ui fluid card">
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
                    <Error
                            mensaje={errorMsg}
                        />
                </div>
            </div>
    );
}

export default NewItem;