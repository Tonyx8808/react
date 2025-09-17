import React, { useState } from 'react';

function TextInput() {
  // Dichiarazione di una nuova variabile di stato, chiamata "value"
  const [inputValue, setInputValue] = useState('');

  // Funzione per gestire l'aggiornamento dell'input
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Aggiorna lo stato con il nuovo valore dell'input
  };

  return (
    <div>
      <label>
        Il tuo testo:
        <input
          type="text"
          value={inputValue} // Il valore dell'input è legato allo stato
          onChange={handleInputChange} // Chiama la funzione al cambio di valore
        />
      </label>
      
    </div>
  );
}

export default TextInput;