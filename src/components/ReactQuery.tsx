import { useQuery } from "react-query";

export const ReactQuery = (): JSX.Element => {
  const { data } = useQuery("ReactQuery", fetchCharacters);

  const personajes = data?.results || []; // Handle initial loading and errors

  return (
    <ul>
      {personajes.map((e: any) => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ul>
  );
};

const fetchCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  return await response.json();
};
