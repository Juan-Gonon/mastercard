import wrapPromise from "./wrapPrimise";


const fetchEventDetail = async(eventId)=>{


    try{
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`);

        if(response.status != 200){
            throw new Error ('Error en el servidor');
        }else{
            const data = await response.json();

            return data
        }

        // console.log(data)

    }catch(e){
        console.log(e)
       
    }


}

const fetchData = (eventId)=>{


    return {
        eventDetail : wrapPromise(fetchEventDetail(eventId))
    }
}


export default fetchData;