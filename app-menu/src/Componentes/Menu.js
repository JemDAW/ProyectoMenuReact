import React from "react";
import useApiRestGet from "../hooks/useApiRestGet";
import Seccion from "./Seccion";

const Menu = () => {
    const tagsArray = useApiRestGet("tags");
    
    if(tagsArray.length === 6){
        if(tagsArray[0].tag === null){
            tagsArray.shift();
         }
    }


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