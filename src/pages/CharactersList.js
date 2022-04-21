import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import './CharactersList.css';

const CharactersList = () => {

  const { loading, error, data } = useCharacters();

  if(loading) return <div>spinner...</div>

  if(error) return <div>something went wrong...</div>
  
  return (
    <div className='characterList'>
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`} key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </Link>
        )
      })}
    </div>
  )
}

export default CharactersList;