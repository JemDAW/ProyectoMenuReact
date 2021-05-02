import { useState } from "react";
import axios from "axios";



const useApiRestGet = () => {
  const [results, setResults] = useState([]);
  var resultados;

    axios.get("http://127.0.0.1:8000/api/items")
    .then(response =>  setResults(response.data))
    .catch(error => console.log(error));
 

   

    console.log(results);
    
  //return results;
  
};

export default useApiRestGet;