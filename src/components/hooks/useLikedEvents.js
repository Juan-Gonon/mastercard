import { useState } from "react";

const useLikedEvents = (eventId)=>{

    const [isEventLiked, setIsEventLiked] = useState();



    return {
        isEventLiked
    };

}

export default useLikedEvents;