import './style.css';

const EventItem = ({info, id, name, image, onEventClick})=>{

    const handleSeeMoreClick = (e)=>{
        e.stopPropagation();
        onEventClick(id);
    }


    return (

        <div onClick={()=> console.log('Padre click')} className='event__item-container'>
            <div className="event__img">
            <img src={image} alt={name} width={200} />
            </div>
            <div className="info__container">
                <h4 className='info__event-name'>{name}</h4>
                <p className='info__event-info'>{info}</p>
                <button className='info__event-button' onClick={handleSeeMoreClick} >Ver mas</button>
            </div>

        </div>
    )
}


export default EventItem;