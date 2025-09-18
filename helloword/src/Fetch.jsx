import { useState, useEffect } from "react";

const API_URL = "https://api.api-onepiece.com/v2/swords/en"; // endpoint lista spade

const Fetch = () => {
  const [swords, setSwords] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Errore durante il caricamento.");
      }

      const data = await response.json();
      setSwords(data); // assumendo che data sia un array di spade
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Lista Spade One Piece ⚔️</h2>
      {loading ? (
        <p>Caricamento...</p>
      ) : (
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
            
              <th>Name</th>
              <th>Description</th>
             
            </tr>
          </thead>
          <tbody>
            {swords.map((sword) => (
              <tr key={sword.id}>
                
                <td>{sword.name}</td>
                <td>{sword.description}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
       
      )}
     </>
  );
};

export default Fetch;
