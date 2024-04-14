// import './style.css';
import style from './EventItem.module.css';
import hearthFilled from '../../../../assets/hearth-filled.png';
import hearthUnfilled from '../../../../assets/hearth-unfilled.png';
import useLikedEvents from '../../../hooks/useLikedEvents';


const EventItem = ({info, id, name, image, onEventClick})=>{
    const {isEventLiked} = useLikedEvents(id);

    const handleSeeMoreClick = (e)=>{
        e.stopPropagation();
        onEventClick(id);
    }

    const handleHearthClick = ()=>{

    }


    return (

        <div onClick={()=> console.log('Padre click')} className={style.eventItemContainer}>
            <div className={style.eventImg}>
                <img src={isEventLiked ? hearthFilled : hearthUnfilled} alt="hearth" className={style.hearthFilled} onClick={handleHearthClick} />
                <img src={image} alt={name} width={200} />
            </div>
            <div className={style.infoContainer}>
                <h4 className={style.infoEventName}>{name}</h4>
                <p className={style.infoEventInfo}>{info}</p>
                <button className={style.infoEventButton} onClick={handleSeeMoreClick} >
                    {/* <Link to={`/detail/${id}`}>
                        Ver mas
                    </Link> */}
                    Ver mas
                </button>
            </div>

        </div>
    )
}


export default EventItem;