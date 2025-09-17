import { useState } from 'react';
import Title from './components/Title';
import HelloWord from './components/ClassHelloWord';
import Counter from './components/contatore';
import TextInput from './Textinput';

function App() {
  return (
    <>
      <Title />
      <HelloWord />
      <Counter />
      <TextInput />  {/* Qui era textInput, cambiato in maiuscolo */}
    </>
  );
}

export default App;
