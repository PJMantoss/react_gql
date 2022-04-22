import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!) {
  characters (filter: {name: $name}) {
    results {
      location {
        name
      }
    }
  }
}
`;

const Search = () => {
    const [name, setName] = useState("");
    
    const [] = useLazyQuery()

  return (
    <div>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button>Search</button>
    </div>
  )
}

export default Search