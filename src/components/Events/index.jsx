import EventItem from "./components/EventItem";
import data from '../../data/events.json'

console.log(data)

const {_embedded : {events}} = data;

console.log(events)

const Events = ()=>{

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