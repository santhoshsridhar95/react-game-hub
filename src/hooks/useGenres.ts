import genres from "@/data/Genres";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data:genres, error: null, isLoading:false})
    //  useData<Genre>('/genres');

export default useGenres;