import React from "react";
import EmpleadoList from "./EmpleadoList";
import ItemList from "./ItemList";
import NewEmpleado from "./NewEmpleado";
import NewItem from "./NewItem";


const Admin = () => {
    return (
        <div>
            <h1 className="ui centered dividing header">Administrar</h1>
            <div className="ui grid">
                <div className="four column row">
                        <div className="column">
                            <NewItem />
                        </div>
                        <div className="column">
                            <ItemList />
                        </div>

                        <div className="column">
                            <NewEmpleado />
                        </div>
                        <div className="column">
                            <EmpleadoList />
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;