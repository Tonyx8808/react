import { useState } from 'react';
import Title from './components/Title';
import HelloWord from './components/HelloWord';
import Counter from './components/Counter';
import TextInput from './TextInput';
import LoginForm from './LoginForm';
import Login from './Login';
import Lista from '../../Lista';
import Fetch from './Fetch';


function App() {
  return (
    <>
      <Title />
      <HelloWord />
      <Counter />
      <TextInput />  {/* Qui era textInput, cambiato in maiuscolo */}
      < LoginForm /> {/* Qui mettiamo il login */}
      <Login />
      <Lista />
      <Fetch url="https://api.api-onepiece.com/v2/swords/en"  />
    
    </>
  );
}

export default App;
