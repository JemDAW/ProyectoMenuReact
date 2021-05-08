import { useState, useEffect } from "react";
import axios from "axios";

const useApiRestGet = (busqueda) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/"+busqueda)
      .then((response) => setResults(response.data))
      .catch((error) => console.log(error));
    /*.catch(
        (error) =>
          setResults([
            { nombre: "Nom", descripcion: "Desc", precio: 52, tag: "Tag" },
          ])      
      );*/
  }, []);

  return results;
};

export default useApiRestGet;