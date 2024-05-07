import React, { useEffect, useState } from "react";

const useRickAndMortyApi = () => {
  const [personajes, setpersonajes] = useState([]);

  const [error, seterror] = useState(null);
  const [liading, setLiading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (response.status >= 400) throw new Error("Error!!");
        return response.json();
      })
      .then((result) => setpersonajes(result["results"]))
      .catch((error) => {
        seterror(error);
        console.error(error);
      })
      .finally(() => setLiading(false));
  }, []);

  return { personajes, error, liading };
};

export const Feach = (): React.JSX.Element => {
  const { personajes, error, liading } = useRickAndMortyApi();

  if (liading) return <p>page loading, plices wait !!</p>;

  if (error) return <p>A network error was encontrer!!!</p>;
  return (
    <ul>
      {personajes.map((personaje) => (
        <li key={personaje.id}>{personaje.name}</li>
      ))}
    </ul>
  );
};
