import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import HelloWord from './components/ClassHelloWord'
import Counter from './components/contatore'

function App() {

  return (
     <>
    <Title />
    <HelloWord />
    <Counter />
 
 </>
   
  )
}

export default App
