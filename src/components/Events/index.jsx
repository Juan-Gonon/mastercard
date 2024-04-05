import { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJson from '../../data/events.json'

console.log(eventsJson)

//const {_embedded : {events}} = data;

// console.log(events)

const Events = ()=>{
    const [data] = useState(eventsJson);
    const {_embedded : {events}} = data;



    const eventsComponent = events.map((element)=> {
        return  <EventItem key={`event-item-${element.id}`}
        name={element.name}
        info={element.info}
        image={element.images[0].url}
         />
    })

    return (<>
        <div>Eventos</div>
        {eventsComponent}
        </>
    );
}

export default Events;