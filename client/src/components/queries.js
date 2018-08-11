import { gql } from 'apollo-boost';

const getPlayersQuery = gql`
    {
        players {
            name
            id
        }
    }
`;
const getServerInfoQuery = gql`
    {
        serverinfo {
            servername
            id
            ip
            map
            difficulty
        }
    }
`;

export {getPlayersQuery, getServerInfoQuery};