import React from 'react';
import { useCharacter } from '../hooks/useCharacter';

const Character = () => {
  const { loading, error, data } = useCharacter(id);

  return (
    <div>Character</div>
  )
}

export default Character;