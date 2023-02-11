import { useQuery } from "@tanstack/react-query";
import { rawgApi } from "../../api/rawgApi";
import { Screenshots } from "../interfaces";

const API_KEY = import.meta.env.VITE_rawg_API_KEY

const getScreenShoots = async( gameSlug: string ):Promise<Screenshots> => {

    const { data } = await rawgApi.get<Screenshots>(`/games/${ gameSlug }/screenshots?key=${ API_KEY }`);
  
    return data;
  }


export const useScreenshots = (gameSlug: string) => {

    const screenQuery = useQuery(
        ['game', gameSlug, 'screenshot' ],
        () => getScreenShoots( gameSlug ),
        {
          refetchOnWindowFocus: false
        }
      );

    return {
      screenQuery
    };
}