import React from "react";
import useFetch from "./useFetch";

function Fetch() {
  const { data, loading, error } = useFetch("https://api.api-onepiece.com/v2/swords/en");

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  console.log("Dati API:", data);

  return (
    <>
      <h1>Swords One Piece</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default Fetch;
