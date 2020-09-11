import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'

import Axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [allCharacters, changeCharacters] = useState([])

  useEffect(() => {
    Axios.get('https://swapi.dev/api/people')
      .then(response => {
        console.log(response.data)
        changeCharacters(response.data.results)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {allCharacters.map(character => {

        return (

          <Character  name={character.name} height={character.height} mass={character.mass} hair_color={character.hair_color}></Character>

        )
      })

      }
    </div>
  );
}

export default App;
