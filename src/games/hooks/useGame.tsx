import { useQuery } from '@tanstack/react-query';

import { rawgApi } from '../../api/rawgApi';
import { Game } from '../interfaces/game';


const API_KEY = import.meta.env.VITE_rawg_API_KEY

const getGameInfo = async( gameNumber: number ):Promise<Game> => {

    const { data } = await rawgApi.get<Game>(`/games/${ gameNumber }?key=${ API_KEY }`);

    return data;

}


export const useGame = ( gameNumber: number ) => {

   const gameQuery = useQuery(
        ['game', gameNumber],
        () => getGameInfo( gameNumber ),
   );

  return (
    gameQuery
  )
}
