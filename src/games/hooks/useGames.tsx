import { useQuery } from "@tanstack/react-query";
import { rawgApi } from "../../api/rawgApi";
import { Games } from "../interfaces";

interface Props {
  genres: string[];
  platforms: number[]
  tags: string[];
  publishers: string[];
}

const API_KEY = import.meta.env.VITE_rawg_API_KEY

const getGames = async( genres: string[] = [], platforms: number[] = [], tags: string[]=[], publishers: string[] = [] ):Promise<Games> => {

    const params = new URLSearchParams();

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
    params.append('key', API_KEY);

    const { data } = await rawgApi.get<Games>(`/games`, { params });
  
    return data;
  }


export const useGames = ({ genres, platforms, tags, publishers }: Props) => {

    const gamesQuery = useQuery(
        ['games', { genres }, { platforms }, { tags }, { publishers }],
        () => getGames( genres, platforms, tags, publishers ),
        {
          refetchOnWindowFocus: false,
          staleTime: 60* 1000 * 60,
          
        }
      );



    return {
        gamesQuery
    };
}