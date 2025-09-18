import React from "react";
import ItemList from "./ItemList";
const Lista = () =>{

const onePiece = ["Luffy",
     "Zoro",
      "Nami", 
      "Usop", 
      "Sanji", 
      "Chopper", 
      "Nico Robin", 
      "Brook", 
      "Franky",
       "Jinbee"];
    
       const devilFruits =["Gom Gom",
        "Puzzle Puzzle",
        "Dark Dark",
        "Ope Ope",
        "Yomi Yomi",
        "Foco Foco",
        "Filo Filo"
       ]

return(
    <>
    <h1>One Peace</h1>
    <h2>Ciurma di Cappello di paglia</h2>
    <ItemList items={onePiece} />
    <h2>Devil Fruits</h2>
    <ItemList items={devilFruits} />
    </>
);

};

export default Lista