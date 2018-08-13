import { gql } from 'apollo-boost';

const getPlayersQuery = gql`
    {
        players {
            name
            id
        }
    }
`;

const getServersQuery = gql`
    {
        server(id:1) {
            mapname
            gamemode
            servername
            currentwave
            maxwaves            
        }
    }
`;


export {getPlayersQuery, getServersQuery};