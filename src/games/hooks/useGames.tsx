import { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";

import { rawgApi } from "../../api/rawgApi";
import { Games } from "../interfaces";

interface Props {
  genres?: string[];
  platforms?: number[]
  tags?: string[];
  publishers?: string[];
  page?: number
  searchTerm?: string;
  order?: string;
}

const API_KEY = import.meta.env.VITE_rawg_API_KEY

const getGames = async({ genres = [], platforms = [], tags = [], publishers = [], page = 1, searchTerm, order }: Props):Promise<Games> => {

    const params = new URLSearchParams();
    if( order ) {

      params.append('ordering', order);
      params.append('search_exact', 'true');
    }
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
    params.append( 'page', page.toString() );
    params.append( 'key', API_KEY );

    const { data } = await rawgApi.get<Games>(`/games`, { params });
  
    return data;
  }


export const useGames = ({ genres, platforms, tags, publishers, searchTerm, order }: Props) => {

  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1)
  }, [genres, platforms, tags, publishers, searchTerm, order]);
  

    const gamesQuery = useQuery(
        ['games', { genres, platforms, tags, publishers, page, searchTerm, order}],
        () => getGames({ genres, platforms, tags, publishers, page, searchTerm, order}),
        {
          refetchOnWindowFocus: false,
          staleTime: 60* 1000 * 60,
          
        }
      );

      const nextPage = () => {
        if ( gamesQuery.data?.results.length === 0) return;

        setPage( page + 1 );
      }

      const prevPage = () => {
        if ( page > 1 ) setPage( page - 1 );
      }



    return {
        //Properties
        gamesQuery,

        // Gettera
        page: gamesQuery.isFetching ? 'loading...' : page,

        //Methods
        nextPage,
        prevPage
    };
}