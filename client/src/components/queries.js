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

<<<<<<< HEAD
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
=======
export {getPlayersQuery, getServerInfoQuery};
>>>>>>> f16e7b60f645040978094152bf46f27d6f1146e0
