import { useState} from "react";
import eventsData from "../../data/events.json";

const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchEvents = async (params) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=J2HCSxqn9fAoV9fUHdB0zYlplrSJGxkU&countryCode=MX${params?.length ? params : ''}`
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
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventsData;
