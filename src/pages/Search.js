import React, { useState } from 'react';
import { gql } from '@apollo/client';

const GET_CHARACTER = gql`
query GetCharacterLocations() {
  characters (filter: {
    name: "Morty Smith"
  }) {
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
  return (
    <div>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button>Search</button>
    </div>
  )
}

export default Search