import React, { useEffect, useState } from "react";

export const Feach = (): React.JSX.Element => {
  const [personajes, setpersonajes] = useState([]);
  const getData = () => {
    // const requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };

    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((result) => setpersonajes(result["results"]))
      .catch((error) => console.error(error));
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
