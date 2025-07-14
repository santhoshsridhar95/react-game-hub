import platform from "@/data/platform";
import useData from "./useData";

export interface Platform {
 id: number;
 name: string;
 slug: string;
}

const usePlatforms = () => ({data:platform,error:null,isLoading: false})
    // useData<Platform>("/platforms/lists/parents");

export default usePlatforms;