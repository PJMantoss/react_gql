import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
    query {
        characters{
          results {
              id
              nam
              image
              gender
          }
        }
    }
`;

const CharactersList = () => {
  //const obj = useQuery(GET_CHARACTERS); 
  //Or
  const { error, loading, data} = useQuery(GET_CHARACTERS); //Destructured
  console.log({ error, loading, data});

  if(loading) return <div>spinner...</div>

  if(error) return <div>something went wrong...</div>

  return <div></div>
  
  
}

export default CharactersList