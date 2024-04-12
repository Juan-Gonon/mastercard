import { useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import {format} from "date-fns";
import { es } from "date-fns/locale";

import style from "./Detail.module.css";


const Detail = ()=> {

    const {eventId} = useParams();
    const [eventDta, setData] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        const fetchEventData = async ()=>{
            try{
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`);

                console.log(response)
                if(response.status != 200){
                    throw new Error ('Error en el servidor');
                }else{
                    const data = await response.json();

                    console.log(data)

                    setData(data)
                    setIsLoading(false)
                }

             
                // console.log(data)

            }catch(e){
                console.log(e)
                setData({});
                setError(e)
                setIsLoading(false)
            }
        }

        fetchEventData();
    }, [])

    if(isLoading && Object.keys(eventDta) === 0){
        return <div>Cargando evento...</div>
    }

    if(Object.keys(error) > 0){
        return <div>Ha ocurrido un error...</div>
    }

    console.log(eventDta)
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