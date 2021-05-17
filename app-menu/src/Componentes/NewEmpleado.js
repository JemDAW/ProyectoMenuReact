import React, { useState } from "react";
import axios from "axios";
import Error from "./Error";

const NewEmpleado = () => {

    //Por revisar

    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [tipo, setTipo] = useState("");
    const [errorMsg, setError] = useState([]);

    function añadirEmpleado() {
        if (nombre !== undefined && email !== undefined && pass !== undefined) {
            axios.post("http://127.0.0.1:8000/api/empleado", {
                nombre: nombre,
                email: email,
                pass: pass,
                tipo: tipo
            })
                .then(response => console.log(response)).catch(error => console.log(error));
        }else{
            setError("Error: Nombre, email o contraseña no introducidos");
        }
    }

    return (
            <div className="ui fluid card">
                <div className="content">
                    <div className="ui form" id="form">
                        <h4 className="ui dividing header">Nuevo Empleado</h4>
                        <div className="field">
                            <label>Nombre:</label>
                            <input type="text" onChange={(e) => setNombre(e.target.value)} name="nombre" placeholder="Nombre del empleado" required></input>
                        </div>
                        <div className="field">
                            <label>Email:</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" required></input>
                        </div>
                        <div className="field">
                            <label>Contraseña:</label>
                            <input type="text"  onChange={(e) => setPass(e.target.value)} name="pass" placeholder="Máximo 20 carácteres" required></input>
                        </div>
                        <div className="field">
                            <label>Tipo de usuario:</label>
                            <input type="text"  onChange={(e) => setTipo(e.target.value)} required></input>
                        </div>
                        <button className="ui button" onClick={() => añadirEmpleado()}>Añadir Empleado</button>
                    </div>
                    <Error
                            mensaje={errorMsg}
                        />
                </div>
            </div>
    );
}

export default NewEmpleado;