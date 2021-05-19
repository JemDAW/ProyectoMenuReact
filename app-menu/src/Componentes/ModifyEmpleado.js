import React from "react";
import EmpleadoForm from "./EmpleadoForm";
import EmpleadoList from "./EmpleadoList";

const ModifyEmpleado = () => {
    const [listaEmpleados, emp] = EmpleadoList();
    return (
        <div className="ui grid">
            <div className="two column row">
                <EmpleadoForm
                    infoEmpleado={emp}
                />
                {listaEmpleados()}
            </div>
        </div>
    );
}

export default ModifyEmpleado;