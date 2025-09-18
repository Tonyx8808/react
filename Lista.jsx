import React from "react";

const Card = ({ children }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px 0" }}>
      {children}
    </div>
  );
};

const Lista = () => {
  const onePiece = [
    "Luffy",
    "Zoro",
    "Nami",
    "Usopp",
    "Sanji",
    "Chopper",
    "Nico Robin",
    "Brook",
    "Franky",
    "Jinbe"
  ];

  const devilFruits = [
    "Gom Gom",
    "Puzzle Puzzle",
    "Dark Dark",
    "Ope Ope",
    "Yomi Yomi",
    "Foco Foco",
    "Filo Filo"
  ];

  return (
    <div>
      <h1>One Piece</h1>

      <Card>
        <h2>Ciurma di Cappello di Paglia</h2>
        <ul>
          {onePiece.map((personaggio) => (
            <li key={personaggio}>{personaggio}</li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2>Devil Fruits</h2>
        <ul>
          {devilFruits.map((frutto) => (
            <li key={frutto}>{frutto}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Lista;
