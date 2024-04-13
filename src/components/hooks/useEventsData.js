import { useState} from "react";
import eventsData from "../../data/events.json";

const useEventsData = () => {




  return {
    events: data._embedded?.events || [],
    page: data?.page || {},
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventsData;
