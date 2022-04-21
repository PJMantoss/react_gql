import React from 'react';
import { useCharacter } from '../hooks/useCharacter';
import './Character.css'

const Character = () => {
  const { loading, error, data } = useCharacter(4);

  // console.log({ error, loading, data});

  if(loading) return <div>spinner...</div>

  if(error) return <div>something went wrong...</div>

  return (
    <div className='character'>Character</div>
  )
}

export default Character;