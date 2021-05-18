import axios from "axios";
import React, { useState, useEffect } from "react";
import Error from "./Error";
import Link from "./Link";

const LogIn = () => {

    const [results, setResults] = useState([]);
    const [empleado, setEmpleado] = useState();
    const [mail, setMail] = useState([]);
    const [pass, setPass] = useState([]);
    const [errorMsg, setError] = useState([]);

    function renderComponent() {
        if (!empleado) {
            return (
                <div className="ui card">
                    <div className="content">
                        <div className="ui form" id="form">
                            <div className="field">
                                <label>Email:</label>
                                <input type="email" id="mail" onChange={(e) => setMail(e.target.value)} name="mail" placeholder="Email" required></input>
                            </div>
                            <div className="field">
                                <label>Contraseña:</label>
                                <input type="password" id="pass" onChange={(e) => setPass(e.target.value)} name="password" placeholder="Password" required></input>
                            </div>
                            <button className="ui button" onClick={() => llamadaAxios()}>Log In</button>
                        </div>
                        <Error
                            mensaje={errorMsg}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="ui card">
                    <div className="content">
                        <p className="header">Bienvenido {empleado}! </p>
                        <Link href="/admin" className="item">
                            Administrar
                    </Link>
                    </div>
                </div>
            )
        }
    }

    function llamadaAxios() {
        if (pass.length === 0) {
            setError("Error: Debes introducir una contraseña")
        } else {

            axios.get("http://127.0.0.1:8000/api/login/" + mail).then(response => setResults(response))
                .catch(error => setError("Error: Debes introducir un correo"));

            if (results.length !== 0) {

                if (results.data.length !== 0) {
                    results.data[0].password === pass ? setEmpleado(results.data[0].nombre) : setError("Error: Contraseña incorrecta")
                } else if (results.data.length === 0) {
                    setError("Error: Email de empleado inexistente")
                }
            } else {
                setError("Error de server: Vuelva a intentarlo más tarde")
            }
        }

    }

    useEffect(() => {
        renderComponent();

    }, [empleado]);

    return renderComponent();

}

export default LogIn;