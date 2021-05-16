import React from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";


const Admin = () => {
    return (
        <div className="four wide column">
            <h3 className="ui dividing header">Administrar</h3>
            <NewItem />
            <ItemList />
        </div>
    );
}

export default Admin;