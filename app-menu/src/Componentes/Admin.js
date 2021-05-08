import React from "react";
import NewItem from "./NewItem";

//TODO: Implementar el grid en app
// className="four wide column" -> para que se vea un trozo del grid

const Admin = () => {
    return (
        <div className="four wide column">
            <h3 className="ui dividing header">Administrar</h3>
            <NewItem />
        </div>
    );
}

export default Admin;