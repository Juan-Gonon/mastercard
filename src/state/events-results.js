import { create } from "zustand";

const useEventsResults = create((set)=>({
    data: [],
    error: {},
    isLoading : false,
    fetchEvents : async (params) => {
        try {
          const response = await fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=MX${params?.length ? params : ''}`
          );
          
          if (response.status != 200) {
            throw new Error("Failed to fetch events. Status: " + response.status);
          } else {
            const data = await response.json();
            setData(data);
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Error fetching events:", error);
          setError(error);
        }
      }
    
    
}));



export default useEventsResults;


