import { useQuery } from "@tanstack/react-query";
import { rawgApi } from "../../api/rawgApi";
import { Games } from "../interfaces";



const API_KEY = import.meta.env.VITE_rawg_API_KEY

const getGames = async():Promise<Games> => {

    const { data } = await rawgApi.get<Games>(`/games?key=${ API_KEY }`);
  
    return data;
  }


export const useGames = () => {

    const gamesQuery = useQuery(
        ['games'],
        getGames,
        {
          refetchOnWindowFocus: false
        }
      );



    return {
        gamesQuery
    };
}