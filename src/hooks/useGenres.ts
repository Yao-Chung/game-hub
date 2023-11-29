import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// In this setting, the genre list will first intialize with static data
// After 24 hours staletime, it will start fetching from backend
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres }, // this json object should match with the one in get method
  });

export default useGenres;
