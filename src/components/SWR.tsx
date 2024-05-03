import React from "react";
import useSWR from "swr";

export const SWR = (): React.JSX.Element => {
  const { data } = useSWR("https://rickandmortyapi.com/api/character", fetcher);

  const personajes = data?.results || []; // Handle initial loading and errors

  return (
    <ul>
      {personajes.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ul>
  );
};

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  return await response.json();
};
