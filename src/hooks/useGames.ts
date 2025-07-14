import useData from "./useData";

export interface Platform {
    id:number;
    name:number;
    slug:number;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms:{platform:Platform}[];
  metacritic: number;
}

const useGames=()=> useData<Game>('/games');

export default useGames;