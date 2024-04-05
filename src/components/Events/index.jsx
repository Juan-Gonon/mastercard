import { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJson from '../../data/events.json'

console.log(eventsJson)

//const {_embedded : {events}} = data;

// console.log(events)

const Events = ()=>{
    const [data] = useState(eventsJson);
    const {_embedded : {events}} = data;

    const handleEventItemClick = (id)=>{
        console.log('ha click el id: ', id)
    }


    const eventsComponent = events.map((element)=> {
        return  <EventItem key={`event-item-${element.id}`}
        name={element.name}
        info={element.info}
        image={element.images[0].url}
        onEventClick={handleEventItemClick}
        id={element.id}
         />
    })

    return (<>
        <div>Eventos</div>
        {eventsComponent}
        </>
    );
}

export default Events;