import { useState} from "react";
import eventsData from "../../data/events.json";

//hook para hacer una llamada a la API y guardarlo en el estado local

const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchEvents = async (params) => {
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
  };



  return {
    events: data._embedded?.events || [],
    page: data?.page || {},
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventsData;

//este hook serve para un estado local
