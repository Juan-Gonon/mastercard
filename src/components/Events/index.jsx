import { useState } from "react";
import {useNavigate} from "react-router-dom"
import useEventsData from "../hooks/useEventsData";
import EventItem from "./components/EventItem";
// import eventsJson from '../../data/events.json'

   


const Events = ({searchValue})=>{
    const {events, isLoading, error} = useEventsData();
    const navigate = useNavigate();

 
   

    const handleEventItemClick = (id)=>{
        console.log('ha click el id: ', id)
        navigate(`/detail/${id}`);
    }

    const renderEvents = ()=>{

        let eventsFilter = events;

        if(searchValue.length > 0){
            eventsFilter = eventsFilter.filter((element)=> element.name.toLocaleLowerCase().includes(searchValue));

        }

        return eventsFilter.map((element)=> {
            return  <EventItem key={`event-item-${element.id}`}
            name={element.name}
            info={element.info}
            image={element.images[0].url}
            onEventClick={handleEventItemClick}
            id={element.id}
             />
        });
    };


    if(error){
        return <div>Ha ocurrido un error</div>
    }

    if(isLoading){
        return <div>Cargando resultados...</div>
    }


    return (<>
        <div>Eventos</div>
        {renderEvents()}
        </>
    );
}

export default Events;