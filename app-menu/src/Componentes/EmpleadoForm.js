import React, { useState } from "react";
import axios from "axios";
import Error from "./Error";

const EmpleadoForm = (props) => {
    const empleado = props.infoEmpleado;
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [tipo, setTipo] = useState();
    const [errorMsg, setError] = useState([]);

    function modificarEmpleado() {
        if(empleado.id !== undefined){
        axios.put("http://127.0.0.1:8000/api/empleado/" + empleado.id, {
            nombre: nombre !== undefined ? nombre : empleado.nombre,
            email: email !== undefined ? email : empleado.email,
            password: pass !== undefined ? pass : empleado.password,
            tipo_usuario: tipo !== undefined ? tipo : empleado.tipo_usuario
        })
            .then(response => window.location.reload()).catch(error => console.log(error));
        }else{
            setError("Error: No has elegido un empleado que modificar");
        }
    }


    return (
        <div className="column">
        <div className="ui fluid card">
            <div className="content">
                <div className="ui form" id="form">
                    <h4 className="ui dividing header">Modificar Empleado</h4>
                    <div className="field">
                        <label>Nombre:</label>
                        <input type="text" onChange={(e) => setNombre(e.target.value)} name="nombre" placeholder={empleado === 0 ? "-" : empleado.nombre} required></input>
                    </div>
                    <div className="field">
                        <label>Email:</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder={empleado === 0 ? "-" : empleado.email} required></input>
                    </div>
                    <div className="field">
                        <label>Contraseña:</label>
                        <input type="text" onChange={(e) => setPass(e.target.value)} name="pass" placeholder={empleado === 0 ? "-" : empleado.password} required></input>
                    </div>
                    <div className="field">
                        <label>Tipo de usuario:</label>
                        <input type="text" onChange={(e) => setTipo(e.target.value)} placeholder={empleado === 0 ? "-" : empleado.tipo_usuario} required></input>
                    </div>
                    <button className="ui button" onClick={() => modificarEmpleado()}>Modificar Empleado</button>
                </div>
                <Error
                    mensaje={errorMsg}
                />
            </div>
        </div>
        </div>
    );
}

export default EmpleadoForm;