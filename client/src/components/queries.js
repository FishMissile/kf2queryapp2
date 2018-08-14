import { gql } from 'apollo-boost';

const getPlayersQuery = gql`
    {
        players {
            name
            id
            score
            time
        }
    }
`;

const getServersQuery = gql`
    {
        server(id:1) {
            mapname
            difficulty
            gamemode
            servername
            currentwave
            maxwaves            
        }
    }
`;


export {getPlayersQuery, getServersQuery};