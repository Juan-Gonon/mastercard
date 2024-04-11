import { useEffect, useState} from "react";

import {useParams} from "react-router-dom";

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

    console.log(eventDta)
    return <div className="details">Detail</div>
}


export default Detail