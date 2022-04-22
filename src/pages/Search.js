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
    
    //firts element returned is a function "getLocations()" that runs when we want to execute and run this query
    const [getLocations, { loading, error, data }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    });

  return (
    <div>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button>Search</button>
    </div>
  )
}

export default Search