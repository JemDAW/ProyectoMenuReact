import React from "react";
import useApiRestGet from "../hooks/useApiRestGet";
import Seccion from "./Seccion";

const Menu = () => {
    const tagsArray = useApiRestGet("tags");

    if (tagsArray.length === 6) {
        if (tagsArray[0].tag === null) {
            tagsArray.shift();
        }
    }


    const renderedResults = tagsArray.map((result) => {
        return (

            <Seccion
                tag={result.tag}
            />
        );
    });
    return (
        <div>
            <h1 className="ui centered dividing header">Menú</h1>
            <div className="ui grid">
                <div className="twelve wide centered column">
                    {renderedResults}
                </div>
            </div>
        </div>
    )
};





export default Menu;