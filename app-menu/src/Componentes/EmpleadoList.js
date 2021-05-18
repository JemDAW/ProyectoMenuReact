import React from "react";
import useApiRestGet from "../hooks/useApiRestGet";

const EmpleadoList = () => {

    const results = useApiRestGet("empleados");
    var array = Object.values(results);

    const renderedEmpleados = array.map((result) => {
        return (
            <div className="item" key={result.id}>
                <div className="right floated content">
                    <div className="ui button">Modificar</div>
                </div>
                <div className="content">
                    <a className="header">{`${result.id}. ${result.nombre}`}</a>
                    <div className="description">{result.email}</div>
                </div>
            </div>
        );
    });

    return (
        <div className="ui fluid card">
            <div className="content">
                <h4 className="ui dividing header">Lista Empleados</h4>
                <div className="ui middle aligned divided list">
                    {renderedEmpleados}
                </div>
            </div>
        </div>
    )
};

export default EmpleadoList;