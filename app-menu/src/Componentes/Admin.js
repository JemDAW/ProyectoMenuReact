import React from "react";
import ItemList from "./ItemList";
import ModifyEmpleado from "./ModifyEmpleado";
import NewEmpleado from "./NewEmpleado";
import NewItem from "./NewItem";
import "../Css/Admin.css"


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
                        <NewEmpleado />
                    </div>
                    <div className="eight wide column">
                        <ModifyEmpleado />
                    </div>
                </div>
                <div className="four column row">
                    <div className="column"></div>
                    <div className="column">
                        <ItemList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;