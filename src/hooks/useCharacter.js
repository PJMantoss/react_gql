import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
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

export const useCharacter = () => {
    const { error, loading, data} = useQuery(GET_CHARACTER, {}); //Destructured
};