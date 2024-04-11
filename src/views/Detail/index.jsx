import { useEffect, useState} from "react";

import {useParams} from "react-router-dom";

import style from "./Detail.module.css";


const Detail = ()=> {

    const {eventId} = useParams();
    const [eventDta, setData] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    console.log(eventId)

    useEffect(()=>{
        const fetchEventData = async ()=>{
            try{
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=J2HCSxqn9fAoV9fUHdB0zYlplrSJGxkU&countryCode=MX`);

                const data = await response.json();

                setData(data)
                setIsLoading(false)
                // console.log(data)

            }catch(e){
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
                <img src={eventDta.images?.[0].url} alt="img" />
                <h4>{eventDta.name}</h4>
                <p>{eventDta.info}</p>
            </div>
        </div>
    )
}


export default Detail