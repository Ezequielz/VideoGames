import { useQuery } from '@tanstack/react-query';

import { rawgApi } from '../../api/rawgApi';
import { Game } from '../interfaces/game';


const API_KEY = import.meta.env.VITE_rawg_API_KEY

export const getGameInfo = async( gameSlug: string ):Promise<Game> => {

    const { data } = await rawgApi.get<Game>(`/games/${ gameSlug }?key=${ API_KEY }`);

    return data;

}


export const useGame = ( gameSlug: string ) => {

   const gameQuery = useQuery(
        ['game', gameSlug],
        () => getGameInfo( gameSlug ),
        {
          refetchOnWindowFocus: false
        }
   );

  return (
    gameQuery
  )
}
