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

export const useCharacters = () => {
    //const obj = useQuery(GET_CHARACTERS); 
  //Or
  const { error, loading, data} = useQuery(GET_CHARACTERS); //Destructured

  //   console.log({ error, loading, data});

  return {
      error,
      loading,
      data
  }
}