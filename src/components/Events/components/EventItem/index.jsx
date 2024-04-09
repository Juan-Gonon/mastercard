// import './style.css';
import style from './EventItem.module.css';

console.log(style)


const EventItem = ({info, id, name, image, onEventClick})=>{

    const handleSeeMoreClick = (e)=>{
        e.stopPropagation();
        onEventClick(id);
    }


    return (

        <div onClick={()=> console.log('Padre click')} className={style.eventItemContainer}>
            <div className="event__img">
            <img src={image} alt={name} width={200} />
            </div>
            <div className={style.infoContainer}>
                <h4 className={style.infoEventName}>{name}</h4>
                <p className={style.infoEventInfo}>{info}</p>
                <button className={style.infoEventButton} onClick={handleSeeMoreClick} >Ver mas</button>
            </div>

        </div>
    )
}


export default EventItem;