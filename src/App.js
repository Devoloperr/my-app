import { useState, useEffect } from 'react';
import React from 'react'
function App() {
  const [character, setCharacter] = useState([])

  useEffect(() => { 
    fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
      setCharacter(data.results)
    })
  }, [])
  return (
    <div className='cards'>
    {
      character.map(a => {
        return (
          <div className='card'>
            <img src={a.image}/>
            <h1>{a.name}</h1>
            <h5>{a.species}</h5>
          </div>
        )
      })
    }
    </div>
  )
}

export default App
