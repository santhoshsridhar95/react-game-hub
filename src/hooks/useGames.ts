import useData from "./useData";
import type { Genre } from "./useGenres";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms:{platform:Platform}[];
  metacritic: number;
}

const useGames=(selectedGenre:Genre | null, selectedPlatform:Platform|null)=> useData<Game>('/games',
  {params: {genres:selectedGenre?.id,parent_platforms:selectedPlatform?.id}}, [selectedGenre?.id,selectedPlatform?.id]);

export default useGames;