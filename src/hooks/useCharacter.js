import { useQuery, gql } from '@apollo/client';

const GET_CHARACTER = gql`
    query GetCharacter($id: ID!){
        character (id: $id) {
            name
            id
            image
            episode {
                name
                episode
            }
        }
}
`;
//GraphQL Query is for viewing data while Mutation is updating data

export const useCharacter = (id) => {
    const { data, error, loading } = useQuery(GET_CHARACTER, {
        variables: {
            id,
        }
    }); //Destructured

    return {
        data,
        error,
        loading
    };
};