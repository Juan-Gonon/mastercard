import {Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import style from './profile.module.css'



const Profile = ()=>{

    const {pathname} = useLocation();
    const navigate = useNavigate();

    const handleTabClick = (path)=>{
        navigate(`/profile/${path}`)
    };

    console.log(pathname)
    return (
        <div className="profile">
            <Link to="/" className={style.homeLink} >Inicio</Link>
            <div className={style.tabsContainer}>
                <span 
                className={`${pathname.includes('my-info') ? style.active : ''} ${style.tabs}`}
                onClick={()=> handleTabClick('my-info')}
                style={{
                    marginRight : "8px",

                }}
                >
                    My información 
                </span>
                <span 
                className={`${pathname.includes('liked-events') ? style.active : ''} ${style.tabs}`}
                onClick={()=> handleTabClick('liked-events')} 
                >
                    Eventos Favoritos
                </span>
            </div>
            <Outlet></Outlet>
        </div>
    )
}


export default Profile;