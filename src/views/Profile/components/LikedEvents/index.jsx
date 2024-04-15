import { useEffect } from "react";

import { LIKED_EVENTS_STORAGE_KEY } from "../../../../utils/constants";


const likedEvents = ()=>{


    useEffect(()=>{
        const fetchEventDetails = async ()=>{
            try {
                // const response = await fetch(
                //     `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=MX${params?.length ? params : ''}`
                //   );

                const likeEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
                  
                  console.log(likeEvents)
            } catch (error) {
                
            }
        }

        fetchEventDetails();
    }, [])

    return (
        <div>Like events</div>
    )
}


export default likedEvents;