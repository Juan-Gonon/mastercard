

//import {useParams} from "react-router-dom";
import {format} from "date-fns";
import { es } from "date-fns/locale";
//import useEventsResults from "../../state/events-results";
import eventFetcher from '../../utils/fetchEvents'
import style from "./Detail.module.css";




const pathname = window.location.pathname;
const resource = eventFetcher(pathname.substring(8, pathname.length))

console.log(pathname.substring(8, pathname.length))


const Detail = ()=> {
    //const {data} = useEventsResults()
    //const {eventId} = useParams();
    const eventDta = resource.eventDetail.read();





   
    return (
        <div className={style.container}>
            <div className={style.mainInfoContainer}>
                <img src={eventDta.images?.[10].url} alt={eventDta.name} className={style.eventImage} />
                <h4 className={style.eventName} >{eventDta.name}</h4>
                <p className={style.infoParagraph} >{eventDta.info}</p>
                {eventDta.dates?.start.dateTime ? <p className={style.dateParagraph} >{format(new Date(eventDta?.dates.start.dateTime), 'd LLLL yyyy H:mm', {locale:es})}hrs</p> : null}
                
             
            </div>

            <div className={style.seatInfoContainer}>
              <h6 className={style.setMapTitle} >Mapa del evento</h6>
              <img src={eventDta.seatmap?.staticUrl} alt="img" />
              <p className={style.pleaseNoteLegend}>{eventDta.pleaseNote}</p>
              <p className={style.priceRangeLegend} >Rango de precios: {eventDta.priceRanges?.[0].min} - {eventDta.priceRanges?.[0].max} {eventDta.priceRanges?.[0].currency} </p>
            </div>

            <a href={eventDta.url} className={style.btnIr} >Ir por tus boletos</a>
        </div>
    )
}


export default Detail