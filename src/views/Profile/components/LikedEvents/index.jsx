import { useEffect, useState } from "react";

import { LIKED_EVENTS_STORAGE_KEY } from "../../../../utils/constants";


const likedEvents = ()=>{

    const [events, setEvents] = useState([]);
    const [isLoading, seIsLoading] = useState(false);
    const [error, setError] = useState({})


    useEffect(()=>{
        const fetchEventDetails = async ()=>{
            try {
                seIsLoading(true);
              
                const likeEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
                  
                  console.log(likeEvents)

                  const results = [];


                  for (const eventId of likeEvents){
                    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`);

                   

                    const data = await response.json()

                    console.log(data)

                    results.push(data);

                  }

                  setEvents(results);



            } catch (error) {
                setError(error)
            } finally{
                seIsLoading(false);
            }
        }

        fetchEventDetails();
    }, [])

    if(Object.keys(error).length > 0){
        return <div>Ha ocurrido un error</div>
    }
    if(isLoading){
        return <div>Cargando...</div>
    }

    return (
        <div>Like events</div>
    )
}


export default likedEvents;