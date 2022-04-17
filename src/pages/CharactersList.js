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
  const obj = useQuery(GET_CHARACTERS);

  obj.error;

  obj.loading

  obj.data

  return (
    <div>CharactersList</div>
  )
}

export default CharactersList