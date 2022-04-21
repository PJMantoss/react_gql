import React from 'react';
import { useCharacter } from '../hooks/useCharacter';
import './Character.css'

const Character = () => {
  const { loading, error, data } = useCharacter(4);

  console.log({ error, loading, data});

  return (
    <div className='character'>Character</div>
  )
}

export default Character;