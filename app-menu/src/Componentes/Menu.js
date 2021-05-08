import React from "react";
import useApiRestGet from "../hooks/useApiRestGet";
import Seccion from "./Seccion";

const Menu = () => {
    const tagsArray = useApiRestGet("tags");

   

    const renderedResults = tagsArray.map((result) => {
        return(
           
                <Seccion
                tag = {result.tag}
                />     
        );
        });
      return(
          renderedResults
      )
    };
 
    



export default Menu;