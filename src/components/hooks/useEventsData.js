import { useState, useEffect} from 'react';
import eventsData from '../../data/events.json';


const useEventsData = ()=>{
    const [data, setData] = useState([]);
    // const {_embedded : {events}} = data.current;
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(()=>{
        //load API call
        setTimeout(()=>{

            try{
                setData(eventsData);
                setIsLoading(false);
                // console.log(data)
            }catch(e){
                setError(error)
            }
           
        }, 4000)
    }, [])


    return {
        events: data._embedded?.events || [],
        isLoading,
        error
    }
};



export default useEventsData;