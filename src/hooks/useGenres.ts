import genres from '../data/generes'
export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data:genres as Genre[], error: null, isLoading:false})
    //  useData<Genre>('/genres');

export default useGenres;