import EventItem from "./components/EventItem";
import data from '../../data/events.json'

console.log(data)

const Events = ()=>{
    return (<>
        <div>Eventos</div>
        <EventItem/>

        </>
    );
}

export default Events;