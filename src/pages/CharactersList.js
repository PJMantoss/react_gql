import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
    query {
        characters{
          results {
              id
              name
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

  return (
    <div>CharactersList</div>
  )
}

export default CharactersList