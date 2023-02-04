import { useQuery } from "@tanstack/react-query";
import { rawgApi } from "../../api/rawgApi";
import { Screenshots } from "../interfaces";

const API_KEY = import.meta.env.VITE_rawg_API_KEY

const getScreenShoots = async( gameNumber: number ):Promise<Screenshots> => {

    const { data } = await rawgApi.get<Screenshots>(`/games/${ gameNumber }/screenshots?key=${ API_KEY }`);
  
    return data;
  }


export const useScreenshots = (gameNumber: number) => {

    const screenQuery = useQuery(
        ['game', gameNumber, 'screenshot' ],
        () => getScreenShoots( gameNumber ),
      );

    return {
      screenQuery
    };
}