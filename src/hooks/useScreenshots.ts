import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ScreenShot from "../entities/Screenshot";

 
const useScreenshot = (gameId: number) =>{
   const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);

   return useQuery({
       queryKey: ['Screenshot', gameId],
       queryFn: apiClient.getAll
    });
}; 

 export default useScreenshot;
