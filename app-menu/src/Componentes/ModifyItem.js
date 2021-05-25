import React from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

const ModifyItem = () => {

    const [listaItems, item] = ItemList();

    return (
        <div className="ui grid">
            <div className="two column row">
                {listaItems()}
                <ItemForm
               infoItem={item}
               />
            </div>
        </div>
    );
}

export default ModifyItem;