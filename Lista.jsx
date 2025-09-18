import React from "react";
const Lista = () =>{

const onePeace = ["Luffy", "Zoro", "Nami", "Usop", "Sanji", "Chopper", "Nico Robin", "Brook", "Franky", "Jinbee"]

return(
    <>
    <h1>One Peace</h1>
    <ul>
        {
            onePeace.map((item) =>(
                <li key={item}>{item}</li>
            ))
        }
    </ul>
    </>
)

}

export default Lista