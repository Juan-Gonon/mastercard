import { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJson from '../../data/events.json'

console.log(eventsJson)

//const {_embedded : {events}} = data;

// console.log(events)

const Events = ({searchValue})=>{
    const [data] = useState(eventsJson);
    const {_embedded : {events}} = data;
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