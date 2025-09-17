import { useState } from 'react';
import Title from './components/Title';
import HelloWord from './components/ClassHelloWord';
import Counter from './components/Counter';
import TextInput from './TextInput';
import LoginForm from './LoginForm';

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
