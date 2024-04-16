import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LIKED_EVENTS_STORAGE_KEY } from "../../../../utils/constants";
import EventItem from '../../../../components/Events/components/EventItem'


const likedEvents = ()=>{

    const [events, setEvents] = useState([]);
    const [isLoading, seIsLoading] = useState(false);
    const [error, setError] = useState({})
    const navigate = useNavigate()


    const handleEventItemClick = (id)=>{
        console.log(id)
        navigate(`/detail/${id}`);
    }


    useEffect(()=>{
        const fetchEventDetails = async ()=>{
            try {
                seIsLoading(true);
              
                const likeEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
                  
                  const results = [];


                  for (const eventId of likeEvents){
                    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`);

                   
                    const data = await response.json()
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
        events.map((element, index)=>(<EventItem
            key={`liked-event-item-${element.id}-${index}`}
            name={element.name}
            info={element.info}
            image={element.images[0].url}
            onEventClick={handleEventItemClick}
            id={element.id}
        >

        </EventItem>))
    )
}


export default likedEvents;