import platform from "@/data/platform";

export interface Platform {
 id: number;
 name: string;
 slug: string;
}

const usePlatforms = () => ({data:platform,error:null,isLoading: false})
    // useData<Platform>("/platforms/lists/parents");

export default usePlatforms;