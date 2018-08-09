import { gql } from 'apollo-boost';

const getPlayersQuery = gql`
    {
        players {
            name
            id
        }
    }
`;


export {getPlayersQuery};