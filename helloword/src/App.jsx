import { useState } from 'react';
import Title from './components/Title';
import HelloWord from './components/ClassHelloWord';
import Counter from './components/contatore';
import TextInput from './Textinput';
import LoginForm from './login';

function App() {
  return (
    <>
      <Title />
      <HelloWord />
      <Counter />
      <TextInput />  {/* Qui era textInput, cambiato in maiuscolo */}
      < LoginForm/> {/* Qui mettiamo il login */}
    </>
  );
}

export default App;
