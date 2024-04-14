// import { useState } from "react";
import eventsAument from "../../state/events-aument";


const zusTwo = ()=>{

    const {count, inc} = eventsAument();



    return <>
    <span>{count}</span><br />
    <button onClick={inc}>zusTwo</button>
    </>
}


export default zusTwo