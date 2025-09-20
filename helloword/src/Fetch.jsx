import React from "react";
import useFetch from "./useFetch";

function Fetch({ url }) {
  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;
  if (!data) return <p>Nessun dato disponibile</p>;

  return (
    <>
      <h1>Swords One Piece</h1>
      <ul>
        {data.map((sword, index) => (
          <li key={index}>
            <strong>{sword.name}</strong> ({sword.roman_name}) <br />
            <em>Type:</em> {sword.type || "N/A"} <br />
            <em>Category:</em> {sword.category || "N/A"} <br />
            <em>Description:</em> {sword.description || "Nessuna descrizione"} <br />
            <em>Destroyed:</em> {sword.isDestroy ? "Yes" : "No"}
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Fetch;
