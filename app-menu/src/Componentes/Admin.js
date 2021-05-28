import React from "react";
import ModifyItem from "./ModifyItem";
import ModifyEmpleado from "./ModifyEmpleado";
import NewEmpleado from "./NewEmpleado";
import NewItem from "./NewItem";
import "../Css/Admin.css"


const Admin = (props) => {
    console.log(props);
    if (props.empleado) {
        if (props.empleado.tipo_usuario === "admin") {
            return (
                <div>
                    <h1 className="ui centered dividing header">Administrar</h1>
                    <div className="ui grid">
                        <div className="four column row">
                            <div className="column">
                                <NewItem />
                            </div>

                            <div className="column">
                                <NewEmpleado />
                            </div>
                            <div className="eight wide column">
                                <ModifyEmpleado />
                            </div>
                        </div>
                        <div className="four column row">
                            <div className="column"></div>
                            <div className="eight wide column">
                                <ModifyItem />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div>
                    <h1 className="ui centered dividing header">Usuario sin privilegios de administración</h1>
                </div>
            );
        }
    } else {
        return (
            <div>
                <h1 className="ui centered dividing header">Identificate para acceder al menú de Administración</h1>
            </div>
        );
    }
}

export default Admin;