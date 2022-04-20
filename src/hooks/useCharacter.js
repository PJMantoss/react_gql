import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
    query {
        character (id: 2) {
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

export const useCharacter = () => {};