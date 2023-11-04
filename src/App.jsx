// Solo debe quedar aca el Router

import { useState, useEffect } from 'react'
import { getPokemons } from './api.js'
import './App.css'

// Esto a Summary.jsx
function App() {
  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    const response = getPokemons()
    response.then(data => setPokemons(data))
  }, [])

  return (
    <>
      {pokemons?.results?.map((pokemon) => <div> {pokemon.name} </div>)}
    </>
  )
}

export default App
