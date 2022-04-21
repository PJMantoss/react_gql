import React from 'react';
import { useCharacter } from '../hooks/useCharacter';
import './Character.css'

const Character = () => {
  const { data, error, loading } = useCharacter(2);

  console.log({ data, error, loading});

  if(loading) return <div>spinner...</div>

  if(error) return <div>something went wrong...</div>

  return (
    <div className='character'>
      <img src={data.character.image} width={750} height={750} />
      <div className='character-content'>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className='character-episode'>
          {data.character.episode.map(episode => {
            return <div key={data.character.id}>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Character;