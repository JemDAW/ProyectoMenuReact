import React, { useState } from "react";
import axios from "axios";
import Error from "./Error";

const ItemForm = (props) => {
    const item = props.infoItem;
    const [nombre, setNombre] = useState();
    const [precio, setPrecio] = useState();
    const [descripcion, setDescripcion] = useState();
    const [tag, setTag] = useState();
    const [errorMsg, setError] = useState([]);

    function modificarItem() {
        if(item.id !== undefined){
        axios.put("http://127.0.0.1:8000/api/item/" + item.id, {
            nombre: nombre !== undefined ? nombre : item.nombre,
            precio: precio !== undefined ? precio : item.precio,
            password: descripcion !== undefined ? descripcion : item.descripcion,
            tag: tag !== undefined ? tag : item.tag
        })
            .then(response => window.location.reload()).catch(error => console.log(error));
        }else{
            setError("Error: No has elegido un item que modificar");
        }
    }


    return (
        <div className="column">
        <div className="ui fluid card">
            <div className="content">
                <div className="ui form" id="form">
                    <h4 className="ui dividing header">Modificar Item</h4>
                    <div className="field">
                        <label>Nombre:</label>
                        <input type="text" onChange={(e) => setNombre(e.target.value)} name="nombre" placeholder={item === 0 ? "-" : item.nombre}></input>
                    </div>
                    <div className="field">
                    <label>Precio:</label>
                        <input type="number" onChange={(e) => setPrecio(e.target.value)} name="precio" placeholder={item === 0 ? "-" : item.email}></input>
                    </div>
                    <div className="field">
                        <label>Descripción:</label>
                        <textarea rows="2" onChange={(e) => setDescripcion(e.target.value)} name="descrip" placeholder={item === 0 ? "-" : item.descripcion}></textarea>
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
                    <button className="ui button" onClick={() => modificarItem()}>Modificar item</button>
                </div>
                <Error
                    mensaje={errorMsg}
                />
            </div>
        </div>
        </div>
    );
}

export default ItemForm;