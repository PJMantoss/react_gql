import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import './CharactersList.css';

const CharactersList = () => {

  const { loading } = useCharacters();

  if(loading) return <div>spinner...</div>

  if(error) return <div>something went wrong...</div>
  
  return (
    <div className='characterList'>
      {data.characters.results.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default CharactersList;