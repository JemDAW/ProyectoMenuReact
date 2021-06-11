import React from "react";
import useApiRestGet from "../hooks/useApiRestGet";
import Seccion from "./Seccion";

const Menu = (props) => {
    const { onAdd } = props;
    const tagsArray = useApiRestGet("tags");

    if (tagsArray.length === 6) {
        if (tagsArray[0].tag === null) {
            tagsArray.shift();
        }
    }


    const renderedResults = tagsArray.map((result) => {
        return (
            <div key={result.tag}>
                <Seccion
                    onAdd={onAdd}
                    tag={result.tag}
                />
            </div>
        );
    });
    return (
        <div className="ten wide column">
            <h1 className="ui centered dividing header">Menú</h1>
            {renderedResults}
        </div>
    )
};





export default Menu;