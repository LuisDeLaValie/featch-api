import axios from "axios";
import React, { useEffect, useState } from "react";

export const Axios = (): React.JSX.Element => {
  const [personajes, setPersonajes] = useState([]);

  const getData = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setPersonajes(response.data.results);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los datos:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul>
      {personajes.map((personaje) => (
        <li key={personaje.id}>{personaje.name}</li>
      ))}
    </ul>
  );
};
