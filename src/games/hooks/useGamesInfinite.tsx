import { useInfiniteQuery } from "@tanstack/react-query"
import { rawgApi } from "../../api/rawgApi";
import { Games } from "../interfaces";
import { Game } from "../interfaces/game";



interface Props {
    genres?: string[];
    platforms?: number[]
    tags?: string[];
    publishers?: string[];
    page?: number
    searchTerm?: string;
  }

  interface QueryProps {
    pageParam?: number;
    queryKey: (string | Props)[];
  }

  const API_KEY = import.meta.env.VITE_rawg_API_KEY

  const getGames = async( { pageParam =1, queryKey }: QueryProps ):Promise<Game[]> => {
    
    const [,, args ] = queryKey;
    
    const { genres = [], platforms = [], tags = [], publishers = [],searchTerm } = args as Props;

    const params = new URLSearchParams();

    if ( searchTerm ) {
      params.append('search', searchTerm)
    }
    if ( genres.length > 0 ) {
      const genresStrings = genres.join(',')
      params.append('genres', genresStrings);
    }
    if ( platforms.length > 0 ) {
      const platformsNumber = platforms.join(',')
      params.append('platforms', platformsNumber);
    }
    if ( tags.length > 0 ) {
      const tagsString = tags.join(',')
      params.append('tags', tagsString);
    }
    if ( publishers.length > 0 ) {
      const publishersString = publishers.join(',')
      params.append('publishers', publishersString);
    }
    params.append( 'page', pageParam.toString() );
    params.append( 'key', API_KEY );

    const { data } = await rawgApi.get<Games>(`/games`, { params });
  
    return data.results;
  }

export const useGamesInfinite = ({ genres, platforms, tags, publishers, searchTerm }: Props) => {

    const gamesQuery = useInfiniteQuery(
        ['games', 'infinite', { genres, platforms, tags, publishers, searchTerm}],
        (data) => getGames( data ),
        {
            
            getNextPageParam: ( lastPage, pages ) => {
                if ( lastPage.length === 0 ) return ;
                return pages.length + 1;
            } 
        }
    );


  return {
    gamesQuery
  }
}
