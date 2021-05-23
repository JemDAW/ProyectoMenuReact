import React, { useState } from "react";
import useApiRestGet from "../hooks/useApiRestGet";
import "../Css/List.css";
import axios from "axios";

const EmpleadoList = () => {

    const results = useApiRestGet("empleados");
    var array = Object.values(results);
    const [emp, setEmp] = useState(0);

    function borrar(empleado) {
        axios.delete("http://127.0.0.1:8000/api/delete/empleado/" + empleado.id)
            .then(response => window.location.reload()).catch(error => console.log(error));

    }

    const renderedEmpleados = array.map((result) => {
        return (
            <div className="item" key={result.id}>
                <div className="right floated content">
                    <div className="ui button" onClick={(e) => setEmp(result)}>Modificar</div>
                    <div className="ui button" onClick={(e) => borrar(result)}>Borrar</div>
                </div>
                <div className="content">
                    <p className="header">{`${result.id}. ${result.nombre}`}</p>
                    <div className="description">{result.email}</div>
                </div>
            </div>
        );
    });

    const listaEmpleados = () => {
        return (
            <div className="column">
                <div className="ui fluid card">
                    <div className="content">
                        <h4 className="ui dividing header">Lista Empleados</h4>
                        <div className="ui middle aligned divided list">
                            {renderedEmpleados}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return [listaEmpleados, emp];
};

export default EmpleadoList;