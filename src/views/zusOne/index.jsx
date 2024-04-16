import eventsAument from "../../state/events-aument";

const zusOne = ()=>{

    const {count, inc} = eventsAument()


    return (
        <>
        <span>{count}</span><br />
        <button onClick={inc}>ZusOne</button>
        </>
    )
}



export default zusOne;