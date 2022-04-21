import React from 'react';
import { useCharacter } from '../hooks/useCharacter';
import './Character.css'

const Character = () => {
  const { loading, error, data } = useCharacter(4);

  // console.log({ error, loading, data});

  if(loading) return <div>spinner...</div>

  if(error) return <div>something went wrong...</div>

  return (
    <div className='character'>
      <img src={data.character.image} width={750} height={750} />
      <div className='character-content'>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className='character-episode'>
          {data.character.map(episode => {
            return <div key={episode.id}></div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Character;