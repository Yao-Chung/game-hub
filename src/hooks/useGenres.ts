import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

// In this setting, the genre list will first intialize with static data
// After 24 hours staletime, it will start fetching from backend
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: genres, // this json object should match with the one in get method
  });

export default useGenres;
