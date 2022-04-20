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

const useCharacters = () => {
  return (
    <div>useCharacters</div>
  )
}

export default useCharacters