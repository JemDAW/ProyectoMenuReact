import React from "react";

const Error = (props) => {
   var estado= "hidden" ;
   if(props.mensaje.includes("Error")){
       estado= "visible"}
  return (
    <div className={`ui negative ${estado} message`}>
    <p className="header">
        {props.mensaje}
    </p>
    </div>
  );
};

export default Error;