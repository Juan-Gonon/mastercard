import { useState } from "react";
import useEventsData from "../hooks/useEventsData";
import EventItem from "./components/EventItem";
// import eventsJson from '../../data/events.json'

   

  

const Events = ({searchValue})=>{
    const {events} = useEventsData();
    console.log(events)
 
   

    const handleEventItemClick = (id)=>{
        console.log('ha click el id: ', id)
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
        })
    }


    return (<>
        <div>Eventos</div>
        {renderEvents()}
        </>
    );
}

export default Events;