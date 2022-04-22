import React, { useState } from 'react';
import { gql } from '@apollo/client';

const GET_CHARACTER = gql``;

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